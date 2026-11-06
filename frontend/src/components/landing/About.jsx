import { motion } from "framer-motion";

const stats = [
    { value: "12+", label: "Años de trayectoria" },
    { value: "180", label: "Inmuebles administrados" },
    { value: "45 mil", label: "m² de áreas verdes bajo cuidado" },
    { value: "98%", label: "Clientes que renuevan cada año" },
];

export const About = () => (
    <section id="nosotros" data-testid="about-section" className="relative py-28 lg:py-40 bg-[#12261A]/40 border-y border-[#1E3B2A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
            >
                <div className="overflow-hidden border border-[#1E3B2A]">
                    <img
                        src="https://images.unsplash.com/photo-1758691736975-9f7f643d178e?q=80&w=1600&auto=format&fit=crop"
                        alt="Equipo profesional de ZeniTeco"
                        loading="lazy"
                        className="h-[420px] lg:h-[560px] w-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>
                <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-[#D8F33C] px-8 py-6">
                    <p className="font-display text-4xl lg:text-5xl font-semibold text-[#08140D]">2013</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-[#08140D]/80">Desde entonces, creciendo</p>
                </div>
            </motion.div>

            <div>
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7 }}
                    className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#D8F33C]"
                >
                    Quiénes somos
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="font-display text-4xl sm:text-5xl tracking-tighter text-[#F4F0E6]"
                    data-testid="about-title"
                >
                    Cuidamos espacios,
                    <br />
                    <span className="italic text-[#B0C0B4]">cultivamos confianza.</span>
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-8 space-y-5 text-base md:text-lg text-[#B0C0B4] leading-relaxed"
                >
                    <p>
                        ZeniTeco nació en Bogotá con una idea sencilla: los inmuebles se
                        administran mejor cuando quien gestiona el edificio también entiende
                        sus jardines, sus instalaciones y a las personas que los habitan.
                    </p>
                    <p>
                        Hoy somos un equipo de administradores, ingenieros, jardineros y
                        técnicos que responde con un solo número de contacto. Sin
                        intermediarios, sin excusas: cada solicitud queda registrada y cada
                        compromiso tiene fecha de cumplimiento.
                    </p>
                </motion.div>

                <div className="mt-12 grid grid-cols-2 gap-px bg-[#1E3B2A] border border-[#1E3B2A]" data-testid="about-stats">
                    {stats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.7, delay: i * 0.1 }}
                            className="bg-[#08140D] px-6 py-7"
                            data-testid={`stat-${i}`}
                        >
                            <p className="font-display text-3xl lg:text-4xl text-[#D8F33C]">{s.value}</p>
                            <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-[#B0C0B4]">{s.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
