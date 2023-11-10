import React, { useEffect } from 'react'
import initMain from '../assets/js/main';

function Testimonial() {
    useEffect(()=>{
        initMain();
    },[])
  return (
    <>
        {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
            <h1 className="display-2 text-white mb-4 animated slideInDown">Testimonial</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                    <li className="breadcrumb-item text-primary" aria-current="page">Testimonial</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- Testimonial Start --> */}
    <div className="container-xxl pt-5">
        <div className="container">
            <div className="text-center text-md-start pb-5 pb-md-0 wow fadeInUp" data-wow-delay="0.1s"
                style={{maxWidth: 500+"px"}}>
                <p className="fs-5 fw-medium text-primary">Testimonial</p>
                <h1 className="display-5 mb-5">What Clients Say About Our Services!</h1>
            </div>
            <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                <div className="testimonial-item rounded p-4 p-lg-5 mb-5">
                    <img className="mb-4" src="img/testimonial-1.jpg" alt=""/>
                    <p className="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                        sit, sed stet lorem sit clita duo justo</p>
                    <h5>Client Name</h5>
                    <span className="text-primary">Profession</span>
                </div>
                <div className="testimonial-item rounded p-4 p-lg-5 mb-5">
                    <img className="mb-4" src="img/testimonial-2.jpg" alt=""/>
                    <p className="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                        sit, sed stet lorem sit clita duo justo</p>
                    <h5>Client Name</h5>
                    <span className="text-primary">Profession</span>
                </div>
                <div className="testimonial-item rounded p-4 p-lg-5 mb-5">
                    <img className="mb-4" src="img/testimonial-3.jpg" alt=""/>
                    <p className="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                        sit, sed stet lorem sit clita duo justo</p>
                    <h5>Client Name</h5>
                    <span className="text-primary">Profession</span>
                </div>
                <div className="testimonial-item rounded p-4 p-lg-5 mb-5">
                    <img className="mb-4" src="img/testimonial-4.jpg" alt=""/>
                    <p className="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                        sit, sed stet lorem sit clita duo justo</p>
                    <h5>Client Name</h5>
                    <span className="text-primary">Profession</span>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Testimonial End --> */}
    </>
  )
}

export default Testimonial