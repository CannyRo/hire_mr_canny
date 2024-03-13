'use client';

import { React, useState } from "react";
import {Button, Input, Textarea} from "@nextui-org/react";
import emailjs from '@emailjs/browser'; 


export function Form(props) {

    const [values, setValues] = useState({
        firstName : "",
        lastName : "",
        company : "",
        email : "",
        message : "",
    });

    const [isInvalid, setIsInvalid] = useState({
        firstName : false,
        lastName : false,
        company : false,
        email : false,
        message : false,
    })

    const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);

    function handleFirstName(e){
        setValues({
            ...values,
            firstName: e.target.value
        });
    }
    function handleLastName(e){
        setValues({
            ...values,
            lastName: e.target.value
        });
    }
    function handleCompany(e){
        setValues({
            ...values,
            company: e.target.value
        });
    }
    function handleEmail(e){
        setValues({
            ...values,
            email: e.target.value
        });
    }
    function handleMessage(e){
        setValues({
            ...values,
            message: e.target.value
        })
    }
    function isValid(e){
        switch(e.target.name){
            case 'firstName' :
                if(values.firstName == "" || values.firstName == undefined || values.firstName == null){
                    setIsInvalid({
                        ...isInvalid,
                        firstName : true
                    });
                } else {
                    setIsInvalid({
                        ...isInvalid,
                        firstName : false
                    })
                }
                break;
            case 'lastName' : 
                if(values.lastName == "" || values.lastName == undefined || values.lastName == null){
                    setIsInvalid({
                        ...isInvalid,
                        lastName : true
                    });
                } else {
                    setIsInvalid({
                        ...isInvalid,
                        lastName : false
                    })
                }
                break;
            case 'message' : 
                if(values.message == "" || values.message == undefined || values.message == null){
                    setIsInvalid({
                        ...isInvalid,
                        message : true
                    });
                } else {
                    setIsInvalid({
                        ...isInvalid,
                        message : false
                    })
                }
                break;
            case 'email' : 
                if(values.email == "" || values.email == undefined || values.email == null || !emailRegex.test(values.email)){
                    setIsInvalid({
                        ...isInvalid,
                        email : true
                    });
                } else {
                    setIsInvalid({
                        ...isInvalid,
                        email : false
                    })
                }
                break;
            case 'company' :
                break;
            default :
                setIsInvalid({
                    firstName : false,
                    lastName : false,
                    company : false,
                    email : false,
                    message : false,
                })
        }
    }
    function sendMessage(){
        const serviceId = "service_hpcx3tc";
        const templateId = "template_y3s86hx";
        const publicKey = "A_xbFY5pWwm0qIf0W";
        if(
            values.firstName !== "" && 
            values.firstName !== undefined && 
            values.firstName !== null &&
            values.lastName !== "" && 
            values.lastName !== undefined && 
            values.lastName !== null &&
            values.message !== "" && 
            values.message !== undefined && 
            values.message !== null &&
            values.email !== "" && 
            values.email !== undefined && 
            values.email !== null &&
            emailRegex.test(values.email)
        ){
            setIsInvalid({
                firstName : false,
                lastName : false,
                company : false,
                email : false,
                message : false,
            })

            const templateParams = {
                from_name : `${values.firstName} ${values.lastName}`,
                from_company : values.company,
                from_email : values.email,
                message : values.message,
                to_name : 'Ronan',
            };

            emailjs.send(serviceId, templateId, templateParams, publicKey)
                .then((response)=>{
                    console.log('Email sent successfully!!!', response);
                    setValues({
                        firstName : "",
                        lastName : "",
                        company : "",
                        email : "",
                        message : "",
                    })
                    
                })
                .catch((error)=>{
                        console.error('Error sending email : ', error);
                    });
        }
    }

    return (
        <div id="i-say-yes" className="container flex justify-center px-10 py-20 ">
            <div className="flex flex-col items-center w-full max-w-lg">
                <Input name="firstName" type="text" label="John" className="mb-4" isRequired value={values.firstName} onChange={handleFirstName} onBlur={isValid} isInvalid={isInvalid.firstName}/>
                <Input name="lastName" type="text" label="DOE" className="mb-4" isRequired value={values.lastName} onChange={handleLastName} onBlur={isValid} isInvalid={isInvalid.lastName}/>
                <Input name="company" type="text" label={props.placeholderCompany} className="mb-4" value={values.company} onChange={handleCompany} onBlur={isValid}/>
                <Input name="email" type="email" label="john.doe@email.com" className="mb-4" isRequired value={values.email} onChange={handleEmail} onBlur={isValid} isInvalid={isInvalid.email}/>
                <Textarea
                    name="message"
                    variant="default"
                    placeholder={props.placeholderTextarea}
                    value={values.message}
                    onChange={handleMessage}
                    className="mb-4"
                    isRequired
                    onBlur={isValid}
                    isInvalid={isInvalid.message}
                />
                <Button variant="shadow" size="lg" className="w-full text-md bg-sky-400" onClick={sendMessage}>
                    {props.placeholderCta}
                </Button>
            </div>
        </div>
    );
}
