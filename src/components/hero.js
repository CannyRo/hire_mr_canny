import React from "react";
import {useTranslations} from 'next-intl';
import { CtaButton } from './ctaButton';

export function Hero(){
    const t = useTranslations('home');
    return(
        <div className="container flex justify-center px-10 py-20">
            <div className="flex flex-col items-center max-w-lg">
                <h1 className="pb-4 text-3xl leading-10 tracking-wide font-black">{t('hero.tagline')}</h1>
                <h2 className="pb-8 text-xl">{t('hero.subtitle')}</h2>
                <CtaButton tagline={t('hero.cta')}/>
            </div>
        </div>
        
    )
}