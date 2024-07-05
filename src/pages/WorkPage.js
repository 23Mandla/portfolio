
import Work from "../componets/Work/Work"
import {AnimatePresence, motion } from "framer-motion";
import StairTransition from "../componets/ui/StairTransition";

export default function WorkPage() {
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
    transition={{ duration: 1.2}}
     className="bg-[#F3EDE9] pt-[15%] md:pt-[4%] h-screen">
      <Work />
    </motion.div>
    </AnimatePresence>
  )
}
