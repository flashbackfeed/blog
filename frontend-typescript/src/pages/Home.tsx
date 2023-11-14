import React, { useEffect } from "react";
import initMain from "../assets/js/main";

function Home() {
  useEffect(() => {
    initMain();
  }, []);
  return (
    <>
      {/* <!-- Carousel Start --> */}
      <div className="container-fluid px-0 mb-5">
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/main.jpeg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-7 text-start">
                      <p className="fs-4 text-white animated slideInRight">
                        Welcome to
                        <strong> Sample site</strong>
                      </p>
                      <h1 className="display-1 text-white mb-4 animated slideInRight">
                        Many Funtion And Design
                      </h1>
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                  <div className="d-flex justify-content-center">
                    <a
                      href="#skills"
                      className="btn btn-primary rounded-pill py-3 px-5 animated slideInRight"
                    >
                      Start
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/main.jpeg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-end">
                    <div className="col-lg-7 text-end">
                      <p className="fs-4 text-white animated slideInLeft">
                        <strong>샘플사이트</strong>에 오신것을 환영합니다.
                      </p>
                      <h1 className="display-1 text-white mb-5 animated slideInLeft">
                        여러 기능 그리고 &nbsp;&nbsp;&nbsp;디자인
                      </h1>
                    </div>
                  </div>
                  <br/>
                  <br/>
                  <div className="d-flex justify-content-center">
                    <a
                      href="#skills"
                      className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft"
                    >
                      시작
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* <!-- Carousel End --> */}

      {/* <!-- Service Start --> */}
      <div id="skills">
      <div className="container-xxl py-5">
        <div className="container" >
          <div
            className="text-center mx-auto wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 + "px" }}
          >
            <p className="fs-5 fw-medium text-primary">My Skills</p>
            <p className="display-5 mb-5">경험해본 기술들</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="service-item position-relative h-100">
                <div className="service-text rounded p-5">
                  <div
                    className="btn-square bg-light rounded-circle mx-auto mb-4"
                    style={{ width: 64 + "px", height: 64 + "px" }}
                  >
                    <img
                      className="img-fluid"
                      src="img/icon/springboot.png"
                      alt="Icon"
                    />
                  </div>
                  <h5 className="mb-3">Spring boot</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.3s">
              <div className="service-item position-relative h-100">
                <div className="service-text rounded p-5">
                  <div
                    className="btn-square bg-light rounded-circle mx-auto mb-4"
                    style={{ width: 64 + "px", height: 64 + "px" }}
                  >
                    <img
                      className="img-fluid"
                      src="img/icon/react.png"
                      alt="Icon"
                    />
                  </div>
                  <h5 className="mb-3">React</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="service-item position-relative h-100">
                <div className="service-text rounded p-5">
                  <div
                    className="btn-square bg-light rounded-circle mx-auto mb-4"
                    style={{ width: 64 + "px", height: 64 + "px" }}
                  >
                    <img
                      className="img-fluid"
                      src="img/icon/oracledb.png"
                      alt="Icon"
                    />
                  </div>
                  <h5 className="mb-3">Oracle DataBase</h5>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="d-flex justify-content-center">
                <a href="/skills" className="btn btn-primary  py-2 px-4">
                  더 보기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* <!-- Service End --> */}

      {/* todo : 최근 게시물  */}
      {/* <!-- Project Start --> */}
      <div className="container-xxl pt-5">
        <div className="container">
          <div
            className="text-center text-md-start pb-5 pb-md-0 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 + "px" }}
          >
            
            <h1 className="display-5 mb-5">Sample Image</h1>
          </div>
          <div
            className="owl-carousel project-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="project-item mb-5">
              <div className="position-relative">
                <img className="img-fluid" src="img/project-1.jpg" alt="" />
                <div className="project-overlay">
                  <a
                    className="btn btn-lg-square btn-light rounded-circle m-1"
                    href="img/project-1.jpg"
                    data-lightbox="project"
                  >
                    <i className="fa fa-eye"></i>
                  </a>
                  <a
                    className="btn btn-lg-square btn-light rounded-circle m-1"
                    href=""
                  >
                    <i className="fa fa-link"></i>
                  </a>
                </div>
              </div>
              <div className="p-4">
                <a className="d-block h5" href="">
                  pic1
                </a>
                <span>
                  ...
                </span>
              </div>
            </div>
            <div className="project-item mb-5">
              <div className="position-relative">
                <img className="img-fluid" src="img/project-2.jpg" alt="" />
                <div className="project-overlay">
                  <a
                    className="btn btn-lg-square btn-light rounded-circle m-1"
                    href="img/project-2.jpg"
                    data-lightbox="project"
                  >
                    <i className="fa fa-eye"></i>
                  </a>
                  <a
                    className="btn btn-lg-square btn-light rounded-circle m-1"
                    href=""
                  >
                    <i className="fa fa-link"></i>
                  </a>
                </div>
              </div>
              <div className="p-4">
                <a className="d-block h5" href="">
                  pic2
                </a>
                <span>
                  ...
                </span>
              </div>
            </div>
            <div className="project-item mb-5">
              <div className="position-relative">
                <img className="img-fluid" src="img/project-3.jpg" alt="" />
                <div className="project-overlay">
                  <a
                    className="btn btn-lg-square btn-light rounded-circle m-1"
                    href="img/project-3.jpg"
                    data-lightbox="project"
                  >
                    <i className="fa fa-eye"></i>
                  </a>
                  <a
                    className="btn btn-lg-square btn-light rounded-circle m-1"
                    href=""
                  >
                    <i className="fa fa-link"></i>
                  </a>
                </div>
              </div>
              <div className="p-4">
                <a className="d-block h5" href="">
                  pic3
                </a>
                <span>
                  ...
                </span>
              </div>
            </div>
            <div className="project-item mb-5">
              <div className="position-relative">
                <img className="img-fluid" src="img/project-4.jpg" alt="" />
                <div className="project-overlay">
                  <a
                    className="btn btn-lg-square btn-light rounded-circle m-1"
                    href="img/project-4.jpg"
                    data-lightbox="project"
                  >
                    <i className="fa fa-eye"></i>
                  </a>
                  <a
                    className="btn btn-lg-square btn-light rounded-circle m-1"
                    href=""
                  >
                    <i className="fa fa-link"></i>
                  </a>
                </div>
              </div>
              <div className="p-4">
                <a className="d-block h5" href="">
                  pic4
                </a>
                <span>
                  ...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Project End --> */}

      
    </>
  );
}

export default Home;
