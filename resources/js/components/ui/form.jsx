'use client'
import { Link, router, usePage } from "@inertiajs/react"
import { motion } from "framer-motion"
// import { ProfileIcon } from "@/attributes"
export default function Form({}){
    const {url} = usePage()
    const setter = url==='/register'? {
        cols: ['Username','Gmail','Password','Password2'],
        gap: 15,
        bodyHeight: '65%',
        footerHeight: '15%',
        link: <Link href='/login' className="hover:opacity-75">Login</Link>


    }:{
        cols: ['Username','Password'],
        gap: 35,
        bodyHeight: '65%',
        footerHeight: '15%',
        link: <Link href='/register' className="hover:opacity-75">Register</Link>

    }
    return(
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        className="flex fixed inset-0 text-white [-webkit-text-stroke:0.4px_black] [text-shadow:_4px_4px_0_#000] justify-center items-center backdrop-blur-xs backdrop-brightness-120">
            <div className="flex flex-col items-center h-[75%] w-[50%] outline-4 bg-green-950/80 rounded-2xl text-2xl">
                <div className='flex flex-col items-center justify-center h-[20%] gap-5 bg-neutral-900/40 outline-2 w-full rounded-t-2xl'>
                    <h1 className="text-5xl">
                        {url.slice(1,url.length).toUpperCase()}
                    </h1>
                </div>
                <div 
                style={{height:setter.bodyHeight}}
                className='flex flex-col items-center justify-center gap-5 w-full '>
                    <div 
                    style={{gap:setter.gap}}
                    className="flex flex-col w-[75%] justify-center items-center ">
                        {setter.cols.map((items,index)=>{
                            return(
                            <div className='flex flex-col justify-center w-full px-[15px] min-h-[50px] outline-2 rounded-4xl'>
                                {items}
                            </div>
                            )
                        })
                        }
                        <div className="flex justify-between items-center gap-5 h-[10%] w-full ">
                            <p className="hover:opacity-70 cursor-pointer">
                                Forgot Password?
                            </p>
                            {setter.link}
                        </div>
                    </div>
                </div>
                <div 
                onClick={()=>router.visit('/')}
                style={{height:setter.footerHeight}}
                className="flex flex-col cursor-pointer hover:opacity-70 text-4xl items-center justify-center gap-5 py-10 w-full bg-black outline-2 rounded-b-2xl">
                    Submit
                </div>
            </div>
        </motion.div>
    )
}