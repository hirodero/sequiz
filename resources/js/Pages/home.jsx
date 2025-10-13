'use client'
import '../../css/app.css'; 
import { useState, useEffect } from 'react';
import Header from '../components/ui/header';
import { AnimatePresence, motion } from 'framer-motion';
import { Route } from 'lucide-react';
import { Link } from '@inertiajs/react'
import { router } from '@inertiajs/react';
import { useLayout } from "../Layouts/LayoutContext";
import Placeholder from '@/components/ui/placeholder';
import { Search, SignIn, LearnMore, PersonalComputer, Pencil, Book, Clock } from '../components/ui/attributes';
export default function Home() {
  const {setSharedValue} = useLayout()
    const [toDo,setToDo] = useState(false)
    const [clock,setClock] = useState(false)
    const [roles, setRole] = useState(false)
    const [switchPage, setSwitch] = useState(false)
    const role = roles?'user':'guest' 
    const size = {sizeAll:2, sizePencil:3};
    const navigate = ()=>{
      setSharedValue(true)
      setTimeout(()=>{
        setSharedValue(false)
        router.visit('/about')
      },1000)
      setSwitch(!switchPage)
    }
  return (
    <>
      <AnimatePresence>
    {

        !switchPage?(  
          <motion.div 
          key='home'
          animate={{translateX:0}}
          exit={{translateX:-1500}}
          transition={{duration:0.8, ease:'easeInOut'}}
          className="fixed inset-0 flex flex-col">
            <div className='min-h-full'>
              <div className='flex h-[10%] w-full'/> 
              <div className='flex flex-row w-[100%] h-[15%]'>
                <div className='flex justify-center items-center gap-10 w-[30%] h-full'>
                  <button
                  onClick={()=>setRole(!roles)}
                  className='cursor-pointer outline-green-600 ring-white ring-4 active:scale-90 active:opacity-100 duration-75 ease-in-out hover:opacity-70 bg-green-700/80 outline-2 w-[100px] text-white text-xl h-[50px] rounded-2xl'>
                    {role}
                  </button>       
                  <button
                  onClick={()=>navigate()}
                  className='cursor-pointer outline-green-600 ring-white ring-4 active:scale-90 active:opacity-100 duration-75 ease-in-out hover:opacity-70 bg-green-700/80 outline-2 w-[100px] text-white text-xl h-[50px] rounded-2xl'>
                    switch
                  </button>     
                </div>
                </div>
                <div className="flex justify-center items-center flex-col h-[75%] rounded-2xl text-8xl [-webkit-text-stroke:0.4px_white] [text-shadow:_4px_4px_0_#000] font-extralight text-white">
                  <motion.div 
                  initial={{
                    opacity:0, 
                    x:-100
                  }}
                  animate={{
                    opacity:1, 
                    x:0
                  }}
                  transition={{duration:1}}
                  className='flex flex-col justify-center items-center'>
                    <p>
                    Hello! 
                    </p>
                    <p>
                    Welcome to <span className='text-green-500 [text-shadow:_4px_4px_0_#fff]'>Sequiz!</span>
                    </p>
                  </motion.div>
                  <div className='flex flex-row w-full h-full'>
                    <div className='flex flex-col items-center w-[25%] h-full justify-baseline'>
                      <motion.div 
                      initial={{
                        scale:0, 
                        opacity:0
                      }}
                      animate={{
                        scale:1, 
                        opacity:1
                      }}
                      transition={{
                        duration:0.9, 
                        ease:'circOut',
                        type:'spring'
                      }}
                      className='flex flex-col w-[35%] h-full justify-center items-center'>
                        <Search/>
                      </motion.div>
                    </div>
                    <div className='flex justify-between w-[50%] pt-5'>
                      {
                        role!=='user'?(
                        <>
                          <motion.button 
                          initial={{
                            scale:0, 
                            opacity:0
                          }}
                          animate={{
                            scale:1, 
                            opacity:1
                          }}
                          transition={{
                            duration:0.9, 
                            ease:'circOut',
                            type:'spring'
                          }}
                          className='w-[300px] h-[100px]'>
                            <SignIn/>
                          </motion.button>
                          <motion.button 
                          initial={{
                            scale:0, 
                            opacity:0
                          }}
                          animate={{
                            scale:1, 
                            opacity:1
                          }}
                          transition={{
                            duration:0.9, 
                            ease:'easeInOut', 
                            type:'spring', 
                            delay:0.2
                          }}
                          className='w-[300px] h-[100px]'>
                              <Link href={'/about'}>
                                  <LearnMore/>
                              </Link>
                          </motion.button>
                        </>  
                        ):(
                          <>
                            <motion.div 
                            initial={{opacity:0,translateX:700}}
                            animate={{opacity:1,translateX:0}}
                            transition={{duration:1, ease:'easeOut'}}
                            className="flex flex-col w-[50%] items-center justify-baseline h-full gap-6">
                              <motion.div
                              initial={{opacity:0}}
                              animate={{opacity:1}}
                              transition={{
                                duration:0.4, 
                                ease:'easeInOut'
                              }}
                              onHoverStart={()=>setToDo(true)} 
                              onHoverEnd={()=>setToDo(false)}
                              className="flex justify-center items-center gap-x-3 pr-5 hover:opacity-75 cursor-pointer hover:scale-102 transition duration-500 ease-in-out w-[175px] h-[175px] bg-white/70 outline-4 outline-green-600 ring-8  rounded-full">
                                  <Pencil props={toDo} size={size.sizePencil} />
                                  <Book props={toDo} size={size.sizeAll}/>
                              </motion.div>
                              <p className="text-4xl">
                                  To-Do List 
                              </p>
                            </motion.div>
                            <motion.div 
                            initial={{opacity:0,translateX:-700}}
                            animate={{opacity:1,translateX:0}}
                            transition={{duration:1, ease:'easeOut',delay:0.1}}
                            className="flex flex-col w-[50%] items-center justify-baseline h-full gap-6">
                              <motion.div
                              initial={{opacity:0}}
                              animate={{opacity:1}}
                              transition={{
                                duration:0.4, 
                                ease:'easeInOut'
                              }}
                              onHoverStart={()=>setClock(true)} 
                              onHoverEnd={()=>setClock(false)}
                              className="flex justify-center items-center hover:opacity-75 cursor-pointer hover:scale-102 transition duration-500 ease-in-out w-[175px] h-[175px] bg-white/90 outline-4 outline-blue-600 ring-8 rounded-full">
                                  <Clock props={clock} size={size.sizeAll}/>
                              </motion.div>
                              <p className="text-4xl">
                                  Set Alarm
                              </p>
                          </motion.div>
                          </> 
                        )
                      }
                    </div>  
                    <div className='flex flex-row w-[25%] h-full justify-center'>
                      <motion.div 
                      initial={{
                        scale:0, 
                        opacity:0
                      }}
                      animate={{
                        scale:1, 
                        opacity:1
                      }}
                      transition={{
                        duration:0.9, 
                        ease:'circOut',
                        type:'spring'
                      }}
                      className='w-[180px] h-[170px]'>
                        <PersonalComputer/>
                      </motion.div>
                    </div>
                </div>
              </div>
            </div>
          </motion.div>
        ):(
          <motion.div 
          key='placeholder'
        initial={{translateX:1600}}
        animate={{translateX:0}}
        transition={{duration:1, ease:'easeInOut', type:'tween'}}
        className="fixed inset-0 flex flex-col h-dvh ">
          <Placeholder/>
        </motion.div>
        )
      }
      </AnimatePresence>
    </>
  );
}
