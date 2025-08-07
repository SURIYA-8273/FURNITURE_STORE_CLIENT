import { IoMdMenu } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineShoppingCart } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import ProductCardSmall from "@/components/modals/ProductCardSmall";


export default function Home() {



  const categories = [
  {
    "id": 1,
    "name": "Sofas",
    "image": "/sofa.jpg"
  },
  {
    "id": 2,
    "name": "Dining Tables",
    "image": "/dining-table.jpg"
  },
  {
    "id": 3,
    "name": "Beds",
    "image": "/bed.jpg"
  },
  {
    "id": 4,
    "name": "Wardrobes",
    "image": "/wardrobe.jpg"
  },
  {
    "id": 5,
    "name": "Office Chairs",
    "image": "/chair.jpg"
  },
  {
    "id": 6,
    "name": "Coffee Tables",
    "image": "/coffee-table.jpg"
  }
]
;
  return (
    <div className="mx-2 mt-3 px-1">
      <div className="flex justify-between mb-2 sticky top-0 bg-white px-1 pt-2 pb-3">
              <div className="flex gap-2">
                <IoMdMenu size={23} color="gray" />
              </div>
      
              <div className="flex gap-6">
                
                <Link href={"/user/favourite"}><GrFavorite  size={23} color="gray" /></Link>
                <Link href={"/user/cart"}> <MdOutlineShoppingCart size={23} color="gray" /></Link>
               
              </div>
            </div>
            

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search furniture"
          name=""
          id=""
          className="border border-gray-400 w-full py-2 px-3 rounded-sm text-[17px] placeholder:text-[13px]"
        />
      </div>

      <div className="flex gap-x-4 overflow-x-auto scrollbar-hide">
        {categories.map((data) => (
        <div key={data.id}>
            <div className=" h-[70px] w-[70px] rounded-sm">
              <Image
                src="/chair.jpg"
                height={100}
                width={150}
                alt={`Chair`}
                className=" w-full h-full  rounded-full border border-gray-400"
              />
            </div>
            <p className="text-[15px] text-center pt-1  line-clamp-1">
              {data.name}
            </p>
          </div>
        ))}
      </div>

      <div className="mb-3 mt-4">
        <div className="h-[200px] w-full flex-shrink-0  rounded-lg">
          <Image
            src="/banner1.png"
            height={150}
            width={150}
            alt={`Chair}`}
            className="w-full h-full  rounded-md border border-gray-400"
          />
        </div>
      </div>

      <div className="flex gap-x-3 items-center justify-center mb-5">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div key={index} className={`h-1 w-6 rounded-full bg-gray-400 ${index == 1 ? "bg-gray-950" :""}`}></div>
          ))}
        </div>

       <div className="mt-3">
        <p className="font-semibold text-[17px]">TRENDING PRODUCTS</p>
        <div className="mt-2 flex gap-x-2 overflow-x-auto scrollbar-hide">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((data,index) => (
            <Link key={data} href={`/products/${data}` }><ProductCardSmall  data={index} /></Link>
          ))}
        </div>
      </div>

       <div className="mt-5">
        <p className="font-semibold text-[17px]">POPULAR PRODUCTS</p>
        <div className="mt-2 flex gap-x-2 overflow-x-auto scrollbar-hide">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((data,index) => (
            <Link key={data} href={`/products/${data}` }><ProductCardSmall  data={data} /></Link>
          ))}
        </div>
      </div>

      
    </div>
  );
}
