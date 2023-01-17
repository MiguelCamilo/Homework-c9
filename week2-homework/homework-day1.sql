-- Practice with SQL:
 -- 2. Create a table of 3 of your favorite television shows, including the name of the show, favorite actor/actress, where it plays (netflix, cable, etc.), and the genre.
--     - Run a query to print all of the show names.
 -- 3. Create a table of your favorite actor/actress from each tv show chosen. Include his or her first name, last name, tv show, and name of character played.
--    -Run a query to print the character names.

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

--! 3.
CREATE TABLE actor (
    ID INT PRIMARY KEY NOT NULL auto_increment,
    Actor_ID CHAR(10),
    show_name VARCHAR(20),
    fav_actor VARCHAR(20),
    host VARCHAR(20),
    genre VARCHAR(20)
);
