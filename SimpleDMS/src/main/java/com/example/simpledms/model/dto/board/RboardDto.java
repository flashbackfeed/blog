package com.example.simpledms.model.dto.board;

/**
 * packageName : com.example.simpledms.model.dto.blog
 * fileName : RboardDto
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
public interface RboardDto {

        public Integer getBno();
        public String getRbWriter();
        public String getRbSubject();
        public String getRbContent();
        public Integer getRbViewCount();
        public Integer getRbRef();
        public Integer getRbStep();
        public Integer getRbLevel();


}
