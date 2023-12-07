import React from "react";
import "../index.css";
import { Container, Row, Col } from "react-bootstrap";
import ButtonNext from "../Components/ButtonNext";
import { pelayanan, testimoni, dataPenyaluran } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section>
        <div className="jumbotron ">
          <Container>
            <Row>
              <Col>
                <div className="content">
                  <h1 className="display-5 fw-bold">
                    Sentuhan kebaikan untuk bersama
                  </h1>
                  <p>
                    Bersama dengan Foodbank Yogyakarta, kami tidak hanya
                    menyediakan bantuan, tetapi juga menciptakan kesempatan
                    untuk berbuat baik. Sebagai pendorong rasa peduli, kita
                    bersama-sama menciptakan kisah kebersamaan yang tak
                    terlupakan, mengubah harapan menjadi kenyataan, dan menjadi
                    cahaya bagi mereka yang membutuhkan. Mari ikut serta dalam
                    perjalanan kebaikan ini, dan bersama-sama, kita tinggalkan
                    jejak positif yang membawa kebahagiaan kepada mereka yang
                    membutuhkan.
                  </p>
                  <ButtonNext TextButton="detail" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Hero Section End */}

        {/* Disini jajar genjang */}

        <Container className="DataPenyaluran">
          <Row>
            {dataPenyaluran.map((dp) => {
              return (
                <Col key={dp.id} className="px-0">
                  <div className="jajar-genjang">
                    <h5>{dp.jumlah}</h5>
                    <h4>{dp.title}</h4>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>

        {/* Pelayanan Section */}

        <div className="pelayanan min-vh-100 py-3">
          <Container>
            <Row>
              <Col>
                <h1 className="text-center fw-bold py-5 title">Pelayanan</h1>
              </Col>
            </Row>
            <Row>
              {pelayanan.map((Pelayanan) => {
                return (
                  <Col key={Pelayanan.id} className="px-4">
                    <div className="card">
                      <img src={Pelayanan.image} alt="image" width="35%" />
                      <h1 className="fw-bold fs-2 py-2">{Pelayanan.title}</h1>
                      <p className="">{Pelayanan.description}</p>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
        {/* Pelayanan Section End */}
        {/* Testimoni Section
        <div className="testimoni min-vh-100 py-5">
          <Container>
            <Row>
              <Col>
                <h1 className="text-center fw-bold py-5">Testimoni</h1>
              </Col>
            </Row>
            <Row>
              <div>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    992: {
                      slidesPerView: 2,
                      spaceBetween: 50,
                    },
                    1200: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {testimoni.map((testi) => {
                    return (
                      <SwiperSlide key={testi.id} className="shadow rounded-5">
                        <p className="desc">{testi.description}</p>
                        <div className="people">
                          <img src={testi.image} alt="image" className="" />
                          <div>
                            <h5 className="mb-1">{testi.name}</h5>
                            <i className={testi.star1}></i>
                            <i className={testi.star2}></i>
                            <i className={testi.star3}></i>
                            <i className={testi.star4}></i>
                            <i className={testi.star5}></i>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </Row>
          </Container>
        </div> */}
        {/* Testimoni Section */}
        <div className="testimoni2 min-vh-100 py-5">
          <Container>
            <Row>
              <Col>
                <h1 className="text-center fw-bold py-5">Testimoni</h1>
              </Col>
            </Row>
            <Row>
              <div>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    992: {
                      slidesPerView: 2,
                      spaceBetween: 50,
                    },
                    1200: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {testimoni.map((testi) => {
                    return (
                      <SwiperSlide key={testi.id} className="shadow rounded-5">
                        <div className="peoplee">
                          <img src={testi.image} alt="image" className="" />
                          <div>
                            <h5 className="my-1">{testi.name}</h5>
                            <i className={testi.star1}></i>
                            <i className={testi.star2}></i>
                            <i className={testi.star3}></i>
                            <i className={testi.star4}></i>
                            <i className={testi.star5}></i>
                          </div>
                        </div>
                        <p className="descc mt-3">{testi.description}</p>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </Row>
          </Container>
        </div>
        {/* Testimoni Section End */}
        <div className="komunitas">
          <Container>
            <Row>
              <Col>
                <div className="namakomunitas">
                  <h1>
                    Komunitas <br /> Sosial
                  </h1>
                  <h1>
                    Nasi Darurat <br />
                    Jogja
                  </h1>
                  <h1>
                    Komunitas <br /> Kemanusiaan
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Home;
