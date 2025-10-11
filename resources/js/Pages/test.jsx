import { motion, MotionConfig } from "framer-motion";

export default function Test() {
  return (
    <MotionConfig reducedMotion="never">
      <motion.div
        style={{ width: 20, height: 20, background: "red" }}
        initial={false}
        animate={{ x: [0, 80, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      />
    </MotionConfig>
  );
}
