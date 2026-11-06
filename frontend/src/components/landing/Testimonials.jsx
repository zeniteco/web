import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Llevábamos años con problemas de cartera y mantenimiento atrasado. ZeniTeco ordenó la administración en tres meses y hoy el conjunto tiene los jardines más bonitos del barrio.",
        name: "Camila Rojas",
        role: "Presidenta del consejo, Conjunto Los Arrayanes",
    },
    {
        quote: "Lo que más valoro es que un solo equipo responde por todo: conserjería, jardinería y emergencias. Antes coordinábamos cuatro proveedores distintos.",
        name: "Mateo Vargas",
        role: "Gerente de operaciones, Torre Empresarial Altavista",
    },
    {
        quote: "El reporte mensual llega puntual, con fotos y cifras claras. Como propietaria que vive fuera del país, eso no tiene precio.",
        name: "Daniela Restrepo",
        role: "Propietaria, Edificio Cedro Real",
    },
];

export const Testimonials = () => (
    <section id="testimonios" data-testid="testimonials-section" className="py-28 lg:py-40 bg-[#12261A]/40 border-y border-[#1E3B2A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#D8F33C]"
            >
                Lo que dicen nuestros clientes
            </motion.p>
            <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl tracking-tighter text-[#F4F0E6] max-w-2xl"
                data-testid="testimonials-title"
            >
                Confianza que se
                <span className="italic text-[#B0C0B4]"> nota en los detalles.</span>
            </motion.h2>

            <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
                {testimonials.map((t, i) => (
                    <motion.figure
                        key={t.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.7, delay: i * 0.15 }}
                        className="flex flex-col border border-[#1E3B2A] bg-[#08140D] p-8 lg:p-10 hover:border-[#D8F33C]/50 hover:-translate-y-1.5 transition-[border-color,transform] duration-500"
                        data-testid={`testimonial-${i}`}
                    >
                        <Quote className="h-8 w-8 text-[#D8F33C]" strokeWidth={1.5} />
                        <blockquote className="mt-6 flex-1 text-base text-[#F4F0E6]/85 leading-relaxed">
                            “{t.quote}”
                        </blockquote>
                        <figcaption className="mt-8 border-t border-[#1E3B2A] pt-6">
                            <p className="font-display text-lg text-[#F4F0E6]">{t.name}</p>
                            <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-[#B0C0B4]">{t.role}</p>
                        </figcaption>
                    </motion.figure>
                ))}
            </div>
        </div>
    </section>
);
