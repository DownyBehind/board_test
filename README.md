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
table example

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
```
