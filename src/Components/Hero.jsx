import { styles } from "../styles";
import Wrapper from "../hoc/Wrapper";
import { TypeAnimation } from "react-type-animation";
import PorfolioPic from "../assets/company/MinePic.png";
// import { Distortion } from "./canvas";
const Hero = () => {
  const text = [
    "Abdul Rehman",
    1000,
    " A Developer",
    1000,
    "A Freelancer",
    1000,
    " A Designer",
    1000,
  ];
  return (
    <section
      className={`w-full md:h-auto h-full  mx-auto flex flex-col lg:flex-row justify-center items-center gap-x-14`}
    >
      <div
        className={`mx-auto flex flex-row items-start gap-5 flex-[0.5] mb-10 md:mb-14 bg-black`}
      >
        <div className='flex flex-col justify-center items-center mt-5 '>
          <div className='w-5 h-5 rounded-full bg-[#753df9]' />
          <div className='w-1 sm:h-96 h-52 violet-gradient' />
        </div>
        <div>
          <h1
            className={`${styles.heroHeadText} text-white text-pretty xl:text-nowrap`}
          >
            Hi, Im &nbsp;
            <TypeAnimation
              sequence={text}
              wrapper='span'
              speed={1}
              style={{ color: "#753df9" }}
              repeat={Infinity}
              delay={2000}
              preRenderFirstString
            />
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I developed 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
          <div className='p-2 w-fit rounded-lg violet-gradient hover:bg-border-gradient border-2 mt-10 font-bold text-lg'>
            <button className=''>Contact Me</button>
          </div>
        </div>
      </div>

      <div className='flex-[0.5] justify-start md:aspect-square items-baseline relative animate-fadeInOut'>
        <img
          src={PorfolioPic}
          alt='Profile Picture'
          className='h-full w-full object-scale-down rounded-lg'
        />
        {/* <Distortion/> */}
      </div>
    </section>
  );
};

export default Wrapper(Hero);
