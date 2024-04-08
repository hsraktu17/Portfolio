'use client'

import { useEffect, useState } from "react"
import { FaMoon, FaSun } from "react-icons/fa"

export default function ThemeSwitch(){
    const [darkMode, setDarkmode] = useState(true)

    useEffect(()=>{
        const theme = localStorage.getItem("theme")
        if(theme === 'dark'){
            setDarkmode(true)
        }
    },[])

    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme','dark')
        }else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme','light')
        }
    },[darkMode])


    return<div 
    className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
    onClick={()=>setDarkmode(!darkMode)}
    >
        {darkMode === true ? <FaSun/> : <FaMoon/>}
    </div>
}