import React from "react";
import { motion } from "framer-motion";
import "../styles/sections.css";

const Section = ({ id, children }) => {
  return (
    <motion.section
      id={id}
      className="section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
};

export default Section;
