-- create table students (
-- id serial primary key,
-- last_name varchar(10),
-- first_name varchar(10),	
-- birth_date date);

-- insert into students (last_name, first_name, birth_date)
-- values
-- ('Marc','Benichou',	'1988-11-02'),
-- ('Yoan', 'Cohen', '2010-12-03'),
-- ('Lea',	'Benichou',	'1987-07-27'),
-- ('Amelia',	'Dux',	'1996-04-07'),
-- ('David', 'Grez', '2003-06-14'),
-- ('Omer', 'Simpson',	'1980-10-03');

-- insert into students (last_name, first_name, birth_date)
-- values
-- ('Alesya', 'Frolova',	'1988-05-08');
-- alter table students rename column last_name to firstt_name;
-- alter table students rename column first_name to lastt_name;
-- select * from students;
-- select * from students where id =2; 
-- select * from students where lastt_name = 'Benichou' and firstt_name = 'Marc';
-- select * from students where firstt_name like '%a%';
-- select * from students where firstt_name like 'A%';
-- select * from students where firstt_name like '%a';
-- select * from students where firstt_name like '%a_';
-- select * from students where id = 1 or id = 3;
-- select * from students where birth_date >= '2000-01-01'

-- select * from students where id <5 order by lastt_name;
-- select min(birth_date) as min_birth_date from students;
-- select * from students order by firstt_name limit 3 offset 2;
 



