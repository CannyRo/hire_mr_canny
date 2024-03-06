import React from "react";
import {useTranslations} from 'next-intl';
import { Unica_One } from "next/font/google";

const unica = Unica_One({weight: "400", subsets: ["latin"] });

export function Hero(){
    const t = useTranslations('home');

    return(
        <div className="container mx-auto bg-orange-200">
            {/* <h1 className={`${unica.className} text-3xl`}>{t('hero.tagline01')}</h1> */}
            <h1 className="text-2xl font-bold px-4">{t('hero.tagline01')} {t('hero.tagline02')} <span>{t('hero.keyword01')}</span></h1>
        </div>
    )
}