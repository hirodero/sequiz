'use client'
import { Link, router, usePage } from "@inertiajs/react"
import { motion } from "framer-motion"
import { Overlay } from "./overlay-skeleton"
export default function Form(){
    const {url} = usePage()
    const setter = url==='/register'? {
        cols: ['Username','Gmail','Password','Re-enter password'],
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
        <Overlay items={
            <div className="flex flex-col items-center h-[75%] w-[50%] outline-4 bg-gradient-to-tr from-lime-900/80 to-lime-900/80 via-black/80 rounded-2xl text-2xl">
                <div className='flex flex-col items-center justify-center h-[20%] gap-5 bg-neutral-900/90 outline-2 w-full rounded-t-2xl'>
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
                            <Link href='/forgot-password' className="hover:opacity-75">Forgot Password?</Link>
                            {setter.link}
                        </div>
                    </div>
                </div>
                <div 
                onClick={()=>router.visit('/')}
                style={{height:setter.footerHeight}}
                className="group cursor-pointer flex flex-col text-4xl items-center justify-center gap-5 py-10 w-full bg-black outline-2 rounded-b-2xl">
                    <button className="group-hover:opacity-45 cursor-pointer text-4xl justify-center items-center">
                        Submit
                    </button>
                </div>
            </div>
        }/>
    )
}