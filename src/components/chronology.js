'use client';
import { usePathname } from 'next/navigation';
import { useTheme } from "next-themes";
import {Image} from "@nextui-org/react";
import { useEffect, useRef, useState } from 'react';

export function Chronology(locale){
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const themeRef = useRef(null);
    
    useEffect(()=>{
      if(themeRef.current === null){
        if(typeof window === "undefined"){
          themeRef.current = window.localStorage.getItem("theme");
        } else {
          themeRef.current = "dark";
        }
      }
      setMounted(true);
      if(theme !== 'dark' && theme  !== 'light'){
        setTheme(themeRef.current)
      }
    },[])

    let base = '/hire_mr_canny/version';
    // let base = '/version';
    let end = '.svg';
    let language = locale.props !== undefined ? locale.props : 'en';

    const chronologySource = `${base}_${theme}_${language}${end}`;
    if(!mounted)return null;

    return(
        <div className="container flex justify-center px-10 py-20 sm:px-0">
            <div className="flex flex-col w-full max-w-5xl sm:px-6">
                <Image
                width={1024}
                alt="Chronology"
                src={chronologySource}
                />
            </div>
        </div>
    )
}