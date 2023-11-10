package com.example.simpledms.service.normal;

import com.example.simpledms.model.dto.normal.ThreadBoardDto;
import com.example.simpledms.model.entity.normal.ReplyBoard;
import com.example.simpledms.model.entity.normal.ThreadBoard;
import com.example.simpledms.repository.normal.ThreadBoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * packageName : com.example.simpledms.service.normal
 * fileName : ThreadBoardService
 * author : GGG
 * date : 2023-10-26
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-26         GGG          최초 생성
 */
@Service
public class ThreadBoardService {
    @Autowired
    ThreadBoardRepository threadBoardRepository;
    public Page<ThreadBoardDto> selectByConnectByPage(String subject, Pageable pageable){
        Page<ThreadBoardDto> page = threadBoardRepository.selectByConnectByPage(subject,pageable);
        return page;
    }

    //  답변글 저장 ( 수정 )
    public ThreadBoard save(ThreadBoard threadBoard){
        ThreadBoard threadBoard2 = threadBoardRepository.save(threadBoard);
        return threadBoard2;
    }
    //  게시물 저장 ( 수정 )
    public  int saveThread(ThreadBoard threadBoard){
        int insertCount = threadBoardRepository.insertByThread(threadBoard);

        return insertCount;
    }


    // 상세 조회
    public Optional<ThreadBoard> findById(int tid) {
        Optional<ThreadBoard> optionalThreadBoard = threadBoardRepository.findById(tid);
        return optionalThreadBoard;
    }

    // 답변만 삭제
    public boolean removeById(int tid) {
        if (threadBoardRepository.existsById(tid)) {
            threadBoardRepository.deleteById(tid);
            return true;
        }
        return false;
    }

    // 게시물 + 답변 2개이상 삭제
    public boolean removeAllByTgroup(int tgroup){
        int deleteCount = threadBoardRepository.removeAllByTgroup(tgroup);
//      deleteCount : 삭제된 건수
        if(deleteCount > 0){
            return true;
        }
        return false;
    }


}
