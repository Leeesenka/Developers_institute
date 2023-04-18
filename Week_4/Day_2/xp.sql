-- select * from customer;
-- select first_name, last_name as full_name from customer;
-- select distinct create_date from customer; 
-- select * from customer order by first_name desc;
-- select film_id, title, description, release_year, rental_rate from film order by rental_rate; 
-- select address, phone from address where district = 'Texas';
-- select * from film where film_id = '15' or film_id = '150';
-- select film_id, title, description, length, rental_rate from film where title = 'Baby Hall';
-- select film_id, title, description, length, rental_rate from film where title like 'Ba%'; 
-- select replacement_cost from film order by replacement_cost  limit 10;
-- select customer.customer_id, first_name, last_name, amount, payment_date 
-- from customer 
-- inner join payment
-- on customer.customer_id = payment.customer_id
-- order by customer_id;

-- select *
-- from film
-- where film_id not in (select film_id from inventory group by film_id);

-- select country.country_id, city, country
-- from country 
-- inner join city
-- on country.country_id = city.country_id

-- select customer.customer_id, first_name, last_name, amount, payment_date, payment.staff_id
-- from customer 
-- inner join payment
-- on customer.customer_id = payment.customer_id
-- order by staff_id;



-- select title, rating, length, rental_rate 
-- from film 
-- where (rating = 'PG-13' or rating = 'G') 
-- and 
-- (length <= 120) and (rental_rate < 3.00) order by title;

-- update customer set first_name = 'Alesya', last_name= 'Frolova' where customer_id = 1;
-- select first_name, last_name from customer where customer_id = 1;









