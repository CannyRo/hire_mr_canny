'use client';
import React from "react";
import { Button } from "@nextui-org/react";

export function CtaButton(props){
    const scrollToForm = ()=> {
        const element = document.getElementById('i-say-yes');
        element.scrollIntoView({behavior : "smooth"});
    }
    return(
        <Button 
            onClick={scrollToForm}
            variant="shadow" size="lg" className="w-full h-auto text-wrap py-4 text-md font-semibold bg-sky-400">
            {props.tagline}
        </Button> 
    )
};