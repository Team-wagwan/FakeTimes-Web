import { motion, AnimatePresence } from "framer-motion";
import useVisibility from "../../hooks/useVisibility";

const Description = ({ text }: { text: { intro: string; intro2?: string; intro3?: string } }) => {
    const { ref, isVisible } = useVisibility();

    return (
        <section ref={ref} className="section description">
            <div className="text-container">
                <AnimatePresence>
                    {isVisible && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            {text.intro} <br />
                            {text.intro2} <br />
                            {text.intro3}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Description;