-- select  title, language.language_id, name
-- from film 
-- inner join language
-- on language.language_id = film.language_id;

-- select *
-- from film
-- where language_id not in (select language_id from language group by language_id);

-- select *
-- from language
-- where language_id not in (select language_id from film);

-- create table new_film
-- (
-- id serial primary key,
-- name varchar(50) not null	
-- );

-- insert into new_film (name)
-- values
-- ('Legend'),
-- ('Top Gan'),
-- ('The color of money'),
-- ('Rain Man');


-- create table customer_review
-- (
-- review_id serial not null,
-- primary key(review_id),
-- fk_new_film_id int not null,
-- fk_language_id int not null,	
-- foreign key (fk_new_film_id) references new_film(id) on delete cascade,
-- foreign key (fk_language_id) references language(language_id),
-- title varchar(50),
-- score int not null,
-- review_text text,
-- last_update date		
-- );
-- ALTER TABLE customer_review ALTER COLUMN last_update TYPE timestamp;
-- ALTER TABLE customer_review ALTER COLUMN last_update SET default CURRENT_TIMESTAMP;

-- insert into customer_review (fk_new_film_id, fk_language_id, title, score, review_text)
-- values
-- ((select id from new_film where name = 'Legend'), (select language_id from language where name ='English'), 'About film', 9, 'Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins');
-- ((select id from new_film where name = 'Top Gan'), (select language_id from language where name ='English'), 'About film_1', 10 , 'Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins'),
-- ((select id from new_film where name = 'The color of money'), (select language_id from language where name ='Japanese'), 'About film_3', 3 , 'Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins'),
-- ((select id from new_film where name = 'Rain Man'), (select language_id from language where name ='Mandarin'), 'About film_4', 8 , 'Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins');

-- delete from new_film where name = 'Legend';
-- select * from customer_review;

-- update customer_review 
-- set fk_language_id = (select language_id from language where name ='Mandarin') 
-- where review_id = 2;

-- drop table customer_review;

-- select count(rental_id) from rental where return_date is null;

-- select * from rental 
-- inner join inventory 
-- on rental.inventory_id = inventory.inventory_id
-- left join film 
-- on inventory.film_id=film.film_id
-- where rental.return_date is null
-- order by film.replacement_cost desc
-- limit 30;

-- select * from film_actor 
-- inner join actor
-- on film_actor.actor_id = actor.actor_id
-- left join film
-- on film_actor.film_id = film.film_id
-- where first_name = 'Penelope' and last_name = 'Monroe';

-- select title,length  from film where length = 120 and rating = 'R';

-- select * from film
-- inner join inventory
-- on inventory.film_id=film.film_id
-- left join rental
-- on rental.inventory_id = inventory.inventory_id
-- left join customer
-- on rental.customer_id = customer.customer_id
-- where first_name = 'Matthew' and last_name = 'Mahan'
-- and replacement_cost > 4
-- and return_date > '2005-07-01'
-- and return_date < '2005-07-28';

-- select * from film
-- inner join inventory
-- on inventory.film_id=film.film_id
-- left join rental
-- on rental.inventory_id = inventory.inventory_id
-- left join customer
-- on rental.customer_id = customer.customer_id
-- where first_name = 'Matthew' and last_name = 'Mahan'
-- and (title like '%Boat%' or description like '%Boat%')
-- order by replacement_cost desc
-- limit 1;



