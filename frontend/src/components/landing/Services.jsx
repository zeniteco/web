import { motion } from "framer-motion";
import { Building2, Leaf, Wrench, ArrowUpRight } from "lucide-react";

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 },
    }),
};

const services = [
    {
        icon: Building2,
        title: "Administración de inmuebles",
        span: "md:col-span-8",
        img: "https://images.unsplash.com/photo-1621831337128-35676ca30868?q=80&w=1800&auto=format&fit=crop",
        desc: "Gestión integral de condominios, edificios corporativos y conjuntos residenciales: cobranza, presupuestos, proveedores, mantenimiento preventivo y atención directa a copropietarios con reportes transparentes cada mes.",
        tags: ["Cobranza y cartera", "Asambleas y actas", "Proveedores certificados", "Reportes mensuales"],
        testid: "service-card-admin",
    },
    {
        icon: Leaf,
        title: "Instalación y mantenimiento de áreas verdes",
        span: "md:col-span-4",
        img: "https://images.unsplash.com/photo-1597201278257-3687be27d954?q=80&w=1400&auto=format&fit=crop",
        desc: "Diseño, siembra y cuidado permanente de jardines, zonas comunes y cubiertas vegetales. Poda, riego inteligente, control fitosanitario y paisajismo estacional.",
        tags: ["Paisajismo", "Riego inteligente", "Poda especializada"],
        testid: "service-card-green",
    },
    {
        icon: Wrench,
        title: "Servicios combinados de apoyo en instalaciones",
        span: "md:col-span-4",
        img: "https://images.unsplash.com/photo-1759753985489-11719e67dc7a?q=80&w=1400&auto=format&fit=crop",
        desc: "Aseo, conserjería, mantenimiento eléctrico y de plomería, control de plagas y atención de emergencias: un solo equipo responde por toda la operación diaria.",
        tags: ["Conserjería", "Mantenimiento técnico", "Emergencias 24/7"],
        testid: "service-card-facility",
    },
];

export const Services = () => (
    <section id="servicios" data-testid="services-section" className="relative py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-16 lg:mb-24 grid md:grid-cols-2 gap-8 items-end">
                <div>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7 }}
                        className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#D8F33C]"
                    >
                        Lo que hacemos
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tighter text-[#F4F0E6]"
                        data-testid="services-title"
                    >
                        Tres servicios,
                        <br />
                        <span className="italic text-[#B0C0B4]">una sola tranquilidad.</span>
                    </motion.h2>
                </div>
                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-base md:text-lg text-[#B0C0B4] leading-relaxed md:justify-self-end md:max-w-md"
                >
                    Coordinamos cada frente de tu propiedad para que tú solo veas los
                    resultados: espacios que funcionan, verdes que crecen y comunidades
                    que viven mejor.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
                {services.map((s, i) => (
                    <motion.article
                        key={s.title}
                        custom={i}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        data-testid={s.testid}
                        className={`group relative overflow-hidden border border-[#1E3B2A] bg-[#12261A] hover:border-[#D8F33C]/50 hover:-translate-y-1.5 transition-[border-color,transform] duration-500 ${s.span} ${i === 0 ? "md:row-span-2 min-h-[420px] md:min-h-[560px]" : "min-h-[300px]"}`}
                    >
                        <img
                            src={s.img}
                            alt={s.title}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-[opacity,transform] duration-700"
                        />
                        <div className="absolute inset-0 bg-[#08140D]/45" />
                        <div className="relative z-10 flex h-full flex-col justify-end p-8 lg:p-10">
                            <s.icon className="mb-5 h-9 w-9 text-[#D8F33C]" strokeWidth={1.5} />
                            <h3 className={`font-display tracking-tight text-[#F4F0E6] ${i === 0 ? "text-3xl lg:text-4xl" : "text-2xl"}`}>
                                {s.title}
                            </h3>
                            <p className={`mt-4 text-sm md:text-base text-[#F4F0E6]/75 leading-relaxed ${i === 0 ? "max-w-lg" : ""}`}>
                                {s.desc}
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {s.tags.map((t) => (
                                    <span key={t} className="rounded-full border border-[#F4F0E6]/20 px-3.5 py-1 text-xs font-semibold text-[#F4F0E6]/80">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <a
                                href="#contacto"
                                onClick={(e) => { e.preventDefault(); document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" }); }}
                                data-testid={`${s.testid}-cta`}
                                className="mt-7 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-[#D8F33C] group-hover:gap-3 transition-[gap] duration-300"
                            >
                                Cotizar este servicio <ArrowUpRight className="h-4 w-4" />
                            </a>
                        </div>
                    </motion.article>
                ))}
            </div>
        </div>
    </section>
);
