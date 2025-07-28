import React, { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="bg-black/40 fixed inset-0 flex justify-center items-center">
      <div className="bg-white">
        <span onClick={onClose}>X</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
