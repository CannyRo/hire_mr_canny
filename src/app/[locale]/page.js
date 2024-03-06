import Image from "next/image";
import {Button} from '@nextui-org/button'; 
import {ThemeSwitcher} from "@/components/themeSwitcher";
import {LanguageSelector } from "@/components/languageSelector";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Argument } from "@/components/argument";
import { Price } from "@/components/price";
import { Testimonial } from "@/components/testimonial";
import { Footer } from "@/components/footer";
import {useTranslations} from 'next-intl';

export default function Home({params: {locale}}) {
  const t = useTranslations('home');
  console.log("Local in Page : ", locale);
  const languageValue = locale ;
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header props={languageValue}/>
      <Hero/>
      <Argument/>
      <Price/>
      <Testimonial/>
      <Footer/>
    </main>
  );
}
