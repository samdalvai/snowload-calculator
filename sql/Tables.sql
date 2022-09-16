CREATE DATABASE IF NOT EXISTS Snowload;

USE Snowload;

CREATE TABLE province (
    shorthand VARCHAR(2) PRIMARY KEY,
    name VARCHAR(40) NOT NULL UNIQUE,
    zone VARCHAR(3) NOT NULL,
    baseLoad FLOAT NOT NULL,
    CONSTRAINT zoneCheck CHECK (zone IN ('I-A', 'I-M', 'II', 'III')),
    CONSTRAINT loadCheck CHECK (baseLoad > 0)
);

CREATE TABLE city (
    zip VARCHAR(5) NOT NULL,
    name VARCHAR(40) NOT NULL,
    province VARCHAR(2) NOT NULL,
    altitude NUMERIC NOT NULL,
    CONSTRAINT citiPK PRIMARY KEY (zip,name),
    CONSTRAINT cityInProvince FOREIGN KEY (province)
        REFERENCES province (shorthand)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);