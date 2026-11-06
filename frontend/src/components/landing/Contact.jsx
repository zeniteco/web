import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Loader2 } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const inputCls =
    "w-full bg-[#08140D] border border-[#1E3B2A] px-5 py-4 text-sm text-[#F4F0E6] placeholder:text-[#B0C0B4]/50 focus:outline-none focus:border-[#D8F33C] focus:ring-1 focus:ring-[#D8F33C] transition-[border-color,box-shadow] duration-300";

const initialForm = { nombre: "", email: "", telefono: "", servicio: "", mensaje: "" };

export const Contact = () => {
    const [form, setForm] = useState(initialForm);
    const [sending, setSending] = useState(false);

    const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        try {
            await axios.post(`${API}/contact`, form);
            toast.success("Mensaje enviado. Te contactaremos en menos de 24 horas hábiles.");
            setForm(initialForm);
        } catch (err) {
            toast.error(err.response?.data?.detail?.[0]?.msg || "No pudimos enviar tu mensaje. Intenta de nuevo.");
        } finally {
            setSending(false);
        }
    };

    return (
        <section id="contacto" data-testid="contact-section" className="py-28 lg:py-40">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-14 lg:gap-20">
                <div className="lg:col-span-2">
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7 }}
                        className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#D8F33C]"
                    >
                        Hablemos
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-display text-4xl sm:text-5xl tracking-tighter text-[#F4F0E6]"
                        data-testid="contact-title"
                    >
                        Tu propiedad merece
                        <span className="italic text-[#B0C0B4]"> un mejor cuidado.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-6 text-base text-[#B0C0B4] leading-relaxed"
                    >
                        Cuéntanos qué necesitas y un asesor te contactará en menos de 24
                        horas hábiles para agendar el diagnóstico sin costo.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-12 space-y-6"
                    >
                        <div className="flex items-start gap-4" data-testid="contact-address">
                            <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#D8F33C]" strokeWidth={1.5} />
                            <p className="text-sm text-[#F4F0E6]/80 leading-relaxed">
                                Cra. 13 #93-40, Of. 402<br />Bogotá, Colombia
                            </p>
                        </div>
                        <div className="flex items-start gap-4" data-testid="contact-phone">
                            <Phone className="mt-1 h-5 w-5 shrink-0 text-[#D8F33C]" strokeWidth={1.5} />
                            <p className="text-sm text-[#F4F0E6]/80">+57 601 743 2210 · +57 310 456 8890</p>
                        </div>
                        <div className="flex items-start gap-4" data-testid="contact-email">
                            <Mail className="mt-1 h-5 w-5 shrink-0 text-[#D8F33C]" strokeWidth={1.5} />
                            <p className="text-sm text-[#F4F0E6]/80">contacto@zeniteco.co</p>
                        </div>
                    </motion.div>
                </div>

                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.9, delay: 0.15 }}
                    onSubmit={onSubmit}
                    data-testid="contact-form"
                    className="lg:col-span-3 border border-[#1E3B2A] bg-[#12261A]/60 p-8 lg:p-12 space-y-6"
                >
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="nombre" className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#B0C0B4]">Nombre completo</label>
                            <input id="nombre" data-testid="contact-input-nombre" required minLength={2} value={form.nombre} onChange={set("nombre")} placeholder="Ej. Laura Gómez" className={inputCls} />
                        </div>
                        <div>
                            <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#B0C0B4]">Correo electrónico</label>
                            <input id="email" type="email" data-testid="contact-input-email" required value={form.email} onChange={set("email")} placeholder="tucorreo@empresa.com" className={inputCls} />
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="telefono" className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#B0C0B4]">Teléfono</label>
                            <input id="telefono" data-testid="contact-input-telefono" value={form.telefono} onChange={set("telefono")} placeholder="+57 ..." className={inputCls} />
                        </div>
                        <div>
                            <label htmlFor="servicio" className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#B0C0B4]">Servicio de interés</label>
                            <select id="servicio" data-testid="contact-select-servicio" required value={form.servicio} onChange={set("servicio")} className={inputCls}>
                                <option value="" disabled>Selecciona una opción</option>
                                <option value="Administración de inmuebles">Administración de inmuebles</option>
                                <option value="Instalación y mantenimiento de áreas verdes">Instalación y mantenimiento de áreas verdes</option>
                                <option value="Servicios combinados de apoyo en instalaciones">Servicios combinados de apoyo en instalaciones</option>
                                <option value="Servicio integral (los tres)">Servicio integral (los tres)</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="mensaje" className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#B0C0B4]">Mensaje</label>
                        <textarea id="mensaje" data-testid="contact-input-mensaje" required minLength={10} rows={5} value={form.mensaje} onChange={set("mensaje")} placeholder="Cuéntanos sobre tu inmueble, sus áreas verdes o las instalaciones que necesitas apoyar..." className={`${inputCls} resize-none`} />
                    </div>
                    <button
                        type="submit"
                        disabled={sending}
                        data-testid="contact-submit-button"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D8F33C] px-10 py-4 text-sm font-bold text-[#08140D] hover:bg-[#BCE317] hover:-translate-y-0.5 disabled:opacity-60 disabled:translate-y-0 transition-[background-color,transform,opacity] duration-300"
                    >
                        {sending && <Loader2 className="h-4 w-4 animate-spin" />}
                        {sending ? "Enviando..." : "Enviar solicitud"}
                    </button>
                </motion.form>
            </div>
        </section>
    );
};
