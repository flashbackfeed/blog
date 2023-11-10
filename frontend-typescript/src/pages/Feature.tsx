import React, { useEffect } from 'react'
import initMain from '../assets/js/main';

function Feature() {
    useEffect(()=>{
        initMain();
    },[])
  return (
    <>
        {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
            <h1 className="display-2 text-white mb-4 animated slideInDown">Features</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                    <li className="breadcrumb-item text-primary" aria-current="page">Features</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- Features Start --> */}
    <div className="container-xxl py-5">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 500+"px"}}>
            <p className="fs-5 fw-medium text-primary">Features</p>
            <h1 className="display-5 mb-5">Why People Choose Us!</h1>
        </div>
        <div className="container">
            <div className="row g-0 feature-row">
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                    <div className="feature-item border h-100 p-5">
                        <div className="btn-square bg-light rounded-circle mb-4" style={{width: 64+"px" , height: 64+"px"}}>
                            <img className="img-fluid" src="img/icon/icon-1.png" alt="Icon"/>
                        </div>
                        <h5 className="mb-3">Award Winning</h5>
                        <p className="mb-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                    <div className="feature-item border h-100 p-5">
                        <div className="btn-square bg-light rounded-circle mb-4" style={{width: 64+"px" , height: 64+"px"}}>
                            <img className="img-fluid" src="img/icon/icon-2.png" alt="Icon"/>
                        </div>
                        <h5 className="mb-3">Professional Staff</h5>
                        <p className="mb-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                    <div className="feature-item border h-100 p-5">
                        <div className="btn-square bg-light rounded-circle mb-4" style={{width: 64+"px" , height: 64+"px"}}>
                            <img className="img-fluid" src="img/icon/icon-3.png" alt="Icon"/>
                        </div>
                        <h5 className="mb-3">Fair Prices</h5>
                        <p className="mb-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                    <div className="feature-item border h-100 p-5">
                        <div className="btn-square bg-light rounded-circle mb-4" style={{width: 64+"px" , height: 64+"px"}}>
                            <img className="img-fluid" src="img/icon/icon-4.png" alt="Icon"/>
                        </div>
                        <h5 className="mb-3">24/7 Support</h5>
                        <p className="mb-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Features End --> */}
    </>
  )
}

export default Feature