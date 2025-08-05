import { IoMdMenu } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineShoppingCart } from "react-icons/md";
import Image from "next/image";
export default function Home() {
  return (
    <div className="mx-2 mt-3 px-1">
      <div className="flex justify-between mb-6 sticky top-0 bg-white">
        <div className="flex gap-2">
          <IoMdMenu size={30} />
          <p className="text-[21px] font-bold">SF</p>
        </div>

        <div className="flex gap-6">
          <GrFavorite size={30} />
          <MdOutlineShoppingCart size={30} />
        </div>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search furniture"
          name=""
          id=""
          className="border w-full py-2 px-3 rounded-sm text-[17px] placeholder:text-[15px]"
        />
      </div>

      <div className=" mb-6 flex gap-x-2 overflow-x-auto  pb-2 scrollbar-hide">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((data) => (
          <div key={data} className="w-[90px]">
            <div className="h-[80px] w-[80px] flex-shrink-0 p-3 rounded-lg bg-gray-100">
              <Image
                src="/chair.jpg"
                height={150}
                width={150}
                alt={`Chair ${data}`}
                className="  rounded-md shadow-md"
              />
            </div>
            <p className="text-[16px] text-center overflow-hidden text-ellipsis">
              chair
            </p>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <div className="h-[200px] w-full flex-shrink-0  rounded-lg">
          <Image
            src="/banner1.jpg"
            height={150}
            width={150}
            alt={`Chair}`}
            className="w-full h-full  rounded-md shadow-md"
          />
        </div>
      </div>

      <div className="mb-6">
        <p className="font-bold text-[18px]">TRENDING PRODUCTS</p>
        <div className="mt-6 flex gap-x-2 overflow-x-auto scrollbar-hide">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((data) => (
            <div key={data} className="bg-gray-100 pb-2">
              <div className="w-full flex-shrink-0 rounded-lg ">
                <Image
                  src="/chair.jpg"
                  height={150}
                  width={150}
                  alt={"chait"}
                  className="w-full rounded-md shadow-md"
                />
              </div>
              <p className="text-[18px] font-semibold px-1 pt-2">
                Tining table
              </p>
              <div className="flex px-1 gap-x-2 py-2">
                <p className="font-semibold text-gray-800 text-medium">
                  {"$44,4444"}
                </p>
                <p className="line-through text-gray-500 text-sm">
                  {"$44,444"}
                </p>
                <p className="text-green-600 font-semibold text-[14px]">20%</p>
              </div>
            </div>
          ))}
        </div>
      </div>

       <div>
        <p className="font-bold text-[18px]">NEW ARRIVALS</p>
        <div className="mt-6 flex gap-x-2 overflow-x-auto scrollbar-hide">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((data) => (
            <div key={data} className="bg-gray-100 pb-2">
              <div className="w-full flex-shrink-0 rounded-lg ">
                <Image
                  src="/chair.jpg"
                  height={150}
                  width={150}
                  alt={"chait"}
                  className="w-full rounded-md shadow-md"
                />
              </div>
              <p className="text-[18px] font-semibold px-1 pt-2">
                Tining table
              </p>
              <div className="flex px-1 gap-x-2 py-2">
                <p className="font-semibold text-gray-800 text-medium">
                  {"$44,4444"}
                </p>
                <p className="line-through text-gray-500 text-sm">
                  {"$44,444"}
                </p>
                <p className="text-green-600 font-semibold text-[14px]">20%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
