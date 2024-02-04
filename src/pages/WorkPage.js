
import Work from "../componets/Work/Work"
import { motion } from "framer-motion";

export default function WorkPage() {
  return (
    <motion.div
    variants={{
      hidden: { opacity: 0, y: -100 },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate="visible"
    transition={{ duration: 1.2}}
     className="bg-[#F3EDE9] pt-[4%] h-screen">
      <Work />
    </motion.div>
  )
}
