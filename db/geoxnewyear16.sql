 /*========================================================= Shanlinbao数据库*/

/*================================= 建立表空间及对应dba*/
 -- create user
 GRANT USAGE ON *.* TO 'geoxnewyear16'@'localhost' IDENTIFIED BY 'geoxnewyear16' WITH GRANT OPTION;
 -- create database
 CREATE DATABASE geoxnewyear16 CHARACTER SET  utf8  COLLATE utf8_general_ci;
 -- grant user 权限1,权限2,select,insert,update,delete,create,drop,index,alter,grant,references,reload,shutdown,process,file等14个权限
 GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,LOCK TABLES ON geoxnewyear16.*  TO 'geoxnewyear16'@'localhost' IDENTIFIED BY 'geoxnewyear16';

 /*================================= 建立表、表主外键、多表关联等T-SQL*/
 -- 改变当前数据库
 USE geoxnewyear16;

/*
用户表
*/
create table user (
id VARCHAR(128) NOT NULL  COMMENT 'ID标识',
openid VARCHAR(256) NOT NULL COMMENT '微信用户标示',
headimgurl VARCHAR(256) NOT NULL COMMENT '微信用户头像',
nickname VARCHAR(256) NOT NULL COMMENT '微信用户昵称',
pageflag CHAR(1) NOT NULL COMMENT '页面标识',
adate varchar(19) COMMENT '提交时间',
primary key (id) -- 主键
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


/*
行为记录表
*/
create table tracking (
id INT(19) NOT NULL auto_increment COMMENT 'ID标识',
ip VARCHAR(128) NOT NULL COMMENT 'IP地址',
platform VARCHAR(8) NOT NULL COMMENT '访问平台类型',
type VARCHAR(128) NOT NULL COMMENT '行为类型(Share to TimeLine, Go Web Button)',
url VARCHAR(256) NOT NULL COMMENT '页面URL',
odate varchar(16) NOT NULL COMMENT '行为操作时间',
primary key (id) -- 主键
) ENGINE=InnoDB DEFAULT CHARSET=utf8;