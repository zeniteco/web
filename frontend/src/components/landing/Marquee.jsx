const items = ["INNOVACIÓN", "SOSTENIBILIDAD", "EXCELENCIA", "COMPROMISO", "CONFIANZA", "CERCANÍA"];

export const Marquee = () => (
    <section data-testid="marquee-section" className="border-y border-[#1E3B2A] bg-[#12261A]/60 py-8 overflow-hidden" aria-hidden="true">
        <div className="marquee-track">
            {[0, 1].map((copy) => (
                <div key={copy} className="flex shrink-0 items-center">
                    {items.concat(items).map((word, i) => (
                        <span key={`${copy}-${i}`} className="flex items-center">
                            <span className="font-display text-3xl md:text-5xl italic font-light text-stroke-cream px-8 whitespace-nowrap">
                                {word}
                            </span>
                            <span className="h-2 w-2 rounded-full bg-[#D8F33C]/70" />
                        </span>
                    ))}
                </div>
            ))}
        </div>
    </section>
);
