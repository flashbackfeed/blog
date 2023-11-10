import React, { useEffect } from 'react'
import initMain from '../assets/js/main'

function Project() {
    useEffect(()=>{
        initMain();
    },[])
  return (
    <>
        {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
            <h1 className="display-2 text-white mb-4 animated slideInDown">Projects</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                    <li className="breadcrumb-item text-primary" aria-current="page">Projects</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- Project Start --> */}
    <div className="container-xxl pt-5">
        <div className="container">
            <div className="text-center text-md-start pb-5 pb-md-0 wow fadeInUp" data-wow-delay="0.1s"
                style={{maxWidth: 500+"px"}}>
                <p className="fs-5 fw-medium text-primary">Our Projects</p>
                <h1 className="display-5 mb-5">We've Done Lot's of Awesome Projects</h1>
            </div>
            <div className="owl-carousel project-carousel wow fadeInUp" data-wow-delay="0.1s">
                <div className="project-item mb-5">
                    <div className="position-relative">
                        <img className="img-fluid" src="img/project-1.jpg" alt=""/>
                        <div className="project-overlay">
                            <a className="btn btn-lg-square btn-light rounded-circle m-1" href="img/project-1.jpg"
                                data-lightbox="project"><i className="fa fa-eye"></i></a>
                            <a className="btn btn-lg-square btn-light rounded-circle m-1" href=""><i
                                    className="fa fa-link"></i></a>
                        </div>
                    </div>
                    <div className="p-4">
                        <a className="d-block h5" href="">Data Analytics & Insights</a>
                        <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem</span>
                    </div>
                </div>
                <div className="project-item mb-5">
                    <div className="position-relative">
                        <img className="img-fluid" src="img/project-2.jpg" alt=""/>
                        <div className="project-overlay">
                            <a className="btn btn-lg-square btn-light rounded-circle m-1" href="img/project-2.jpg"
                                data-lightbox="project"><i className="fa fa-eye"></i></a>
                            <a className="btn btn-lg-square btn-light rounded-circle m-1" href=""><i
                                    className="fa fa-link"></i></a>
                        </div>
                    </div>
                    <div className="p-4">
                        <a className="d-block h5" href="">Marketing Content Strategy</a>
                        <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem</span>
                    </div>
                </div>
                <div className="project-item mb-5">
                    <div className="position-relative">
                        <img className="img-fluid" src="img/project-3.jpg" alt=""/>
                        <div className="project-overlay">
                            <a className="btn btn-lg-square btn-light rounded-circle m-1" href="img/project-3.jpg"
                                data-lightbox="project"><i className="fa fa-eye"></i></a>
                            <a className="btn btn-lg-square btn-light rounded-circle m-1" href=""><i
                                    className="fa fa-link"></i></a>
                        </div>
                    </div>
                    <div className="p-4">
                        <a className="d-block h5" href="">Business Target Market</a>
                        <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem</span>
                    </div>
                </div>
                <div className="project-item mb-5">
                    <div className="position-relative">
                        <img className="img-fluid" src="img/project-4.jpg" alt=""/>
                        <div className="project-overlay">
                            <a className="btn btn-lg-square btn-light rounded-circle m-1" href="img/project-4.jpg"
                                data-lightbox="project"><i className="fa fa-eye"></i></a>
                            <a className="btn btn-lg-square btn-light rounded-circle m-1" href=""><i
                                    className="fa fa-link"></i></a>
                        </div>
                    </div>
                    <div className="p-4">
                        <a className="d-block h5" href="">Social Marketing Strategy</a>
                        <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Project End --> */}
    </>
  )
}

export default Project