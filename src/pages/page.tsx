"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./style.scss";
import IntroKR from "../assets/intro-kr.png";
import IntroEn from "../assets/intro-en.png";
import { locales } from "../language";

const Page = () => {
    const [language, setLanguage] = useState<"ko" | "en">("ko");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "ko" ? "en" : "ko"));
    };

    const t = locales[language];

    return (
        <main className="main">
            <button className="lang-toggle" onClick={toggleLanguage}>
                {t.button}
            </button>

            <section className="section intro">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={language}
                        src={language === "ko" ? IntroKR : IntroEn}
                        alt="소개 섹션"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    />
                </AnimatePresence>
            </section>

            <section className="section description">
                <div className="text-container">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={language}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {t.intro} <br />
                            {t.intro2} <br />
                            {t.intro3}
                        </motion.p>
                    </AnimatePresence>
                </div>
            </section>

            {t.features.map((feature, index) => (
                <section key={index} className="section feature">
                    {index % 2 === 0 ? (
                        <>
                            <div className="feature-image">
                                <img src="" alt="기능 소개 이미지" />
                            </div>
                            <div className="feature-text">
                                <span className="feature-category">{feature.category}</span>
                                <h2>{feature.title}</h2>
                                <div className="text-container">
                                    <AnimatePresence mode="wait">
                                        <motion.p
                                            key={language}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {feature.description1} <br />
                                            {feature.description2} <br />
                                            {feature.description3}
                                        </motion.p>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="feature-text">
                                <span className="feature-category">{feature.category}</span>
                                <h2>{feature.title}</h2>
                                <div className="text-container">
                                    <AnimatePresence mode="wait">
                                        <motion.p
                                            key={language}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {feature.description1} <br />
                                            {feature.description2} <br />
                                            {feature.description3}
                                        </motion.p>
                                    </AnimatePresence>
                                </div>
                            </div>
                            <div className="feature-image">
                                <img src="" alt="기능 소개 이미지" />
                            </div>
                        </>
                    )}
                </section>
            ))}
        </main>
    );
};

export default Page;