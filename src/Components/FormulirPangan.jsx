import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from "axios";

function FormulirPangan() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    descriptionMakanan: "",
    descriptionJumlah: "",
    description: "",
    anonymous: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // setFormData({
    //   ...formData,
    //   [name]: type === "checkbox" ? checked : value,
    // });
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data FormulirPangan, misalnya mengirimnya ke server
    console.log(formData);
    // Kirim pesan ke WhatsApp menggunakan Twilio
    try {
      const response = await axios.post(
        "http://localhost:2023/backend/send-whatsapp",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error sending WhatsApp message:", error);
    }
  };

  // Pembayaran donasi (anonim)
  function anonima() {
    let checkbox = document.getElementById("checkbox");

    if (checkbox) {
      let inputs = document.getElementsByClassName("form-control");

      for (let i = 0; i < 3; i++) {
        // inputs[i].disabled = checkbox.checked;
        if (checkbox.checked) {
          // Jika dicentang, atur nilai dan status disabled
          inputs[i].disabled = true;
          if (i === 0) {
            setFormData((prevData) => ({ ...prevData, firstName: "Hamba" }));
          } else if (i === 1) {
            setFormData((prevData) => ({ ...prevData, lastName: "Allah" }));
          } else if (i === 2) {
            const randomSuffix = Math.floor(Math.random() * 1000);
            setFormData((prevData) => ({
              ...prevData,
              email: `Someone${randomSuffix}@gmail.com`,
            }));
          }
        } else {
          // Jika tidak dicentang, atur kembali ke nilai dan status semula
          inputs[i].disabled = false;
          setFormData((prevData) => ({
            ...prevData,
            firstName: "",
            lastName: "",
            email: "",
          }));
        }
      }
    } else {
      console.error("nothing");
    }
  }

  return (
    <>
      <Navbar />
      <Container className="detail-donasi">
        <Form onSubmit={handleSubmit} className="form-detail-donasi">
          <div className="container-donasi">
            <h1 className="fw-bold">Detail Donasi</h1>
          </div>
          <Row>
            <Col>
              <Form.Group controlId="firstName">
                <Form.Label style={{ color: "#505050" }}>
                  Nama Depan <sup style={{ color: "#ff0000" }}>*</sup>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="Masukkan Nama depan Anda"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="lastName">
                <Form.Label style={{ color: "#505050" }}>
                  Nama Belakang <sup style={{ color: "#ff0000" }}>*</sup>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Masukkan Nama belakang Anda"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="email">
                <Form.Label className="pt-2" style={{ color: "#505050" }}>
                  Alamat Email <sup style={{ color: "#ff0000" }}>*</sup>
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="contoh: VonzyFelicia@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="description">
                <Form.Label className="pt-2" style={{ color: "#505050" }}>
                  Jenis Makanan <sup style={{ color: "#ff0000" }}>*</sup>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="descriptionMakanan"
                  placeholder="contoh: Sayur, beras, makanan sisa"
                  value={formData.descriptionMakanan}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="phoneNumber">
                <Form.Label className="pt-2" style={{ color: "#505050" }}>
                  Nomor Telepon/Wa <sup style={{ color: "#ff0000" }}>*</sup>
                </Form.Label>
                <Form.Control
                  type="number"
                  name="phoneNumber"
                  placeholder="contoh: 085200112234"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
                <Form.Label className="pt-2" style={{ color: "#505050" }}>
                  Alamat <sup style={{ color: "#ff0000" }}>*</sup>
                </Form.Label>
                <Form.Control
                  className="textarea"
                  as="textarea"
                  rows={3}
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="description">
                <Form.Label className="pt-2" style={{ color: "#505050" }}>
                  Jumlah Makanan <sup style={{ color: "#ff0000" }}>*</sup>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="descriptionJumlah"
                  placeholder="contoh: 1 bungkus, 1 kilogram, 1 porsi"
                  value={formData.descriptionJumlah}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label className="pt-2" style={{ color: "#505050" }}>
                  Deksripsi
                </Form.Label>
                <Form.Control
                  className="textarea"
                  as="textarea"
                  rows={3}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="anonymous" className="py-3">
            <Form.Check
              onClick={anonima}
              id="checkbox"
              type="checkbox"
              label={
                <span style={{ color: "#505050" }}>
                  Berdonasi sebagai anonim
                </span>
              }
              name="anonymous"
              checked={formData.anonymous}
              onChange={handleChange}
            />
          </Form.Group>

          <div className="Btn-donasi">
            <button className="button-all">Submit</button>
          </div>
        </Form>
      </Container>
      <Footer />
    </>
  );
}

export default FormulirPangan;
