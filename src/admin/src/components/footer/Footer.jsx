import React from "react";

import footerLogo from "../../assets/footer-logo.svg";
import iconTelegram from "../../assets/telegram.svg";
import iconInstagram from "../../assets/instagram.svg";
import iconTwitter from "../../assets/twitter.svg";
import Map from "../../assets/map.svg";
import Phone from "../../assets/phone.svg";
import Mail from "../../assets/mail.svg";

export default function Footer() {
  return (
    <footer className="bg-[#1B2426] text-white">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-0 sm:px-8 px-5 py-16">
        <div>
          <img src={footerLogo} alt="" />
          <p>
            Sebagai agen perubahan yang peduli, bersama-sama kami menciptakan
            kisah kebersamaan yang tak terlupakan, mengubah harapan menjadi
            kenyataan, dan menjadi cahaya bagi mereka yang membutuhkan. Ayo
            bergabung dalam perjalanan kebaikan ini, dan bersama-sama, mari kita
            tinggalkan jejak positif yang menghadirkan kebahagiaan.
          </p>
        </div>
        <div className="pl-10">
          <h2 className="text-[#FEB200] font-bold text-lg mb-8">Link Kilat</h2>
          <ul className="ml-6">
            <li className="list-image-checkmark">FAQ</li>
            <li className="list-image-checkmark">support</li>
            <li className="list-image-checkmark">sitemap</li>
            <li className="list-image-checkmark">blog</li>
            <li className="list-image-checkmark">community</li>
          </ul>
        </div>
        <div className="pl-10">
          <h2 className="text-[#FEB200] font-bold text-lg mb-8">Alamat</h2>
          <div className="ml-6">
            <p>
              <span className="inline-block mr-2">
                <img src={Map} alt="" />
              </span>
              alamat : yogyakarta bla bla
            </p>
            <p>
              <span className="inline-block mr-2">
                <img src={Phone} alt="" />
              </span>
              +628569070707
            </p>
            <p>
              <span className="inline-block mr-2">
                <img src={Mail} alt="" />
              </span>
              foodbank_yogyakarta.id
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-evenly items-center h-full">
            <img src={iconTelegram} alt="" />
            <img src={iconInstagram} alt="" />
            <img src={iconTwitter} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-[#FEB200]">
        <p className="text-center font-bold text-lg text-black py-4">
          made by team de'sudurat
        </p>
      </div>
    </footer>
  );
}
