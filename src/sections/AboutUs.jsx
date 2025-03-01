import { motion } from "framer-motion";
import { styles } from "../style";

export const AboutUs = () => {
  // Animation variants for framer-motion
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      className="bg-[#1C1C21] text-white xl:px-36 lg:px-20 md:px-16 sm:px-10 px-6 py-20 rounded-xl shadow-lg m-5"
      id="about-us"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.h2
            className={`${styles.sectionHeadText} text-blue-500`}
            variants={fadeInVariants}
          >
            About Us
          </motion.h2>
          <motion.p
            className={`${styles.sectionSubText} mt-4`}
            variants={fadeInVariants}
          >
            Quality Craftsmanship. Unmatched Expertise.
          </motion.p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Text Content */}
          <motion.div
            className="flex flex-col justify-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.p
              className="text-lg leading-relaxed mb-6 text-justify"
              variants={fadeInVariants}
            >
              Established in <strong>2013</strong>, with over{" "}
              <strong>15 years of experience</strong>, we specialize in delivering
              high-quality metal fabrication solutions. From crafting durable{" "}
              <strong>doors, grills, gates, shutters</strong>, and beyond, we
              have consistently exceeded client expectations with unmatched
              precision and dedication.
            </motion.p>
            <motion.p
              className="text-lg leading-relaxed mb-6 text-justify"
              variants={fadeInVariants}
            >
              Our team of skilled craftsmen works diligently from{" "}
              <strong>9:00 AM to 7:00 PM</strong> to provide tailored solutions
              that meet your needs. We take pride in combining traditional
              craftsmanship with modern innovation, ensuring every product is as
              robust as it is aesthetically pleasing.
            </motion.p>
            <motion.p
              className="text-lg leading-relaxed mb-6 text-justify"
              variants={fadeInVariants}
            >
              Let us bring your vision to life with top-notch metal fabrication
              services. Your trust and satisfaction are the foundations of our
              success.
            </motion.p>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="flex justify-center items-center"
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <img
              src="../../public/assets/Shades/Shade4.jpg"
              alt="Metal Fabrication Process"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};