import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link
} from "@nextui-org/react";
import {useTranslations} from 'next-intl';
import { CtaButton } from './ctaButton';
  

export function Price() {
  const t = useTranslations('home');

  const prices = [1, 2, 3];
  return (
    <div className="container flex flex-col items-center px-10 py-20">
      <div className="w-full flex flex-col items-center max-w-lg md:flex-row md:flex-wrap md:max-w-5xl md:justify-around">
      {prices.map((foo)=>{
        return(
          <Card className="w-full mb-8 md:w-72" key={`card_${foo}`}>
            <CardHeader className="flex flex-col justify-between min-h-28 sm:min-h-24 md:min-h-28">
                <p className="w-full text-lg font-semibold">{t(`price.${foo}.title`)}</p>
                <p className="w-full text-xs">{t(`price.${foo}.subtitle`)}</p>
                <p className="w-full"><span className="text-xl tracking-wide font-bold">{t(`price.${foo}.price`)}</span>{t(`price.${foo}.period`)}</p>
            </CardHeader>
            <Divider />
            <CardBody className="min-h-80 sm:min-h-56 md:min-h-80">
                <p className="text-lg">{t(`price.${foo}.detailTitle`)}</p>
                <ul>
                    <li className="flex justify-between items-end"><span className="w-2/3">{t(`price.${foo}.detail.gross.title`)} </span><span className="ms-1">{t(`price.${foo}.detail.gross.value`)}</span></li>
                    <li className="flex justify-between items-end"><span className="w-2/3">{t(`price.${foo}.detail.contribution.title`)} </span><span className="ms-1">{t(`price.${foo}.detail.contribution.value`)}</span></li>
                    <li className="flex justify-between items-end mb-4"><span className="w-2/3">{t(`price.${foo}.detail.reduction.title`)} </span><span className="ms-1">{t(`price.${foo}.detail.reduction.value`)}</span></li>
                    <li className="flex justify-between items-end"><span className="w-2/3">{t(`price.${foo}.detail.cost.title`)} </span><span className="ms-1">{t(`price.${foo}.detail.cost.value`)}</span></li>
                    <li className="flex justify-between items-end"><span className="w-2/3">{t(`price.${foo}.detail.opco.title`)} </span><span className="ms-1">{t(`price.${foo}.detail.opco.value`)}</span></li>
                    <li className="flex justify-between items-end"><span className="w-2/3">{t(`price.${foo}.detail.franceTravail.title`)} </span><span className="ms-1">{t(`price.${foo}.detail.franceTravail.value`)}</span></li>
                </ul>
            </CardBody>
            <Divider />
            <CardFooter className="min-h-20 sm:min-h-20">
              {
                t(`price.${foo}.cta`) !== "" ? 
                <CtaButton tagline={t(`price.${foo}.cta`)}/> : 
                <></>
              }
            </CardFooter>
          </Card>
        )
      })}
    </div>
    <p className="text-xs mb-8">{t(`price.nb`)}</p>
    </div>
  );
}
