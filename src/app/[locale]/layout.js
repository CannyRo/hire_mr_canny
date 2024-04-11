import { Providers } from "@/providers";
import {unstable_setRequestLocale} from 'next-intl/server';
import { Montserrat } from "next/font/google";
import "../globals.css";


const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Why hire Mr Ronan CANNY ?",
  description: "Landing page to promote my-self and the work-study program with Ironhack France.",
};

const locales = ['en', 'es', 'fr'];
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params: {locale}
}) {
  unstable_setRequestLocale(locale); 
  return (
    <html lang={locale}>
      <body className={montserrat.className} props={locale}>
      <Providers>
        {children}
      </Providers>
      </body>
    </html>
  );
}
