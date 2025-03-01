import { Gallery } from "@/Components/Gallery.jsx";
import { styles } from "../style";

const Work = () => {
  return (
    <section className="w-full flex flex-col relative justify-center items-center mt-11" id="work">
      {/* Responsive text size and padding */}
      <h1 className={`${styles.sectionHeadText} text-blue-500 text-3xl md:text-4xl lg:text-5xl px-4 text-center`}>
        Work
      </h1>
      {/* Gallery component */}
      <Gallery />
    </section>
  );
};

export default Work;