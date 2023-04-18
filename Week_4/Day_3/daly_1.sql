-- CREATE TABLE customer (
--   customer_id SERIAL,
--   first_name VARCHAR(45),
--   last_name VARCHAR(45) NOT NULL,
--   PRIMARY KEY (customer_id)
-- );

-- CREATE TABLE customer_profile  (
-- 	customer_profile_id serial,		
--   	pk_customer_id INTEGER NOT NULL,
--   	isLoggedIn boolean DEFAULT false,
--   	CONSTRAINT fk_customer_id FOREIGN KEY (pk_customer_id) REFERENCES customer (customer_id)
-- );
-- insert into customer (first_name, last_name)
-- values
-- ('John', 'Doe'),
-- ('Jerome', 'Lalu'),
-- ('Lea', 'Rive');

-- insert into customer_profile (pk_customer_id, isLoggedIn)
-- values
-- ((select customer_id from customer where  first_name = 'John'), true)
-- ((select customer_id from customer where  first_name = 'Jerome'), false)
-- select first_name from customer 
-- join customer_profile
-- on customer_profile.pk_customer_id = customer.customer_id
-- where isLoggedIn = 'true'

-- select count(first_name) from customer 
-- join customer_profile
-- on customer_profile.pk_customer_id = customer.customer_id
-- where isLoggedIn = 'false'

-- create table book (
-- 	book_id SERIAL PRIMARY KEY,
-- 	title VARCHAR(45) NOT NULL,
-- 	author VARCHAR(45) NOT NULL
-- 	);

-- insert into book (title, author)
-- values
-- ('Alice In Wonderland', 'Lewis Carroll'),
-- ('Harry Potter', 'J.K Rowling'),
-- ('To kill a mockingbird', 'Harper Lee');

-- create table  student (
-- 	student_id SERIAL PRIMARY KEY, 
-- 	name VARCHAR(45) NOT NULL UNIQUE, 
-- 	age int CHECK (age <= 15)
-- );
-- insert into student (name, age)
-- values
-- ('John', 12),
-- ('Lera', 11),
-- ('Patrick', 10),
-- ('Bob', 14);

-- create table library (
-- 	book_fk_id int, 
-- 	student_id int, 
-- 	borrowed_date date,
-- 	PRIMARY KEY (book_fk_id, student_id),
-- 	FOREIGN KEY (book_fk_id) REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
--   	FOREIGN KEY (student_id) REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
-- );

-- insert into library (student_id, book_fk_id, borrowed_date)
-- values
-- ((select student_id from student where name = 'John'), (select book_id from book where title = 'Alice In Wonderland'), '2022-05-15')
--  ((select student_id from student where name = 'Bob'), (select book_id from book where title = 'To kill a mockingbird'), '2021-05-23')
--  ((select student_id from student where name = 'Lera'), (select book_id from book where title = 'Alice In Wonderland'), '2021-05-23')
--  ((select student_id from student where name = 'Bob'), (select book_id from book where title = 'Harry Potter'), '2021-08-12')

-- select * from student
-- join library
-- on library.student_id = student.student_id
-- join book
-- on library.book_fk_id = book.book_id
-- where name = 'Bob' 

-- select avg(age)
-- from student
-- join library
-- on library.student_id = student.student_id
-- join book
-- on library.book_fk_id = book.book_id
-- where title = 'Alice In Wonderland'

-- delete from student where student_id = 1
-- select * from library 

