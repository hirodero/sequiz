'use client'
import { motion } from "framer-motion"
import { ProfileIcon } from "./attributes"
export default function Profile({profile, setProfile}){
    return(
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        className="flex fixed inset-0 text-white [-webkit-text-stroke:0.4px_black] [text-shadow:_4px_4px_0_#000] justify-center items-center backdrop-blur-xs backdrop-brightness-120">
            <div className="flex h-[80%] w-[80%] outline-4 bg-green-950/80 rounded-2xl">
                <div className="flex flex-col justify-center items-center w-[40%] h-full">
                    <ProfileIcon/>
                </div>
                <div className="flex flex-col w-[60%] h-full bg-green-800/80 rounded-2xl">
                    <div className="flex flex-col items-end bg-neutral-900/80 outline-2 rounded-bl-2xl rounded-tr-2xl w-full h-[20%]">
                        <div className="flex flex-col justify-center items-center outline-2 bg-green-950/70 w-[20%] h-[50%] rounded-bl-2xl rounded-tr-2xl">
                            <button className="hover:opacity-75 items-center cursor-pointer text-2xl flex px-2 gap-5 w-full">
                                <span className="text-3xl">
                                    {`<`}
                                </span>
                                <span className="text-4xl">
                                    Back
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full p-[2%] h-[55%]">
                        <div className="flex flex-col w-full h-[80%] bg-neutral-900/80 items-baseline justify-baseline rounded-2xl p-10">
                            <p className="text-5xl text-wrap">Ichiro Dexther Rewah</p>
                            <p className="text-3xl">1000 Pts</p>
                            <p className="text-3xl">Top 10 player</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center outline-2 rounded-tl-2xl rounded-br-2xl w-full h-[25%] bg-neutral-900">
                        <p className="text-6xl text-wrap">Sequiz</p>
                    </div>

                </div>
            </div>
        </motion.div>
    )
}