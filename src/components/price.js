import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";

export function Price() {
  return (
    <div className="container flex flex-col items-center pt-12">
      <Card className="w-5/6 mb-8">
        <CardHeader className="flex flex-col h-28 justify-between">
            <p className="w-full text-lg font-semibold">Contrat de professionnalisation</p>
            <p className="w-full"><span className="text-xl tracking-wide font-bold">23 450 €</span> / an</p>
        </CardHeader>
        <Divider />
        <CardBody className="h-60">
            <p className="text-lg">Détail</p>
            <ul className="">
                <li className="flex justify-between items-end"><span>Salaire Brut :</span><span>21&nbsp;200&nbsp;€</span></li>
                <li className="flex justify-between items-end"><span>Cotisations patronales :</span><span>8&nbsp;900&nbsp;€</span></li>
                <li className="flex justify-between items-end mb-2"><span>Réduction :</span><span>-&nbsp;7&nbsp;500&nbsp;€</span></li>
                <li className="flex justify-between items-end"><span>Frais pédagogiques :</span><span>9 000 €</span></li>
                <li className="flex justify-between items-end"><span>Prise en charge OPCO :</span><span>- 6 150 €</span></li>
                <li className="flex justify-between items-end"><span>Prise en charge France&nbsp;Travail :</span><span>-&nbsp;2&nbsp;000&nbsp;€</span></li>
            </ul>
        </CardBody>
        <Divider />
        <CardFooter className="h-20">
            <Button color="secondary" variant="shadow" size="lg" className="w-full text-md">
                Je signe
            </Button>
        </CardFooter>
      </Card>
      <Card className="w-5/6 mb-8">
        <CardHeader className="flex flex-col justify-between h-28">
            <p className="w-full text-lg font-semibold">CDD / CDI (junior)</p>
            <p className="w-full"><span className="text-xl tracking-wide font-bold">44 570 €</span> / an</p>
        </CardHeader>
        <Divider />
        <CardBody className="h-60">
            <p className="text-lg">Détail</p>
            <ul className="">
                <li className="flex justify-between items-end"><span>Salaire Brut :</span><span>31&nbsp;390&nbsp;€</span></li>
                <li className="flex justify-between items-end"><span>Cotisations patronales :</span><span>13&nbsp;180&nbsp;€</span></li>
                <li className="flex justify-between items-end mb-2"><span>Réduction :</span><span>x</span></li>
                <li className="flex justify-between items-end"><span>Frais pédagogiques :</span><span>x</span></li>
                <li className="flex justify-between items-end"><span>Prise en charge OPCO :</span><span>x</span></li>
                <li className="flex justify-between items-end"><span>Prise en charge France&nbsp;Travail :</span><span>x</span></li>
            </ul>
        </CardBody>
        <Divider />
        <CardFooter className="h-20">
            
        </CardFooter>
      </Card>
      <Card className="w-5/6 mb-8">
        <CardHeader className="flex flex-col justify-between h-28">
            <p className="w-full text-lg font-semibold">Freelance</p>
            <p className="w-full text-xs">Equivalent annuel sur la base d&apos;un TJM à 350 € pour un profil junior.</p>
            <p className="w-full"><span className="text-xl tracking-wide font-bold">79 450 €</span> / an</p>
        </CardHeader>
        <Divider />
        <CardBody className="h-60">
            <p className="text-lg">Détail</p>
            <ul className="">
                <li className="flex justify-between items-end"><span>Honoraires TTC :</span><span>79&nbsp;450&nbsp;€</span></li>
                <li className="flex justify-between items-end"><span>Cotisations patronales :</span><span>x</span></li>
                <li className="flex justify-between items-end mb-2"><span>Réduction :</span><span>x</span></li>
                <li className="flex justify-between items-end"><span>Frais pédagogiques :</span><span>x</span></li>
                <li className="flex justify-between items-end"><span>Prise en charge OPCO :</span><span>x</span></li>
                <li className="flex justify-between items-end"><span>Prise en charge France&nbsp;Travail :</span><span>x</span></li>
            </ul>
        </CardBody>
        <Divider />
        <CardFooter className="h-20">
            
        </CardFooter>
      </Card>
      <p className="px-10 text-xs mb-8">*Chiffres non-contractuels, calculés sur la base des informations disponibles en ligne et notamment sur ironhack.com, talent.com, alternance-professionnelle.fr et urssaf.fr.</p>
    </div>
  );
}
