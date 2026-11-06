# ZeniTeco

Página web corporativa de ZeniTeco — administración de inmuebles, instalación y mantenimiento de áreas verdes, y servicios combinados de apoyo en instalaciones.

## Estructura

- `frontend/` — React (CRA + craco), Tailwind, framer-motion, lenis
- `backend/` — FastAPI + MongoDB (motor)

## Desarrollo

Los servicios se gestionan con supervisor:

```bash
sudo supervisorctl restart frontend
sudo supervisorctl restart backend
```

Variables de entorno:

- `frontend/.env`: `REACT_APP_BACKEND_URL`
- `backend/.env`: `MONGO_URL`, `DB_NAME`, `CORS_ORIGINS`
