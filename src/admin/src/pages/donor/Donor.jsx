import React, { useState } from "react";
import { Image, Button } from "react-bootstrap"; // Mengimpor komponen Button dari react-bootstrap
import Navbar from "../../components/Navbar";
import Footer from "../../../../Components/Footer";
import Filter from "../../assetss/filter.svg";

const Donasi = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // Data donasi
  const dataDonasi = [
    {
      id: 1,
      nama: "Imelda Napitupulu",
      email: "imelda@gmail.com",
      telpon: "081234567890",
      tanggal: "11/12/2023",
      jumlah: 10000,
    },
    {
      id: 2,
      nama: "Azhra Putri",
      email: "azahra@gmail.com",
      telpon: "081234567890",
      tanggal: "11/12/2023",
      jumlah: 20000,
    },
    {
      id: 3,
      nama: "Fikri",
      email: "fikri@gmail.com",
      telpon: "081234567890",
      tanggal: "11/12/2023",
      jumlah: 25000,
    },
    {
      id: 4,
      nama: "Rifki Yafik",
      email: "yafik@gmail.com",
      telpon: "081234567890",
      tanggal: "11/12/2023",
      jumlah: 30000,
    },
    {
      id: 5,
      nama: "Amar",
      email: "amar@gmail.com",
      telpon: "081234567890",
      tanggal: "11/12/2023",
      jumlah: 10000,
    },
    {
      id: 6,
      nama: "Elvin Ganteng",
      email: "elvin@gmail.com",
      telpon: "081234567890",
      tanggal: "11/12/2023",
      jumlah: 20000,
    },
    {
      id: 7,
      nama: "Nur Saputra",
      email: "nur@gmail.com",
      telpon: "081234567890",
      tanggal: "11/12/2023",
      jumlah: 25000,
    },
  ];

  // Menghitung total donasi
  const totalDonasi = dataDonasi.reduce((acc, curr) => acc + curr.jumlah, 0);

  const filterDonasi = dataDonasi.filter((relawan) =>
    relawan.nama.toLowerCase().includes(searchTerm.toLowerCase())
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
        <h2 className="py-5">Data Donasi</h2>
        <div className="flex flex-column">
          <div>
            {/* Search box */}
            <input
              type="search"
              placeholder="Cari Donasi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
        <table className="text-center table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Telpon</th>
              <th>Tanggal donasi</th>
              <th>Jumlah donasi</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filterDonasi.map((donasi) => (
              <tr key={donasi.id}>
                <td>{donasi.id}</td>
                <td>{donasi.nama}</td>
                <td>{donasi.email}</td>
                <td>{donasi.telpon}</td>
                <td>{donasi.tanggal}</td>
                <td>{`Rp.${donasi.jumlah.toLocaleString()}`}</td>
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
          {/* Kolom Total Donasi */}
          <tfoot>
            <tr>
              <td></td>
              <td
                style={{ fontWeight: "bold", textAlign: "center" }}
                colSpan="4"
              >
                Total Donasi:
              </td>
              <td>{`Rp.${totalDonasi.toLocaleString()}`}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
        <div className="button-relawan-admin2">
          <Button variant="dark" className="mb-3">
            Unduh
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Donasi;
