import React from 'react'

function FooterCom() {
  return (
    <>
        {/* <!-- Footer Start --> */}
    <div className="container-fluid bg-dark footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-4">관리자 정보</h4>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>010-1234-5678</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>sample@example.com</p>
                    <div className="d-flex pt-3">
                        <a className="btn btn-square btn-light rounded-circle me-2" href="https://twitter.com/elonmusk/"><i
                                className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-light rounded-circle me-2" href="https://www.facebook.com/zuck/"><i
                                className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-light rounded-circle me-2" href="https://www.youtube.com/"><i
                                className="fab fa-youtube"></i></a>
                        <a className="btn btn-square btn-light rounded-circle me-2" href="https://www.linkedin.com/"><i
                                className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-4">Quick Links</h4>
                    <a className="btn btn-link" href="/">Home</a>
                    <a className="btn btn-link" href="/skills">Skills</a>
                    <a className="btn btn-link" href="/rboard">Board</a>
                    <a className="btn btn-link" href="/fileDb">Upload</a>
                </div>
                
                
                
            </div>
        </div>
    </div>
    {/* <!-- Footer End --> */}


    {/* <!-- Copyright Start --> */}
    <div className="container-fluid copyright py-4">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a className="fw-medium text-light" href="#">Simple site</a>, All Right Reserved.
                </div>
                <div className="col-md-6 text-center text-md-end">
                    {/* <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. */}
                    Designed By <a className="fw-medium text-light" href="https://htmlcodex.com">HTML Codex</a>
                    Distributed By <a className="fw-medium text-light" href="https://themewagon.com">ThemeWagon</a><br/>
                    <a href="https://www.flaticon.com/kr/free-icons/" title="docker icon">docker icon by: Freepik - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/html-5" title="html 5 icons">Html 5 icons created by Freepik - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/css-3" title="css 3 icons">Css 3 icons created by Freepik - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/react" title="react icons">React icons created by Freepik - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/oracle" title="oracle icons">Oracle icons created by Freepik - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/java" title="java icons">Java icons created by Freepik - Flaticon</a>
                    <a href="https://icons8.com/icon/90519/%EB%B4%84-%EB%A1%9C%EA%B3%A0">spring</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                    <a href="https://kr.freepik.com/free-photo/assortment-of-different-sized-plates-with-copy-space_9570130.htm#query=1920x1080%20%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4%204k&position=4&from_view=search&track=ais">Freepik</a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Copyright End --> */}


    {/* <!-- Back to Top --> */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i
            className="bi bi-arrow-up"></i></a>
    </>
  )
}

export default FooterCom