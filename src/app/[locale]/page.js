import {useTranslations} from 'next-intl';
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Argument } from "@/components/argument";
import { Price } from "@/components/price";
import { About } from "@/components/about";
import { Form } from "@/components/form";
import { Footer } from "@/components/footer";



export default function Home({params: {locale}}) {
  const t = useTranslations('home');
  const languageValue = locale ;
  return (
    <main className="flex min-h-screen flex-col items-center bg_gradient_perso">
      <Header props={languageValue}/>
      <Hero/>
      <Argument/>
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
