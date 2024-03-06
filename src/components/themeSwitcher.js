"use client";
import React from "react";
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "./_moonIcon";
import {SunIcon} from "./_sunIcon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTheme = event => {
    event.target.checked ? setTheme("dark") : setTheme("light");
  }

  if(!mounted)return null;

  return (
    <Switch
      defaultSelected
      size="lg"
      color="secondary"
      thumbIcon={({ isSelected, className }) =>
          isSelected ? (
          <SunIcon className={className} />
          ) : (
          <MoonIcon className={className} />
          )
      }
      onChange={handleTheme}
      >
    </Switch>
  );
}
