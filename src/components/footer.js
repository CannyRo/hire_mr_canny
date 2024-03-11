
import React from "react";
import {useTranslations} from 'next-intl';
import { Image, Link, Tooltip } from "@nextui-org/react";
import {OpcaModal} from "./opcaModal";
import { GithubIcon } from "./_githubIcon";


export function Footer(){
    const t = useTranslations('home');

    const modalContent = {
        1:{
            title: t('footer.modal.1.title'),
            subtitle: t('footer.modal.1.subtitle'),
            link: t('footer.modal.1.link')
        },
        2:{
            title: t('footer.modal.2.title'),
            subtitle: t('footer.modal.2.subtitle'),
            link: t('footer.modal.2.link')
        },
        3:{
            title: t('footer.modal.3.title'),
            subtitle: t('footer.modal.3.subtitle'),
            link: t('footer.modal.3.link')
        },
        4:{
            title: t('footer.modal.4.title'),
            subtitle: t('footer.modal.4.subtitle'),
            link: t('footer.modal.4.link')
        },
        5:{
            title: t('footer.modal.5.title'),
            subtitle: t('footer.modal.5.subtitle'),
            link: t('footer.modal.5.link')
        },
        6:{
            title: t('footer.modal.6.title'),
            subtitle: t('footer.modal.6.subtitle'),
            link: t('footer.modal.6.link')
        },
        7:{
            title: t('footer.modal.7.title'),
            subtitle: t('footer.modal.7.subtitle'),
            link: t('footer.modal.7.link')
        },
        8:{
            title: t('footer.modal.8.title'),
            subtitle: t('footer.modal.8.subtitle'),
            link: t('footer.modal.8.link')
        },
        9:{
            title: t('footer.modal.9.title'),
            subtitle: t('footer.modal.9.subtitle'),
            link: t('footer.modal.9.link')
        },
        10:{
            title: t('footer.modal.10.title'),
            subtitle: t('footer.modal.10.subtitle'),
            link: t('footer.modal.10.link')
        },
        11:{
            title: t('footer.modal.11.title'),
            subtitle: t('footer.modal.11.subtitle'),
            link: t('footer.modal.11.link')
        }
    }
    const contentArray = [
        {
            title: t('footer.modal.1.title'),
            subtitle: t('footer.modal.1.subtitle'),
            link: t('footer.modal.1.link')
        },
        {
            title: t('footer.modal.2.title'),
            subtitle: t('footer.modal.2.subtitle'),
            link: t('footer.modal.2.link')
        },
        {
            title: t('footer.modal.3.title'),
            subtitle: t('footer.modal.3.subtitle'),
            link: t('footer.modal.3.link')
        },
        {
            title: t('footer.modal.4.title'),
            subtitle: t('footer.modal.4.subtitle'),
            link: t('footer.modal.4.link')
        },
        {
            title: t('footer.modal.5.title'),
            subtitle: t('footer.modal.5.subtitle'),
            link: t('footer.modal.5.link')
        },
        {
            title: t('footer.modal.6.title'),
            subtitle: t('footer.modal.6.subtitle'),
            link: t('footer.modal.6.link')
        },
        {
            title: t('footer.modal.7.title'),
            subtitle: t('footer.modal.7.subtitle'),
            link: t('footer.modal.7.link')
        },
        {
            title: t('footer.modal.8.title'),
            subtitle: t('footer.modal.8.subtitle'),
            link: t('footer.modal.8.link')
        },
        {
            title: t('footer.modal.9.title'),
            subtitle: t('footer.modal.9.subtitle'),
            link: t('footer.modal.9.link')
        },
        {
            title: t('footer.modal.10.title'),
            subtitle: t('footer.modal.10.subtitle'),
            link: t('footer.modal.10.link')
        },
        {
            title: t('footer.modal.11.title'),
            subtitle: t('footer.modal.11.subtitle'),
            link: t('footer.modal.11.link')
        }
    ]
    return(
        <div className="w-full pt-12 pb-4 px-2 sm:px-8 mx-auto">
            <h3>{t('footer.title')}</h3>
            <div className="flex flex-col justify-between items-start sm:flex-row sm:items-end">
                <div className="mt-4 flex">
                    <div className="blur-sm hover:blur-none focus:blur-none active:blur-none">
                        <p>{t('footer.phone.content')}</p>
                        <p>{t('footer.email.content')}</p>
                    </div>
                </div>
                <div className="mt-12 flex justify-center w-full">
                    <Link isExternal href="https://github.com/CannyRo" className="mx-4">
                        <Image
                            className="dark:invert"
                            width={32}
                            alt="LinkedIn"
                            src="/icon_github.svg"
                            />
                    </Link>
                    <Link isExternal href="https://www.linkedin.com/in/ronan-canny-b29443277" className="mx-4">
                        <Image
                            className="dark:invert"
                            width={32}
                            alt="LinkedIn"
                            src="/icon_linkedin.svg"
                            />
                    </Link>
                    <Link isExternal href="https://whatcannydev.com/" className="mx-4">
                        <Image 
                            className="dark:invert"
                            width={32}
                            alt="website"
                            src="/icon_link.svg"
                            />
                    </Link>
                </div>
                <div className="mt-12 flex flex-col">
                    <Link isExternal href={t('footer.ironhack.link')} showAnchorIcon>{t('footer.ironhack.title')}</Link>
                    <OpcaModal detail={t('footer.opca')} modalTitle={t('footer.modalTitle')} modalContent={contentArray}/>
                </div>
            </div>
            <div className="mt-8 text-center">
                <div>&#169; 2024 {t('footer.signatureintro')} 
                    <Link isExternal href="https://whatcannydev.com/">
                        {t('footer.signaturelink')}
                    </Link>.
                </div>
            </div>
        </div>
    )
}