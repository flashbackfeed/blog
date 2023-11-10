import IRboard from "../../types/board/IRboard";
import http from "../../utils/http-common";



// 전체 조회 + like 검색(paging 기능 : page(현재페이지), size(1페이지당개수))
const getAll = (subject:string, page:number, size:number) => {
    return http.get<Array<IRboard>>(`board/rboard?subject=${subject}&page=${page}&size=${size}`);
  };
  
  // 상세 조회
  const get = (bno:any) => {
    return http.get<IRboard>(`board/rboard/${bno}`);
  };
  
  // 저장 함수 : 게시물 생성(부모글)
  const createRboard = (data:IRboard) => {
    return http.post<IRboard>("board/rboard", data);
  };
 // 저장 함수 : 답변글 생성(자식글) 
  const createReply = (data:IRboard) => {
    return http.post<IRboard>("board/rboard/reply", data);
  };
  
  // 수정 함수
  const update = (bno:any, data:IRboard) => {
    return http.put<any>(`board/rboard/${bno}`, data);
  };
  
  // 삭제 함수 : 게시물(부모글) + 답변글(자식글) 모두 삭제
  //   그룹번호 : 부모글과 자식글은 모두 그룹번호가 같음       
  const removeRboard = (rbRef:any) => {
    return http.delete<any>(`board/rboard/deletion/${rbRef}`);
  };
  // 삭제 함수 : 답변글만 삭제   
  const removeReply = (bno:any) => {
    return http.delete<any>(`board/rboard/deletion/${bno}`);
  };
  
  const RboardService = {
    getAll,
    get,
    createRboard,
    createReply,
    update,
    removeRboard,
    removeReply
  };

  export default RboardService;