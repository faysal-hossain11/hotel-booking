import Search from "@/components/search/Search";
import Image from "next/image";

import Offer1 from "@/public/assets/images/offers/offer2.jpg";
import Offer2 from "@/public/assets/images/offers/offer3.jpg";
import Offer3 from "@/public/assets/images/offers/offer4.jpg";
import Offer4 from "@/public/assets/images/offers/offer5.jpg";
import Link from "next/link";
import PopularHotel1 from "@/public/assets/images/popular-hotel/popular-hotel-1.webp";
import PopularHotel2 from "@/public/assets/images/popular-hotel/popular-hotel-2.webp";
import PopularHotel3 from "@/public/assets/images/popular-hotel/popular-hotel-3.webp";
import PopularHotel4 from "@/public/assets/images/popular-hotel/popular-hotel-4.webp";
import BannerAds from "@/public/assets/images/ads/ad-image.webp";
import AdsImage1 from "@/public/assets/images/ads/ad-image1.jpg";
import AdsImage2 from "@/public/assets/images/ads/ad-image2.jpg";


import { GoArrowUpRight } from "react-icons/go";

export default function Home() {
  return (
    <div>
      <section
        className="bg-[#F6F3E9] h-screen max-h-screen relative bg-[url('/assets/hero-bg.jpg')] grid place-items-center bg-cover bg-no-repeat bg-center">
        <div className="container items-center pb-12 ">
          <div className="">
            <h1 className="font-bold text-3xl lg:text-5xl my-4 text-center lg:w-8/12 mx-auto text-black geist-sans-class capitalize">Hotel for memorable moments rich
              in emotions
            </h1>
            <p className="my-2 text-[#5f5e5e] text-center">We have 459 rooms spread throuout Indonesia with room standards
              equivalent to 5
              star hotels.
            </p>

            <Search />

          </div>
        </div>

      </section>

      {/* start the banner ad image section */}
      <div className="py-14 mt-10">
        <div className="container">
          <div>
            <Image src={BannerAds} alt="banner ads iamge" className="w-full rounded-md cursor-pointer" />
          </div>
        </div>
      </div>
      {/* end the banner ad image section */}


      {/* start the special offers */}
      <div className="container">
        <div className="py-14 ">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold">Special Offers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="group/item p-4 rounded-md shadow-md shadow-sky-300">
              <div className="overflow-hidden mb-6 rounded-md">
                <Link href='/' className="">
                  <Image src={Offer1} alt="special offer iamge" className="w-full group-hover/item:scale-125 transition duration-500 rounded-md" />
                </Link>
              </div>
              <div className="mb-4">
                <Link href="" className="">
                  <p className="text-[18px] font-semibold mb-7 text-sky-900 hover:text-pink-400 transition duration-300">Exlore abu Dhabi with Etihad Airways Stopover Deals</p>
                </Link>
                <Link href="" className="flex group">
                  <span className="flex items-center gap-3 bg-sky-900 text-white px-5 py-3 rounded-md hover:bg-pink-400 transition duration-300">Learn More
                    <GoArrowUpRight className="text-white text-xl group-hover:rotate-45 transition duration-300" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="group/item p-4 rounded-md shadow-md shadow-sky-300">
              <div className="overflow-hidden mb-6 rounded-md">
                <Link href='/' className="">
                  <Image src={Offer2} alt="special offer iamge" className="w-full group-hover/item:scale-125 transition duration-500 rounded-md" />
                </Link>
              </div>
              <div className="mb-4">
                <Link href="" className="">
                  <p className="text-[18px] font-semibold mb-7 text-sky-900 hover:text-pink-400 transition duration-300">Exlore abu Dhabi with Etihad Airways Stopover Deals</p>
                </Link>
                <Link href="" className="flex group">
                  <span className="flex items-center gap-3 bg-sky-900 text-white px-5 py-3 rounded-md hover:bg-pink-400 transition duration-300">Learn More
                    <GoArrowUpRight className="text-white text-xl group-hover:rotate-45 transition duration-300" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="group/item p-4 rounded-md shadow-md shadow-sky-300">
              <div className="overflow-hidden mb-6 rounded-md">
                <Link href='/' className="">
                  <Image src={Offer3} alt="special offer iamge" className="w-full group-hover/item:scale-125 transition duration-500 rounded-md" />
                </Link>
              </div>
              <div className="mb-4">
                <Link href="" className="">
                  <p className="text-[18px] font-semibold mb-7 text-sky-900 hover:text-pink-400 transition duration-300">Exlore abu Dhabi with Etihad Airways Stopover Deals</p>
                </Link>
                <Link href="" className="flex group">
                  <span className="flex items-center gap-3 bg-sky-900 text-white px-5 py-3 rounded-md hover:bg-pink-400 transition duration-300">Learn More
                    <GoArrowUpRight className="text-white text-xl group-hover:rotate-45 transition duration-300" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="group/item p-4 rounded-md shadow-md shadow-sky-300">
              <div className="overflow-hidden mb-6 rounded-md">
                <Link href='/' className="">
                  <Image src={Offer4} alt="special offer iamge" className="w-full group-hover/item:scale-125 transition duration-500 rounded-md" />
                </Link>
              </div>
              <div className="mb-4">
                <Link href="" className="">
                  <p className="text-[18px] font-semibold mb-7 text-sky-900 hover:text-pink-400 transition duration-300">Exlore abu Dhabi with Etihad Airways Stopover Deals</p>
                </Link>
                <Link href="" className="flex group">
                  <span className="flex items-center gap-3 bg-sky-900 text-white px-5 py-3 rounded-md hover:bg-pink-400 transition duration-300">Learn More
                    <GoArrowUpRight className="text-white text-xl group-hover:rotate-45 transition duration-300" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the special offers */}

      {/* start the ads section*/}
      <div className="py-14">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
              <Image src={AdsImage1} alt="ads image" className="w-full rounded-md cursor-pointer" />
            </div>
            <div>
              <Image src={AdsImage2} alt="ads image" className="w-full rounded-md cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      {/* end the ads section*/}


      {/* start the popular hotels */}
      <div className="py-14 mb-10">
        <div className="container">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold">Special Offers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="group shadow-md">
              <div className="group overflow-hidden rounded-md relative ">
                <div className="w-full h-full transition-all duration-500 bg-gray-600 bg-opacity-40 absolute"></div>
                <Image src={PopularHotel1} alt="popular hotels image" className="rounded-md 
                 transition duration-300 " />
                <div className="absolute -bottom-2 left-5 opacity-0  group-hover:opacity-100 group-hover:bottom-6 transition-all duration-500 ">
                  <h3 className="text-xl font-bold mb-2 text-white transition-all duration-500">Sayeman Beach Resort</h3>
                  <p className="text-white transition-all duration-500">Coxs Bazar</p>
                </div>
              </div>
            </div>
            <div className="group shadow-md">
              <div className="group overflow-hidden rounded-md relative ">
                <div className="w-full h-full transition-all duration-500 bg-gray-600 bg-opacity-40 absolute"></div>
                <Image src={PopularHotel2} alt="popular hotels image" className="rounded-md 
                 transition duration-300 " />
                <div className="absolute -bottom-2 left-5 opacity-0  group-hover:opacity-100 group-hover:bottom-6 transition-all duration-500 ">
                  <h3 className="text-xl font-bold mb-2 text-white transition-all duration-500">Sayeman Beach Resort</h3>
                  <p className="text-white transition-all duration-500">Coxs Bazar</p>
                </div>
              </div>
            </div>
            <div className="group shadow-md">
              <div className="group overflow-hidden rounded-md relative ">
                <div className="w-full h-full transition-all duration-500 bg-gray-600 bg-opacity-40 absolute"></div>
                <Image src={PopularHotel3} alt="popular hotels image" className="rounded-md 
                 transition duration-300 " />
                <div className="absolute -bottom-2 left-5 opacity-0  group-hover:opacity-100 group-hover:bottom-6 transition-all duration-500 ">
                  <h3 className="text-xl font-bold mb-2 text-white transition-all duration-500">Sayeman Beach Resort</h3>
                  <p className="text-white transition-all duration-500">Coxs Bazar</p>
                </div>
              </div>
            </div>
            <div className="group shadow-md">
              <div className="group overflow-hidden rounded-md relative ">
                <div className="w-full h-full transition-all duration-500 bg-gray-600 bg-opacity-40 absolute"></div>
                <Image src={PopularHotel4} alt="popular hotels image" className="rounded-md 
                 transition duration-300 " />
                <div className="absolute -bottom-2 left-5 opacity-0  group-hover:opacity-100 group-hover:bottom-6 transition-all duration-500 ">
                  <h3 className="text-xl font-bold mb-2 text-white transition-all duration-500">Sayeman Beach Resort</h3>
                  <p className="text-white transition-all duration-500">Coxs Bazar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the popular hotels */}
    </div>
  );
}
