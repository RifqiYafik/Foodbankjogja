import React from "react";

import Navbar from "../../components/header/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import Filter from "../../assetss/filter.svg";

export default function Volunteer() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <div className="flex flex-col justify-center">
        <form className="flex row justify-center py-4">
          <label for="default-search" class="text-sm font-medium sr-only">
            Search
          </label>
          <div class="relative w-1/2 mr-4">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
              <svg
                class="w-4 h-4 text-[#FEB200]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-[#FEB200] rounded-lg"
              required
            />
          </div>
          <img src={Filter} alt="" width="25px" />
        </form>
        <div className="text-center">
          <h1 className="font-bold text-[32px] pb-4">Data Relawan</h1>
        </div>
        <div className="flex justify-center py-4">
          <table class="w-3/4">
            <thead className="bg-white border-black border-2">
              <tr>
                <th className="p-3 text-sm font-semibold tracking-wide text-left border-black border-2">
                  No
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left border-black border-2">
                  Nama
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left border-black border-2">
                  Email
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left border-black border-2">
                  Telpon
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left border-black border-2">
                  Tanggal Bergabung
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left border-black border-2">
                  Alamat
                </th>
              </tr>
            </thead>
            <tbody className="bg-white border-black border-2">
              <tr className="bg-white border-black border-2">
                <td className="p-3 text-sm text-gray-700 border-black border-2">
                  1
                </td>
                <td className="p-3 text-sm text-gray-700 border-black border-2">
                  Imelda
                </td>
                <td className="p-3 text-sm text-gray-700 border-black border-2">
                  Imelda@gmail.com
                </td>
                <td className="p-3 text-sm text-gray-700 border-black border-2">
                  08888888888
                </td>
                <td className="p-3 text-sm text-gray-700 border-black border-2">
                  selasa, 14/11/2023
                </td>
                <td className="p-3 text-sm text-gray-700 border-black border-2">
                  yogyakarta
                </td>
              </tr>
              <tr className="bg-white border-black border-2">
                <td className="p-3 text-sm text-gray-700 border-black border-2">
                  2
                </td>
                <td className="p-3 text-sm text-gray-700 border-black border-2">
                  Azzahra
                </td>
                <td className="p-3 text-sm text-gray-700 border-black border-2">
                  Azzahra@gmail.com
                </td>
                <td className="p-3 text-sm text-gray-700 border-black border-2">
                  08888888888
                </td>
                <td className="p-3 text-sm text-gray-700 border-black border-2">
                  selasa, 14/11/2023
                </td>
                <td className="p-3 text-sm text-gray-700 border-black border-2">
                  yogyakarta
                </td>
              </tr>
              <tr className="bg-white border-black border-2">
                <td className="p-3 text-sm text-gray-700 border-black border-2">
                  3
                </td>
                <td className="p-3 text-sm text-gray-700 border-black border-2">
                  Yafiq
                </td>
                <td className="p-3 text-sm text-gray-700 border-black border-2">
                  Yafiq@gmail.com
                </td>
                <td className="p-3 text-sm text-gray-700 border-black border-2">
                  08888888888
                </td>
                <td className="p-3 text-sm text-gray-700 border-black border-2">
                  selasa, 14/11/2023
                </td>
                <td className="p-3 text-sm text-gray-700 border-black border-2">
                  yogyakarta
                </td>
              </tr>
              <tr className="bg-white border-black border-2">
                <td className="p-3 text-sm text-gray-700 border-black border-2">
                  4
                </td>
                <td className="p-3 text-sm text-gray-700 border-black border-2">
                  Muammar
                </td>
                <td className="p-3 text-sm text-gray-700 border-black border-2">
                  Muammar@gmail.com
                </td>
                <td className="p-3 text-sm text-gray-700 border-black border-2">
                  08888888888
                </td>
                <td className="p-3 text-sm text-gray-700 border-black border-2">
                  selasa, 14/11/2023
                </td>
                <td className="p-3 text-sm text-gray-700 border-black border-2">
                  yogyakarta
                </td>
              </tr>
              <tr className="bg-white border-black border-2">
                <td className="p-3 text-sm text-gray-700 border-black border-2">
                  5
                </td>
                <td className="p-3 text-sm text-gray-700 border-black border-2">
                  Fiqri
                </td>
                <td className="p-3 text-sm text-gray-700 border-black border-2">
                  Fiqri@gmail.com
                </td>
                <td className="p-3 text-sm text-gray-700 border-black border-2">
                  08888888888
                </td>
                <td className="p-3 text-sm text-gray-700 border-black border-2">
                  selasa, 14/11/2023
                </td>
                <td className="p-3 text-sm text-gray-700 border-black border-2">
                  yogyakarta
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-end px-48 py-4">
          <button className="px-8 py-4 bg-[#1B2426] text-white font-semibold mr-4 rounded-lg">
            Unduh
          </button>
          <button className="px-8 py-4 bg-[#1B2426] text-white font-semibold rounded-lg">
            Detail
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
