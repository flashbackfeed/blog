import React, { useEffect } from 'react'
import initMain from '../../assets/js/main';
import AddRboard from '../../components/board/AddRboard';

function AddRboardPage() {
  useEffect(()=>{
    initMain();
},[])
  return (
    <>
    {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
            <h1 className="display-2 text-white mb-4 animated slideInDown">게시글 작성</h1>
            <nav aria-label="breadcrumb animated slideInDown">
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}

    <AddRboard/>
    </>
  )
}

export default AddRboardPage