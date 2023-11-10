import React, { useEffect } from "react";
import initMain from "../assets/js/main";


function Skill() {
  useEffect(() => {
    initMain();
  }, []);

  
  return (
    <>
      {/* <!-- Page Header Start --> */}
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-2 text-white mb-4 animated slideInDown">
            Skills
          </h1>
          <nav aria-label="breadcrumb animated slideInDown"></nav>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* todo : 자세히보기 누르면 iframe 이용해서 사용할수있는 기술 상세보기 */}
      {/* <!-- Skill Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 + "px" }}
          >
            <p className="fs-5 fw-medium text-primary">My Skills</p>
            <p className="display-5 mb-5">경험해본 기술들</p>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
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
                <div className="service-btn rounded-0 rounded-bottom">
                  <a
                    className="text-primary fw-medium"
                    href="#exapleModalLabel"
                  >
                    Read More<i className="bi bi-chevron-double-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
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
                <div className="service-btn rounded-0 rounded-bottom">
                  <a className="text-primary fw-medium" href="">
                    Read More<i className="bi bi-chevron-double-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
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
                <div className="service-btn rounded-0 rounded-bottom">
                  <a className="text-primary fw-medium" href="">
                    Read More<i className="bi bi-chevron-double-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item position-relative h-100">
                <div className="service-text rounded p-5">
                  <div
                    className="btn-square bg-light rounded-circle mx-auto mb-4"
                    style={{ width: 64 + "px", height: 64 + "px" }}
                  >
                    <img
                      className="img-fluid"
                      src="img/icon/typescript.png"
                      alt="Icon"
                    />
                  </div>
                  <h5 className="mb-3">Type Script</h5>
                </div>
                <div className="service-btn rounded-0 rounded-bottom">
                  <a className="text-primary fw-medium" href="">
                    Read More<i className="bi bi-chevron-double-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item position-relative h-100">
                <div className="service-text rounded p-5">
                  <div
                    className="btn-square bg-light rounded-circle mx-auto mb-4"
                    style={{ width: 64 + "px", height: 64 + "px" }}
                  >
                    <img
                      className="img-fluid"
                      src="img/icon/doker.png"
                      alt="Icon"
                    />
                  </div>
                  <h5 className="mb-3">Docker</h5>
                </div>
                <div className="service-btn rounded-0 rounded-bottom">
                  <a className="text-primary fw-medium" href="">
                    Read More<i className="bi bi-chevron-double-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item position-relative h-100">
                <div className="service-text rounded p-5">
                  <div
                    className="btn-square bg-light rounded-circle mx-auto mb-4"
                    style={{ width: 64 + "px", height: 64 + "px" }}
                  >
                    <img
                      className="img-fluid"
                      src="img/icon/java.png"
                      alt="Icon"
                    />
                  </div>
                  <h5 className="mb-3">JAVA</h5>
                </div>
                <div className="service-btn rounded-0 rounded-bottom">
                  <a className="text-primary fw-medium" href="">
                    Read More<i className="bi bi-chevron-double-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item position-relative h-100">
                <div className="service-text rounded p-5">
                  <div
                    className="btn-square bg-light rounded-circle mx-auto mb-4"
                    style={{ width: 64 + "px", height: 64 + "px" }}
                  >
                    <img
                      className="img-fluid"
                      src="img/icon/html-5.png"
                      alt="Icon"
                    />
                  </div>
                  <h5 className="mb-3">HTML5</h5>
                </div>
                <div className="service-btn rounded-0 rounded-bottom">
                  <a className="text-primary fw-medium" href="">
                    Read More<i className="bi bi-chevron-double-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item position-relative h-100">
                <div className="service-text rounded p-5">
                  <div
                    className="btn-square bg-light rounded-circle mx-auto mb-4"
                    style={{ width: 64 + "px", height: 64 + "px" }}
                  >
                    <img
                      className="img-fluid"
                      src="img/icon/css-3.png"
                      alt="Icon"
                    />
                  </div>
                  <h5 className="mb-3">CSS</h5>
                </div>
                <div className="service-btn rounded-0 rounded-bottom">
                  <a className="text-primary fw-medium" href="">
                    Read More<i className="bi bi-chevron-double-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item position-relative h-100">
                <div className="service-text rounded p-5">
                  <div
                    className="btn-square bg-light rounded-circle mx-auto mb-4"
                    style={{ width: 64 + "px", height: 64 + "px" }}
                  >
                    <img
                      className="img-fluid"
                      src="img/icon/3dot.png"
                      alt="Icon"
                    />
                  </div>
                  <h5 className="mb-3">그 외...</h5>
                </div>
                <div className="service-btn rounded-0 rounded-bottom">
                  <a className="text-primary fw-medium" href="">
                    Read More<i className="bi bi-chevron-double-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Skill End --> */}
     
    </>
  );
}

export default Skill;
