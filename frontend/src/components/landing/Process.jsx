import { motion } from "framer-motion";

const steps = [
    {
        n: "01",
        title: "Diagnóstico sin costo",
        desc: "Visitamos tu inmueble, revisamos instalaciones y áreas verdes, y escuchamos a la comunidad o al equipo de operaciones.",
    },
    {
        n: "02",
        title: "Propuesta a la medida",
        desc: "En menos de 5 días hábiles recibes un plan con alcances, cronograma, equipo asignado y una tarifa clara, sin letra pequeña.",
    },
    {
        n: "03",
        title: "Puesta en marcha",
        desc: "Activamos al equipo en sitio, dejamos canales de reporte abiertos y definimos indicadores de servicio desde el día uno.",
    },
    {
        n: "04",
        title: "Mejora continua",
        desc: "Reportes mensuales, comités de seguimiento y ajustes de temporada para que el servicio evolucione con tu propiedad.",
    },
];

export const Process = () => (
    <section id="proceso" data-testid="process-section" className="py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#D8F33C]"
            >
                Cómo trabajamos
            </motion.p>
            <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl tracking-tighter text-[#F4F0E6] max-w-2xl"
                data-testid="process-title"
            >
                De la primera visita a la
                <span className="italic text-[#B0C0B4]"> operación perfecta.</span>
            </motion.h2>

            <div className="mt-16 lg:mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1E3B2A] border border-[#1E3B2A]">
                {steps.map((s, i) => (
                    <motion.div
                        key={s.n}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.7, delay: i * 0.12 }}
                        className="group bg-[#08140D] p-8 lg:p-10 hover:bg-[#12261A] transition-colors duration-500"
                        data-testid={`process-step-${i}`}
                    >
                        <p className="font-display text-5xl lg:text-6xl text-stroke-cream group-hover:text-[#D8F33C] group-hover:[-webkit-text-stroke:0] transition-all duration-500">
                            {s.n}
                        </p>
                        <h3 className="mt-6 font-display text-2xl text-[#F4F0E6]">{s.title}</h3>
                        <p className="mt-4 text-sm text-[#B0C0B4] leading-relaxed">{s.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);
