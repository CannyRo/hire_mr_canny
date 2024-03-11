'use client';
import React from "react";
import {
  Link,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export function OpcaModal(props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  console.log(props);

  const modalContent=props.modalContent;
  return (
    <>
      <Link onPress={onOpen}>{props.detail}</Link>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            {props.modalTitle}
          </ModalHeader>
          <ModalBody>
            <ul>
            {
            
            modalContent.map(foo=>{
              return(
                <li key={modalContent.indexOf(foo)}>
                  <span>{foo.title}</span>{foo.subtitle}
                  <Link isExternal showAnchorIcon href={foo.link}>
                  </Link>
                </li>
              )})
            }
            </ul>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
