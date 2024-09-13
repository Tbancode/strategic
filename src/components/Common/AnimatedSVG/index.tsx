'use client'
import { motion } from 'framer-motion';

const AnimatedSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="555"
      height="2"
      viewBox="0 0 555 2"
      fill="none"
    >
      <defs>
        <motion.radialGradient
          id="paint0_radial_506_532"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          animate={{
            transform: [
              'translate(278, 1.49997) rotate(-180) scale(255 36.9184)',
              'translate(0, 1.49997) rotate(-180) scale(255 36.9184)',
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'linear',
          }}
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#0008C1" stopOpacity="0.3" />
        </motion.radialGradient>
      </defs>
      <path
        d="M555 1L7.86781e-06 0.999976"
        stroke="url(#paint0_radial_506_532)"
        strokeWidth="2"
      />
    </svg>
  );
};

export default AnimatedSVG;
