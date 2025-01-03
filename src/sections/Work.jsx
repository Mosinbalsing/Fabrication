import { Gallery } from "@/Components/Gallery.jsx";
import Aos from "aos";
import { styles } from "../style";
import  {useEffect} from "react";
import "aos/dist/aos.css";

const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <section className={` w-full flex flex-col relative justify-center items-center mt-11`} id="work">
       <h1 className={`${styles.sectionHeadText} text-blue-500`} data-aos="fade-down">Work</h1>
      <Gallery />
    </section>
  );
};

export default Work;
