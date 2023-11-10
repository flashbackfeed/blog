package com.example.simpledms.model.entity.board;

import com.example.simpledms.model.common.BaseTimeEntity;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

/**
 * packageName : com.example.simpledms.model.entity.blog
 * fileName : Rboard
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
@Entity
@Table(name = "TB_RBOARD")
@SequenceGenerator( name = "SQ_RBOARD_GENERATOR"
        , sequenceName = "SQ_RBOARD"
        , initialValue = 1
        , allocationSize = 1)
@Getter
@ToString
@Setter
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
// soft delete
@Where(clause = "DELETE_YN = 'N'")
@SQLDelete(sql = "UPDATE TB_RBOARD SET DELETE_YN = 'Y', DELETE_TIME=TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') WHERE BNO = ?")
public class Rboard extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_RBOARD_GENERATOR")
    private Integer bno;

    private String rbSubject;

    private String rbWriter;

    private String rbContent;

    private Integer rbViewCount;

    private Integer rbRef;

    private Integer rbStep;

    private Integer rbLevel;
}
