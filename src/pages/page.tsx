"use client";

import { useState } from "react";
import { locales } from "../language";
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

            <Intro language={language} />
            <Description text={t} />
            <DesignSystem text={t} />
            <Skills text={t} />
        </main>
    );
};

export default Page;