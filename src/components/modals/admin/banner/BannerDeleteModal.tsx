import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

type BannerDeleteModalProps = {
  loading: boolean;
  handleDeleteCategory: () => void;
};

const BannerDeleteModal = ({
  loading,
  handleDeleteCategory,
}: BannerDeleteModalProps) => {
  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold mb-4 text-center">
        DELETE CATEGORY
      </h2>

      <div className="flex flex-col gap-3 ">
        <p className="text-[13px] text-center font-semibold">
          Are you want to delete a category ?
        </p>

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
            onClick={handleDeleteCategory}
            className="text-[12px] px-3 py-2 mt-4 cursor-pointer hover:bg-[#ae74cf] bg-[#a53ee5] text-white rounded-sm text-center "
          >
            DELETE
          </button>
        )}
      </div>
    </div>
  );
};

export default BannerDeleteModal;
