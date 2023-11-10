package com.example.simpledms.service.board;

import com.example.simpledms.model.dto.board.RboardDto;
import com.example.simpledms.model.entity.board.Rboard;
import com.example.simpledms.repository.board.RboardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * packageName : com.example.simpledms.service.blog
 * fileName : RboardService
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
@Service
public class RboardService {

    @Autowired
    RboardRepository rboardRepository; // DI

    public Page<RboardDto> selectByConnectByPage(String rbSubject, Pageable pageable){
        Page<RboardDto> page = rboardRepository.selectByConnectByPage(rbSubject,pageable);
        return page;
    }

    //  게시물 저장 ( 수정 )
    public Rboard save(Rboard rBoard){
        Rboard rboard2 = rboardRepository.save(rBoard);
        return rboard2;
    }
    //  답변글 저장 ( 수정 )
    public  int saveReply(Rboard rBoard){
        int insertCount = rboardRepository.insertByReply(rBoard);

        return insertCount;
    }


    // 상세 조회
    public Optional<Rboard> findById(int bno) {
        Optional<Rboard> optionalRboard = rboardRepository.findById(bno);
        return optionalRboard;
    }

    // 답변만 삭제
    public boolean removeById(int bno) {
        if (rboardRepository.existsById(bno)) {
            rboardRepository.deleteById(bno);
            return true;
        }
        return false;
    }

    // 게시물 + 답변 2개이상 삭제
    public boolean removeAllByRbref(int rbRef){
        int deleteCount = rboardRepository.removeAllByRbRef(rbRef);
//      deleteCount : 삭제된 건수
        if(deleteCount > 0){
            return true;
        }
        return false;
    }
}
