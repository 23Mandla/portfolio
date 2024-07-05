import React from "react";
import Home from "../componets/Home/Home";
import { AnimatePresence, motion } from "framer-motion";
import StairTransition from "../componets/ui/StairTransition";

export default function HomePage() {
  return (
    <AnimatePresence mode="wait">
      <StairTransition />
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.2, ease: "easeInOut"}}
        className="h-screen bg-[#f3cdcd]"
      >
        <Home />
      </motion.div>
    </AnimatePresence>
  );
}
