import {motion, AnimatePresence} from "framer-motion";
import useVisibility from "../../hooks/useVisibility";

const Features = ({text}: {
    text: {
        featuresTitle: string,
        features: {
            category: string;
            title: string;
            description1?: string;
            description2?: string;
            description3?: string
        }[]
    }
}) => {
    const {ref, isVisible} = useVisibility();

    return (
        <section ref={ref} className="section features">
            <AnimatePresence>
                {isVisible && (
                    <motion.h2
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 30}}
                        className="text-center"
                        transition={{duration: 0.6, ease: "easeOut"}}
                    >
                        {text.featuresTitle}
                    </motion.h2>
                )}
            </AnimatePresence>

            <motion.div
                className="features-container"
                initial={{opacity: 0, y: 50}}
                animate={isVisible ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                transition={{duration: 0.6, ease: "easeOut"}}
            >
                {text.features.map((feature, index) => (
                    <div key={index} className="feature">
                        {index % 2 === 0 ? (
                            <>
                                <div className="feature-image">
                                    <video src="" autoPlay loop muted playsInline/>
                                </div>
                                <div className="feature-text">
                                    <span className="feature-category">{feature.category}</span>
                                    <h2>{feature.title}</h2>
                                    <p>
                                        {feature.description1} <br/>
                                        {feature.description2} <br/>
                                        {feature.description3}
                                    </p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="feature-image">
                                    <img src="" alt="뉴스 리스트" />
                                </div>
                                <div className="feature-text">
                                    <span className="feature-category">{feature.category}</span>
                                    <h2>{feature.title}</h2>
                                    <p>
                                        {feature.description1} <br/>
                                        {feature.description2} <br/>
                                        {feature.description3}
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default Features;