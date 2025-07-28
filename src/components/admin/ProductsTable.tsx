import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";
import Image from "next/image";
import { useState } from "react";
import Modal from "../modals/admin/Modal";
import ProductEditModal from "../modals/admin/ProductEditModal";
import ProductDeleteModal from "../modals/admin/ProductDeleteModal";
import ProductViewModal from "../modals/admin/ProductViewModal";
import { CiImport } from "react-icons/ci";
import { CiExport } from "react-icons/ci";
export default function ProductsTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleProductView = () => {
    setActiveModal("view");
    setIsModalOpen(true);
  };
  const handleProductDelete = () => {
    setActiveModal("delete");
    setIsModalOpen(true);
  };
  const handleProductEdit = () => {
    setActiveModal("edit");
    setIsModalOpen(true);
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div className="flex justify-between py-3 bg-white px-4">
        <div className="flex">
          <div className="flex border-1 rounded-sm text-[12px] border-gray-300 pt-1 px-2">
            <span>
              <CiImport size={20} />
            </span>
            <span className="pl-1 pt-0.5">IMPORT</span>
          </div>
          <div className="flex border-1 rounded-sm text-[12px] border-gray-300 pt-1 px-2 ml-2">
            <span>
              <CiExport size={20} />
            </span>
            <span className="pl-1 pt-0.5">EXPORT</span>
          </div>
        </div>
        <div>
          <span>
            <input
              type="text"
              placeholder="Search Products"
              className="border-1 py-1.5 rounded-sm border-gray-300 placeholder:text-[12px] font-semibold px-2 text-[12px] focus:border-gray-500"
            />
          </span>
          <span className="text-[12px] px-3 py-2 cursor-pointer hover:bg-[#d289ff] bg-[#a53ee5] text-white rounded-sm ml-3 ">
            ADD PRODUCT
          </span>
        </div>
      </div>
      <table className="w-full bg-white rounded-sm shadow-xl">
        <thead className="">
          <tr className="bg-gray-100 border-b-1 border-gray-300">
            <th className="px-4 py-2 text-[11px] text-start text-gray-700">
              ID
            </th>
            <th className="px-4 py-1 text-[11px] text-start text-gray-700">
              NAME
            </th>
            <th className="px-4 py-1 text-[11px] text-start text-gray-700">
              IMAGE
            </th>
            <th className="px-4 py-1 text-[11px] text-start text-gray-700">
              PRICE
            </th>
            <th className="px-4 py-1 text-[11px] text-start text-gray-700">
              STOCK
            </th>
            <th className="px-4 py-1 text-[11px] text-start text-gray-700">
              CATEGORY
            </th>
            <th className="px-4 py-1 text-[11px] text-start text-gray-700">
              STATUS
            </th>
            <th className="px-4 py-1 text-[11px] text-start text-gray-700">
              ACTIONS
            </th>
          </tr>
        </thead>

        <tbody className="">
          <tr className="border-gray-300">
            <td className="text-[12px] px-4 py-2">10000</td>
            <td className="text-[12px] px-4 py-2 max-w-[200px]">
              32 wooden furniture furniturefurniture refurniture
            </td>
            <td className="text-[12px] px-4 py-2">
              <Image
                src={"/chair.jpg"}
                alt="image"
                width={30}
                height={40}
              ></Image>
            </td>
            <td className="text-[12px] px-4 py-2">10000</td>
            <td className="text-[12px] px-4 py-2">10000</td>

            <td className="text-[12px] px-4">wooden furniture</td>
            <td className="text-[12px] px-4">ACTIVE</td>

            <td className="px-3 max-w-[180px]">
              <div className="flex  justify-between ">
            
                <span
                  className="pr-3 cursor-pointer"
                  onClick={handleProductEdit}
                >
                  <MdEdit size={20} />
                </span>
                <span
                  className="pr-3 cursor-pointer"
                  onClick={handleProductDelete}
                >
                  <MdDelete size={20} />
                </span>
                <span
                  className="pr-3 cursor-pointer"
                  onClick={handleProductView}
                >
                  <IoMdInformationCircle size={20} />
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {isModalOpen && activeModal === "edit" && (
        <Modal isOpen={isModalOpen} onClose={handleModal}>
          <ProductEditModal />
        </Modal>
      )}
      {isModalOpen && activeModal === "view" && (
        <Modal isOpen={isModalOpen} onClose={handleModal}>
          <ProductViewModal />
        </Modal>
      )}
      {isModalOpen && activeModal === "delete" && (
        <Modal isOpen={isModalOpen} onClose={handleModal}>
          <ProductDeleteModal />
        </Modal>
      )}
    </div>
  );
}
