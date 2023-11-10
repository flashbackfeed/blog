package com.example.simpledms.controller.board;

import com.example.simpledms.model.dto.board.RboardDto;
import com.example.simpledms.model.entity.board.Rboard;
import com.example.simpledms.service.board.RboardService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * packageName : com.example.simpledms.controller.blog
 * fileName : RboardController
 * author : GGG
 * date : 2023-11-09
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-09         GGG          최초 생성
 */
@RestController
@Slf4j
@RequestMapping("/api/board")
public class RboardController {

    @Autowired
    RboardService rboardService;

    @GetMapping("/rboard")
    public ResponseEntity<Object> selectByConnectByPage(
            @RequestParam(defaultValue = "") String rbSubject,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "6") int size
    ) {
        try {
//            페이지 변수 저장 (page:현재페이지번호, size:1페이지당개수)
//            함수 매개변수 : Pageable (위의 값을 넣기)
//        사용법 : Pageable pageable = PageRequest.of(현재페이지번호, 1페이지당개수);
            Pageable pageable = PageRequest.of(page, size);

            Page<RboardDto> rboardDtoPage
                    = rboardService.selectByConnectByPage(rbSubject,pageable);

//          리액트 전송 : 부서배열 , 페이징정보 [자료구조 : Map<키이름, 값>]
            Map<String, Object> response = new HashMap<>();
            response.put("rboard", rboardDtoPage.getContent());
            response.put("currentPage", rboardDtoPage.getNumber());
            response.put("totalItems", rboardDtoPage.getTotalElements());
            response.put("totalPages", rboardDtoPage.getTotalPages());

            if (rboardDtoPage.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/rboard/reply")
    public ResponseEntity<Object> create(@RequestBody Rboard rboard){
        try {
            Rboard rboard2 = rboardService.save(rboard);

            return new ResponseEntity<>(rboard2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PostMapping("/rboard")
    public ResponseEntity<Object> createBoard(@RequestBody Rboard rboard) {

        try {
            int insertCount = rboardService.saveReply(rboard);

            return new ResponseEntity<>(insertCount, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PutMapping("/rboard/{bno}")
    public ResponseEntity<Object> update(@PathVariable int bno,
                                         @RequestBody Rboard rboard) {

        try {
            Rboard rboard2 = rboardService.save(rboard); // db 수정

            return new ResponseEntity<>(rboard2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 상세조회
    @GetMapping("/rboard/{bno}")
    public ResponseEntity<Object> findById(@PathVariable int bno) {

        try {
            Optional<Rboard> optionalRboard = rboardService.findById(bno);

            if (optionalRboard.isPresent()) {
//                성공
                return new ResponseEntity<>(optionalRboard.get(), HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
//            서버 에러
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //  답변만 삭제
    @DeleteMapping("/rboard/deletion/{bno}")
    public ResponseEntity<Object> delete(@PathVariable int bno) {

//        프론트엔드 쪽으로 상태정보를 보내줌
        try {
            boolean bSuccess = rboardService.removeById(bno);

            if (bSuccess == true) {
//                delete 문이 성공했을 경우
                return new ResponseEntity<>(HttpStatus.OK);
            }
//            delete 실패했을 경우( 0건 삭제가 될경우 )
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
//            DB 에러가 날경우
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    //  게시물 + 답변 삭제
    @DeleteMapping("/rboard/deletion/{rbRef}")
    public ResponseEntity<Object> deleteBoard(@PathVariable int rbRef) {

//        프론트엔드 쪽으로 상태정보를 보내줌
        try {
            boolean bSuccess = rboardService.removeAllByRbref(rbRef);

            if (bSuccess == true) {
//                delete 문이 성공했을 경우
                return new ResponseEntity<>(HttpStatus.OK);
            }
//            delete 실패했을 경우( 0건 삭제가 될경우 )
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
//            DB 에러가 날경우
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
