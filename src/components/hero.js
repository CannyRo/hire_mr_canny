import React from "react";
import {useTranslations} from 'next-intl';

export function Hero(){
    const t = useTranslations('home');

    return(
        <div className="container py-24 px-10">
            <h1 className="mb-4 text-3xl leading-10 tracking-wide font-black">{t('hero.tagline01')}&nbsp;{t('hero.tagline02')}</h1>
            <h2 className="text-xl">Parce que l&apos;alternance est un choix gagnant-gagnant, n&apos;hésitez plus à économiser votre argent, votre temps et votre énergie.</h2>
        </div>
    )
}