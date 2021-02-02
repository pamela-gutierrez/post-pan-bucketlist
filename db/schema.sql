### Schema

CREATE DATABASE bucketlist_db;
USE bucketlist_db;

CREATE TABLE bucketlist (
    id int NOT NULL AUTO_INCREMENT,
    bucketItem VARCHAR (300) NOT NULL,
    done BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);