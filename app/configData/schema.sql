CREATE DATABASE friend_finder_db;
USE friend_finder_db;

-- Create the table plans.
CREATE TABLE friends
(
id int NOT NULL AUTO_INCREMENT,
name varchar(255) NOT NULL,
image varchar(255) NOT NULL,
scores varchar(255) NOT NULL,
PRIMARY KEY (id)
);

