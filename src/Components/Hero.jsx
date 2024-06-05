import { motion } from "framer-motion";
import { styles } from "../styles";
import Wrapper from "../hoc/Wrapper";
import { Distortion } from "./canvas";
const Hero = () => {
  return (
    <section className= {`w-full md:h-auto h-full  mx-auto flex flex-col md:flex-row justify-center items-stretch gap-x-14`}>
      <div
        className={` inset-0  mx-auto flex flex-row items-start gap-5 flex-[0.5] mb-10 md:mb-14`}
      >
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="w-5 h-5 rounded-full bg-[#753df9]" />
          <div className="w-1 sm:h-96 h-52 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, Im <span className="text-[#753df9]">Abdul Rehman</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I developed 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
          <div></div>
          <div></div>
          <div></div>
          <div className="float-right p-2 rounded-lg violet-gradient hover:bg- border-gradient border-2 mt-10 font-bold text-lg">
          <button>Contact Me</button>
          </div>
        </div>
      </div>
      
      <div className="flex-[0.5]  justify-center items-baseline relative">
        <Distortion/>
      </div>
    </section>
  );
};

export default Wrapper(Hero);
