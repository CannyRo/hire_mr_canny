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
        console.log('WHERE : ');
        console.log(e.target.name);
        console.log('HIS INPUT VALUE : ');
        console.log(e.target.value);
        console.log('STATE VALUES : ');
        console.log(values);
        switch(e.target.name){
            case 'firstName' :
                console.log("Test firstName");
                if(values.firstName == "" || values.firstName == undefined || values.firstName == null){
                    setIsInvalid({
                        ...isInvalid,
                        firstName : true
                    });
                    console.log("firstName is INVALID");
                } else {
                    setIsInvalid({
                        ...isInvalid,
                        firstName : false
                    })
                }
                break;
            case 'lastName' : 
                console.log("Test lastName");
                if(values.lastName == "" || values.lastName == undefined || values.lastName == null){
                    setIsInvalid({
                        ...isInvalid,
                        lastName : true
                    });
                    console.log("lastName is INVALID");
                } else {
                    setIsInvalid({
                        ...isInvalid,
                        lastName : false
                    })
                }
                break;
            case 'message' : 
                console.log("Test message");
                if(values.message == "" || values.message == undefined || values.message == null){
                    setIsInvalid({
                        ...isInvalid,
                        message : true
                    });
                    console.log("message is INVALID");
                } else {
                    setIsInvalid({
                        ...isInvalid,
                        message : false
                    })
                }
                break;
            case 'email' : 
                console.log("Test email");
                if(values.email == "" || values.email == undefined || values.email == null || !emailRegex.test(values.email)){
                    setIsInvalid({
                        ...isInvalid,
                        email : true
                    });
                    console.log("message is INVALID");
                } else {
                    setIsInvalid({
                        ...isInvalid,
                        email : false
                    })
                }
                break;
            case 'company' :
                console.log("Test company");
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
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_KEY;

        console.log("Avant analyse : ");
        console.log(values);
        if(
            values.firstName == "" || 
            values.firstName == undefined || 
            values.firstName == null ||
            values.lastName == "" || 
            values.lastName == undefined || 
            values.lastName == null ||
            values.message == "" || 
            values.message == undefined || 
            values.message == null ||
            values.email == "" || 
            values.email == undefined || 
            values.email == null ||
            !emailRegex.test(values.email)
        ){
            console.log('THERE IS A PROBLEM HOUSTON')
        } else {
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
        <div className="container flex flex-col px-10 py-8">
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
            <Button color="secondary" variant="shadow" size="lg" className="w-full text-md" onClick={sendMessage}>
                {props.placeholderCta}
            </Button>
        </div>
    );
}
