
import React from "react";
import {useTranslations} from 'next-intl';
import {Link } from "@nextui-org/react";
import {OpcaModal} from "./opcaModal";


export function Footer(){
    const t = useTranslations('home');

    return(
        <div className="w-full py-4 px-2 sm:px-8 mx-auto">
            <h3>{t('footer.title')}</h3>
            <div className="flex flex-col justify-between items-start sm:flex-row sm:items-end">
                <div className="mt-4 flex">
                    <div className="me-4">
                        <p>{t('footer.phone.title')} :</p>
                        <p>{t('footer.email.title')} :</p>
                    </div>
                    <div className="blur-sm hover:blur-none focus:blur-none active:blur-none">
                        <p>{t('footer.phone.content')}</p>
                        <p>{t('footer.email.content')}</p>
                    </div>
                </div>
                <div className="mt-4">
                    <p>{t('footer.socials.github')}</p>
                    <p>{t('footer.socials.linkedin')}</p>
                    <p>{t('footer.socials.website')}</p>
                </div>
                <div className="mt-4 flex flex-col">
                    <Link isExternal href={t('footer.ironhack.link')}>{t('footer.ironhack.title')}</Link>
                    <OpcaModal detail={t('footer.opca')}/>
                </div>
            </div>
            <div className="mt-4 sm:text-center">
                <div>&#169; 2024 {t('footer.signatureintro')} 
                    <Link isExternal href="https://whatcannydev.com/">
                        {t('footer.signaturelink')}
                    </Link>.
                </div>
                
            </div>
        </div>
    )
}