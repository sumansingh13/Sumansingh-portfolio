import { motion } from "framer-motion";

// ai image

import Ai from "../assets/Ai/ai.png";

import { styles } from "../styles";
import HeroIcons from "./HeroIcons";
// import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`  ${styles.heroHeadText} text-white min-w-[70%]`}>
            Hi, I'm <span className="text-[#915EFF]">Suman</span>
          </h1>
          <p
            data-text="a data analyst/data scientist skilled at extracting actionable insights from complex datasets"
            className={`text ${styles.heroSubText} mt-2 text-white-100 max-w-3xl `}
          >
            a data analyst/data scientist skilled at extracting actionable
            insights from complex datasets
          </p>
        </div>
      </div>
      {/* hero icons */}
      <div className="absolute ml-0 xl:-ml-[310px] cursor-pointer bottom-40 xl:bottom-56 w-full  flex justify-center items-center">
        <HeroIcons />
      </div>

      {/* ai image */}
      <div className=" absolute mt-[280px] xl:mt-0 ml-[90px] xl:ml-0 md:right-0  xl:bottom-0   xl:right-0  mx-auto justify-end items-center  w-fit">
        <img
          src={Ai}
          className=" h-[280px] md:h-[500px]  xl:h-[700px]"
          alt="ai"
        />
      </div>
      {/* scroll btn */}
      <div className="absolute bottom-5 xs:bottom-0 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
