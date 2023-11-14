DROP SEQUENCE SQ_RBOARD;
DROP TABLE TB_RBOARD CASCADE CONSTRAINT;

DROP TABLE TB_FILE_DB CASCADE CONSTRAINT;

CREATE TABLE TB_FILE_DB
(
    UUID         VARCHAR2(1000) NOT NULL
        CONSTRAINT PK_FILE_DB PRIMARY KEY, -- 파일 UUID
    FILE_TITLE   VARCHAR2(1000),           -- 제목
    FILE_CONTENT VARCHAR2(1000),           -- 내용
    FILE_NAME    VARCHAR2(1000),           -- 파일명
    FILE_DATA    BLOB,                     -- 바이너리 파일(이미지파일)
    FILE_URL     VARCHAR2(1000),           -- 파일 다운로드 URL
    DELETE_YN    VARCHAR2(1) DEFAULT 'N',
    INSERT_TIME  VARCHAR2(255),
    UPDATE_TIME  VARCHAR2(255),
    DELETE_TIME  VARCHAR2(255)
);

CREATE TABLE TB_RBOARD(
                          BNO NUMBER NOT NULL CONSTRAINT PK_RBOARD PRIMARY KEY,
                          RB_WRITER VARCHAR2(50),
                          RB_SUBJECT VARCHAR2(50),
                          RB_CONTENT VARCHAR2(1000),
                          RB_VIEW_COUNT NUMBER default 0,
                          DELETE_YN VARCHAR(1) default 'N',
                          INSERT_TIME VARCHAR2(255),
                          UPDATE_TIME VARCHAR2(255),
                          DELETE_TIME VARCHAR2(255),
                          RB_REF NUMBER default 0,
                          RB_STEP NUMBER default 0,
                          RB_LEVEL NUMBER default 0
);

CREATE sequence SQ_RBOARD
START WITH 1
INCREMENT BY 1;




