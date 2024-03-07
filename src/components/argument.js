import React from "react";
import {Divider} from "@nextui-org/react";

export function Argument(){

    return(
        <div className="container px-10 pt-8  pb-16">
            <div>
                <h3 className="mb-4 text-lg font-bold">Economisez de l&apos;argent</h3>
                <p className="mb-8">Entre la prise en charge de votre OPCO (Opérateur de Compétences), la participation de France Travail et les éxonérations fiscales applicables sur vos charges patronales ; économisez 21 000 €* pour une période de 12 mois par rapport à un contrat en CDD ou CDI avec un profil de développeur junior.</p>
            </div>
            <Divider className="my-4" />
            <div>
                <h3 className="mb-4 text-lg font-bold">Economisez du temps</h3>
                <p className="mb-8">L&apos;alternance permet d&apos;évaluer des compétences et l&apos;adaptabilité à la culture et aux procésus d&apos;entreprise d&apos;un candidat sur une période prolongée avant de s&apos;engager sur un CDI. Le risque d&apos;un mauvais recrutement est donc réduit, ce qui fait gagner du temps à votre entreprise. De plus, un candidat en reconversion professionnelle peut s&apos;appuyer sur des compétences transverses déjà acquises lors d&apos;expériences passées.</p>
            </div>
            <Divider className="my-4" />
            <div>
                <h3 className="mb-4 text-lg font-bold">Economisez de l&apos;énergie</h3>
                <p className="mb-8">La baisse du risque de recrutement évoquée auparavant entraîne également une économie d&apos;énergie de vos fonctions RH. En effet, vous avez moins besoins de rechercher et d&apos;intréguer de nouveaux collaborateurs puisque le contrat de professionnalisation vous offre une visibilité sur les 12 prochains moins. Et le + Ironhack, un format particuliers avec l&apos;ensemble des cours en continue sur 9 semaines pour laisser l&apos;alternant en entreprise 100% formé et 100% disponible en continu en entreprise de sa prise de poste jusqu&apos;à la fin du contrat. Vous n&apos;avez donc plus à vous soucier de sa disponibilité notamment pour vos sprints.</p>
            </div>
        </div>
    )
}