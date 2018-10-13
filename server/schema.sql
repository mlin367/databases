DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  ID int NOT NULL AUTO_INCREMENT,
  name varchar(25) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  ID int NOT NULL AUTO_INCREMENT,
  text varchar(255) NOT NULL,
  user_id int,
  PRIMARY KEY (ID),
  FOREIGN KEY (user_id) REFERENCES users(ID)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

