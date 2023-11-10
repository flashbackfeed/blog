import React, { useEffect } from 'react'
import initMain from '../assets/js/main';

function Quote() {
    useEffect(()=>{
        initMain();
    },[])
  return (
    <>
      {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
            <h1 className="display-2 text-white mb-4 animated slideInDown">Quote</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                    <li className="breadcrumb-item text-primary" aria-current="page">Quote</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- Quote Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <p className="fs-5 fw-medium text-primary">Get A Quote</p>
                    <h1 className="display-5 mb-4">Need Our Expert Help? We're Here!</h1>
                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                        erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
                        eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
                    <a className="d-inline-flex align-items-center rounded overflow-hidden border border-primary" href="">
                        <span className="btn-lg-square bg-primary" style={{width: 55+"px" , height: 55+"px"}}>
                            <i className="fa fa-phone-alt text-white"></i>
                        </span>
                        <span className="fs-5 fw-medium mx-4">+012 345 6789</span>
                    </a>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <h2 className="mb-4">Get A Free Quote</h2>
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                <label htmlFor="name">Your Name</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <input type="email" className="form-control" id="mail" placeholder="Your Email"/>
                                <label htmlFor="mail">Your Email</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="mobile" placeholder="Your Mobile"/>
                                <label htmlFor="mobile">Your Mobile</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <select className="form-select" id="service">
                                    <option selected>Digital Marketing</option>
                                    <option value="">Social Marketing</option>
                                    <option value="">Content Marketing</option>
                                    <option value="">E-mail Marketing</option>
                                </select>
                                <label htmlFor="service">Choose A Service</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a message here" id="message"
                                    style={{height: 130+"px"}}></textarea>
                                <label htmlFor="message">Message</label>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <button className="btn btn-primary w-100 py-3" type="submit">Submit Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Quote End --> */}
    </>
  )
}

export default Quote