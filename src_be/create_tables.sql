-- Users 테이블 생성
CREATE TABLE Users (
    firebase_uid VARCHAR(32) NOT NULL,
    PRIMARY KEY (firebase_uid)
);

-- Diaries 테이블 생성
CREATE TABLE Diaries (
    diary_id INT NOT NULL AUTO_INCREMENT,
    firebase_uid VARCHAR(32) NOT NULL,
    content TEXT NULL,
    date DATE NULL,
    weather VARCHAR(16) NULL,
    emotion VARCHAR(16) NULL,
    created_at DATETIME NULL,
    PRIMARY KEY (diary_id)
);

-- Tags 테이블 생성
CREATE TABLE Tags (
    tag_id INT NOT NULL AUTO_INCREMENT,
    tag_name VARCHAR(16) NULL,
    created_at DATETIME NULL,
    PRIMARY KEY (tag_id)
);

-- Diary_Tags 테이블 생성
CREATE TABLE Diary_Tags (
    diaryTag_id INT NOT NULL AUTO_INCREMENT,
    diary_id INT NOT NULL,
    tag_id INT NOT NULL,
    created_at DATETIME NULL,
    PRIMARY KEY (diaryTag_id),
    FOREIGN KEY (diary_id) REFERENCES Diaries(diary_id),
    FOREIGN KEY (tag_id) REFERENCES Tags(tag_id)
);

-- Analysis_results 테이블 생성
CREATE TABLE Analysis_results (
    result_id INT NOT NULL AUTO_INCREMENT,
    diary_id INT NOT NULL,
    feedback TEXT NULL,
    created_at DATETIME NULL,
    PRIMARY KEY (result_id),
    FOREIGN KEY (diary_id) REFERENCES Diaries(diary_id)
);

-- Photos 테이블 생성
CREATE TABLE Photos (
    photo_id INT NOT NULL AUTO_INCREMENT,
    file_path VARCHAR(128) NULL,
    created_at DATETIME NULL,
    diary_id INT NOT NULL,
    PRIMARY KEY (photo_id),
    FOREIGN KEY (diary_id) REFERENCES Diaries(diary_id)
);
