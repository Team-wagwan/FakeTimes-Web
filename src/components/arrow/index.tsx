import {motion} from "framer-motion";
import "./style.scss";

const UnderArrow = () => {
    return (
        <motion.div className="blinking-arrow" animate={{opacity: [1, 0.3, 1]}} transition={{ duration:1, repeat: Infinity, repeatType: "reverse"}}>
            ↓
        </motion.div>
    );
}

export default UnderArrow;