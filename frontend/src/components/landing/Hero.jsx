import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ZenLogoAnimated } from "../ZenLogo";

const HERO_IMG = "https://images.unsplash.com/photo-1556983852-43bf21186b2a?q=80&w=2400&auto=format&fit=crop";

const MaskedLine = ({ children, delay }) => (
    <span className="block overflow-hidden pb-1">
        <motion.span
            className="block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
        >
            {children}
        </motion.span>
    </span>
);

export const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
    const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);

    return (
        <section id="inicio" ref={ref} data-testid="hero-section" className="relative min-h-screen flex items-end overflow-hidden">
            <motion.div className="absolute inset-0" style={{ y: imgY, scale: imgScale }}>
                <img
                    src={HERO_IMG}
                    alt="Edificio moderno cubierto de vegetación"
                    className="h-full w-full object-cover"
                />
            </motion.div>
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-[#08140D]/30" />
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-[#08140D]/60 [mask-image:linear-gradient(to_top,black,transparent)]" />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="absolute top-28 right-6 lg:right-16 hidden sm:block"
            >
                <ZenLogoAnimated size={88} />
            </motion.div>

            <motion.div style={{ y: textY }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-24 pt-48 w-full">
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-[#D8F33C]"
                    data-testid="hero-eyebrow"
                >
                    Administración · Áreas verdes · Facility services
                </motion.p>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tighter text-[#F4F0E6] max-w-4xl" data-testid="hero-title">
                    <MaskedLine delay={0.7}>Gestión experta para</MaskedLine>
                    <MaskedLine delay={0.85}>
                        entornos que <em className="not-italic text-[#D8F33C] font-medium italic">inspiran.</em>
                    </MaskedLine>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 1.3 }}
                    className="mt-8 max-w-xl text-base md:text-lg text-[#F4F0E6]/80 leading-relaxed"
                    data-testid="hero-subtitle"
                >
                    En ZeniTeco cuidamos tu inmueble como si fuera nuestro: administración
                    integral, áreas verdes impecables y apoyo técnico en instalaciones,
                    todo bajo un mismo equipo.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 1.5 }}
                    className="mt-10 flex flex-wrap items-center gap-5"
                >
                    <a
                        href="#contacto"
                        onClick={(e) => { e.preventDefault(); document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" }); }}
                        data-testid="hero-cta-primary"
                        className="inline-flex items-center rounded-full bg-[#D8F33C] px-8 py-4 text-sm font-bold text-[#08140D] hover:bg-[#BCE317] hover:-translate-y-1 transition-[background-color,transform] duration-300"
                    >
                        Solicita una cotización
                    </a>
                    <a
                        href="#servicios"
                        onClick={(e) => { e.preventDefault(); document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" }); }}
                        data-testid="hero-cta-secondary"
                        className="inline-flex items-center gap-2 rounded-full border border-[#F4F0E6]/30 px-8 py-4 text-sm font-semibold text-[#F4F0E6] hover:border-[#D8F33C] hover:text-[#D8F33C] hover:-translate-y-1 transition-[border-color,color,transform] duration-300"
                    >
                        Conoce nuestros servicios
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};
