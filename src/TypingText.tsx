import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  stuff: ReactNode; // made optional
};

function TypingText({ stuff }: Props) {
  return (
    <div>


        <motion.div
            initial={{ clipPath: "inset(0 0 90% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 0.6 }}
        >
            {stuff}
        </motion.div>

    </div>
    
  );
}

export default TypingText;