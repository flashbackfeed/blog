package com.example.simpledms.repository.board;

import com.example.simpledms.model.dto.board.RboardDto;
import com.example.simpledms.model.entity.board.Rboard;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 * packageName : com.example.simpledms.repository.blog
 * fileName : RboardRepository
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
@Repository
public interface RboardRepository extends JpaRepository<Rboard,Integer> {
    @Query(value = "SELECT BNO AS bno " +
            "       ,LPAD('⤵',(LEVEL-1))||RB_SUBJECT AS rbSubject " +
            "       ,RB_WRITER AS rbWriter " +
            "       ,RB_CONTENT AS rbContent " +
            "       ,RB_VIEW_COUNT AS rbViewCount " +
            "       ,RB_REF AS rbRef " +
            "       ,RB_STEP AS rbStep  " +
            "FROM TB_RBOARD " +
            "WHERE RB_SUBJECT LIKE '%'||:rbSubject||'%' " +
            "AND DELETE_YN = 'N' " +
            "START WITH RB_STEP = 0 " +
            "CONNECT BY PRIOR BNO = RB_STEP " +
            "ORDER SIBLINGS BY RB_REF ",nativeQuery = true)
    Page<RboardDto> selectByConnectByPage(@Param("rbSubject") String rbSubject, Pageable pageable);


    @Transactional
    @Modifying
    @Query(value = "INSERT INTO TB_RBOARD " +
            "VALUES(SQ_Rboard.nextval, :#{#rboard.rbWriter}," +
            ":#{#rboard.rbSubject}," +
            ":#{#rboard.rbContent}, " +
            "0, 'N', " +
            "TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'), NULL, NULL, " +
            "SQ_RBOARD.CURRVAL,0,0) ",
            nativeQuery = true)

    int insertByReply(@Param("rboard") Rboard rboard);

    // 게시물 + 답변글 2개 삭제 함수 : 소프트 삭제 (update 문 직접 작성)
    @Transactional
    @Modifying
    @Query(value = "UPDATE TB_RBOARD " +
            "SET DELETE_YN = 'Y' " +
            "   ,DELETE_TIME = TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') " +
            "WHERE RB_REF = :rbRef" ,nativeQuery = true)
    int removeAllByRbRef(@Param("rbRef") int rbRef);
}
