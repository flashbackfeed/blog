import { Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import RboardService from '../../services/board/RboardService';
import IRboard from '../../types/board/IRboard';




function RboardList() {
   //변수 정의
   const [rboard, setRboard] = useState<Array<IRboard>>([]);
   // 검색어 변수
   const [searchSubject, setSearchSubject] = useState<string>("");

    // todo: 공통 변수 : page(현재페이지번호), count(총페이지건수), pageSize(3,6,9 배열)
    const [page, setPage] = useState<number>(1);
    const [count, setCount] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(3); // 1페이지당개수
    // todo: 공통 pageSizes : 배열 (셀렉트 박스 사용)
    const pageSizes = [3, 6, 9];

    
  // todo: 함수 정의
  useEffect(() => {
    retrieveRboard(); // 전체 조회
  }, [page, pageSize]);

  //   전체조회 함수
  const retrieveRboard = () => {
    RboardService.getAll(searchSubject, page - 1, pageSize) // 벡엔드 전체조회요청
      .then((response: any) => {
        const { rboard, totalPages } = response.data;
        setRboard(rboard);
        setCount(totalPages);
        console.log("response", response.data);
      })
      .catch((e: Error) => {
        // 벡엔드 실패시 실행됨
        console.log(e);
      });
  };

  //  검색어 수동 바인딩 함수
  const onChangeSearchSubject = (e: any) => {
    setSearchSubject(e.target.value);
  };

  // todo: handlePageSizeChange(공통) : pageSize 값 변경시 실행되는 함수
  //  select 태그 수동 바인딩 : 화면값 -> 변수에 저장
  const handlePageSizeChange = (event: any) => {
    setPageSize(event.target.value); // 1페이지당 개수저장(3,6,9)
    setPage(1); // 현재페이지번호 : 1로 강제설정
  };

  //  todo: Pagination 수동 바인딩(공통)
  //  페이지 번호를 누르면 => page 변수에 값 저장
  const handlePageChange = (event: any, value: number) => {
    // value == 화면의 페이지번호
    setPage(value);
  };

  // ---------------------------------------
  // todo: 답변 변수 정의
  // reply 객체 초기화
  const initialReply = {
    bno: null,
    rbSubject: "",
    rbWriter: "",
    rbContent: "",
    viewCount: 0,
    rbRef: 0,
    rbStep: 0,
    rbLevel: 0
  };
  // 답변 글 입력 객체
  const [reply, setReply] = useState(initialReply);
  // thread 버튼 클릭시 상태 저장할 변수 : true/false
  const [replyClicked, setReplyClicked] = useState(false);

  // todo: 답변 함수 정의
  // input 수동 바인딩 함수
  const handleInputChange = (event: any) => {
    const { name, value } = event.target; // 화면값
    setReply({ ...reply, [name]: value }); // 변수저장
  };

  // 답변글 생성함수(insert)
  const saveReply = () => {
    // 임시 객체
    let data = {
      rbSubject: reply.rbSubject,
      rbWriter: reply.rbWriter,
      rbContent: reply.rbContent,
      viewCount: reply.viewCount,
      rbRef: reply.bno,
      rbStep: reply.bno,
      rbLevel: reply.rbLevel
    };

    RboardService.createReply(data) // 벡엔드 답변글 저장 요청
      .then((response: any) => {
        alert("답변글이 생성되었습니다.");
        // 전체 재조회
        retrieveRboard();
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  //  게시물 thread 버튼 클릭시 화면에 답변입력창 보이게 하는 함수
  const newReply = (data: any) => {
    // 매개변수 데이터(객체) 수정 : boardContent: "" 수정
    setReply({ ...data, mainText: "" });
    // 답변 입력창 화면보이기 : replyClicked = true
    setReplyClicked(true);
  };

  //  답변 입력창 숨기기
  const closeReply = () => {
    // 답변 입력창 화면숨기기 : replyClicked = false
    setReplyClicked(false);
  };


  return (
    <div>

     <div className="mt-3">
        {"페이지당 글 수 : "}
        <select onChange={handlePageSizeChange} value={pageSize}>
          {pageSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        </div>
      {/* search start(검색어 입력창) */}
      <div className="row mb-5 justify-content-center">
        <div className="col-12 w-50 input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchSubject}
            onChange={onChangeSearchSubject}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={retrieveRboard}
          >
            Search
          </button>
        </div>
      </div>
      {/* search end */}

     
      {/* 게시판(폼1) + 답변글(폼2) */}
      <div className="col-md-12">
        {/* table start(게시판) */}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">글번호</th>
              <th scope="col">글제목</th>
              <th scope="col">내용</th>
              <th scope="col">작성자</th>
              <th scope="col">조회수</th>
              <th scope="col">답변</th>
              <th scope="col">수정</th>
            </tr>
          </thead>
          <tbody>
            {rboard &&
              rboard.map((data, index) => (
                // 키값 추가 않하면 react 에서 경고를 추가 : 키는 내부적으로 리액트가 rerending 할때 체크하는 값임
                <tr key={index}>
                  <td>{data.bno}</td>
                  <td>{data.rbSubject}</td>
                  <td>{data.rbWriter}</td>
                  <td>{data.rbContent}</td>
                  <td>{data.viewCount}</td>
                  
                  <td>
                    {/* 클릭 : 아래 답변 폼이 열림 */}
                    {data.rbStep == 0 && (
                      <Link to={"#"}>
                        {/* 리액트 : onClick={함수명} : 매개변수없으면 */}
                        {/* 리액트 : onClick={()=>함수명(매개변수)} : 매개변수있으면 */}
                        <span
                          className="badge bg-warning"
                          onClick={() => newReply(data)}
                        >
                          Reply
                        </span>
                      </Link>
                    )}
                  </td>
                  <td>
                    {/* 클릭 : 상세화면 이동 */}
                    <Link
                      to={
                        "/rboard/bno/" +
                        data.bno +
                        "/rbRef/" +
                        data.rbRef
                      }
                    >
                      <span className="badge bg-success">Edit</span>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* table end */}

        {/* thread form start(답변글) */}
        <div>
          {/* 변수명 && 태그 : 변수명 = true 태그가 보이고 */}
          {/* 변수명 && 태그 : 변수명 = false 태그가 안보임 */}
          {replyClicked && (
            <div className="col-md-12 row">
              <div className="col-md-12 row mt-2">
                <label htmlFor="bno" className="col-md-2 col-form-label">
                글번호
                </label>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control-plaintext"
                    id="bno"
                    placeholder={reply.bno || ""}
                    disabled
                    name="bno"
                  />
                </div>
              </div>

              <div className="col-md-12 row mt-2">
                <label htmlFor="rbSubject" className="col-md-2 col-form-label">
                내용
                </label>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control-plaintext"
                    id="subject"
                    disabled
                    placeholder={reply.rbSubject}
                    name="subject"
                  />
                </div>
              </div>

              <div className="col-md-12 row mt-2">
                <label
                  htmlFor="rbWriter"
                  className="col-md-2 col-form-label"
                >
                   작성자
                </label>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    id="rbWriter"
                    required
                    value={reply.rbWriter}
                    onChange={handleInputChange}
                    name="rbWriter"
                  />
                </div>
              </div>

              <div className="col-md-12 row mt-2">
                <label
                  htmlFor="rbContent"
                  className="col-md-2 col-form-label"
                >
                  내용
                </label>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    id="rbContent"
                    required
                    value={reply.rbContent}
                    onChange={handleInputChange}
                    name="rbContent"
                  />
                </div>
              </div>

           

              <div className="row px-4 mt-2">
                <button
                  onClick={saveReply}
                  className="btn btn-success mt-3 col-md-5"
                >
                  Submit
                </button>
                <div className="col-md-2"></div>

                <button
                  onClick={closeReply}
                  className="btn btn-danger mt-3 col-md-5"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
        {/* thread form end */}

         {/* page start(페이지 번호) */}
         
      <div className="pagination justify-content-center">
        <Pagination
          className="my-3"
          count={count}
          page={page}
          siblingCount={1}
          boundaryCount={1}
          variant="outlined"
          shape="rounded"
          onChange={handlePageChange}
        />
      </div>
      
      {/* page end */}

        <div className='container'>
                <div className="d-flex justify-content-center">
                        <a href="/add-rboard" className="btn btn-primary  py-2 px-4">글쓰기</a>
                    </div>
                    </div>
      </div>
    </div>
  )
}

export default RboardList