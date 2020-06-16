drop database if exists keleya_backend_test;
create database keleya_backend_test;

use keleya_backend_test;

create table users
(
    id int primary key auto_increment,
    username text not null,
    password text not null,
    createdAt datetime,
    updatedAt datetime
);

create table posts
(
    id int primary key auto_increment,
    author_id int,
    title text not null,
    body text not null,
    FOREIGN KEY(author_id) REFERENCES users(id),
    createdAt datetime,
    updatedAt datetime
);
