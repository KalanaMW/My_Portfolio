-- Portfolio Database Setup Script
-- Run this script in SQL Server Management Studio or Azure Data Studio

-- Create database
CREATE DATABASE portfolio_db;
GO

USE portfolio_db;
GO

-- Create Projects table
CREATE TABLE projects (
    id BIGINT IDENTITY(1,1) PRIMARY KEY,
    title NVARCHAR(100) NOT NULL,
    description NVARCHAR(500),
    image_url NVARCHAR(200),
    github_url NVARCHAR(200),
    live_url NVARCHAR(200),
    technologies NVARCHAR(100),
    start_date DATE,
    end_date DATE,
    is_active BIT NOT NULL DEFAULT 1,
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE()
);

-- Create Skills table
CREATE TABLE skills (
    id BIGINT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(50) NOT NULL,
    proficiency_level INT NOT NULL CHECK (proficiency_level >= 1 AND proficiency_level <= 100),
    skill_type NVARCHAR(50),
    is_active BIT NOT NULL DEFAULT 1,
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE()
);

-- Create Contact Messages table
CREATE TABLE contact_messages (
    id BIGINT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(100) NOT NULL,
    email NVARCHAR(100) NOT NULL,
    subject NVARCHAR(200),
    message NVARCHAR(1000) NOT NULL,
    created_at DATETIME2 NOT NULL DEFAULT GETDATE(),
    is_read BIT NOT NULL DEFAULT 0
);

-- Insert sample projects
INSERT INTO projects (title, description, image_url, github_url, live_url, technologies, start_date, end_date)
VALUES 
('E-Commerce Platform', 'A full-stack e-commerce application with Angular frontend and Spring Boot backend', 
 'https://via.placeholder.com/400x300', 'https://github.com/user/ecommerce', 'https://ecommerce-demo.com',
 'Angular, Spring Boot, MySQL', '2024-01-01', '2024-03-15'),
 
('Task Management App', 'A collaborative task management application with real-time updates', 
 'https://via.placeholder.com/400x300', 'https://github.com/user/taskapp', 'https://taskapp-demo.com',
 'Angular, Node.js, MongoDB', '2023-11-01', '2024-01-30'),
 
('Weather Dashboard', 'A responsive weather dashboard with location-based forecasts', 
 'https://via.placeholder.com/400x300', 'https://github.com/user/weather', 'https://weather-demo.com',
 'Angular, TypeScript, Weather API', '2023-09-01', '2023-10-15');

-- Insert sample skills
INSERT INTO skills (name, proficiency_level, skill_type)
VALUES 
('Angular', 90, 'Frontend'),
('Spring Boot', 85, 'Backend'),
('JavaScript', 95, 'Frontend'),
('TypeScript', 88, 'Frontend'),
('Java', 90, 'Backend'),
('SQL Server', 80, 'Database'),
('HTML/CSS', 95, 'Frontend'),
('REST APIs', 85, 'Backend'),
('Git', 85, 'Tools'),
('Docker', 70, 'Tools'),
('Azure', 75, 'Cloud'),
('React', 80, 'Frontend');

-- Create indexes for better performance
CREATE INDEX IX_projects_active ON projects(is_active);
CREATE INDEX IX_projects_start_date ON projects(start_date);
CREATE INDEX IX_skills_active ON skills(is_active);
CREATE INDEX IX_skills_type ON skills(skill_type);
CREATE INDEX IX_contact_created_at ON contact_messages(created_at);
CREATE INDEX IX_contact_is_read ON contact_messages(is_read);

PRINT 'Database setup completed successfully!';
GO
