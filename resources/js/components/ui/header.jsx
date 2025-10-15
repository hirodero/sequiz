'use client'
import { Link, usePage } from '@inertiajs/react'
import { useState } from 'react'
import { ProfileIcon } from './attributes'
import Profile from './profile'
import { AnimatePresence } from 'framer-motion'
export default function Header({sidebar}){
    const {url} = usePage()
    const [profile, setProfile] = useState(false)
    const links = [
        {name:'Home',href:'/'},
        {name:'About',href:'/about'},
    ]
    return(
        <div className="w-screen h-[10%] shadow-2xl [shadow:_1px_1px_4_#000] fixed top-0 z-50">
            <div className="w-full h-full"
            style={{background:'#123524'}}>
                <div className="flex ml-auto w-[20%] justify-center items-center h-full">
                    <div className="flex justify-evenly items-center text-2xl h-full w-[65%] text-white">
                        {
                            links.map((items,arr)=>{
                                const active = url === items.href
                                return(
                                    <div key={arr} 
                                    className={`cursor-pointer hover:opacity-75 hover:scale-98 transition duration-100 ease-in-out 
                                        ${active?'text-[#00a550]':'text-[#FFFFFF]'}`}>
                                        <Link href={items.href}>{items.name}</Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex justify-center items-center h-full w-[35%] z-50">
                        <div className="flex justify-center items-center w-[65%] h-full">
                            <button 
                            onClick={()=>setProfile(!profile)}
                            className='flex flex-col justify-center items-center w-full h-full'>
                                <ProfileIcon/>
                                <AnimatePresence>
                                    {
                                        profile&&(
                                            <Profile profile={profile} setProfile={setProfile} />
                                        )
                                    }
                                </AnimatePresence>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}