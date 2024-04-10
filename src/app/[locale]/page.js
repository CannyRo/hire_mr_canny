import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Argument } from "@/components/argument";
import { Price } from "@/components/price";
import { About } from "@/components/about";
import { Form } from "@/components/form";
import { Footer } from "@/components/footer";
import { Chronology } from '@/components/chronology';



export default function Home({props, params: {locale}}) {
  // console.log("props =>", props)
  unstable_setRequestLocale(locale);
  const t = useTranslations('home');
  const languageValue = locale ;
  return (
    <main className="flex min-h-screen flex-col items-center bg_gradient_perso">
      <Header props={languageValue}/>
      <Hero/>
      <Argument/>
      <Chronology props={languageValue}/>
      <Price/>
      <About/>
      <Form 
        placeholderCompany={t('form.company')} 
        placeholderTextarea={t('form.message')} 
        placeholderCta={t('form.cta')}/>
      <Footer/>
    </main>
  );
}
