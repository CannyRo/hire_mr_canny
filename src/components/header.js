import React from "react";
import { Image, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import { LanguageSelector } from "./languageSelector";
import { ThemeSwitcher } from "./themeSwitcher";

export function Header(locale) {
  return (
      <Navbar position="sticky">
        <NavbarBrand>
            <Image 
                width={100}
                alt="Logo"
                src="/logo_skull_rounded_light.svg"
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
  );
}
