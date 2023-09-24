import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const NavBar = (props) => {
  const { title } = props;

  // Value being driven by scrolling (e.g. height)
  const initialValue = 140;
  const finalValue = 88;
  const thresholdY = 170; // set the scroll position where you want the state change

  const speed = 1;
  const scrollDistance = (initialValue - finalValue) / speed;

  const startY = 0; // scroll position when transition starts
  const endY = startY + scrollDistance;

  const { scrollY } = useScroll();
  const scrollOutput = useTransform(
    scrollY,
    [startY, endY, endY],
    [initialValue, finalValue, finalValue],
    {
      clamp: false,
    }
  );

  const [isPastThreshold, setIsPastThreshold] = useState(false);
  useEffect(
    () => scrollY.onChange((latest) => setIsPastThreshold(latest > thresholdY)),
    [scrollY]
  );

  return (
    <motion.div
      className="navbar"
      style={{
        height: scrollOutput,
        justifyContent: isPastThreshold ? "center" : "left",
      }}
    >
      <motion.div
        className="options"
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 40,
          duration: 1,
        }}
        data-isPastThreshold = {isPastThreshold}
        whileHover={{
          scale: isPastThreshold ? 1.2 : 1,
          transition: { duration: 0.2 },
        }}
      >
        <motion.div
          className="navbar-button"
          whileHover={{
            scale: 1.1,
            backgroundColor: "#c96666",
            color: "yellow",
            transition: { duration: 0.4 },
          }}
        >
          {title}
        </motion.div>
        <motion.div
          className="navbar-button"
          whileHover={{
            scale: 1.1,
            backgroundColor: "#c96666",
            transition: { duration: 0.5 },
          }}
        >
          {title}
        </motion.div>
        <motion.div
          className="navbar-button"
          whileHover={{
            scale: 1.1,
            backgroundColor: "#c96666",
            transition: { duration: 0.5 },
          }}
        >
          {title}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default NavBar;
