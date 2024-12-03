import { BiLogoJava } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { DiCss3 } from "react-icons/di";
import { FaPhp } from "react-icons/fa";
import { motion } from 'framer-motion';
import { RiTailwindCssFill } from "react-icons/ri";

const iconVariants = (duration) =>({
  
  intial: { y: -10},
  animate: {
    y: [10, -10],
    transition:{
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  },
});
const Technologies = () => {
  return (
    <div className="pb-24 border-b border-neutral-800">
        <motion.h2 
          whileInView={{ opacity:1, y:0}}
          initial={{opacity:0, y: -100}}
          transition={{duration:1.5}}
          className="my-20 text-5xl text-center">Technologies & Frameworks</motion.h2>
        <motion.div 
         whileInView={{ opacity:1, x:0}}
         initial={{opacity:0, x: -100}}
         transition={{duration:1.5}}
          className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
             variants={iconVariants(2.5)}
             initial="initial"
             animate="animate"
             className="p-3 border-4 rounded-2xl border-neutral-800">
        <RiReactjsLine className="text-4xl text-cyan-400" />
       </motion.div>
       
       <motion.div
       variants={iconVariants(3)}
       initial="initial"
       animate="animate"
        className="p-3 border-4 rounded-2xl border-neutral-800">
        <FaNodeJs className="text-4xl text-green-500 " />
       </motion.div>
       
       <motion.div 
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"       
       className="p-3 border-4 rounded-2xl border-neutral-800">
        <SiMongodb className="text-4xl text-green-600 " />
       </motion.div>
       
       <motion.div 
         variants={iconVariants(4)}
         initial="initial"
         animate="animate" 
         className="p-3 border-4 rounded-2xl border-neutral-800">
        <SiExpress className="text-4xl text-white-400" />
       </motion.div>
       
       <motion.div
         variants={iconVariants(4.5)}
         initial="initial"
         animate="animate" 
          className="p-3 border-4 rounded-2xl border-neutral-800">
        <BiLogoJava className="text-4xl text-red-400" />
       </motion.div>

       <motion.div 
         variants={iconVariants(5)}
         initial="initial"
         animate="animate" 
          className="p-3 border-4 rounded-2xl border-neutral-800">
        <FaHtml5 className="text-4xl text-orange-400" />
       </motion.div>
       
       <motion.div 
         variants={iconVariants(5.5)}
         initial="initial"
         animate="animate" 
          className="p-3 border-4 rounded-2xl border-neutral-800">
        <DiCss3 className="text-4xl text-blue-800" />
       </motion.div>

       <motion.div
         variants={iconVariants(6)}
         initial="initial"
         animate="animate" 
          className="p-3 border-4 rounded-2xl border-neutral-800">
        <FaPhp className="text-4xl text-cyan-400" />
       </motion.div>

       <motion.div
         variants={iconVariants(6.5)}
         initial="initial"
         animate="animate" 
          className="p-3 border-4 rounded-2xl border-neutral-800">
        <RiTailwindCssFill className="text-4xl text-cyan-400" />
       </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies