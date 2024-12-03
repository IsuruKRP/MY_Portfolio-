import {HERO_CONTENT} from "../constants";
import profilepic from "../assets/image.png";
import { motion } from 'framer-motion'; 

const container = (delay) => ({
   hidden: { x: 100,opacity: 0},
   visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
   },
});

const Hero = () => {
  return (
    <div className="pb-4 border-b border-neutral-900 lg:mb-35">
        <div className="flex flex-wrap">

        <div className="w-full lg:w-1/2 lg:p-8 ">
                <div className="flex justify-center">
                    <motion.img 
                    initial={{ x: -100, opacity: 0}}
                    animate={{x: 0, opacity:1}}
                    transition={{duration:1, delay: 1.2}} 
                    className="size-96"
                     src={profilepic}
                      alt="Isuru" 
                      />
                    </div>
                    </div>
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1  
                 variants={container(0)}
                 initial="hidden"
                 animate="visible"
                 className="ml-20 font-thin tracking-tight lg:mt-16 lg:text-7xl">
                    Isuru kulatunge
                    </motion.h1>
                    <motion.span 
                   variants={container(0.5)}
                   initial="hidden"
                   animate="visible"
                    className="pt-8 pl-20 text-4xl tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text">
                        Full Stack Developer
                    </motion.span>
                     <motion.p variants={container(1)}
                 initial="hidden"
                 animate="visible"
                 className="max-w-xl py-6 pl-20 my-2 font-light tracking-tighter">
                            {HERO_CONTENT}
                     </motion.p>
                </div>
                </div>
               
        </div>
    </div>
  )
}

export default Hero
