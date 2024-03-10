import React from "react";
import {Divider} from "@nextui-org/react";
import {useTranslations} from 'next-intl';

export function Argument(){
    const t = useTranslations('home');

    return(
        <div className="container px-10 pt-8  pb-16">
            <div>
                <h3 className="mb-4 text-lg font-bold">{t('arguments.1.title')}</h3>
                <p className="mb-8">{t('arguments.1.content')}</p>
            </div>
            <Divider className="my-4" />
            <div>
                <h3 className="mb-4 text-lg font-bold">{t('arguments.2.title')}</h3>
                <p className="mb-8">{t('arguments.2.content')}</p>
            </div>
            <Divider className="my-4" />
            <div>
                <h3 className="mb-4 text-lg font-bold">{t('arguments.3.title')}</h3>
                <p className="mb-8">{t('arguments.3.content')}</p>
            </div>
        </div>
    )
}