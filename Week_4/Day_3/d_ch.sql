-- create table items 
-- (
-- id serial primary key,
-- item varchar(50) not null,
-- price int not null	
	
-- );

-- create table product_orders
-- (
-- id serial primary key,
-- quantity int not null,
-- "date" timestamp not null default current_timestamp,	
-- product_orders_id int references items(id) on delete no action
-- );

-- insert into items (item, price)
-- values
-- ('TV', 50),
-- ('Duck', 44),
-- ('Radio', 22);

-- insert into product_orders(quantity, product_orders_id)
-- values
-- (1, (select id from items where item = 'TV')),
-- (5, (select id from items where item = 'Duck')),
-- (2, (select id from items where item = 'Radio'));

-- select item, quantity, price from product_orders
-- join items
-- on 
-- product_orders.product_orders_id = items.id
-- where product_orders.id = 1;

-- create function order_price(order_id int)
-- returns int as $$
-- 	declare 
-- 		total_sum int;
-- 	begin 
-- 		total_sum:= (select sum(quantity * price) from product_orders
-- 			join items
-- 			on 
-- 			product_orders.product_orders_id = items.id
-- 			where product_orders.id = order_id);
-- 		return total_sum;
-- 	end;
-- $$ language plpgsql; 


-- select * from order_price(3);

-- create table users
-- (
-- id serial primary key,
-- first_name varchar(50),
-- last_name varchar(50)
	
-- );

-- insert into users (first_name, last_name)
-- values
-- ('Bob', 'Marley'),
-- ('Tom','Cruise'),
-- ('Linda', 'Post');

-- alter table product_orders add column us_prod int;
insert into product_orders(us_prod)
values
(1,(select id from users where first_name ='Bob')),
(5,(select id from users where first_name ='Tom')),
(2,(select id from users where first_name ='Linda'));

-- alter table product_orders add foreign key (us_prod) references users(id) on delete cascade;

