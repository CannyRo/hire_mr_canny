import React from "react";
import {Divider} from "@nextui-org/react";
import {useTranslations} from 'next-intl';

export function Argument(){
    const t = useTranslations('home');

    return(
        <div className="container flex justify-center px-10 py-20">
            <div className="flex flex-col items-center max-w-lg">
                <div className="w-full">
                    <h3 className="mb-4 text-lg font-bold">{t('arguments.1.title')}</h3>
                    <p className="mb-8">{t('arguments.1.content')}</p>
                </div>
                <Divider className="my-8"/>
                <div className="w-full">
                    <h3 className="mb-4 text-lg font-bold">{t('arguments.2.title')}</h3>
                    <p className="mb-8">{t('arguments.2.content')}</p>
                </div>
                <Divider className="my-8"/>
                <div className="w-full">
                    <h3 className="mb-4 text-lg font-bold">{t('arguments.3.title')}</h3>
                    <p className="mb-8">{t('arguments.3.content')}</p>
                </div>
            </div>
        </div>
    )
}