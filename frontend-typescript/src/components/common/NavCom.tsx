import React from 'react'
import { Link } from 'react-router-dom'

function NavCom() {
  return (
    <>
        {/* <!-- Spinner Start --> */}
    <div id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" role="status" style={{width: 3 + "rem" , height: 3 + "rem"}}></div>
    </div>
    {/* <!-- Spinner End --> */}


    {/* <!-- Topbar Start --> */}
    <div className="container-fluid bg-primary text-white d-none d-lg-flex">
        <div className="container py-3">
            <div className="d-flex align-items-center">
                <Link to="/">
                    <h2 className="text-white fw-bold m-0">Sample Site</h2>
                </Link>
                <div className="ms-auto d-flex align-items-center">
                    <small className="ms-4"><i className="fa fa-envelope me-3"></i>sample@example.com</small>
                    <small className="ms-4"><i className="fa fa-phone-alt me-3"></i>010-1234-5678</small>
                    {/* sns 버튼 시작 */}
                    <div className="ms-3 d-flex">
                        <a className="btn btn-sm-square btn-light text-primary rounded-circle ms-2" href="https://www.facebook.com/zuck/"><i
                                className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-sm-square btn-light text-primary rounded-circle ms-2" href="https://twitter.com/elonmusk"><i
                                className="fab fa-twitter"></i></a>
                        <a className="btn btn-sm-square btn-light text-primary rounded-circle ms-2" href="https://www.linkedin.com/"><i
                                className="fab fa-linkedin-in"></i></a>
                    </div>
                    {/* sns 버튼 끝 */}
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Topbar End --> */}


    {/* <!-- Navbar Start --> */}
    <div className="container-fluid bg-white sticky-top">
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-white navbar-light p-lg-0">
                <Link to="/" className="navbar-brand d-lg-none">
                    <h1 className="fw-bold m-0">Sample site</h1>
                </Link>
                <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/skills" className="nav-item nav-link">Skills</Link>
                        <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Board</a>
                            <div className="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                                <Link to="/rboard" className="dropdown-item">게시판 조회</Link>
                                <Link to="/add-rboard" className="dropdown-item">게시글 작성</Link>
                            </div>
                         </div>
                        
                        <Link to="/testimonial" className="nav-item nav-link">Meow</Link>
                        
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Implement</a>
                            <div className="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                                <Link to="/feature" className="dropdown-item">Account</Link>
                                <Link to="/team" className="dropdown-item">login</Link>
                                <Link to="/testimonial" className="dropdown-item">admin</Link>
                                <Link to="/quote" className="dropdown-item">external api</Link>
                            </div>
                        </div>
                    </div>
                    {/* todo : 누르면 글작성으로 이동 */}
                    <div className="ms-auto d-none d-lg-block">
                        <a href="/add-rboard" className="btn btn-primary rounded-pill py-2 px-3">글쓰기</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    {/* <!-- Navbar End --> */}
    </>
  )
}

export default NavCom