import React, { useState } from "react";
import IRboard from "../../types/board/IRboard";
import RboardService from "../../services/board/RboardService";
import { useNavigate } from "react-router-dom";


function AddRboard() {

  const navigate = useNavigate();
  // todo : 변수 정의
  const initialRboard = {
    bno: null,
    rbSubject: "",
    rbWriter: "",
    rbContent: "",
    viewCount: 0,
    rbRef: null,
    rbStep: 0,
    rbLevel: 0
  };

  // ThreadBoard객체
  const [rboard, setRboard] = useState<IRboard>(initialRboard);
    
  // 저장버튼 클릭후 submitted = true 변경됨
  const [submitted, setSubmitted] = useState<boolean>(false);

  // todo : 함수 정의

  // input 태그에 수동 바인딩
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target; // 화면값
    setRboard({ ...rboard, [name]: value }); // 변수저장
  };

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target; // 화면값
    setRboard({ ...rboard, [name]: value }); // 변수저장
  };

  // 저장 함수
  const saveRboard = () => {
    var data = {
      rbSubject: rboard.rbSubject,
      rbWriter: rboard.rbWriter,
      rbContent: rboard.rbContent,
      viewCount: rboard.viewCount,
      rbRef: null,
      rbStep: 0, // 입력시 제외
      rbLevel:0
    };

    RboardService.createReply(data) // 게시물 저장 요청
      .then((response: any) => {
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 새폼 보여주기 함수 : 변수값 변경 -> 화면 자동 갱신(리액트 특징)
  const goHome = () => {
    setRboard(initialRboard); // replyBoard 초기화
    navigate("/rboard")
  };

  return (
    <div className="row">
      {submitted ? (
        <div className="col-6 mx-auto">
          <h4>게시글 작성 완료</h4>
          <button className="btn btn-success" onClick={goHome}>
            Add
          </button>
        </div>
      ) : (
        <>
          

          <div className="col-6 mx-auto">
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="rbSubject" className="col-form-label">
                제목
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="rbSubject"
                  required
                  className="form-control"
                  value={rboard.rbSubject}
                  onChange={handleInputChange}
                  placeholder="제목 입력"
                  name="rbSubject"
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
                  placeholder="작성자 입력"
                  name="rbWriter"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="rbContent" className="col-form-label">
                내용
                </label>
              </div>

              <div className="col-9">
                <textarea 
                  id="rbContent"
                  required
                  className="form-control"
                  value={rboard.rbContent}
                  onChange={handleTextAreaChange}
                  placeholder="내용 입력"
                  name="rbContent"
                  rows={10}
                  cols={50}
                  style={{resize:"none"}}
                />
              </div>
            </div>

            

            <div className="row g-3 mt-3 mb-3">
              <button
                onClick={saveRboard}
                className="btn btn-outline-primary ms-2 col"
              >
                저장
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AddRboard;
