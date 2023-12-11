import React from "react";
import Button from "../Components/Button";
import { Image } from "react-bootstrap";
import "../index.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Relawan = () => {
  return (
    <>
      <Navbar />
      <div className="container-bg-relawan pt-5">
        <Image
          src="../src/assets/bgrelawan.png"
          fluid
          alt="background"
          className="img-fluid"
        />
        <div className="text-overlay-relawan">
          <div className="content">
            <h1>Bersama membantu </h1>
            <h2>sesama !!!</h2>
            <p className="location-text">
              bersama dengan Foodbank Yogyakarta, kami tidak hanya menyediakan
              bantuan, tetapi juga menciptakan kesempatan untuk berbuat baik.
            </p>
            <div className="btn-relawan">
              <Button
                TextButton="bergabung menjadi relawan"
                onClick={() => console.log("Tombol diklik")}
                link="/relawan/relawan-detail"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-relawan-card">
        <div className="text-overlay-relawan1">
          <h1>Keuntungan Menjadi Relawan </h1>
          <p>
            Bergabung sebagai relawan FoodBank Yogyakarta adalah pengalaman luar
            biasa. Anda tidak hanya membantu mengatasi kelaparan, tetapi juga
            mengembangkan keterampilan, mendapatkan kepuasan pribadi, dan
            memperluas jaringan sosial. Bergabunglah untuk merasakan manfaat
            positif dan berkontribusi pada perubahan besar dalam komunitas.
          </p>
          <div className="ButtonContainer-relawanbg">
            <Button
              TextButton="Detail"
              onClick={() => console.log("Tombol diklik")}
              link="/relawan/relawan-detail"
            />
          </div>
        </div>

        <div className="text-overlay-relawan2">
          <h1>Keamanan Terjamin </h1>
          <p>
            Keamanan Anda adalah prioritas utama di FoodBank Yogyakarta. Kami
            menerapkan langkah-langkah ketat, termasuk enkripsi tinggi dan
            pemantauan keamanan, untuk melindungi transaksi dan informasi
            pribadi Anda. Bergabunglah dengan percaya diri, karena keamanan Anda
            selalu menjadi fokus utama kami.
          </p>
          <div className="ButtonContainer-relawanbg2">
            <Button
              TextButton="Detail"
              onClick={() => console.log("Tombol diklik")}
              link="/relawan/relawan-detail"
            />
          </div>
        </div>

        <div className="text-overlay-relawan3">
          <h1>Semua Relawan Sudah Terjamin </h1>
          <p>
            Keamanan relawan di FoodBank Yogyakarta terjamin sepenuhnya.
            Bergabunglah dengan keyakinan bahwa informasi pribadi Anda
            dilindungi oleh langkah-langkah keamanan tinggi kami. Rasakan
            kepuasan memberikan bantuan tanpa beban, sambil memperkaya
            keterampilan dan kepuasan pribadi Anda.
          </p>
          <div className="ButtonContainer-relawanbg3">
            <Button
              TextButton="Detail"
              onClick={() => console.log("Tombol diklik")}
              link="/relawan/relawan-detail"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Relawan;
