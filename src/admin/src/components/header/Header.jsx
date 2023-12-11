import React from "react";

export default function Header() {
  return (
    <header className="bg-hero bg-cover bg-no-repeat h-full">
      <div className="flex justify-center items-center">
        <div className="bg-[#F8F8F8] w-1/2 m-28 py-8 px-14 rounded-lg">
          <h1 className="font-bold text-[32px] pb-8">
            Pusat Peduli Yogyakarta
          </h1>
          <p>
            Selamat datang di Pusat Peduli Yogyakarta! Bergabunglah dalam
            perjuangan kami melawan kelaparan dengan memberikan donasi
            makanan/uang dan menjadi relawan. Ciptakan perubahan positif untuk
            memastikan setiap warga Yogyakarta memiliki akses terhadap makanan
            yang cukup dan bergizi. Mari kita peduli bersama di Pusat Peduli
            Yogyakarta
          </p>
        </div>
      </div>
    </header>
  );
}
