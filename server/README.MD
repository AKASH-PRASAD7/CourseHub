# Course Management Server

This is the server-side application for managing and providing access to courses and user information. It is built using Node.js, Express.js, and MongoDB, and includes authentication, authorization, and several APIs to manage courses, users, and enrollments.

## Api Docs (https://documenter.getpostman.com/view/23950566/2s9YXe8jLT)

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Authentication and Authorization](#authentication-and-authorization)
- [API Documentation](#api-documentation)
  - [Auth Routes](#auth-routes)
  - [Course Routes](#course-routes)
  - [User Routes](#user-routes)
- [Middleware](#middleware)
- [Database](#database)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you start, make sure you have the following software and dependencies installed:

- Node.js
- MongoDB

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/AKASH-PRASAD7/CourseHub.git
   ```

````

2. Navigate to the project directory:

   ```bash
   cd server
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   - Rename sample.env to .env
   - Add All the Secrets and keys accordingly

5. Start the server:

   ```bash
   npm start
   ```

The server will run at `http://localhost:3000`.

## Authentication and Authorization

- This server uses JSON Web Tokens (JWT) for user authentication and authorization.
- Middleware functions ensure that only authorized users can access certain routes, such as enrolling in a course or marking a course as completed.
- Passwords are hashed and salted using bcrypt for security.

## API Documentation

### Auth Routes

#### Sign Up (POST)

- **Route**: `/api/auth/signup`
- **Description**: Sign up a new user.
- **Parameters**: None
- **Access**: Public

#### Sign In (POST)

- **Route**: `/api/auth/signin`
- **Description**: Sign in an existing user.
- **Parameters**: None
- **Access**: Public

#### Sign Out (POST)

- **Route**: `/api/auth/signout`
- **Description**: Sign out the currently authenticated user.
- **Parameters**: None
- **Access**: Public

### Course Routes

#### Get All Courses (GET)

- **Route**: `/api/course`
- **Description**: Get all courses paginated.
- **Parameters**: None
- **Access**: Public

#### Get Course by ID (GET)

- **Route**: `/api/course/:id`
- **Description**: Get course details by ID.
- **Parameters**: `id` (Course ID)
- **Access**: Public

#### Add Course (POST)

- **Route**: `/api/course`
- **Description**: Add a new course.
- **Parameters**: None
- **Access**: Public

#### Like a Course (PUT)

- **Route**: `/api/course/:courseId`
- **Description**: Like a course.
- **Parameters**: `courseId` (Course ID)
- **Access**: Private

#### Search Courses (GET)

- **Route**: `/api/course/search/:query`
- **Description**: Search courses by title or instructor name.
- **Parameters**: `query` (Search query)
- **Access**: Public

#### Get Enrolled Courses (GET)

- **Route**: `/api/course/enrolled/course`
- **Description**: Get enrolled courses.
- **Parameters**: None
- **Access**: Public

#### Filter Courses (GET)

- **Route**: `/api/course/filter/filters`
- **Description**: Filter courses by duration, enrollment status, and schedule.
- **Parameters**: `enrollmentStatus`, `schedule`, `duration`
- **Access**: Public

### User Routes

#### Get All Users (GET)

- **Route**: `/api/user`
- **Description**: Get all users.
- **Parameters**: None
- **Access**: Public

#### Get User by ID (GET)

- **Route**: `/api/user/:id`
- **Description**: Get user details by ID.
- **Parameters**: `id` (User ID)
- **Access**: Public

#### Enroll in a Course (PUT)

- **Route**: `/api/user/enroll/:courseId`
- **Description**: Enroll in a course.
- **Parameters**: `courseId` (Course ID)
- **Access**: Private

#### Get Enrolled Courses (GET)

- **Route**: `/api/user/course/enrolled-courses`
- **Description**: Get all enrolled courses for the authenticated user.
- **Parameters**: None
- **Access**: Private

#### Mark Course as Completed (PUT)

- **Route**: `/api/user/course/:courseId`
- **Description**: Mark a course as completed.
- **Parameters**: `courseId` (Course ID)
- **Access**: Private

## Middleware

- **verifyCookie**: Middleware for verifying JWT tokens and authenticating users.
- **verifyCookies**: Middleware for verifying JWT tokens and authenticating users (used in User routes).

## Database

- MongoDB is used as the database for storing course and user data. Make sure your MongoDB server is properly configured.

## Contributing

Contributions are welcome. Please follow the established code style and contribute to making the project better.

## License

This project is licensed under the [MIT License](LICENSE).
````
