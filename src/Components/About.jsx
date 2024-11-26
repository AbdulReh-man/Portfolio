import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Wrapper from "../hoc/Wrapper";
const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt
      className='xs:w-64 w-full'
      options={{
        max: 45,
        scale: 1,
        speed: 400,
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-3xl shadow-card'
      >
        <div className='bg-tertiary rounded-3xl py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-20 h-20 object-contain' />
          <h3 className='text-white text-[20px]font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <section className='snap-center'>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h4 className={`${styles.sectionHeadText}`}>Overview</h4>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-8'
      >
        I’m an IT Student and JavaScript Programmer. I am a very hardworking and
        self-motivated individual who enjoys a challenge, and achieving personal
        goals and objectives. I can work well with others as part of a team and
        individual. Now, I’m a Frontend-Developer in ReactJS. I am also able to
        work as Backend in NodeJs and ExpressJS
      </motion.p>
      <div className='mt-20 flex justify-center items-center flex-wrap gap-5'>
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Wrapper(About, "about");
