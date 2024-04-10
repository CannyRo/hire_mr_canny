import React from "react";
import {useTranslations} from 'next-intl';
import { Image } from "@nextui-org/react";


export function About(){
    const t = useTranslations('home');

    return(
        <div className="container flex justify-center px-10 py-20">
            <div className="flex flex-col items-center max-w-lg">
                {/* <Image
                    src="/hire_mr_canny/avatar_img_wcd.png"
                    alt="avatar"
                    width={300}
                    isBlurred
                    className="mb-8"
                /> */}
                <Image
                    src="/avatar_img_wcd.png"
                    alt="avatar"
                    width={300}
                    isBlurred
                    className="mb-8"
                />
                <div className="flex flex-col">
                    <p className="mb-8">{t('about.resume.1')}</p>
                    <p className="mb-8">{t('about.resume.2')}</p>
                    <p className="mb-8">{t('about.resume.3')}</p>
                </div>
            </div>
        </div>
    )
}