import React, { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom';
import IRboard from '../../types/board/IRboard';
import RboardService from '../../services/board/RboardService';



function ThreadBoard() {

 // 전체조회 페이지에서 전송한 기본키(dno)
 const { bno, rbStep } = useParams();
 // 강제페이지 이동 함수
 let navigate = useNavigate();

 // 객체 초기화(상세조회 : 기본키 있음)
 const initialRboard = {
    bno: "",
    rbSubject: "",
    rbWriter: "",
    rbContent: "",
    viewCount: 0,
    rbRef: 0,
    rbStep: 0,
    rbLevel: 0
 };
 // 수정될객체
 const [rboard, setRboard] = useState<IRboard>(initialRboard);
 // 화면에 수정 성공 메세지 찍기 변수
 const [message, setMessage] = useState<string>("");


  // 상세조회 함수
  const getRboard = (bno: string) => {
    RboardService.get(bno)           // 백엔드로 상세조회 요청
      .then((response: any) => {
        setRboard(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 화면이 뜰때 실행되는 이벤트 + dno 값이 바뀌면 실행
  useEffect(() => {
    if (bno) getRboard(bno);
  }, [bno]);

  // input 태그 수동 바인딩
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRboard({ ...rboard, [name]: value });
  };
  // 수정 함수
  const updateThreadBoard = () => {
    RboardService.update(rboard.bno, rboard) // 백엔드로 수정요청
      .then((response: any) => {
        console.log(response.data);
        setMessage("The dept was updated successfully!");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 삭제함수
  const deleteReply = () => {
    RboardService.removeReply(rboard.bno)
      .then((response: any) => {
        console.log(response.data);
        // 페이지 이동
        navigate("/rboard/:bno");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

   // 삭제함수 : 게시물 + 답변글 2개 삭제 (그룹번호로 삭제)
//   그룹번호(boardGroup) : 부모글번호 === 자식글번호
const deleteRboard = () => {
    RboardService.removeRboard(rboard.rbRef) // 벡엔드로 삭제요청
      .then((response: any) => {
        console.log(response.data);
        // 페이지 이동
        navigate("/rboard");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };



  return (
    <>

    <>
      {rboard ? (
        <div className="col-6 mx-auto">
          <form>
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="subject" className="col-form-label">
                  글제목
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="subject"
                  required
                  className="form-control"
                  value={rboard.rbSubject}
                  onChange={handleInputChange}
                  placeholder="글제목"
                  name="subject"
                  disabled={rbStep != "0" ? true : false}
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="rbContent" className="col-form-label">
                글내용
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="rbContent"
                  required
                  className="form-control"
                  value={rboard.rbContent}
                  onChange={handleInputChange}
                  placeholder="글내용"
                  name="rbContent"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="rbWriter" className="col-form-label">
                작성자
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="rbWriter"
                  required
                  className="form-control"
                  value={rboard.rbWriter}
                  onChange={handleInputChange}
                  placeholder="작성자"
                  name="rbWriter"
                />
              </div>
            </div>
          </form>

          {/* tparent "0" 아니면 답변글임 */}
          <div className="row g-3 mt-3 mb-3">
            {rbStep != "0" ? (
              <button
                className="btn btn-outline-primary ms-3 col"
                onClick={deleteReply}
              >
                삭제
              </button>
            ) : (
              <button
                className="btn btn-outline-danger ms-3 col"
                onClick={deleteRboard}
              >
                삭제
              </button>
            )}

            <button
              type="submit"
              className="btn btn-outline-success ms-2 col"
              onClick={updateThreadBoard}
            >
              수정
            </button>
          </div>

          {message && (
            <p className="alert alert-success mt-3 text-center">{message}</p>
          )}
        </div>
      ) : (
        <div className="col-6 mx-auto">
          <br />
          <p>Please click on a Rboard...</p>
        </div>
      )}
    </>
  </>
  )
}

export default ThreadBoard