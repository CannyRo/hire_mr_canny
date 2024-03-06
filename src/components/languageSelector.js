'use client';

import React from "react";
import {Select, SelectItem} from "@nextui-org/react";
import { useRouter, usePathname } from '@/navigation';

export function LanguageSelector( locale ) {
    const router = useRouter();
    const pathname = usePathname();
    const handleChange = e => {
        router.push(pathname, { locale: e.target.value });
    };
    // console.log(locale.props);
    return (
        <div className="flex flex-wrap w-32 mb-6">
            <Select
                aria-label="Language"
                size="sm"
                className="max-w-xs"
                onChange={handleChange}
                defaultSelectedKeys={[locale.props]}
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