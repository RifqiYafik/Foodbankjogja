import React, { useState } from "react";
import { Image, Button } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import Footer from "../../../../Components/Footer";
import Filter from "../../assetss/filter.svg";

const Volunteer = () => {
  // State untuk menyimpan nilai input search
  const [searchName, setsearchName] = useState("");
  const [searchAlamat, setSearchAlamat] = useState("");

  // Data relawan (contoh data, dapat disesuaikan)
  const relawanData = [
    {
      id: 1,
      nama: "Imelda Napitupulu",
      email: "imelda@gmail.com",
      telpon: "081234567890",
      tanggalBergabung: "11/12/2023",
      alamat: "Palembang",
      jenisKelamin: "Perempuan",
    },
    {
      id: 2,
      nama: "Azahra Putri",
      email: "azahra@gmail.com",
      telpon: "081234567890",
      tanggalBergabung: "11/12/2023",
      alamat: "Padang",
      jenisKelamin: "Perempuan",
    },
    {
      id: 3,
      nama: "Fikri",
      email: "fikri@gmail.com",
      telpon: "081234567890",
      tanggalBergabung: "11/12/2023",
      alamat: "Palembang",
      jenisKelamin: "Laki-Laki",
    },
    {
      id: 4,
      nama: "Rifki Yafik",
      email: "yafik@gmail.com",
      telpon: "081234567890",
      tanggalBergabung: "11/12/2023",
      alamat: "Medan",
      jenisKelamin: "Laki-Laki",
    },
    {
      id: 5,
      nama: "Amar",
      email: "amar@gmail.com",
      telpon: "081234567890",
      tanggalBergabung: "11/12/2023",
      alamat: "Yogyakarta",
      jenisKelamin: "Laki-Laki",
    },
    {
      id: 6,
      nama: "Elvin Ganteng",
      email: "elvin@gmail.com",
      telpon: "081234567890",
      tanggalBergabung: "11/12/2023",
      alamat: "Medan",
      jenisKelamin: "Laki-Laki",
    },
    {
      id: 7,
      nama: "Nur Saputra",
      email: "nur@gmail.com",
      telpon: "081234567890",
      tanggalBergabung: "11/12/2023",
      alamat: "Batam",
      jenisKelamin: "Laki-Laki",
    },
  ];

  // Filter data relawan berdasarkan input search
  const filteredRelawan = relawanData.filter(
    (relawan) =>
      relawan.nama.toLowerCase().includes(searchName.toLowerCase()) ||
      relawan.alamat.toLowerCase().includes(searchAlamat.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="container-bg-admin">
        <Image
          src="../src/admin/src/assetss/background.jpg"
          alt="backgroundadmin"
          className="bg-admin"
        />
        <div className="text-overlay-admin">
          <div className="content">
            <h1>Pusat Peduli Yogyakarta</h1>
            <p className="text-admin mt-3">
              Selamat datang di Pusat Peduli Yogyakarta! Bergabunglah dalam
              perjuangan kami melawan kelaparan dengan memberikan donasi
              makanan/uang dan menjadi relawan. Ciptakan perubahan positif untuk
              memastikan setiap warga Yogyakarta memiliki akses terhadap makanan
              yang cukup dan bergizi. Mari kita peduli bersama di Pusat Peduli
              Yogyakarta.
            </p>
          </div>
        </div>
      </div>

      <div className="table-admin">
        <h2 className="py-5">Data Relawan</h2>
        <div className="flex flex-column">
          <div>
            {/* Search box */}
            <input
              type="search"
              placeholder="Cari Relawan..."
              value={searchName}
              onChange={(e) =>
                setsearchName(e.target.value) || setSearchAlamat(e.target.value)
              }
              className=" text-sm my-4 p-3 border-[#FEB200] "
            />
          </div>
          <img
            src={Filter}
            alt=""
            width="25px"
            style={{
              position: "absolute",
              marginLeft: "90.5rem",
              marginTop: "2.5rem",
            }}
          />
        </div>

        {/* Tombol Add News */}
        <Button variant="primary" className="mb-3">
          Tambah Data
        </Button>

        {/* Tabel dengan tombol Edit dan Delete */}
        <table className="table text-center">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Telpon</th>
              <th>Tanggal Bergabung</th>
              <th>Alamat</th>
              <th>Jenis Kelamin</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {/* Mapping data relawan yang telah difilter */}
            {filteredRelawan.map((relawan) => (
              <tr key={relawan.id}>
                <td>{relawan.id}</td>
                <td>{relawan.nama}</td>
                <td>{relawan.email}</td>
                <td>{relawan.telpon}</td>
                <td>{relawan.tanggalBergabung}</td>
                <td>{relawan.alamat}</td>
                <td>{relawan.jenisKelamin}</td>
                <td>
                  <div className="button-admin">
                    <div>
                      <Button variant="warning">Edit</Button>
                    </div>
                    <div>
                      <Button variant="danger">Hapus</Button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="button-relawan-admin1">
          <Button variant="dark" className="mb-3">
            Unduh
          </Button>
          <Button
            variant="dark"
            className="mb-3"
            style={{ marginLeft: "40px" }}
          >
            Detail
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Volunteer;
