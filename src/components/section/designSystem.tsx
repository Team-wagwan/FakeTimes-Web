import { motion, AnimatePresence } from "framer-motion";
import useVisibility from "../../hooks/useVisibility";
import Palette from "../../assets/images/design/Palette.png";
import Typography from "../../assets/images/design/Typography.png";
import Shape from "../../assets/images/design/Shape.png";
import Elevation from "../../assets/images/design/Elevation.png";
import Sementic from "../../assets/images/design/Sementic.png";

const DesignSystem = ({ text }: { text: { designSystem: { title: string; colorPalette: string; semanticColors: string; typography: string; etc: string } } }) => {
    const { ref, isVisible } = useVisibility();

    return (
        <section ref={ref} className="section design-system">
            <AnimatePresence>
                {isVisible && (
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                    >
                        {text.designSystem.title}
                    </motion.h2>
                )}
            </AnimatePresence>

            <motion.div
                className="design-container"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
            >
                <div className="design-item">
                    <h3>{text.designSystem.colorPalette}</h3>
                    <img src={Palette} alt="Color Palette" />
                </div>
                <div className="design-item">
                    <h3>{text.designSystem.semanticColors}</h3>
                    <img src={Sementic} alt="Semantic Colors" />
                </div>
                <div className="design-item">
                    <h3>{text.designSystem.typography}</h3>
                    <img src={Typography} alt="Typography Guide" />
                </div>
                <div className="design-item">
                    <h3>{text.designSystem.etc}</h3>
                    <img src={Shape} alt="Shape Guide" />
                    <img src={Elevation} alt="Elevation Guide" />
                </div>
            </motion.div>

            <motion.div
                className="github-links"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <a href="https://www.figma.com/design/hab4Kw2goRfcwgPnGJ2a6I/FakeTimes?node-id=0-1&t=QXZgOMlPigVO1C8Z-1"
                   target="_blank" rel="noopener noreferrer">
                    🧑‍🎨 View in Figma
                </a>
            </motion.div>
        </section>
    );
};

export default DesignSystem;