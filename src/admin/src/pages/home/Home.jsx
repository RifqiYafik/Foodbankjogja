import React from "react";

import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-between px-48 py-6">
        <div className="bg-[#F8F8F8] rounded-lg w-2/5">
          <h1 className="text-center font-bold pt-8 text-[24px]">
            Jumlah Relawan
          </h1>
          <div class="flex flex-col items-center w-full p-6 pb-6 rounded-lg shadow-xl sm:p-4">
            <div class="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-3">
              <div class="relative flex flex-col items-center flex-grow pb-5 group">
                <div class="flex items-end w-full">
                  <div class="relative flex justify-center flex-grow h-48 w-2 bg-[#1B2426]"></div>
                  <div class="relative flex justify-center flex-grow h-48 w-2 bg-[#FEB200]"></div>
                </div>
                <span class="absolute bottom-0 text-xs font-bold">
                  15-25 th
                </span>
              </div>
              <div class="relative flex flex-col items-center flex-grow pb-5 group">
                <div class="flex items-end w-full">
                  <div class="relative flex justify-center flex-grow h-36 w-2 bg-[#1B2426]"></div>
                  <div class="relative flex justify-center flex-grow h-36 w-2 bg-[#FEB200]"></div>
                </div>
                <span class="absolute bottom-0 text-xs font-bold">
                  25-35 th
                </span>
              </div>
              <div class="relative flex flex-col items-center flex-grow pb-5 group">
                <div class="flex items-end w-full">
                  <div class="relative flex justify-center flex-grow h-28 bg-[#1B2426]"></div>
                  <div class="relative flex justify-center flex-grow h-28 bg-[#FEB200]"></div>
                </div>
                <span class="absolute bottom-0 text-xs font-bold">
                  35-50 th
                </span>
              </div>
            </div>
            <div class="flex flex-col w-full mt-4">
              <div class="flex items-center pb-2 ml-40">
                <span class="block h-4 bg-[#FEB200] w-8"></span>
                <span class="text-xs font-medium pl-4">Perempuan</span>
              </div>
              <div class="flex items-center ml-40">
                <span class="block h-4 bg-[#1B2426] w-8"></span>
                <span class="text-xs font-medium pl-4">Laki - laki</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F8F8F8] rounded-lg w-2/5">
          <h1 className="text-center font-bold pt-8 text-[24px]">
            Jumlah Donasi
          </h1>
          <div class="flex flex-col items-center w-full p-6 pb-6 rounded-lg shadow-xl sm:p-4">
            <div class="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-3">
              <div class="relative flex flex-col items-center flex-grow pb-5 group">
                <div class="flex flex-col">
                  <div class="w-48 h-24 rounded-tl-full rounded-tr-full border-2 border-[#FEB200]"></div>
                  <span className="absolute top-14 left-40 font-bold text-[48px]">
                    50%
                  </span>
                  <div class="w-48 h-24 rounded-bl-full rounded-br-full bg-[#FEB200]"></div>
                </div>
              </div>
            </div>
            <div class="flex flex-col w-full mt-4">
              <div class="flex items-center justify-center">
                <button className="px-4 py-2 bg-[#1B2426] text-white rounded-lg">
                  Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-96 my-6 px-32 bg-[#F8F8F8] rounded-lg shadow-xl">
        <h1 className="text-center font-bold py-8 text-[24px]">
          Jumlah Donasi
        </h1>
        <div class="flex flex-col items-center w-full mb-6 rounded-lg">
          <div class="flex items-end flex-grow w-full space-x-2 sm:space-x-3 ">
            <div class="relative flex flex-col items-center flex-grow pb-5 group">
              <div class="flex items-end w-1/2">
                <div class="relative flex justify-center flex-grow h-48 bg-[#FEB200] items-center text-white">
                  35%
                </div>
              </div>
              <span class="absolute bottom-0 text-xs font-bold">Uang</span>
            </div>
            <div class="relative flex flex-col items-center flex-grow pb-5 group">
              <div class="flex items-end w-1/2">
                <div class="relative flex justify-center flex-grow h-36 bg-[#FEB200] items-center text-white">
                  10%
                </div>
              </div>
              <span class="absolute bottom-0 text-xs font-bold">Makanan</span>
            </div>
            <div class="relative flex flex-col items-center flex-grow pb-5 group">
              <div class="flex items-end w-1/2">
                <div class="relative flex justify-center flex-grow h-28 bg-[#FEB200] items-center text-white">
                  5%
                </div>
              </div>
              <span class="absolute bottom-0 text-xs font-bold">Lainnya</span>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
