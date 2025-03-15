"use client";

import { useState } from "react";
import { locales } from "../language";
import { motion, AnimatePresence } from "framer-motion";
import "./style.scss";

import Intro from "../components/section/intro";
import Description from "../components/section/description";
import DesignSystem from "../components/section/designSystem";
import Skills from "../components/section/skills";
import Language from "../components/button/language";

const Page = () => {
    const [language, setLanguage] = useState<"ko" | "en">("ko");
    const t = locales[language];

    return (
        <main className="main">
            <Language language={language} setLanguage={setLanguage} />

            <AnimatePresence mode="wait">
                <motion.div
                    key={language}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <Intro language={language} />
                    <Description text={t} />
                    <DesignSystem text={t} />
                    <Skills text={t} />
                </motion.div>
            </AnimatePresence>
        </main>
    );
};

export default Page;