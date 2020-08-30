-- create schema nairarun
use nairarun;
create table GAMEPLAN(
TSK_id int auto_increment,
TSK_name varchar(20),
TSK_desc varchar(200),
TSK_owner varchar(20),
TSK_frm DATETIME,
TSK_to DATETIME,
primary key(TSK_id)
);
select * from GAMEPLAN ;
drop table GAMEPLAN;

desc GAMEPLAN;


Insert into GAMPLAN (
TSK_name,
TSK_desc,
TSK_owner,
TSK_frm,
TSK_to
)
VALUES
("Inform Users","Inform users to logoff from application","AppSupport",'2020-08-01 06:00:00','2020-08-01 06:30:00'),
("Set EOD Flage","Set the EOD flag as app need to standalone","AppSupport",'2020-08-01 06:30:00','2020-08-01 07:00:00');
