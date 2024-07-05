import About from "../componets/About/About";
import Skills from "../componets/About/Skills";
import {AnimatePresence, motion } from "framer-motion";
import StairTransition from "../componets/ui/StairTransition";

export default function AboutPage() {
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
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="h-auto bg-[#eae7e7] text-black space-y-14"
      >
        <About />
        <Skills />
      </motion.div>
    </AnimatePresence>
  );
}
