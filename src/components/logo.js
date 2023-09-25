import { motion } from "framer-motion";

export default function Logo() {
  return (
    <div className="logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 7">
        <motion.g>
          <motion.rect
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 0.75 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 2
            }}
            x="14"
            y="1"
            width="5"
            height="5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></motion.rect>
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 2
            }}
            x1="21"
            y1="1"
            x2="26"
            y2="1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></motion.line>
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 2
            }}
            x1="21"
            y1="3.5"
            x2="26"
            y2="3.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></motion.line>
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 2
            }}
            x1="26"
            y1="6"
            x2="21"
            y2="6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></motion.line><motion.line
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 2
          }}
          x1="21"
          y1="6"
          x2="21"
          y2="1"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></motion.line>
          <motion.circle
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 0.85 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 2
            }}
            cx="3"
            cy="4"
            r="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></motion.circle>
          <motion.circle
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 2
            }}
            cx="10"
            cy="4"
            r="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></motion.circle>
        </motion.g>
      </svg>
    </div>
  );
}
