'use client';
import React from "react";
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "./_moonIcon";
import {SunIcon} from "./_sunIcon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  let initialTheme = window.localStorage.getItem("theme") || "dark";
  useEffect(() => {
    setMounted(true);
    if(theme !== 'dark' && theme  !== 'light'){
      setTheme(initialTheme)
    }
  }, []);

  const handleTheme = event => {
    event.target.checked ? setTheme("light") : setTheme("dark");
  }

  if(!mounted)return null;

  return (
    <Switch
      defaultSelected
      size="lg"
      color="purple-100"
      thumbIcon={({ isSelected, className }) =>
          isSelected ? (
          <SunIcon className={`${className} text-sky-950`} />
          ) : (
          <MoonIcon className={`${className} text-sky-950`} />
          )
      }
      onChange={handleTheme}
      isSelected={theme == 'light' ? true : false}
      >
    </Switch>
  );
}

// px-1 relative inline-flex items-center justify-start flex-shrink-0 overflow-hidden bg-default-200 rounded-full outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background group-data-[selected=true]:bg-default-400 group-data-[selected=true]:text-default-foreground w-14 h-8 mr-2 transition-background
// bg-default-200 group-data-[selected=true]:bg-default-400 