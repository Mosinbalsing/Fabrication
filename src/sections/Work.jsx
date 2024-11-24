import { Gallery } from "@/Components/Gallery.jsx";
import React from "react";
import { styles } from "../style";


const Work = () => {
  return (
    <section className={` w-full flex flex-col relative justify-center items-center mt-11`} id="work">
       <h1 className={`${styles.sectionHeadText} text-blue-500`}>Work</h1>
      <Gallery />
    </section>
  );
};

export default Work;
