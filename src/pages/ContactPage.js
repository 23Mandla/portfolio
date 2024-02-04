import React from "react";
import Contact from "../componets/Contact/Contact";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1.2 }}
      className=" h-screen"
    >
      <Contact />
    </motion.div>
  );
}
