'use client';

import React from "react";
import {Select, SelectItem} from "@nextui-org/react";
import { useRouter, usePathname } from '@/navigation';
import { EarthIcon } from "./_earthIcon";

export function LanguageSelector( locale ) {
    const router = useRouter();
    const pathname = usePathname();
    const handleChange = e => {
        router.push(pathname, { locale: e.target.value });
    };
    const language = locale.locale.props.trim()
    // console.log("SWITHCER : ",locale);
    // console.log("SWITHCER language : ",language);
    return (
        <div className="flex flex-wrap w-32">
            <Select
                aria-label="Language"
                size="sm"
                className="max-w-xs"
                startContent={<EarthIcon/>}
                onChange={handleChange}
                defaultSelectedKeys={[language]}
            >
                <SelectItem key="en" value="en">
                    English
                </SelectItem>
                <SelectItem key="es" value="es">
                    Español
                </SelectItem>
                <SelectItem key="fr" value="fr">
                    Français
                </SelectItem>
            </Select>
        </div>
        
    );
}