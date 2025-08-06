"use client";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import ProductCardSmall from "@/components/modals/ProductCardSmall";
const ProductDetail = () => {
  const { id } = useParams();

  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedColorId, setSelectedColorId] = useState<number>(1);
  const [selectedWoodTypeId, setSelectedWoodTypeId] = useState<number>(1);

  const router = useRouter();

  const termsAndConditions = [
    "Customers agree to follow all store policies and terms when making a purchase.",
    "Product details, images, and prices are subject to change without prior notice.",
    "All payments must be made in full at the time of purchase unless stated otherwise.",
    "Orders are confirmed only after successful payment and stock availability.",
    "Delivery dates are estimates; delays may occur due to external factors.",
    "Returns are allowed within the specified period if the product is unused and in its original condition.",
    "Custom-made or clearance items are non-refundable and non-returnable.",
    "Warranty applies only to eligible products as per manufacturer terms.",
    "The store is not responsible for damages caused by misuse or improper assembly.",
    "The store reserves the right to modify these terms and conditions at any time.",
  ];
  const installationPoints = [
    "Installation service is available only for products purchased from the store.",
    "Customers must provide a suitable location and ensure easy access for installation.",
    "Additional charges may apply for complex installations or locations outside standard service areas.",
    "Customers must confirm delivery before scheduling installation.",
    "The store is not responsible for modifications to walls, floors, or electrical points unless specified.",
    "Any pre-installation requirements (e.g., space clearance) are the customer’s responsibility.",
    "Installation appointments must be scheduled in advance and are subject to technician availability.",
    "The store is not liable for delays due to unforeseen circumstances (e.g., weather, traffic).",
    "Damages caused during installation by the store’s technicians will be repaired or compensated by the store.",
    "Once installation is completed and signed off by the customer, the service will be deemed accepted.",
  ];
  const warrantyPoints = [
    "Warranty coverage starts from the date of purchase mentioned on the invoice.",
    "The warranty applies only to manufacturing defects in materials or workmanship.",
    "Normal wear and tear, scratches, or color fading are not covered under the warranty.",
    "Damages caused by misuse, accidents, improper installation, or alterations are excluded.",
    "Warranty is valid only when the product is used for its intended purpose.",
    "The store may repair, replace, or refund the product at its sole discretion.",
    "Customers must provide the original purchase receipt to claim the warranty.",
    "Warranty does not cover damages caused by unauthorized repairs or modifications.",
    "Any transportation or service charges for warranty claims may be borne by the customer.",
    "The store reserves the right to inspect the product before approving any warranty claim.",
  ];
  const careInstructionPoints = [
    "Clean furniture regularly using a soft, dry, or slightly damp cloth to avoid dust buildup.",
    "Avoid placing furniture in direct sunlight to prevent fading and discoloration.",
    "Keep furniture away from heat sources such as heaters, fireplaces, or radiators.",
    "Use coasters or mats under hot, cold, or wet items to prevent stains or damage.",
    "Do not use harsh chemicals or abrasive cleaners on furniture surfaces.",
    "Tighten screws, bolts, and fittings periodically to ensure stability.",
    "For upholstered furniture, vacuum regularly and spot-clean stains immediately.",
    "Avoid dragging furniture; lift it to prevent scratches on floors and furniture legs.",
    "Use protective pads under heavy items to prevent dents or scratches.",
    "Follow any specific manufacturer’s care instructions provided with the product.",
  ];

  const productDetail = {
    weight: "50",
    material: "Solid Wood",
    color: "Brown",
    dimensions: "width: 200cm, height: 20cm, length: 220cm",
  };

  const productColorOptions = [
    { id: 1, image: "/chair.jpg", color: "red" },

    { id: 2, image: "/chair.jpg", color: "brown" },

    { id: 3, image: "/chair.jpg", color: "green" },

    { id: 4, image: "/chair.jpg", color: "blue" },
  ];

  const productWoodOptions = [
    { id: 1, image: "/chair.jpg", wood: "Teak" },

    { id: 2, image: "/chair.jpg", wood: "Neem" },

    { id: 3, image: "/chair.jpg", wood: "Tamarind" },

    { id: 4, image: "/chair.jpg", wood: "Gauva" },
  ];

  const handleSelectedType = (selected: string) => {
    if (selectedType === selected) {
      setSelectedType(null);
    } else {
      setSelectedType(selected);
    }
  };

  const handleSelectedColor = (color: number) => {
    setSelectedColorId(color);
  };

  const handleSelectedWoodType = (wood: number) => {
    setSelectedWoodTypeId(wood);
  };

  const selectedColor: { [key: string]: string | number } | undefined =
    productColorOptions.find((data) => data.id == selectedColorId);

  const selectedWood: { [key: string]: string | number } | undefined =
    productWoodOptions.find((data) => data.id == selectedWoodTypeId);

  return (
    <div className="m-3">
      <div className="flex justify-between mb-2 sticky top-0 bg-white px-1 pt-2 pb-3">
        <div className="flex gap-2" onClick={() => router.back()}>
          <IoIosArrowBack size={23} color="gray" />
        </div>

        <div className="flex gap-6">
          <BiSearchAlt2 size={23} color="gray" />
          <GrFavorite size={23} color="gray" />
          <MdOutlineShoppingCart size={23} color="gray" />
        </div>
      </div>

      <p className="font-medium text-[16px] mb-2 px-1 ">
        Premium 3-Foot Wooden Dining Table with Modern Minimalist Design
      </p>

      <div className="flex flex-col md:flex-row">
        <div className="mb-4 md:w-1/2">
          <div className="h-[230px] w-full flex-shrink-0  rounded-lg">
            <Image
              src="/banner1.jpg"
              height={150}
              width={150}
              alt={`Chair}`}
              className="w-full h-full  rounded-md shadow-md border-2"
            />
          </div>
        </div>

        <div className="flex gap-x-3 items-center justify-center mb-5">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div key={index} className={`h-1 w-6 rounded-full bg-gray-400 ${index == 1 ? "bg-gray-950" :""}`}></div>
          ))}
        </div>

        <div className="md:w-1/2">
          <div className="mb-1 flex items-center gap-2">
            <strong>COLOR : </strong>{" "}
            <p className="text-[15px]">
              {selectedColor && selectedColor["color"]}
            </p>
          </div>

          <div className=" mb-2 flex gap-x-2 overflow-x-auto  pb-2 scrollbar-hide">
            {productColorOptions.map((data) => (
              <div
                onClick={() => handleSelectedColor(data.id)}
                key={data.id}
                className={`w-[60px] ${
                  selectedColorId == data.id
                    ? "border-2 border-rose-950 rounded-lg"
                    : "border-2 border-gray-300 rounded-lg"
                }`}
              >
                <div className="h-[50px] w-full p-1 rounded-lg">
                  <Image
                    src="/chair.jpg"
                    height={150}
                    width={150}
                    alt={`Chair ${data}`}
                    className="rounded-md"
                  />
                </div>

                <p className="text-[10px] text-center overflow-hidden text-ellipsis font-medium pt-2">
                  {data.color.toUpperCase()}
                </p>
              </div>
            ))}
          </div>

          <div className="mb-1 flex items-center gap-2">
            <strong>WOOD : </strong>{" "}
            <p className="text-[15px]">
              {selectedWood && selectedWood["wood"]}
            </p>
          </div>

          <div className=" mb-2 flex gap-x-2 overflow-x-auto  pb-2 scrollbar-hide">
            {productWoodOptions.map((data) => (
              <div
                onClick={() => handleSelectedWoodType(data.id)}
                key={data.id}
                className={`w-[60px] ${
                  selectedWoodTypeId == data.id
                    ? "border-2 border-rose-950 rounded-lg"
                    : "border-2 border-gray-300 rounded-lg"
                }`}
              >
                <div className="h-[50px] w-full p-1 rounded-lg">
                  <Image
                    src="/chair.jpg"
                    height={150}
                    width={150}
                    alt={`Chair ${data}`}
                    className="rounded-md"
                  />
                </div>

                <p className="text-[10px] text-center overflow-hidden text-ellipsis font-medium pt-2">
                  {data.wood.toUpperCase()}
                </p>
              </div>
            ))}
          </div>

          <div className="flex px-1 gap-x-2 py-2 pb-5 ">
            <p className="font-semibold text-gray-800 text-[17px] ">
              PRICE : {"$44,4444"}
            </p>
            <p className="line-through text-gray-500 text-[15px] pt-[1px] ">
              {"$44,444"}
            </p>

            <p className="text-red-600 font-semibold text-[18px]">OFF 20%</p>
          </div>

          <div className="flex gap-x-3  mb-4">
            <div className="py-2.5 w-full bg-rose-950  text-white border-2  rounded-sm text-center font-semibold text-[14px]">
              BUY NOW
            </div>
            <div className="py-2.5 w-full bg-rose-950 text-white border-2  rounded-sm text-center font-semibold text-[14px]">
              ADD TO CART
            </div>
          </div>

          <div className="border-b border-t border-gray-300">
            <div
              className="flex justify-between  pl-1 pr-4 py-2 items-center"
              onClick={() => handleSelectedType("productDetail")}
            >
              <p className="font-semibold text-[13px] pb-1 pt-1 pl-1">
                PRODUCT DETAILS
              </p>

              {selectedType === "productDetail" ? (
                <IoIosArrowDown size={20} />
              ) : (
                <IoIosArrowForward size={20} />
              )}
            </div>
            {selectedType === "productDetail" && (
              <div className="pb-5 pt-1">
                {Object.entries(productDetail).map(([key, value]) => (
                  <div key={key} className="flex pl-3 pr-2 py-1">
                    <strong className="w-1/2 text-[14px] text-gray-700">
                      {key}
                    </strong>
                    <p className="w-1/2 text-[14px] text-gray-600 font-medium">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-b border-t border-gray-300">
            <div
              className="flex justify-between  pl-1 pr-4 py-2 items-center"
              onClick={() => handleSelectedType("warranty")}
            >
              <p className="font-semibold text-[13px] pb-1 pt-1 pl-1">
                WARRANTY
              </p>

              {selectedType === "warranty" ? (
                <IoIosArrowDown size={20} />
              ) : (
                <IoIosArrowForward size={20} />
              )}
            </div>
            {selectedType === "warranty" && (
              <div className="pb-5 pt-1 pl-3 pr-2">
                {warrantyPoints.map((data) => (
                  <p
                    className="text-gray-600 font-medium pb-1 text-[14px] "
                    key={data}
                  >
                    {data}
                  </p>
                ))}
              </div>
            )}
          </div>

          <div className="border-b border-t border-gray-300">
            <div
              className="flex justify-between  pl-1 pr-4 py-2 items-center"
              onClick={() => handleSelectedType("installation")}
            >
              <p className="font-semibold text-[13px] pb-1 pt-1 pl-1">
                INSTALLATION
              </p>

              {selectedType === "installation" ? (
                <IoIosArrowDown size={20} />
              ) : (
                <IoIosArrowForward size={20} />
              )}
            </div>
            {selectedType === "installation" && (
              <div className="pb-5 pt-1 pl-3 pr-2">
                {installationPoints.map((data) => (
                  <p
                    className="text-gray-600 font-medium pb-1 text-[14px] "
                    key={data}
                  >
                    {data}
                  </p>
                ))}
              </div>
            )}
          </div>

          <div className="border-b border-t border-gray-300">
            <div
              className="flex justify-between  pl-1 pr-4 py-2 items-center"
              onClick={() => handleSelectedType("termsAndConditions")}
            >
              <p className="font-semibold text-[13px] pb-1 pt-1 pl-1">
                TERMS AND CONDITIONS
              </p>

              {selectedType === "termsAndConditions" ? (
                <IoIosArrowDown size={20} />
              ) : (
                <IoIosArrowForward size={20} />
              )}
            </div>
            {selectedType === "termsAndConditions" && (
              <div className="pb-5 pt-1 pl-3 pr-2">
                {termsAndConditions.map((data) => (
                  <p
                    className="text-gray-600 font-medium pb-1 text-[14px] "
                    key={data}
                  >
                    {data}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-6">
        <p className="font-semibold text-[17px]">SIMILAR PRODUCTS</p>
        <div className="mt-2 flex gap-x-2 overflow-x-auto scrollbar-hide">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((data) => (
            <ProductCardSmall key={data} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
