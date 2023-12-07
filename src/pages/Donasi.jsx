import React from "react";
import ButtonDonasi from "../Components/ButtonDonasi";
import { Container, Row, Col } from "react-bootstrap";
import "../index.css";

const Donasi = () => {
  return (
    <>
      <Container className="donasi">
        <form className="donasi-content">
          {/* <Row>
            <Col className="donasi-title">
              <h1>Mari berdonasi, bersama kita bisa</h1>
            </Col>
          </Row> */}

          <Row className="donasi-sub-title">
            <Col>
              <h1>Donasi Pangan</h1>
            </Col>
            <Col>
              <h1>Donasi Dana</h1>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="btn-donasi-awal">
                <ButtonDonasi
                  TextButton="Makanan"
                  onClick={() => console.log("Tombol diklik")}
                  link="/donasi/detail-donasi-Pangan"
                />
              </div>
            </Col>
            <Col>
              <div className="btn-donasi-awal">
                <ButtonDonasi
                  TextButton="Rp. 10.000"
                  onClick={() => console.log("Tombol diklik")}
                  link="/donasi/detail-donasi-dana"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="btn-donasi-awal">
                <ButtonDonasi
                  TextButton="Minuman"
                  onClick={() => console.log("Tombol diklik")}
                  link="/donasi/detail-donasi-Pangan"
                />
              </div>
            </Col>
            <Col>
              <div className="btn-donasi-awal">
                <ButtonDonasi
                  TextButton="Rp. 20.000"
                  onClick={() => console.log("Tombol diklik")}
                  link="/donasi/detail-donasi-dana"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="btn-donasi-awal">
                <ButtonDonasi
                  TextButton="Lainnya"
                  onClick={() => console.log("Tombol diklik")}
                  link="/donasi/detail-donasi-Pangan"
                />
              </div>
            </Col>
            <Col>
              <div className="btn-donasi-awal">
                <ButtonDonasi
                  TextButton="Lainnya"
                  onClick={() => console.log("Tombol diklik")}
                  link="/donasi/detail-donasi-dana"
                />
              </div>
            </Col>
          </Row>
        </form>
      </Container>
    </>
  );
};

export default Donasi;
