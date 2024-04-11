
import React from "react";
import {useTranslations} from 'next-intl';
import { TableContent } from '@/components/tableContent';

export function TableContainer(){

    const t = useTranslations('home');

    let rows = [];
    let indiceRows = 0;
    for(let i = 0; i<7 ; i++){
        indiceRows++;
        rows.push({
            key: `${indiceRows}`,
            prework: t(`session.row.${indiceRows}.prework`),
            bootcamp: t(`session.row.${indiceRows}.bootcamp`),
            practice: t(`session.row.${indiceRows}.practice`)
        })
    }
    const columns = [
        {
            key: "prework",
            label: t('session.col.1')
        },
        {
            key: "bootcamp",
            label: t('session.col.2')
        },
        {
            key: "practice",
            label: t('session.col.3')
        },
    ];
    const commentary = t('session.commentary');


    return(
        <TableContent rows={rows} columns={columns} commentary={commentary}/>
    )
}