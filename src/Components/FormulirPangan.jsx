import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "./Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FormulirPangan() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    amount: "",
    description: "",
    anonymous: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data FormulirPangan, misalnya mengirimnya ke server
    console.log(formData);
  };

  // Pembayaran donasi (anonim)
  function anonima() {
    let checkbox = document.getElementById("checkbox");

    if (checkbox) {
      let inputs = document.getElementsByClassName("form-control");

      for (let i = 0; i < 3; i++) {
        inputs[i].disabled = checkbox.checked;
      }
    } else {
      console.error("nothing");
    }
  }

  return (
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
            <Form.Group controlId="amount">
              <Form.Label className="pt-2" style={{ color: "#505050" }}>
                Jenis Makanan <sup style={{ color: "#ff0000" }}>*</sup>
              </Form.Label>
              <Form.Control
                type="number"
                name="amount"
                placeholder="contoh: Sayur, beras, makanan sisa"
                value={formData.amount}
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
                type="tel"
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
            <Form.Group controlId="amount">
              <Form.Label className="pt-2" style={{ color: "#505050" }}>
                Jumlah Makanan <sup style={{ color: "#ff0000" }}>*</sup>
              </Form.Label>
              <Form.Control
                type="number"
                name="amount"
                placeholder="contoh: 1 bungkus, 1 kilogram, 1 porsi"
                value={formData.amount}
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
              <span style={{ color: "#505050" }}>Berdonasi sebagai anonim</span>
            }
            name="anonymous"
            checked={formData.anonymous}
            onChange={handleChange}
          />
        </Form.Group>

        <div className="Btn-donasi">
          <Button TextButton="Submit" />
        </div>
      </Form>
    </Container>
  );
}

export default FormulirPangan;
