import About from "../componets/About/About";
import Skills from "../componets/About/Skills";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1.2 }}
      className="h-auto bg-[#eae7e7] text-black space-y-14"
    >
      <About />
      <Skills />
    </motion.div>
  );
}
