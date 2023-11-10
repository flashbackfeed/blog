import React, { useEffect } from 'react'
import initMain from '../assets/js/main';

function Team() {
    useEffect(()=>{
        initMain();
    },[])
  return (
    <>
        {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
            <h1 className="display-2 text-white mb-4 animated slideInDown">Our Team</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                    <li className="breadcrumb-item text-primary" aria-current="page">Our Team</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- Team Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 500+"px"}}>
                <p className="fs-5 fw-medium text-primary">Our Team</p>
                <h1 className="display-5 mb-5">Our Expert People Ready to Help You</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item rounded overflow-hidden pb-4">
                        <img className="img-fluid mb-4" src="img/team-1.jpg" alt=""/>
                        <h5>Alex Robin</h5>
                        <span className="text-primary">Founder & CEO</span>
                        <ul className="team-social">
                            <li><a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a></li>
                            <li><a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a></li>
                            <li><a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a></li>
                            <li><a className="btn btn-square" href=""><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item rounded overflow-hidden pb-4">
                        <img className="img-fluid mb-4" src="img/team-2.jpg" alt=""/>
                        <h5>Adam Crew</h5>
                        <span className="text-primary">Co Founder</span>
                        <ul className="team-social">
                            <li><a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a></li>
                            <li><a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a></li>
                            <li><a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a></li>
                            <li><a className="btn btn-square" href=""><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item rounded overflow-hidden pb-4">
                        <img className="img-fluid mb-4" src="img/team-3.jpg" alt=""/>
                        <h5>Boris Johnson</h5>
                        <span className="text-primary">Executive Manager</span>
                        <ul className="team-social">
                            <li><a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a></li>
                            <li><a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a></li>
                            <li><a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a></li>
                            <li><a className="btn btn-square" href=""><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item rounded overflow-hidden pb-4">
                        <img className="img-fluid mb-4" src="img/team-4.jpg" alt=""/>
                        <h5>Robert Jordan</h5>
                        <span className="text-primary">Digital Marketer</span>
                        <ul className="team-social">
                            <li><a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a></li>
                            <li><a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a></li>
                            <li><a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a></li>
                            <li><a className="btn btn-square" href=""><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Team End --> */}
    </>
  )
}

export default Team