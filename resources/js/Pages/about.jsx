export default function About(){
    return(
        <div className="flex flex-col h-dvh backdrop-blur-xs">
            <div className="w-full h-[10%] shadow-2xl"/>
            <div className="flex flex-col items-center justify-center w-full h-[100%]">
                <div className="flex flex-col justify-end w-[80%] h-[10%] p-4 text-6xl text-white [-webkit-text-stroke:0.4px_black] [text-shadow:_4px_4px_0_#000]">
                    <p>
                        About Tracklin
                    </p>
                </div>
                <div className="w-[80%] h-[70%] p-4 text-black text-2xl bg-white/80 rounded-2xl [-webkit-text-stroke:1px_black] outline-3 shadow-2xl">
                    <p className="text-wrap">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    )
}