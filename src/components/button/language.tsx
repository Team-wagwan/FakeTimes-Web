const Language = ({ language, setLanguage }: { language: "ko" | "en"; setLanguage: React.Dispatch<React.SetStateAction<"ko" | "en">> }) => {
    const handleLanguageChange = () => {
        const currentScrollY = window.scrollY;

        setLanguage(language === "ko" ? "en" : "ko");

        setTimeout(() => {
            window.scrollTo({ top: currentScrollY, behavior: "auto" });
        }, 10);
    };

    return (
        <button className="lang-toggle" onClick={handleLanguageChange}>
            {language === "ko" ? "Change Language (EN)" : "언어 변경 (KO)"}
        </button>
    );
};

export default Language;