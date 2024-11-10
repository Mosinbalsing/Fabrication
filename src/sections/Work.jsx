import { Gallery } from "@/Components/Gallery.jsx";
import React from "react";



const Work = () => {
  return (
    <section className={` w-full flex flex-col relative justify-center items-center`} id="work">
       <h1 className="text-3xl font-semibold mb-2 text-white font-generalsans">Work</h1>
      <Gallery />
    </section>
  );
};

export default Work;
