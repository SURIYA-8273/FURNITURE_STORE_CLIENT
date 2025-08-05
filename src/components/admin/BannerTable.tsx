import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";
import Image from "next/image";
import { useState, CSSProperties, useEffect } from "react";
import { CiImport } from "react-icons/ci";
import { CiExport } from "react-icons/ci";
import { ClipLoader } from "react-spinners";
import Modal from "../modals/Modal";
import { useBanner } from "@/hooks/useBanners";
import BannerAddModal from "../modals/admin/banner/BannerAddModal";
import DeleteModal from "../modals/common/DeleteModal";


const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

interface Banner {
  id: number;
  name: string;
  image: string;
  isMain: boolean;
  
}

export default function BannerTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const {
    loading,
   banners,
    modalState,
    setModalState,
    setName,
    setImage,
    setIsMain,
    isMain,
    setId,
    name,
    setPreviewURL,
    handleDeleteBanner,
    handleUpdateBanner,
    error,
    previewURL,
    handleCreateBanner,
    
    categoryId,
    setCategoryId
  } = useBanner();

  useEffect(() => {
    if (modalState) {
      setIsModalOpen(false);
      setActiveModal(null);
      setModalState(false);
    }
  }, [modalState]);

  useEffect(() => {
    if (modalState) {
      setIsModalOpen(false);
      setActiveModal(null);
      setModalState(false);
    }
  }, [modalState]);

  const handleProductView = () => {
    setActiveModal("view");
    setIsModalOpen(true);
  };
  const handleProductDelete = (id: string | number) => {
    setId(id);
    setActiveModal("delete");
    setIsModalOpen(true);
  };
  const handleProductUpdate = (data: Banner) => {
    setId(data.id);
    setName(data.name);
   
    // setPreviewURL(data.image);
    setIsMain(data.isMain);
    setActiveModal("edit");
    setIsModalOpen(true);
  };

  const handleProductAdd = () => {
    setActiveModal("add");
    setIsModalOpen(true);
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (

    <div className="w-full max-w-[1100px] min-w-[50px] max-h-[400px] md:max-h-[600px] md:overflow-x-auto scrollbar-hide bg-white flex flex-col">
      <div className="flex md:justify-between py-3 w-full  bg-white  px-4 sticky top-0 z-20 flex-col md:flex-row">
        <div className="flex ">
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
        <div className="flex">
          <span>
            <input
              type="text"
              placeholder="Search Products"
              className="border-1 py-1.5 rounded-sm border-gray-300 placeholder:text-[12px] font-semibold px-2 text-[12px] focus:border-gray-500"
            />
          </span>
          <div
            onClick={handleProductAdd}
            className="text-[12px] px-3 pt-2  cursor-pointer hover:bg-[#ae74cf] bg-[#a53ee5] text-white rounded-sm ml-3 "
          >
            ADD CATEGORY
          </div>
        </div>
      </div>

      <table className="w-full sm:overflow-x-scroll">
        <thead className="sticky top-[55.5px] z-10">
          <tr className="bg-gray-100 border-gray-300">
            <th className="px-4 py-2 text-[11px] text-center text-gray-700 border-r-1 border-gray-200">
              ID
            </th>
            <th className="px-4 py-1 text-[11px] text-center text-gray-700 border-gray-200 border-l-1">
              NAME
            </th>
            <th className="px-4 py-1 text-[11px] text-center text-gray-700 border-gray-200 border-l-1">
              IMAGE
            </th>
            <th className="px-4 py-1 text-[11px] text-center text-gray-700 border-gray-200 border-l-1">
              DESCRIPTION
            </th>
            <th className="px-4 py-1 text-[11px] text-center text-gray-700 border-gray-200 border-l-1">
              STATUS
            </th>
            <th className="px-4 py-1 text-[11px] text-center text-gray-700 border-gray-200 border-l-1">
              ACTIONS
            </th>
          </tr>
        </thead>

        {loading ? (
          <tbody>
            <tr className="text-center">
              <td colSpan={6} className="py-3">
                <ClipLoader
                  color={"#a53ee5"}
                  loading={true}
                  cssOverride={override}
                  size={50}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </td>
            </tr>
          </tbody>
        ) : banners.length <= 0 ? (
          <tbody>
            <tr className="text-center">
              <td colSpan={6} className="py-3 text-[13px]">
                -- No data found --
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody className="">
            {banners.map((data) => {
              return (
                <tr className="border-gray-100 border-b-1" key={data.id}>
                  <td className="text-[12px] px-1 py-2 border-gray-100 border-r-1 text-center ">
                    {data.id}
                  </td>
                  <td className="text-[12px] px-1 py-2 border-gray-100 border-r-1 text-center">
                    {data.name}
                  </td>

                  <td className="text-[12px] px-4 py-2 border-gray-100 border-r-1 flex justify-center">
                    <Image
                      src={data.image}
                      alt="image"
                      width={30}
                      height={40}
                    ></Image>
                  </td>

                  <td className="text-[12px] px-1 py-2 border-gray-100 border-r-1 text-center">
                    {""}
                  </td>

                  <td className="text-center">
                    <span
                      className={`text-[10px] ${
                        data.isMain ? "bg-green-600" : "bg-red-600"
                      }  px-2 py-1 rounded-sm text-white border-gray-100 border-r-1`}
                    >
                      {data.isMain ? "ACTIVE" : "IN ACTIVE"}
                    </span>
                  </td>

                  <td className="px-3  border-gray-100 border-l-1">
                    <div className="flex justify-around ">
                      <span
                        className="pr-3 cursor-pointer"
                        onClick={() => handleProductUpdate(data)}
                      >
                        <MdEdit size={20} />
                      </span>
                      <span
                        className="pr-3 cursor-pointer"
                        onClick={() => handleProductDelete(data.id)}
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
              );
            })}
          </tbody>
        )}
      </table>


       <div className="flex justify-between items-center px-4 py-2 sticky bottom-0 bg-white">
         <div className="text-[10px] font-semibold">Showing 0-0 of 0</div>
         <div className="flex space-x-2">
           <button
             disabled
             className=" border rounded bg-[#a53ee5] text-[12px] px-3 py-1 text-white"
           >
             Previous
           </button>
           <button
             disabled
             className=" border rounded bg-[#a53ee5] text-[12px] px-3 py-1 text-white"
           >
             Next
           </button>
         </div>
       </div>



       {/* {isModalOpen && activeModal === "edit" && (
        <Modal isOpen={isModalOpen} onClose={handleModal}>
          <CategoryUpdateModal
           name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            setImage={setImage}
            setActive={setActive}
            handleUpdateCategory={handleUpdateSubCategory}
            active={active}
            loading={loading}
            previewURL={previewURL}
            setPreviewURL={setPreviewURL}
            error={error}
          />
        </Modal>
      )}
      {isModalOpen && activeModal === "view" && (
        <Modal isOpen={isModalOpen} onClose={handleModal}>
          <ProductViewModal />
        </Modal>
      )}
 */}


      {isModalOpen && activeModal === "delete" && (
        <Modal isOpen={isModalOpen} onClose={handleModal}>
          <DeleteModal
            loading={loading}
            handleDelete={handleDeleteBanner}
          />
        </Modal>
      )}
      {isModalOpen && activeModal === "add" && (
        <Modal isOpen={isModalOpen} onClose={handleModal}>
          <BannerAddModal
            name={name}
            setName={setName}
            setImage={setImage}
            setIsMain={setIsMain}
            handleCreate={handleCreateBanner}
            isMain={isMain}
            loading={loading}
            previewURL={previewURL}
            setPreviewURL={setPreviewURL}
            error={error}
            categoryId={categoryId}
            setCategoryId={setCategoryId}
          />
        </Modal>
      )}
    </div>













    // <div className="w-full max-w-[1000px]  scrollbar-hide max-h-[550px] bg-white">
    //   <div className="flex justify-between py-3 w-full bg-white px-4 sticky top-0 z-20">
    //     <div className="flex">
    //       <div className="flex border-1 rounded-sm text-[12px] border-gray-300 pt-1 px-2">
    //         <span>
    //           <CiImport size={20} />
    //         </span>
    //         <span className="pl-1 pt-0.5">IMPORT</span>
    //       </div>
    //       <div className="flex border-1 rounded-sm text-[12px] border-gray-300 pt-1 px-2 ml-2">
    //         <span>
    //           <CiExport size={20} />
    //         </span>
    //         <span className="pl-1 pt-0.5">EXPORT</span>
    //       </div>
    //     </div>
    //     <div className="flex">
    //       <span>
    //         <input
    //           type="text"
    //           placeholder="Search Products"
    //           className="border-1 py-1.5 rounded-sm border-gray-300 placeholder:text-[12px] font-semibold px-2 text-[12px] focus:border-gray-500"
    //         />
    //       </span>
    //       <div
    //         onClick={handleProductAdd}
    //         className="text-[12px] px-3 py-2 cursor-pointer hover:bg-[#ae74cf] bg-[#a53ee5] text-white rounded-sm ml-3 "
    //       >
    //         ADD CATEGORY
    //       </div>
    //     </div>
    //   </div>

    //   <div className="">
    //     <table className="w-full">
    //       <thead className="sticky top-[58px] z-10">
    //         <tr className="bg-gray-100 border-gray-300">
    //           <th className="px-4 py-2 text-[11px] text-center text-gray-700 border-r-1 border-gray-200">
    //             ID
    //           </th>
    //           <th className="px-4 py-1 text-[11px] text-center text-gray-700 border-gray-200 border-l-1">
    //             NAME
    //           </th>
    //           <th className="px-4 py-1 text-[11px] text-center text-gray-700 border-gray-200 border-l-1">
    //             IMAGE
    //           </th>
    //           <th className="px-4 py-1 text-[11px] text-center text-gray-700 border-gray-200 border-l-1">
    //             DESCRIPTION
    //           </th>
    //           <th className="px-4 py-1 text-[11px] text-center text-gray-700 border-gray-200 border-l-1">
    //             STATUS
    //           </th>
    //           <th className="px-4 py-1 text-[11px] text-center text-gray-700 border-gray-200 border-l-1">
    //             ACTIONS
    //           </th>
    //         </tr>
    //       </thead>

    //       {loading ? (
    //         <tbody>
    //           <tr className="text-center">
    //             <td colSpan={6} className="py-3">
    //               <ClipLoader
    //                 color={"#a53ee5"}
    //                 loading={true}
    //                 cssOverride={override}
    //                 size={50}
    //                 aria-label="Loading Spinner"
    //                 data-testid="loader"
    //               />
    //             </td>
    //           </tr>
    //         </tbody>
    //       ) : categories.length <= 0 ? (
    //         <tbody>
    //           <tr className="text-center">
    //             <td colSpan={6} className="py-3 text-[13px]">
    //               -- No data found --
    //             </td>
    //           </tr>
    //         </tbody>
    //       ) : (
    //         <tbody className="">
    //           {categories.map((data) => {
    //             return (
    //               <tr className="border-gray-100 border-b-1" key={data.id}>
    //                 <td className="text-[12px] px-1 py-2 border-gray-100 border-r-1 text-center ">
    //                   {data.id}
    //                 </td>
    //                 <td className="text-[12px] px-1 py-2 border-gray-100 border-r-1 text-center">
    //                   {data.name}
    //                 </td>

    //                 <td className="text-[12px] px-4 py-2 border-gray-100 border-r-1 flex justify-center">
    //                   <Image
    //                     src={"/chair.jpg"}
    //                     alt="image"
    //                     width={30}
    //                     height={40}
    //                   ></Image>
    //                 </td>

    //                 <td className="text-[12px] px-1 py-2 border-gray-100 border-r-1 text-center">
    //                   {data.discription}
    //                 </td>

    //                 <td className="text-center">
    //                   <span
    //                     className={`text-[10px] ${
    //                       data.active ? "bg-green-200" : "bg-red-600"
    //                     }  px-2 py-1 rounded-sm text-white border-gray-100 border-r-1`}
    //                   >
    //                     {data.active ? "ACTIVE" : "IN ACTIVE"}
    //                   </span>
    //                 </td>

    //                 <td className="px-3  border-gray-100 border-l-1">
    //                   <div className="flex justify-around ">
    //                     <span
    //                       className="pr-3 cursor-pointer"
    //                       onClick={() => handleProductUpdate(data)}
    //                     >
    //                       <MdEdit size={20} color="blue" />
    //                     </span>
    //                     <span
    //                       className="pr-3 cursor-pointer"
    //                       onClick={() => handleProductDelete(data.id)}
    //                     >
    //                       <MdDelete size={20} color="red" />
    //                     </span>
    //                     <span
    //                       className="pr-3 cursor-pointer"
    //                       onClick={handleProductView}
    //                     >
    //                       <IoMdInformationCircle size={20} color="" />
    //                     </span>
    //                   </div>
    //                 </td>
    //               </tr>
    //             );
    //           })}
    //         </tbody>
    //       )}
    //     </table>
    //   </div>

    //   <div className="flex justify-between items-center px-4 py-2 sticky bottom-0 bg-white">
    //     <div className="text-[10px] font-semibold">Showing 0-0 of 0</div>
    //     <div className="flex space-x-2">
    //       <button
    //         disabled
    //         className=" border rounded bg-[#a53ee5] text-[12px] px-3 py-1 text-white"
    //       >
    //         Previous
    //       </button>
    //       <button
    //         disabled
    //         className=" border rounded bg-[#a53ee5] text-[12px] px-3 py-1 text-white"
    //       >
    //         Next
    //       </button>
    //     </div>
    //   </div>

    //   {isModalOpen && activeModal === "edit" && (
    //     <Modal isOpen={isModalOpen} onClose={handleModal}>
    //       <CategoryUpdateModal
    //         name={name}
    //         setName={setName}
    //         description={description}
    //         setDescription={setDescription}
    //         setImage={setImage}
    //         setActive={setActive}
    //         handleUpdateCategory={handleUpdateCategory}
    //         active={active}
    //         loading={loading}
    //         previewURL={previewURL}
    //         setPreviewURL={setPreviewURL}
    //         error={error}
    //       />
    //     </Modal>
    //   )}
    //   {isModalOpen && activeModal === "view" && (
    //     <Modal isOpen={isModalOpen} onClose={handleModal}>
    //       <ProductViewModal />
    //     </Modal>
    //   )}
    //   {isModalOpen && activeModal === "delete" && (
    //     <Modal isOpen={isModalOpen} onClose={handleModal}>
    //       <CategoryDeleteModal
    //         loading={loading}
    //         handleDeleteCategory={handleDeleteCategory}
    //       />
    //     </Modal>
    //   )}
    //   {isModalOpen && activeModal === "add" && (
    //     <Modal isOpen={isModalOpen} onClose={handleModal}>
    //       <CategoryAddModal
    //         name={name}
    //         setName={setName}
    //         description={description}
    //         setDescription={setDescription}
    //         setImage={setImage}
    //         setActive={setActive}
    //         handleCreateCategory={handleCreateCategory}
    //         active={active}
    //         loading={loading}
    //         previewURL={previewURL}
    //         setPreviewURL={setPreviewURL}
    //         error={error}
    //       />
    //     </Modal>
    //   )}
    // </div>
  );
}
