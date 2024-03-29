import React from "react";
import Home from "../componets/Home/Home";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.div
    variants={{
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate="visible"
    transition={{ duration: 1.2}}
     className="h-screen bg-[#eae7e7]">
      <Home />
    </motion.div>
  );
}
