"use client";

import { useEffect, useRef, useState } from "react";
import Input from "./ui/input";
import Button from "./ui/button";
import Box from "./ui/container";
import {
  Modal,
  ModalAction,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "./ui/modal";

function Container() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="grid h-svh place-items-center">
        <Button
          onClick={() => {
            inputRef.current?.focus();
            setOpen(true);
          }}
        >
          Abrir Modal
        </Button>
      </div>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <ModalHeader>
          <ModalTitle>Meu modal</ModalTitle>
          <ModalDescription>Descrição do meu modal</ModalDescription>
        </ModalHeader>
        <ModalContent>
          <Input type="text" placeholder="Nome" ref={inputRef} />
          <Input type="email" placeholder="Email" />
        </ModalContent>
        <ModalFooter>
          <ModalAction variant="error" onClick={() => setOpen(false)}>
            Cancelar
          </ModalAction>
          <ModalAction variant="success" onClick={() => setOpen(false)}>
            Concluir
          </ModalAction>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Container;
