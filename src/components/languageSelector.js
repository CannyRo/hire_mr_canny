'use client';

import { useRouter, usePathname } from '@/navigation';

export function LanguageSelector( locale ) {
    const router = useRouter();
    const pathname = usePathname();
    const handleChange = e => {
        router.push(pathname, { locale: e.target.value });
    };
    // console.log(locale.props);
    return (
        <select value={locale.props} onChange={handleChange}>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
        </select>
    );
}