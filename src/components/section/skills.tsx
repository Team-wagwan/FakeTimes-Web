import {motion, AnimatePresence} from "framer-motion";
import useVisibility from "../../hooks/useVisibility";
import AppStoreIcon from "../../assets/images/appStore.png";

const Skills = ({text}: { text: { skills: { title: string } } }) => {
    const {ref, isVisible} = useVisibility();

    return (
        <section ref={ref} className="section skills">
            <AnimatePresence>
                {isVisible && (
                    <motion.h2
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 30}}
                        transition={{duration: 0.6, ease: "easeOut"}}
                    >
                        {text.skills.title}
                    </motion.h2>
                )}
            </AnimatePresence>

            <motion.div
                className="skills-container"
                initial={{opacity: 0, y: 50}}
                animate={isVisible ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                transition={{duration: 0.6, ease: "easeOut"}}
            >
                <div className="skills-category">
                    <h3>🌐 Web</h3>
                    <ul>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>SCSS</li>
                        <li>GitHub Pages</li>
                    </ul>
                </div>

                <div className="skills-category">
                    <h3>🍎 iOS</h3>
                    <ul>
                        <li>Swift UI</li>
                        <li>Alamofire</li>
                    </ul>
                </div>

                <div className="skills-category">
                    <h3>⚙ Server</h3>
                    <ul>
                        <li>Kotlin</li>
                        <li>Spring</li>
                        <li>Docker</li>
                    </ul>
                </div>
            </motion.div>

            <motion.div
                className="github-links"
                initial={{opacity: 0, y: 20}}
                animate={isVisible ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                transition={{duration: 0.5, delay: 0.2, ease: "easeOut"}}
            >
                <a href="https://github.com/Team-wagwan" target="_blank" rel="noopener noreferrer">
                    🔗 GitHub Repository
                </a>
                <a className="AppStore" href="https://github.com/Team-wagwan" target="_blank" rel="noopener noreferrer">
                    <img src={AppStoreIcon} alt="App Store"/>
                    <span>App Store</span>
                </a>
            </motion.div>
        </section>
    );
};

export default Skills;