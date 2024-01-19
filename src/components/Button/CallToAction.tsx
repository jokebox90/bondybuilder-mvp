// @/components/Button/CallToAction.tsx

import { motion, useInView } from "framer-motion";
import { CalendlyPopUpToggleButton } from "../Calendly/Calendly";
import { useRef } from "react";
import { variants } from "../Animate/Animate.variants";

export default function CallToAction() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="w-full max-w-xs overflow-hidden flex-grow-0">
      <motion.div
        initial="slideInDownInitial"
        animate={isInView ? "slideInDownEarly" : "slideInDownInitial"}
        variants={variants}
        className="w-full pt-16 flex items-center justify-center"
      >
        <CalendlyPopUpToggleButton>
          Obtenir un devis dès
          <br />
          maintenant !
        </CalendlyPopUpToggleButton>
      </motion.div>
    </div>
  );
}
