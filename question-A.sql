-- A. You have been tasked with designing a database schema to track student enrollment in courses at a university. Each course has a unique ID, name and description. Each student has a unique ID, a name, an email address, and a graduation year. A student can be enrolled in multiple courses, and a course can have multiple students enrolled. Each enrollment should also track the enrollment date.

-- Design a SQL schema for this problem, including the necessary tables, columns, and relationships.


-- Constraints:

-- - Use PostgreSQL syntax to solve this problem.


CREATE TABLE courses (
    course_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    graduation_year INTEGER
);

CREATE TABLE enrollments (
    enrollment_id SERIAL PRIMARY KEY,
    course_id INTEGER REFERENCES courses (course_id),
    student_id INTEGER REFERENCES students (student_id),
    enrollment_date DATE,
    CONSTRAINT unique_enrollment UNIQUE (course_id, student_id)
);
