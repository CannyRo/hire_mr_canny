import React from "react";
import { Image, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import { LanguageSelector } from "./languageSelector";
import { ThemeSwitcher } from "./themeSwitcher";

export function Header(locale) {
  return (
      <Navbar position="sticky" className="sm:px-none">
        <NavbarBrand className="sm:px-0">
            <Image 
                width={100}
                alt="Logo"
                src="/hire_mr_canny/logo_skull_rounded_light.svg"
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
