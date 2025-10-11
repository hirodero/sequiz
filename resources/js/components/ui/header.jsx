'use client'
import { Link, usePage } from '@inertiajs/react'
const Profile = (props) => {
    return(
        <img className="object-contain cursor-pointer hover:opacity-75 hover:scale-98 transition duration-75 ease-in-out" src="/assets/profile.png"/>
    )
}
export default function Header({sidebar}){
    const {url} = usePage()
    const links = [
        {name:'Home',href:'/'},
        {name:'About',href:'/about'},
        {name:'Features',href:'/features'},
    ]
    return(
        <div className="w-screen h-[10%] shadow-2xl [shadow:_1px_1px_4_#000] fixed top-0 z-25">
            <div className="w-full h-full"
            style={{background:'#03045E'}}>
                <div className="flex ml-auto w-[30%] justify-center items-center h-full">
                    <div className="flex justify-evenly items-center text-2xl h-full w-[80%] text-white">
                        {
                            links.map((items,arr)=>{
                                const active = url === items.href
                                return(
                                    <div key={arr} 
                                    className={`cursor-pointer hover:opacity-75 hover:scale-98 transition duration-100 ease-in-out 
                                        ${active?'text-[#1e90ff]':'text-[#FFFFFF]'}`}
                                    >
                                        <Link href={items.href}>{items.name}</Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex justify-center items-center h-full w-[20%]">
                        <div className="flex justify-center items-center w-[65%] h-full">
                            <Profile/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}