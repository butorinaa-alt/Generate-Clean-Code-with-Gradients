import { motion } from "motion/react";

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#f8f5f1]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      style={{ pointerEvents: "none" }}
      onAnimationComplete={(definition: any) => {
        if (definition.opacity === 0) {
          const preloader = document.getElementById("preloader");
          if (preloader) {
            preloader.style.display = "none";
          }
        }
      }}
    >
      <motion.h1
        className="uppercase"
        style={{
          color: "#C7390A",
          fontFamily: "Instrument Serif",
          fontSize: "50px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        ship faster with ai
      </motion.h1>
    </motion.div>
  );
}
