import { motion } from "framer-motion";


const NavbarButton = (props) => {
  const { content } = props;
  return (
    <motion.div
      className="navbar-button"
      whileHover={{
        scale: 1.1,
        backgroundColor: "#c96666",
        transition: { duration: 0.4 },
      }}
    >
      {content}
    </motion.div>
  );
};

export default NavbarButton;
