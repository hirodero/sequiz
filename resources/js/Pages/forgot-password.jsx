'use client'
import { Overlay } from "@/components/ui/overlay-skeleton";
import { Link, router, usePage } from "@inertiajs/react"
import { motion } from "framer-motion"
import { useState } from "react";
export default function ForgotPassword({}){
    const [reset,setReset] = useState(false);
    const replacement=reset?{
        heading:'Check your inbox!',
        text:<p>We've sent a password recovery link to [user@example.com].
            <p>
            The link will expire shortly, so please use it right away.
            </p>
        </p>,
        button:'Back to login'
    }:{
        heading:'Reset Password',
        text:`Enter the email address associated with your account and we'll send you a link to reset your password`,
        button:'Reset password'
    }
    return(
        <Overlay items={
            <div className="flex flex-col items-center h-[75%] w-[50%] outline-4 bg-green-950/80 rounded-2xl text-2xl">
                <div className="flex flex-col items-center justify-end h-[55%] w-full">
                    <div className="flex flex-col w-[80%] h-[80%] gap-5 p-[20px] pt-[15px] bg-black/80 outline-2 outline-white rounded-2xl">
                        <h1 className="text-4xl">
                            {replacement.heading}   
                        </h1>
                        <p>
                            {replacement.text}   
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center h-[20%] w-full">
                    {
                    !reset&&
                    <div className="flex w-[80%] h-[60%] gap-2 rounded-2xl outline-2 outline-white">
                        <h1 className="flex justify-center items-center w-[15%] outline-2 rounded-2xl">
                            email
                        </h1>
                        <p className="flex items-center w-[85%] px-[15px] rounded-2xl outline-white outline-2">Email</p>
                    </div>
                    }
                </div>
                <div className="flex flex-col items-center justify-center h-[25%] w-full">
                    <div
                    onClick={()=>{
                        reset?router.visit('/login'):setReset(!reset)
                    }}
                    className="group cursor-pointer flex bg-black/70 w-[80%] h-[60%] gap-5 justify-center items-center rounded-2xl outline-white outline-4">
                        <button
                        className="group-hover:opacity-45 cursor-pointer text-4xl justify-center items-center">
                            {replacement.button}
                        </button>
                    </div>
                </div>
            </div>
        }/>
    )
}