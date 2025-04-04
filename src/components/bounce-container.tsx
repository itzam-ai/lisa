import { motion } from "framer-motion";
import { useState } from "react";

// Custom hook for bounce animation
export const useBounce = () => {
  const [bounce, setBounce] = useState(false);

  const triggerBounce = () => {
    setBounce(true);
    setTimeout(() => setBounce(false), 100);
  };

  return { bounce, triggerBounce };
};

type BounceContainerProps = {
  children: React.ReactNode;
  bounce: boolean;
};

export const BounceContainer = ({ children, bounce }: BounceContainerProps) => {
  return (
    <motion.div
      className="relative"
      animate={{
        scale: bounce ? 0.98 : 1,
      }}
      transition={{
        duration: 0.1,
        ease: "easeInOut",
        times: [0, 0.5, 1],
      }}
    >
      {children}
    </motion.div>
  );
};
