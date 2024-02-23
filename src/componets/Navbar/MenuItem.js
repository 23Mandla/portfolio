import React from "react";
import { motion } from "framer-motion";

export default function MenuItem({ showMenu: isOpen}) {
  return (
    isOpen && (
      <motion.div
        className={`absolute w-full h-full z-20 block md:hidden`}
        style={{ background: "rgba(0,0,0,0.83)" }}
      ></motion.div>
    )
  );
}
