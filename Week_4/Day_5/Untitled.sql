-- CREATE TABLE questions_answers (
--     id SERIAL PRIMARY KEY,
--     question TEXT NOT NULL,
--     correct_answer TEXT NOT NULL,
--     incorrect_answers TEXT[] NOT NULL
-- );

ALTER TABLE scores ADD COLUMN name VARCHAR;
