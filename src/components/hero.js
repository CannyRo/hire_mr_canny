import React from "react";
import {useTranslations} from 'next-intl';
import { Button, Link } from "@nextui-org/react";

export function Hero(){
    const t = useTranslations('home');

    

    return(
        <div className="container flex justify-center px-10 py-20">
            <div className="flex flex-col items-center max-w-lg">
                <h1 className="pb-4 text-3xl leading-10 tracking-wide font-black">{t('hero.tagline')}</h1>
                <h2 className="pb-8 text-xl">{t('hero.subtitle')}</h2>
                <Button 
                    href="#i-say-yes" as={Link}
                    variant="shadow" size="lg" className="w-full h-auto text-wrap py-4 text-md font-semibold bg-sky-400">
                    {t('hero.cta')}
                </Button> 
            </div>
        </div>
        
    )
}