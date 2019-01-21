DROP USER IF EXISTS schedule_db_user;
DROP DATABASE IF EXISTS schedule_db;

CREATE USER schedule_db_user WITH PASSWORD 'password';
CREATE DATABASE schedule_db WITH OWNER schedule_db_user;
