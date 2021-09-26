# board_test

## Project

```
L express_board (backend using express.js)
L vue_board (frontend using vue.js)
```

### Compiles and hot-reloads for development

```
L express_board : npm run dev
L vue_board : yarn serve
```

### before using this board, you must set up Mysql database

```
1. install Mysql

2. Create your own mysql id and data base

3. Create new table

[table example]

CREATE TABLE `tb_board` (
  `num` int(10) NOT NULL AUTO_INCREMENT,
  `board_code` varchar(20) DEFAULT NULL,
  `subject` varchar(300) DEFAULT NULL,
  `cont` text,
  `id` varchar(50) DEFAULT NULL,
  `filename` varchar(200) DEFAULT NULL,
  `ori_filename` varchar(200) DEFAULT NULL,
  `filesize` int(10) DEFAULT NULL,
  `regdate` datetime DEFAULT NULL,
  `editdate` datetime DEFAULT NULL,
  PRIMARY KEY (`num`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8

4. modity below information

--> express_board/config/db.js

const dbInfo = { //Mysql information
 host:'',
  port:''
  ,user:''
  ,password:''
  ,database:''
}
```

# 게시판 화면

![Screen Shot 2021-09-26 at 10 04 10 PM](https://user-images.githubusercontent.com/41497254/134809335-c586dbbb-2eb9-47d4-8b53-ff2d1d7b453a.png)

# 게시판 등록

![Screen Shot 2021-09-26 at 10 04 37 PM](https://user-images.githubusercontent.com/41497254/134809354-dabae957-d6d2-4d09-8801-913728b53ed3.png)

# 게시판 상세보기

![Screen Shot 2021-09-26 at 10 04 49 PM](https://user-images.githubusercontent.com/41497254/134809366-b45852fb-8f2b-4fb8-97f1-3d8e49084063.png)
)

# 게시판 수정

![Screen Shot 2021-09-26 at 10 05 02 PM](https://user-images.githubusercontent.com/41497254/134809383-f3f152b4-f8b3-400d-be28-611cd8410001.png)
)

# 게시판 삭제

![Screen Shot 2021-09-26 at 10 05 16 PM](https://user-images.githubusercontent.com/41497254/134809407-bb86737f-8436-4d81-8bbc-9273f4a96012.png)
