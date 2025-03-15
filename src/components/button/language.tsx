import { motion, AnimatePresence } from "framer-motion";

const Language = ({ language, setLanguage }: { language: "ko" | "en"; setLanguage: React.Dispatch<React.SetStateAction<"ko" | "en">> }) => {
    const handleLanguageChange = () => {
        const currentScrollY = window.scrollY;

        setLanguage((prev) => (prev === "ko" ? "en" : "ko"));

        setTimeout(() => {
            window.scrollTo({ top: currentScrollY, behavior: "smooth" });
        }, 300);
    };

    return (
        <AnimatePresence mode="wait">
            <motion.button
                key={language}
                className="lang-toggle"
                onClick={handleLanguageChange}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                {language === "ko" ? "Change Language (EN)" : "언어 변경 (KO)"}
            </motion.button>
        </AnimatePresence>
    );
};

export default Language;