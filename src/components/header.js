import React from "react";
import { Image, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import { LanguageSelector } from "./languageSelector";
import { ThemeSwitcher } from "./themeSwitcher";

export function Header(locale) {
    console.log(locale);
  return (
    <div className="w-full mx-auto bg-stone-200">
      <Navbar>
        <NavbarBrand>
            <Image 
                width={100}
                alt="Logo"
                src="/logo_light_skull_nude.svg"
            />
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <ThemeSwitcher/>
          </NavbarItem>
          <NavbarItem>
            <LanguageSelector locale={locale}/>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
