import Image from "next/image";
import { ChangeEvent, useState, useRef } from "react";
import { PiSelectionPlusBold } from "react-icons/pi";
const ProductEditModal = () => {
  const [selectedImage, setSelectedImage] = useState<null | File>(null);
  const [previewURL, setPreviewURL] = useState<null | string>(null);
  const fileInpuRef = useRef<HTMLInputElement | null>(null);

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);

    if (!file) return;

    setSelectedImage(file);
    setPreviewURL(URL.createObjectURL(file));
  };

  const selectFiles = () => {
    fileInpuRef.current!.click();
  };

  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold mb-4 text-center">ADD CATEGORY</h2>

      <div className="flex flex-col gap-3 ">
        <div className="">
          <input
            type="text"
            placeholder="Enter category name"
            className="border-1 py-1.5 rounded-sm border-gray-300 placeholder:text-[12px] w-full font-semibold px-2 text-[12px] focus:border-gray-500"
          />
        </div>

        <div className="">
          <input
            type="text"
            placeholder="Enter category description"
            className="border-1 py-1.5 rounded-sm border-gray-300 placeholder:text-[12px] w-full font-semibold px-2 text-[12px] focus:border-gray-500"
          />
        </div>

        <div className=" flex text-[13px]">
          <p className="font-bold">Status : </p>
          <div className="flex">
            <div className="flex pl-1 ">
              <label htmlFor="active" className="pr-1 cursor-pointer">Active</label>
              <input
                type="radio"
                placeholder="Status"
                className="cursor-pointer"
                id="active"
                name="status"
              />
            </div>
            <div className="flex pl-1">
              <label htmlFor="deActive" className="pr-1 cursor-pointer">DeActive</label>
              <input
                type="radio"
                placeholder="Status"
                className="cursor-pointer"
                id="deActive"
                name="status"
              />
            </div>
          </div>
        </div>

        <div
          className=" h-[150px] cursor-pointer border-1 rounded-sm border-gray-300"
          onClick={selectFiles}
        >
          <input
            type="file"
            accept="image/*"
            ref={fileInpuRef}
            onChange={handleImage}
            className="hidden"
          />

          {previewURL ? (
            <div className="w-full h-full">
              <Image
                src={previewURL}
                alt="Preview"
                height={100}
                width={200}
                className="rounded border object-cover w-full h-full"
              />
            </div>
          ) : (
            <div className="w-full h-full flex flex-col justify-center items-center">
             <PiSelectionPlusBold size={50} />
              <p className="text-[10px]">PICK IMAGE</p>
            </div>
          )}
        </div>

        <div className="text-[12px] px-3 py-2 mt-4 cursor-pointer hover:bg-[#d289ff] bg-[#a53ee5] text-white rounded-sm text-center ">
          ADD CATEGORY
        </div>
      </div>
    </div>
  );
};

export default ProductEditModal;
