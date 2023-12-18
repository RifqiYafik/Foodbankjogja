// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "../Components/Button";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import "../index.css";
// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";
// function Kontak() {
//   const [formData, setFormData] = useState({
//     nama: "",
//     email: "",
//     phoneNumber: "",
//     pesan: "",
//     alamat: "",
//     anonymous: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//  // Fungsi untuk menangani pengiriman formulir
//  const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     // Kirim data formulir ke titik akhir API backend
//     const response = await fetch('https://your-backend-api.com/kirim-email', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     if (response.ok) {
//       console.log('Email berhasil dikirim');
//     } else {
//       console.error('Gagal mengirim email');
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

//   return (
//     <>
//       <Navbar />
//       <Container>
//         <div>
//           <h1>Hubungi kami atau berikan pendapat anda tentang kami!</h1>
//         </div>
//         <Form onSubmit={handleSubmit} className="form-kontak">
//           <Row>
//             <Col>
//               <Form.Group controlId="nama">
//                 <Form.Label style={{ color: "#505050" }}></Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="nama"
//                   placeholder="Nama"
//                   value={formData.nama}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>
//               <Form.Group controlId="email">
//                 <Form.Label
//                   style={{ color: "#808080", marginTop: "30px" }}
//                 ></Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="email"
//                   placeholder="Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>{" "}
//               <Form.Group controlId="phoneNumber">
//                 <Form.Label
//                   style={{ color: "#808080", marginTop: "30px" }}
//                 ></Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="phoneNumber"
//                   placeholder="Nomor Telepon"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>{" "}
//               <Form.Group controlId="pesan">
//                 <Form.Label
//                   style={{ color: "#505050", marginTop: "30px" }}
//                 ></Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={3}
//                   name="pesan"
//                   placeholder="Pesan"
//                   value={formData.pesan}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//             <Col>
//               <Form.Group controlId="alamat">
//                 <Form.Label
//                   style={{ color: "#808080", width: "200px" }}
//                 ></Form.Label>
//                 <Form.Control
//                   disabled
//                   as="textarea"
//                   rows={13}
//                   name="alamat"
//                   placeholder="FOODBANK Yogyakarta

// No. 20, Jalan Amarta, Pringgolayan, Dabag, Condongcatur, Depok, Sleman, DI Yogyakarta"
//                   value={formData.alamat}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>
//             </Col>
//           </Row>

//           <div onSubmit={handleSubmit} className="div-kontak">
//         {/* ... (bagian formulir lainnya) */}
//         <div className="Btn-donasi">
//           <Button TextButton="Submit" onClick={handleSubmit} />
//         </div>
//       </div>
//         </Form>

//         <div className="text-kontak ">
//           <h1> Jadilah Mitra atau Donatur Bersama Foodbank Yogyakarta</h1>
//           <h2> Kecilkan Jarak, Besarkan Kebaikan!</h2>
//         </div>

//         <div className="Btn-kontak">
//         <a href="https://wa.me/6282336479568" target="_blank" rel="noopener noreferrer">
//           <Button TextButton="Hubungi Kami" />
//         </a>
//         </div>
//       </Container>
//       <Footer />
//     </>
//   );
// }

// export default Kontak;

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "../Components/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../index.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
function Kontak() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    phoneNumber: "",
    pesan: "",
    alamat: "",
    anonymous: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Fungsi untuk menangani pengiriman formulir
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Kirim data formulir ke titik akhir API backend
      const response = await fetch("https://your-backend-api.com/kirim-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email berhasil dikirim");
      } else {
        console.error("Gagal mengirim email");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <div>
          <h1>Hubungi kami atau berikan pendapat anda tentang kami!</h1>
        </div>
        <Form onSubmit={handleSubmit} className="form-kontak">
          <Row>
            <Col>
              <Form.Group controlId="nama">
                <Form.Label style={{ color: "#505050" }}></Form.Label>
                <Form.Control
                  type="text"
                  name="nama"
                  placeholder="Nama"
                  value={formData.nama}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label
                  style={{ color: "#808080", marginTop: "30px" }}
                ></Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>{" "}
              <Form.Group controlId="phoneNumber">
                <Form.Label
                  style={{ color: "#808080", marginTop: "30px" }}
                ></Form.Label>
                <Form.Control
                  type="text"
                  name="phoneNumber"
                  placeholder="Nomor Telepon"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </Form.Group>{" "}
              <Form.Group controlId="pesan">
                <Form.Label
                  style={{ color: "#505050", marginTop: "30px" }}
                ></Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="pesan"
                  placeholder="Pesan"
                  value={formData.pesan}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="alamat">
                <Form.Label
                  style={{ color: "#808080", width: "200px" }}
                ></Form.Label>
                <Form.Control
                  disabled
                  as="textarea"
                  rows={13}
                  name="alamat"
                  placeholder="FOODBANK Yogyakarta

No. 20, Jalan Amarta, Pringgolayan, Dabag, Condongcatur, Depok, Sleman, DI Yogyakarta"
                  value={formData.alamat}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <div onSubmit={handleSubmit} className="div-kontak">
            {/* ... (bagian formulir lainnya) */}
            <div className="Btn-donasi">
              <Button TextButton="Submit" onClick={handleSubmit} />
            </div>
          </div>
        </Form>

        <div className="text-kontak ">
          <h1> Jadilah Mitra atau Donatur Bersama Foodbank Yogyakarta</h1>
          <h2> Kecilkan Jarak, Besarkan Kebaikan!</h2>
        </div>

        <div className="Btn-kontak">
          <a
            href="https://wa.me/6282336479568"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button TextButton="Hubungi Kami" />
          </a>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Kontak;
