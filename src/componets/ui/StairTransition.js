import React from "react";
import { motion } from "framer-motion";

//variant for the stair transition
const stairVariants = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

//calculate the number of stairs in reverse
const stairArr = () => Array.from({ length: 7 }, (_, i) => i);
console.log(stairArr())

export default function StairTransition() {
  
  return (
    <div className="w-full h-full left-0 z-30 fixed flex pointer-events-none">
      {stairArr().map((_, i) => (
        <motion.div
          key={i}
          className="w-full h-screen bg-[#fff] relative top-0 left-0 right-0"
          variants={stairVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 1,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
