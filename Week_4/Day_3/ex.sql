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

insert into items (name, price)
values
('TV', 50),
('Duck', 44),
('Radio', 22);


