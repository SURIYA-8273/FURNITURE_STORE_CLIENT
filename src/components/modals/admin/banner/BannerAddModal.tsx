import Image from "next/image";
import React from "react";
import {
  ChangeEvent,
  useRef,
  CSSProperties,
  Dispatch,
  SetStateAction,
} from "react";
import { PiSelectionPlusBold } from "react-icons/pi";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

type BannerAddModalProps = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  setImage: Dispatch<SetStateAction<File | null | string>>;
  setIsMain: Dispatch<SetStateAction<boolean>>;
  handleCreate: () => void;
  isMain: boolean;
  loading: boolean;
  previewURL: string | null;
  setPreviewURL: Dispatch<SetStateAction<string | null>>;
  categoryId: number | null;
  setCategoryId: Dispatch<SetStateAction<number | null>>;
  error: { [key: string]: string } | null;
};

const BannerAddModal = ({
  name,
  setName,
  setImage,
  handleCreate,
  isMain,
  loading,
  previewURL,
  setPreviewURL,
  categoryId,
  setCategoryId,
  setIsMain,
  error,
}: BannerAddModalProps) => {
  const fileInpuRef = useRef<HTMLInputElement | null>(null);

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImage(file);
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter category name"
            className="border-1 py-1.5 rounded-sm border-gray-300 placeholder:text-[12px] w-full font-semibold px-2 text-[12px] focus:border-gray-500"
          />
          {error?.name && (
            <p className="text-[10px] text-red-600 pl-1 pt-1">{error.name}</p>
          )}
        </div>

        <div className="">
          <input
            value={categoryId != null ? categoryId : ""}
            onChange={(e) => setCategoryId(Number(e.target.value))}
            type="text"
            placeholder="Enter category id"
            className="border-1 py-1.5 rounded-sm border-gray-300 placeholder:text-[12px] w-full font-semibold px-2 text-[12px] focus:border-gray-500"
          />
          {error?.categoryId && (
            <p className="text-[10px] text-red-600 pl-1 pt-1">
              {error.categoryId}
            </p>
          )}
        </div>

        <div className=" text-[13px]">
          <div className="flex">
            <p className="font-bold">Status : </p>
            <div className="flex">
              <div className="flex pl-1 ">
                <label htmlFor="active" className="pr-1 cursor-pointer">
                  Active
                </label>
                <input
                  checked={isMain == true}
                  type="radio"
                  value={"true"}
                  onChange={() => setIsMain(true)}
                  placeholder="Status"
                  className="cursor-pointer"
                  id="active"
                  name="status"
                />
              </div>
              <div className="flex pl-1">
                <label htmlFor="deActive" className="pr-1 cursor-pointer">
                  DeActive
                </label>
                <input
                  value={"false"}
                  checked={isMain == false}
                  onChange={() => setIsMain(false)}
                  type="radio"
                  placeholder="Status"
                  className="cursor-pointer"
                  id="deActive"
                  name="status"
                />
              </div>
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
          {error?.image && (
            <p className="text-[10px] text-red-600 pl-1 pt-1">{error.image}</p>
          )}
        </div>

        {loading ? (
          <div className="text-[12px] px-3 py-2 mt-4 cursor-pointer bg-[#a53ee5] text-white rounded-sm text-center ">
            <ClipLoader
              color={"#ffffff"}
              loading={true}
              cssOverride={override}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <button
            onClick={handleCreate}
            className="text-[12px] px-3 py-2 mt-4 cursor-pointer hover:bg-[#ae74cf] bg-[#a53ee5] text-white rounded-sm text-center "
          >
            ADD BANNER
          </button>
        )}
      </div>
    </div>
  );
};

export default BannerAddModal;
