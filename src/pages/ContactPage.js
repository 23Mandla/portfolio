import React from "react";
import Contact from "../componets/Contact/Contact";
import { AnimatePresence, motion } from "framer-motion";
import StairTransition from "../componets/ui/StairTransition";

export default function ContactPage() {
  return (
    <AnimatePresence mode="wait">
      <StairTransition />
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className=" h-screen"
      >
        <Contact />
      </motion.div>
    </AnimatePresence>
  );
}
