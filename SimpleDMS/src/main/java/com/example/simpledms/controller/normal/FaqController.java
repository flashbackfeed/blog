package com.example.simpledms.controller.normal;

import com.example.simpledms.model.entity.basic.Dept;
import com.example.simpledms.model.entity.normal.Faq;
import com.example.simpledms.service.normal.FaqService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * packageName : com.example.simpledms.controller.normal
 * fileName : FaqController
 * author : GGG
 * date : 2023-10-24
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-24         GGG          최초 생성
 */
@Controller
@Slf4j
@RequestMapping("/api/normal/")
public class FaqController {
    @Autowired
    FaqService faqService;

    @GetMapping("/faq")
    public ResponseEntity<Object> find(
            @RequestParam(defaultValue = "") String title,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ) {
        try {
//            페이지 변수 저장 (page:현재페이지번호, size:1페이지당개수)
//            함수 매개변수 : Pageable (위의 값을 넣기)
//        사용법 : Pageable pageable = PageRequest.of(현재페이지번호, 1페이지당개수);
            Pageable pageable = PageRequest.of(page, size);

//          전체조회(dname="") + like 검색(dname="S")
            Page<Faq> faqPage
                    = faqService.findAllByTitleContaining(title, pageable);

//          리액트 전송 : 부서배열 , 페이징정보 [자료구조 : Map<키이름, 값>]
            Map<String, Object> response = new HashMap<>();
            response.put("faq", faqPage.getContent()); // 부서배열
            response.put("currentPage", faqPage.getNumber()); // 현재페이지번호
            response.put("totalItems", faqPage.getTotalElements()); // 총건수(개수)
            response.put("totalPages", faqPage.getTotalPages()); // 총페이지수

            if (faqPage.isEmpty() == false) {
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

    @PostMapping("/faq")
    public ResponseEntity<Object> create(@RequestBody Faq faq) {

        try {
            Faq faq2 = faqService.save(faq);

            return new ResponseEntity<>(faq2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/faq/{no}")
    public ResponseEntity<Object> update(@PathVariable int no,@RequestBody Faq faq) {

        try {
            Faq faq2 = faqService.save(faq);

            return new ResponseEntity<>(faq2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/faq/{no}")
    public ResponseEntity<Object> findById(@PathVariable int no) {

        try {
            Optional<Faq> optionalFaq = faqService.findById(no);

            if (optionalFaq.isPresent()) {
                return new ResponseEntity<>(optionalFaq.get(), HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);

            }

        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
        @DeleteMapping("/faq/deletion/{no}")
        public ResponseEntity<Object> delete(@PathVariable int no) {

//        프론트엔드 쪽으로 상태정보를 보내줌
            try {
                boolean bSuccess = faqService.removeById(no);

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


