import React from "react";
import { Image } from "react-bootstrap";
import Button from "../Components/Button";
import Form from "react-bootstrap/Form";

const RelawanDetail = () => {
  return (
    <>
      <div className="relawandetail">
        <div className="bgrelawandetail">
          <Image
            src="../src/assets/bgrelawandetail.png"
            fluid
            alt="backgrounddetail"
            className="img-detailrelawan w-100"
          />
        </div>
        <div className="text-detail-relawan">
          <p>
            Foodbank Yogyakarta dengan tulus membuka kesempatan bagi mereka yang
            memiliki kepedulian dan tekad untuk berkolaborasi dalam upaya
            menciptakan akses pangan yang adil di Yogyakarta. Kami mengundang
            individu dengan berbagai latar belakang dan profesi untuk bergabung
            bersama kami, menjadi penghubung yang mengantarkan kebahagiaan
            kepada komunitas sekitar. Mari mulai peran Anda sekarang dengan
            mengisi formulir di bawah ini. Bersama-sama, kita dapat membentuk
            perubahan yang positif dan berkelanjutan untuk Yogyakarta.
          </p>
          <div className="form-detail-relawan">
            <h2 className="pt-3">Daftarkan Dirimu Sekarang!</h2>
            <div>
              <Form.Group controlId="formNama" className="orange-label">
                <Form.Control type="text" placeholder="Nama " />
              </Form.Group>
            </div>
            <div>
              <Form.Group controlId="formEmail" className="orange-label2">
                <Form.Control
                  type="email"
                  placeholder="Email "
                  className="formclr"
                />
              </Form.Group>
            </div>

            <div>
              <Form.Group controlId="formTelepon" className="orange-label3">
                <Form.Control type="text" placeholder="Telepon " />
              </Form.Group>
            </div>

            <div className="ButtonContainer-relawan-detail">
              <Button TextButton="Submit" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelawanDetail;
