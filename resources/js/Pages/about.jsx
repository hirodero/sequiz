import { motion } from "framer-motion"
export default function About(){
    return(
        <motion.div 
        className="fixed inset-0 flex flex-col h-dvh "
        >
            <div className="w-full h-[10%] shadow-2xl"/>
            <div className="flex flex-col items-center justify-center w-full h-[100%] gap-2">
                <motion.div 
                // initial={{opacity:0, x:-100}}
                // animate={{opacity:1, x:0}}
                // transition={{duration:1}}
                className="flex flex-col justify-center w-full h-[10%] p-4 pl-[10%] text-6xl text-white bg-gradient-to-r via-transparent from-green-700/70 to-transparent [-webkit-text-stroke:0.4px_black] [text-shadow:_4px_4px_0_#000]">
                    <motion.h1
                    animate={{opacity:[0,1]}}
                    transition={{duration:0.4, ease:'easeInOut'}}>
                        About Sequiz
                    </motion.h1>
                </motion.div>
                <motion.div 
                // initial={{opacity:0}}
                // animate={{opacity:1}}
                // transition={{duration:0.4, type:'tween'}}
                className="w-[80%] h-[70%] p-4 text-white text-2xl bg-green-800/70 rounded-2xl [-webkit-text-stroke:0.3px_green] outline-3 font-extralight shadow-2xl">
                    <motion.p animate={{opacity:[0,1]}}
                    transition={{duration:0.4, ease:'easeInOut'}} className="text-wrap">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </motion.p>
                </motion.div>
            </div>
        </motion.div>
    )
}