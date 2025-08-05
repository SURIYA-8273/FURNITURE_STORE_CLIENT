import React from "react";
import { IoClose } from "react-icons/io5";
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="bg-black/40 fixed inset-0 flex z-30 justify-center items-center">
      <div className="bg-white px-4 pb-4 pt-2 rounded-sm w-[300px] max-w-[300px]">
        <span onClick={onClose} className="flex justify-end cursor-pointer">
          <IoClose size={25} />
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
