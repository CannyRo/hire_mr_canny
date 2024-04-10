
import React from "react";
import {useTranslations} from 'next-intl';
import { Image, Link, Tooltip } from "@nextui-org/react";
import {OpcaModal} from "./opcaModal";
import { GithubIcon } from "./_githubIcon";
import { LinkedinIcon } from "./_linkedinIcon";
import { OtherIcon } from "./_otherIcon";


export function Footer(){
    const t = useTranslations('home');

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
        <div className="container flex justify-center px-10 pt-20 sm:px-0">
            <div className="flex flex-col w-full max-w-5xl sm:px-6">
                <h3>{t('footer.title')}</h3>
                <div className="w-full justify-between md:flex md:items-start">
                    <div className="pt-4 flex">
                        <div className="blur-sm hover:blur-none focus:blur-none active:blur-none">
                            <p>{t('footer.phone.content')}</p>
                            <p>{t('footer.email.content')}</p>
                        </div>
                    </div>
                    <div className="justify-between sm:flex md:grow md:pt-4">
                        <div className="mt-12 flex flex-col md:grow md:items-center md:mt-0">
                            <Link isExternal href={t('footer.ironhack.link')} showAnchorIcon className="font-semibold">{t('footer.ironhack.title')}</Link>
                            <OpcaModal detail={t('footer.opca')} modalTitle={t('footer.modalTitle')} modalContent={contentArray}/>
                        </div>
                        <div className="mt-12 flex justify-center w-full sm:w-auto md:mt-0">
                            <Link isExternal href="https://github.com/CannyRo" className="mx-4">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    height="2em"
                                    role="presentation"
                                    viewBox="0 0 24 24"
                                    width="2em"
                                >
                                    <path d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" fill="currentColor"/>
                                </svg>
                            </Link>
                            <Link isExternal href="https://www.linkedin.com/in/ronan-canny-b29443277" className="mx-4">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    height="2em"
                                    role="presentation"
                                    viewBox="0 0 24 24"
                                    width="2em"
                                >
                                    <circle cx="4.983" cy="5.009" r="2.188" fill="currentColor"/>
                                    <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" fill="currentColor"/>
                                </svg>
                            </Link>
                            <Link isExternal href="https://whatcannydev.com/" className="mx-4">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    height="2em"
                                    role="presentation"
                                    viewBox="0 0 24 24"
                                    width="2em"
                                >
                                    <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z" fill="currentColor"></path><path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z" fill="currentColor"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            
                <div className="mt-8 text-center">
                    <div>&#169; 2024 {t('footer.signatureintro')} 
                        <Link isExternal href="https://whatcannydev.com/" className=" font-semibold">
                            {t('footer.signaturelink')}
                        </Link>.
                    </div>
                </div>
            </div>
        </div>
    )
}