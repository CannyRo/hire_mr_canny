import React from "react";
import {useTranslations} from 'next-intl';

export function Hero(){
    const t = useTranslations('home');

    return(
        <div className="container py-24 px-3">
            <h1 className="mb-4 text-3xl leading-10 font-black">{t('hero.tagline01')} {t('hero.tagline02')} <span>{t('hero.keyword01')}</span></h1>
            <h2>Parce ce que l&apos;alternance est un choix gagnant-gagnant, n&apos;hésitez plus à économiser votre argent, votre temps, votre énergie.</h2>
        </div>
    )
}