import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import {useTranslations} from 'next-intl';
  

export function Price() {
  const t = useTranslations('home');

  const prices = [1, 2, 3];
  return (
    <div className="container flex flex-col items-center pt-12">
      {prices.map((foo)=>{
        return(
          <Card className="w-5/6 mb-8" key={`card_${foo}`}>
            <CardHeader className="flex flex-col h-28 justify-between">
                <p className="w-full text-lg font-semibold">{t(`price.${foo}.title`)}</p>
                <p className="w-full text-xs">{t(`price.${foo}.subtitle`)}</p>
                <p className="w-full"><span className="text-xl tracking-wide font-bold">{t(`price.${foo}.price`)}</span>{t(`price.${foo}.period`)}</p>
            </CardHeader>
            <Divider />
            <CardBody className="h-60">
                <p className="text-lg">{t(`price.${foo}.detailTitle`)}</p>
                <ul className="">
                    <li className="flex justify-between items-end"><span>{t(`price.${foo}.detail.gross.title`)} :</span><span>{t(`price.${foo}.detail.gross.value`)}</span></li>
                    <li className="flex justify-between items-end"><span>{t(`price.${foo}.detail.contribution.title`)} :</span><span>{t(`price.${foo}.detail.contribution.value`)}</span></li>
                    <li className="flex justify-between items-end mb-2"><span>{t(`price.${foo}.detail.reduction.title`)} :</span><span>{t(`price.${foo}.detail.reduction.value`)}</span></li>
                    <li className="flex justify-between items-end"><span>{t(`price.${foo}.detail.cost.title`)} :</span><span>{t(`price.${foo}.detail.cost.value`)}</span></li>
                    <li className="flex justify-between items-end"><span>{t(`price.${foo}.detail.opco.title`)} :</span><span>{t(`price.${foo}.detail.opco.value`)}</span></li>
                    <li className="flex justify-between items-end"><span>{t(`price.${foo}.detail.franceTravail.title`)} :</span><span>{t(`price.${foo}.detail.franceTravail.value`)}</span></li>
                </ul>
            </CardBody>
            <Divider />
            <CardFooter className="h-20">
              {
                t(`price.${foo}.cta`) !== "" ? 
                <Button variant="shadow" size="lg" className="w-full text-md bg-sky-400">
                    {t(`price.${foo}.cta`)}
                </Button> : 
                <></>
              }
            </CardFooter>
          </Card>
        )
      })}
      <p className="px-10 text-xs mb-8">{t(`price.nb`)}</p>
    </div>
  );
}
