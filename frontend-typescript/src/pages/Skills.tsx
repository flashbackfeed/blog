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
                  <h5 className="mb-3">Spring Boot</h5>
                </div>
                <div className="service-btn rounded-0 rounded-bottom">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#SpringBootModal"
                  >
                    Read More<i className="bi bi-chevron-double-right ms-2"></i>
                  </button>
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
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#ReactModal"
                  >
                    Read More<i className="bi bi-chevron-double-right ms-2"></i>
                  </button>
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
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#OracleModal"
                  >
                    Read More<i className="bi bi-chevron-double-right ms-2"></i>
                  </button>
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
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#TypeScriptModal"
                  >
                    Read More<i className="bi bi-chevron-double-right ms-2"></i>
                  </button>
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
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#DockerModal"
                  >
                    Read More<i className="bi bi-chevron-double-right ms-2"></i>
                  </button>
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
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#JavaModal"
                  >
                    Read More<i className="bi bi-chevron-double-right ms-2"></i>
                  </button>
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
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#HtmlModal"
                  >
                    Read More<i className="bi bi-chevron-double-right ms-2"></i>
                  </button>
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
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#CssModal"
                  >
                    Read More<i className="bi bi-chevron-double-right ms-2"></i>
                  </button>
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
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#EtcModal"
                  >
                    Read More<i className="bi bi-chevron-double-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Skill End --> */}

      
      {/* Spring boot Modal start */}
      <div
        className="modal fade"
        id="SpringBootModal"
        tabIndex={-1}
        aria-labelledby="SpringBootModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="SpringBootModalLabel">
                Spring Boot
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Spring boot Modal end */}
      {/* React Modal start */}
      <div
        className="modal fade"
        id="ReactModal"
        tabIndex={-1}
        aria-labelledby="ReactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="ReactModalLabel">
                React
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* React Modal end */}
      {/* Oracle DB Modal start */}
      <div
        className="modal fade"
        id="OracleModal"
        tabIndex={-1}
        aria-labelledby="OracleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="OracleModalLabel">
                Oracle DataBase
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Oracle DB Modal end */}

      {/* Type Script Modal start */}
      <div
        className="modal fade"
        id="TypeScriptModal"
        tabIndex={-1}
        aria-labelledby="TypeScriptModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="TypeScriptModalLabel">
                Type Script
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Type Script Modal end */}

      {/* Docker Script Modal start */}
      <div
        className="modal fade"
        id="DockerModal"
        tabIndex={-1}
        aria-labelledby="DockerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="DockerModalLabel">
                Docker
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Docker Modal end */}

      {/* JAVA Modal start */}
      <div
        className="modal fade"
        id="JavaModal"
        tabIndex={-1}
        aria-labelledby="JavaModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="JavaModalLabel">
                JAVA
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* JAVA Modal end */}

      {/* HTML Modal start */}
      <div
        className="modal fade"
        id="HtmlModal"
        tabIndex={-1}
        aria-labelledby="HtmlModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="HtmlModalLabel">
                HTML5
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* HTML Modal end */}

      {/* CSS Modal start */}
      <div
        className="modal fade"
        id="CssModal"
        tabIndex={-1}
        aria-labelledby="CssModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="CssModalLabel">
                CSS
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* CSS Modal end */}

      {/* ETC Modal start */}
      <div
        className="modal fade"
        id="EtcModal"
        tabIndex={-1}
        aria-labelledby="EtcModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="EtcModalLabel">
                ETC
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ETC Modal end */}
    </>
  );
}

export default Skill;
