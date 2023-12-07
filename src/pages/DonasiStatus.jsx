import React from "react";

const DonasiStatus = () => {
  return (
    <>
      <div class="container">
        {/*  Status */}
        <div class="status-pembayaran">
          <div class="row">
            <div class="col">
              <div class="img-status d-flex justify-content-end">
                <img class="" src="../assets/thanks-status.svg" alt="" />
              </div>
            </div>
            <div class="col">
              <div class="greetings">
                <i
                  class="fa-solid fa-circle-check mb-3"
                  style="color: #4caf50"
                ></i>
                <h1>
                  Terima kasih <br />
                  Sudah Berdonasi!
                </h1>

                <p>Donasimu sudah</p>
                <p>berhasil dilakukan</p>

                <a class="btn d-block" href="index.html">
                  Kembali ke Beranda{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonasiStatus;
