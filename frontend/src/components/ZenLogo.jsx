import { motion } from "framer-motion";

export const ZenLogoMark = ({ size = 40, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
    >
        <path
            d="M13 16 H45 L19 50 H51"
            stroke="#D8F33C"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M45 16 C46.5 8.5 52 3.5 60 4.5 C59 12.5 53 17 45 16 Z"
            fill="#D8F33C"
        />
        <path
            d="M45 16 C50 12 55 8 60 4.5"
            stroke="#08140D"
            strokeWidth="1.8"
            strokeLinecap="round"
        />
    </svg>
);

export const ZenLogoAnimated = ({ size = 72 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <motion.path
            d="M13 16 H45 L19 50 H51"
            stroke="#D8F33C"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
        />
        <motion.path
            d="M45 16 C46.5 8.5 52 3.5 60 4.5 C59 12.5 53 17 45 16 Z"
            fill="#D8F33C"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "backOut", delay: 1.5 }}
            style={{ transformOrigin: "46px 15px" }}
        />
        <motion.path
            d="M45 16 C50 12 55 8 60 4.5"
            stroke="#08140D"
            strokeWidth="1.8"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: 1.8 }}
        />
    </svg>
);

export const ZenWordmark = ({ className = "" }) => (
    <span className={`flex items-center gap-3 ${className}`}>
        <ZenLogoMark size={34} />
        <span className="font-display text-2xl tracking-tight text-[#F4F0E6]">
            Zeni<span className="text-[#D8F33C]">Teco</span>
        </span>
    </span>
);
