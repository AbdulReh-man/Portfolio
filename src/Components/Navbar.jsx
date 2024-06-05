import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants/index";
import { styles } from "../styles";
import { menu, close, reactjs } from "../assets";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 sticky ${
        visible ? "top-0" : ""
      } z-20 bg-primary `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Image/Logo with name */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeatType: "loop",
              repeat: Infinity,
              ease: "linear",
              duration: 5,
            }}
          >
            <div className=" h-8 w-8">
              <img src={reactjs} alt="X" />
            </div>
          </motion.div>
          <p className="flex">
            Hello &nbsp; <span className="sm:block hidden">| Abdul</span>
          </p>
        </Link>

        {/* Navigation Links */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((links) => (
            <li
              key={links.id}
              className={`${
                active === links.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(links.title);
              }}
            >
              <HashLink smooth to={`#${links.id}`}>
                {links.title}
              </HashLink>
            </li>
          ))}
        </ul>
        {/* menu navigation for small devices*/}
        <div className="list-none flex flex-1 sm:hidden justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="X"
            className="w-[20px] h-[20px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-16 right-0 mx-4  min-w-[130px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col  justify-end items-start gap-4 ">
              {navLinks.map((links) => (
                <li
                  key={links.id}
                  className={` ${
                    active === links.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[14px] font-medium cursor-pointer `}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(links.title);
                  }}
                >
                  <HashLink smooth to={`#${links.id}`}>
                    {links.title}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
