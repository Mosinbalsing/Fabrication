import React from "react";
import Button from "../Components/Button";
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <section className={`min-h-screen w-full flex ${isMobileOrTablet ? 'flex-col' : 'flex-row'} relative`}>
      <div className="w-full sm:w-[50%] mx-auto flex flex-col sm:mt-36 mt-[30%] c-space gap-3 z-20 relative">
        <motion.p
          className="text-left hero_tag text-gray_gradient"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Building Products With <span className="text-blue-800">Galexy Fabrication</span>
        </motion.p>

        {/* Metal fabrication quote with responsive font size */}
        <motion.p
          className="text-neutral-400 font-bold text-xl transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          "Metal fabrication is the art of turning raw materials into functional, durable, and beautiful creations."
        </motion.p>
      </div>

      <div className={`w-[50%] ${isMobileOrTablet ? 'flex-col w-full' : 'flex-row'} flex justify-center items-center sm:mt-36 mt-20 gap-3 z-20 relative`}>
        {isMobileOrTablet ? (
          <>
            {/* Display images in a column on mobile and tablet view */}
            <motion.img
              src="assets/hero.png"
              alt="fabrication"
              className="w-[80%] h-auto rounded border-white mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.img
              src="assets/hero2.png"
              alt="fabrication"
              className="w-[80%] h-auto rounded border-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            />
          </>
        ) : (
          <>
            {/* Display images side-by-side on larger screens */}
            <motion.img
              src="assets/hero.png"
              alt="fabrication"
              className="w-[40%] h-[50%] rounded border-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.img
              src="assets/hero2.png"
              alt="fabrication"
              className="w-[40%] h-[50%] rounded border-white mb-[20%] ml-[5%] top-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            />
          </>
        )}
      </div>

      {/* Bottom button section */}
      <div className="absolute bottom-7 left-0 right-0 w-full z-20 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
