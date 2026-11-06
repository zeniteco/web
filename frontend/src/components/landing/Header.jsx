import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ZenWordmark } from "../ZenLogo";

const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Proceso", href: "#proceso" },
    { label: "Testimonios", href: "#testimonios" },
];

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const go = (e, href) => {
        e.preventDefault();
        setOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.header
            data-testid="main-header"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500 ${
                scrolled
                    ? "bg-[#12261A]/80 backdrop-blur-xl border-[#1E3B2A]"
                    : "bg-[#08140D]/40 backdrop-blur-md border-white/5"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
                <a
                    href="#inicio"
                    onClick={(e) => go(e, "#inicio")}
                    data-testid="header-logo-link"
                    className="hover:opacity-80 transition-opacity duration-300"
                >
                    <ZenWordmark />
                </a>

                <nav className="hidden lg:flex items-center gap-9" data-testid="header-nav">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={(e) => go(e, l.href)}
                            data-testid={`nav-link-${l.label.toLowerCase()}`}
                            className="text-sm font-medium tracking-wide text-[#B0C0B4] hover:text-[#D8F33C] transition-colors duration-300"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <a
                        href="#contacto"
                        onClick={(e) => go(e, "#contacto")}
                        data-testid="header-cta-button"
                        className="hidden lg:inline-flex items-center rounded-full bg-[#D8F33C] px-6 py-2.5 text-sm font-bold text-[#08140D] hover:bg-[#BCE317] hover:-translate-y-0.5 transition-[background-color,transform] duration-300"
                    >
                        Cotiza ahora
                    </a>
                    <button
                        data-testid="mobile-menu-toggle"
                        onClick={() => setOpen(!open)}
                        className="lg:hidden flex flex-col gap-1.5 p-2"
                        aria-label="Abrir menú"
                    >
                        <span className={`block h-0.5 w-6 bg-[#F4F0E6] transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`block h-0.5 w-6 bg-[#F4F0E6] transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
                        <span className={`block h-0.5 w-6 bg-[#F4F0E6] transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>
            </div>

            {open && (
                <motion.nav
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="lg:hidden bg-[#12261A]/95 backdrop-blur-xl border-t border-[#1E3B2A] px-6 py-6 flex flex-col gap-5"
                    data-testid="mobile-nav"
                >
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={(e) => go(e, l.href)}
                            data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                            className="text-base font-medium text-[#F4F0E6]"
                        >
                            {l.label}
                        </a>
                    ))}
                    <a
                        href="#contacto"
                        onClick={(e) => go(e, "#contacto")}
                        data-testid="mobile-cta-button"
                        className="inline-flex w-fit items-center rounded-full bg-[#D8F33C] px-6 py-2.5 text-sm font-bold text-[#08140D]"
                    >
                        Cotiza ahora
                    </a>
                </motion.nav>
            )}
        </motion.header>
    );
};
