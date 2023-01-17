-- Practice with SQL:
 -- 2. Create a table of 3 of your favorite television shows, including the name of the show, favorite actor/actress, where it plays (netflix, cable, etc.), and the genre.
--     - Run a query to print all of the show names.
 -- 3. Create a table of your favorite actor/actress from each tv show chosen. Include his or her first name, last name, tv show, and name of character played.
--    -Run a query to print the character names.

-- 2.
CREATE TABLE tvshows (
    ID INT PRIMARY KEY NOT NULL auto_increment,
    Show_ID CHAR(10),
    show_name VARCHAR(20),
    fav_actor VARCHAR(20),
    host VARCHAR(20),
    genre VARCHAR(20)
);
-- show1
INSERT INTO tvshows (ID, Show_ID, show_name, fav_actor, host, genre) values (null, "stk1", "Tulsa King", "Sylvester Stallone", "Paramount Plus", "Action");
-- show2 
INSERT INTO tvshows (ID, Show_ID, show_name, fav_actor, host, genre) values (null, "stm2", "The Mandalorian", "Pedro Pascal", "Disney Plus", "Adventure Fiction");
-- show3
INSERT INTO tvshows (ID, Show_ID, show_name, fav_actor, host, genre) values (null, "stlou3", "The Last Of Us", "Pedro Pascal", "HBO MAX", "Sci-fi Thriller");


-- query to print all of the show names
SELECT DISTINCT show_name FROM tvshows;

-- 3.
CREATE TABLE actor (
    ID INT PRIMARY KEY NOT NULL auto_increment,
    Actor_ID CHAR(10),
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    tv_show VARCHAR(20),
    character_played VARCHAR(20)
);

INSERT INTO actor (ID, Actor_ID, first_name, last_name, tv_show, character_played) values (null, "app1", "Pedro", "Pascal", "The Last of Us", "Joel");

SELECT first_name FROM actor;