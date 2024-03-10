import React from "react";
import {useTranslations} from 'next-intl';
import { Button } from "@nextui-org/react";

export function Hero(){
    const t = useTranslations('home');

    return(
        <div className="container py-24 px-10">
            <h1 className="mb-4 text-3xl leading-10 tracking-wide font-black">{t('hero.tagline')}</h1>
            <h2 className="mb-12 text-xl">{t('hero.subtitle')}</h2>
            <Button color="secondary" variant="shadow" size="lg" className="w-full text-md">
                {t('hero.cta')}
            </Button> 
        </div>
    )
}