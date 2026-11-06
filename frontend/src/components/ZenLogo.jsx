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
            d="M14 12 H50 L20 52 H52"
            stroke="#D8F33C"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M44 8 C52 6 58 10 59 18 C51 20 45 16 44 8 Z"
            fill="#D8F33C"
        />
        <path
            d="M44 8 C49 10 54 13 59 18"
            stroke="#08140D"
            strokeWidth="1.6"
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
            d="M14 12 H50 L20 52 H52"
            stroke="#D8F33C"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
        />
        <motion.path
            d="M44 8 C52 6 58 10 59 18 C51 20 45 16 44 8 Z"
            fill="#D8F33C"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "backOut", delay: 1.5 }}
            style={{ transformOrigin: "51px 13px" }}
        />
        <motion.path
            d="M44 8 C49 10 54 13 59 18"
            stroke="#08140D"
            strokeWidth="1.6"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: 1.7 }}
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
