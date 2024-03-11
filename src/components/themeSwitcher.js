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
      color="default"
      thumbIcon={({ isSelected, className }) =>
          isSelected ? (
          <SunIcon className={className} />
          ) : (
          <MoonIcon className={className} />
          )
      }
      onChange={handleTheme}
      isSelected={theme == 'light' ? true : false}
      >
    </Switch>
  );
}
