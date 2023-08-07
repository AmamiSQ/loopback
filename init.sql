-- Active: 1691393045277@@127.0.0.1@3306
CREATE DATABASE IF NOT EXISTS lbdb;

-- Grant all privileges to a user (replace 'username' and 'password' with actual values)
GRANT ALL PRIVILEGES ON lbdb.* TO 'root'@'%' IDENTIFIED BY 'dbPassword123!';

USE lbdb;

-- Create the users table if it does not exist
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);

-- Insert dummy data into the users table if it is empty
INSERT INTO users (name, email) VALUES
  ('John Doe', 'john@example.com'),
  ('Jane Smith', 'jane@example.com'),
  ('Mike Johnson', 'mike@example.com')
  ON DUPLICATE KEY UPDATE id = id;  -- Do nothing if the data already exists


-- Flush privileges to apply the changes
FLUSH PRIVILEGES;
