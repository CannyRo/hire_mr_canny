import React from "react";
import {useTranslations} from 'next-intl';
import { Image } from "@nextui-org/react";


export function About(){
    const t = useTranslations('home');

    return(
        <div className="container flex flex-col items-center">
            <Image
                src="/avatar.svg"
                alt="avatar"
                width={200}
                isBlurred
                className="mb-8"
            />
            <div className="flex flex-col px-10">
                <p className="mb-8">{t('about.resume.1')}</p>
                <p className="mb-8">{t('about.resume.2')}</p>
                <p className="mb-8">{t('about.resume.3')}</p>
            </div>
        </div>
    )
}