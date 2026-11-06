import { ZenLogoMark } from "../ZenLogo";

export const Footer = () => (
    <footer data-testid="main-footer" className="border-t border-[#1E3B2A] bg-[#12261A]/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-3 gap-12">
            <div>
                <div className="flex items-center gap-3">
                    <ZenLogoMark size={36} />
                    <span className="font-display text-2xl tracking-tight text-[#F4F0E6]">
                        Zeni<span className="text-[#D8F33C]">Teco</span>
                    </span>
                </div>
                <p className="mt-5 max-w-xs text-sm text-[#B0C0B4] leading-relaxed">
                    Administración de inmuebles, áreas verdes y apoyo en instalaciones.
                    Un solo equipo para todo tu espacio.
                </p>
            </div>
            <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F4F0E6]">Servicios</p>
                <ul className="mt-5 space-y-3 text-sm text-[#B0C0B4]">
                    <li>Administración de inmuebles</li>
                    <li>Instalación y mantenimiento de áreas verdes</li>
                    <li>Servicios combinados de apoyo en instalaciones</li>
                </ul>
            </div>
            <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F4F0E6]">Contacto</p>
                <ul className="mt-5 space-y-3 text-sm text-[#B0C0B4]">
                    <li>Cra. 13 #93-40, Of. 402, Bogotá</li>
                    <li>+57 601 743 2210</li>
                    <li>contacto@zeniteco.co</li>
                    <li>Lun – Vie, 8:00 a 18:00</li>
                </ul>
            </div>
        </div>
        <div className="border-t border-[#1E3B2A]">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-[#B0C0B4]">© {new Date().getFullYear()} ZeniTeco S.A.S. Todos los derechos reservados.</p>
                <p className="text-xs text-[#B0C0B4]/60">Espacios que funcionan, verdes que crecen.</p>
            </div>
        </div>
    </footer>
);
