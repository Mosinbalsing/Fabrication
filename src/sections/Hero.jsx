import React from "react";
import Button from "../Components/Button";
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 787px) and (max-width: 1024px)" });
  const ismobile = useMediaQuery({ query: "(min-width: 320px) and (max-width: 430px)" });


  return (
    <section className={`xl:min-h-[750px] w-full flex  max-w-7xl mx-auto ${isMobileOrTablet ? 'flex-col' : 'flex-row'} relative`} id="home">
      <div className={` xl:w-[50%] md:w-[100%]${isTablet?'w-[100%]':''} ${ismobile?'w-[100%] ':''}sm:w-[100%]  mx-auto flex flex-col sm:mt-36 mt-[30%] c-space gap-3 z-20 relative`}>
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
  {["hero.png", "hero2.png"].map((src, index) => (
    <motion.img
      key={src}
      src={`assets/${src}`}
      alt="fabrication"
      className={`${isMobileOrTablet ? 'w-[80%] mb-4' : 'w-[40%] h-[50%]'} h-auto rounded border-white ${!isMobileOrTablet && index === 1 ? 'mb-[20%] ml-[5%]' : ''}`}
      initial={{ opacity: 0, x: isMobileOrTablet ? 0 : index === 0 ? -50 : 50, y: isMobileOrTablet ? (index === 0 ? -30 : 30) : 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.3, ease: "easeOut" }}
    />
  ))}
</div>


      {/* Bottom button section */}
      <div className="absolute bottom-7 left-0 right-0 w-full z-20 c-space">
        <a href="#work" className="w-fit">
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
