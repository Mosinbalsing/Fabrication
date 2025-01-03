import { motion } from "framer-motion";
import { styles } from "../style";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <section
      className="bg-[#1C1C21] text-white xl:px-36 xl:py-20 rounded-xl shadow-lg m-5  "

      id="about-us"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className={`${styles.sectionHeadText} text-blue-500`} data-aos="fade-down" >
            About Us
          </h2>
          <p className={`${styles.sectionSubText} mt-4`} data-aos="fade-left" data-aos-delay="300">
            Quality Craftsmanship. Unmatched Expertise.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 xl:gap-10 sm:flex   ">
          {/* Text Content */}
          <div className="flex flex-col justify-center sm:w-[100%] xl:w-[100%]"> 
            <p className="text-lg leading-relaxed mb-6" data-aos="fade-right" >
              Established in <strong>2013</strong>, with over 
              <strong> 15 years of experience</strong>, we specialize in delivering 
              high-quality metal fabrication solutions. From crafting durable 
              <strong> doors, grills, gates, shutters</strong>, and beyond, we 
              have consistently exceeded client expectations with unmatched precision and dedication.
            </p>
            <p className="text-lg leading-relaxed mb-6" data-aos="fade-right" data-aos-delay="300">
              Our team of skilled craftsmen works diligently from 
              <strong> 9:00 AM to 7:00 PM</strong> to provide tailored solutions 
              that meet your needs. We take pride in combining traditional 
              craftsmanship with modern innovation, ensuring every product 
              is as robust as it is aesthetically pleasing.
            </p>
            <p className="text-lg leading-relaxed mb-6" data-aos="fade-right" data-aos-delay="600">
              Let us bring your vision to life with top-notch metal fabrication 
              services. Your trust and satisfaction are the foundations of our success.
            </p>
          </div>

          {/* Image Content */}
          <div className="flex justify-center items-center w-[50%]" data-aos="fade-up">
            <img
              src="../../public/assets/Shades/Shade4.jpg"
              alt="Metal Fabrication Process"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
