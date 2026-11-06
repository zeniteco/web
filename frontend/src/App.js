import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import "@/App.css";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { Services } from "@/components/landing/Services";
import { About } from "@/components/landing/About";
import { Process } from "@/components/landing/Process";
import { Testimonials } from "@/components/landing/Testimonials";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

function App() {
    useEffect(() => {
        const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
        let rafId;
        const raf = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    return (
        <div className="App bg-[#08140D] text-[#F4F0E6] min-h-screen" data-testid="app-root">
            <div className="grain-overlay" />
            <Toaster position="top-center" theme="dark" richColors />
            <Header />
            <main>
                <Hero />
                <Marquee />
                <Services />
                <About />
                <Process />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
