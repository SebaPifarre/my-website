import { motion } from "framer-motion";

const outlineVariants = {
  default: {
    strokeWidth: 0,
    pathLength: 0,
    stroke: "grey",
    transition: { duration: 0.5, ease: "easeOut" }
  },
  hover: {
    strokeWidth: 4,
    pathLength: 1,
    stroke: "#BF4D00",
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const textVariants = {
  default: {
    color: "grey",
    fontSize: "1em",
    x: 0
  },
  hover: {
    color: "#eaeef5",
    fontSize: "1.2em",
    x: 20,
    transition: {
      duration: 0.3
    }
  }
};

export default function HoverButton() {
  return (
    <div className="example">
      <p className="label">Hover Button</p>
      <motion.div
        whileHover="hover"
        initial="default"
        animate="default"
        className="hoverButton"
      >
        <motion.p variants={textVariants} className="hoverButtonText">
          Hover me
        </motion.p>
        <motion.svg viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            variants={outlineVariants}
            strokeWidth="1"
            fill="none"
            stroke="grey"
            d="M 0, 0 H 100 V 20 H 0 Z"
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}