import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import {motion} from "framer-motion";

  
const About = () => {
  return (
    <div className="pb-4 bordder-b border-neutral-900">
        <motion.h3 
         whileInView={{ opacity:1, y:0}}
         initial={{opacity:0, y: -100}}
         transition={{duration:1.5}}
         className="my-20 text-6xl text-center">
            About
            <span className="text-neutral-500 "> Me</span>
        </motion.h3>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity: 1, x:0}}
            initial={{ opacity:0, x: -100}}
            transition={{ duration: 0.5}}
            className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img src={aboutImg} alt="about" />
                </div> 
            </motion.div>
        
        <motion.div 
        whileInView={{ opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:0.5}}
         className="w-full lg:w-1/2">
        <div className="flex justify-center lg:justify-start">
            <p className="py-20 my-2 max-e-xl">{ABOUT_TEXT}</p>
            </div>
            </motion.div>
        </div>

    </div>
  );
}

export default About