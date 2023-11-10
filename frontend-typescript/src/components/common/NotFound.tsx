import React, { useEffect } from 'react'
import initMain from '../../assets/js/main';

function NotFound() {
    useEffect(()=>{
        initMain();
    },[])
  return (
    <>
    
    {/* <!-- 404 Start --> */}
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                    <h1 className="display-1">404</h1>
                    <h1 className="mb-4">페이지를 찾을 수 없습니다.</h1>
                    <p className="mb-4">URL 주소가 잘못 입력되었거나 변경 혹은 삭제되어 페이지를 열 수 없습니다.</p>
                    <a className="btn btn-primary rounded-pill py-3 px-5" href="/">Go Back To Home</a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- 404 End --> */}
    </>
  )
}

export default NotFound