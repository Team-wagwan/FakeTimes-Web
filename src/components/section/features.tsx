import {motion, AnimatePresence} from "framer-motion";
import useVisibility from "../../hooks/useVisibility";
import useVideoVisibility from "../../hooks/useVideoVisibility";
import MakeNews from "../../assets/video/makeNews.mp4";
import NewsList from "../../assets/images/newsList.png";
import {Feature} from "../../language";

const Features = ({ text }: {
    text: {
        featuresTitle: string;
        features: Feature[];
    };
}) => {
    const { ref, isVisible } = useVisibility();
    const { videoRef } = useVideoVisibility();

    return (
        <section ref={ref} className="section features">
            <AnimatePresence>
                {isVisible && (
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        className="text-center"
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {text.featuresTitle}
                    </motion.h2>
                )}
            </AnimatePresence>

            <motion.div
                className="features-container"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {text.features.map((feature, index) => (
                    <div key={index} className="feature">
                        {index % 2 === 0 ? (
                            <div className="feature-image">
                                <video ref={videoRef} src={MakeNews} loop muted playsInline />
                            </div>
                        ) : (
                            <div className="feature-image">
                                <img src={NewsList} alt="설명 이미지" />
                            </div>
                        )}
                        <div className="feature-text">
                            <span className="feature-category">{feature.category}</span>
                            <h2>{feature.title}</h2>
                            <p>
                                {feature.description1} <br />
                                {feature.description2} <br />
                                {feature.description3}
                            </p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default Features;