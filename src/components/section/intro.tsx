import { motion } from "framer-motion";
import IntroKR from "../../assets/images/intro/intro-kr.png";
import IntroEn from "../../assets/images/intro/intro-en.png";

const Intro = ({ language }: { language: "ko" | "en" }) => {
    return (
        <section className="section intro fade-in">
            <motion.img
                key={language}
                src={language === "ko" ? IntroKR : IntroEn}
                alt="소개 섹션"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            />
        </section>
    );
};

export default Intro;