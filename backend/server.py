import asyncio
from contextlib import suppress
from fastapi import FastAPI, APIRouter, Query
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pymongo import ASCENDING, DESCENDING, IndexModel
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

INDEXES: dict[str, list[IndexModel]] = {
    "contact_messages": [
        IndexModel([("id", ASCENDING)], name="id", unique=True),
        IndexModel([("timestamp", DESCENDING)], name="timestamp_desc"),
    ],
}


async def ensure_indexes() -> None:
    for collection, models in INDEXES.items():
        for model in models:
            try:
                await db[collection].create_indexes([model])
            except Exception as exc:
                logging.getLogger(__name__).error("ensure_indexes(%s.%s): %s", collection, model.document["name"], exc)


app = FastAPI()
api_router = APIRouter(prefix="/api")


class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    nombre: str = Field(min_length=2, max_length=120)
    email: EmailStr
    telefono: Optional[str] = Field(default=None, max_length=30)
    servicio: str = Field(min_length=2, max_length=120)
    mensaje: str = Field(min_length=10, max_length=2000)
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ContactMessageCreate(BaseModel):
    nombre: str = Field(min_length=2, max_length=120)
    email: EmailStr
    telefono: Optional[str] = Field(default=None, max_length=30)
    servicio: str = Field(min_length=2, max_length=120)
    mensaje: str = Field(min_length=10, max_length=2000)


@api_router.get("/")
async def root():
    return {"message": "ZeniTeco API"}


@api_router.post("/contact", response_model=ContactMessage)
async def create_contact_message(input: ContactMessageCreate):
    msg = ContactMessage(**input.model_dump())
    doc = msg.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.contact_messages.insert_one(doc)
    return msg


@api_router.get("/contact", response_model=List[ContactMessage])
async def get_contact_messages(limit: int = Query(50, ge=1, le=200)):
    messages = await db.contact_messages.find({}, {"_id": 0}).sort("timestamp", -1).limit(limit).to_list(limit)
    for m in messages:
        if isinstance(m['timestamp'], str):
            m['timestamp'] = datetime.fromisoformat(m['timestamp'])
    return messages


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("startup")
async def start_index_build():
    app.state.index_task = asyncio.create_task(ensure_indexes())


@app.on_event("shutdown")
async def shutdown_db_client():
    app.state.index_task.cancel()
    with suppress(asyncio.CancelledError):
        await app.state.index_task
    client.close()
