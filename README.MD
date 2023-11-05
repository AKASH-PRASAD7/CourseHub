# CourseHub

CourseHub is a full-stack web application for showcasing a list of courses and their details. It provides users with the ability to explore and interact with course information, including searching for courses, enrolling in courses, liking courses, viewing detailed course information, and managing a user dashboard. The project is divided into two parts: the frontend and the server.

## Screenshot

![Sample Course Image](/client/src/assets/1.jpg)

## Frontend

The frontend of CourseHub is developed using React, Vite, Redux, Tailwind CSS, and various other technologies. It focuses on providing a user-friendly interface for exploring and interacting with courses. It includes the following features:

- **Course Listing Page:** Display a list of available courses, enabling users to explore course details.

- **Course Details Page:** View detailed information about a specific course, including the course name, instructor, description, enrollment status, duration, schedule, location, prerequisites, and an expandable syllabus.

- **Student Dashboard:** Users can access a dashboard to view their enrolled courses. Each enrolled course is displayed with its name, instructor, thumbnail, due date, and progress bar. Users can also mark courses as completed.

- **User Authentication:** Implement user authentication to ensure that only authorized students can access the dashboard, enroll in courses, and mark them as completed.

- **Pagination:** Implement pagination for the course list, limiting the number of courses per page and allowing users to specify the page number.

- **Search Options:** Enable users to search for courses based on various criteria, such as course name, instructor name, keywords, enrollment status, or course duration.

### Installation

1. Clone the frontend repository to your local machine:

   ```bash
   git clone https://github.com/your-username/coursehub-frontend.git
   ```

2. Change your current working directory to the project folder:

   ```bash
   cd client
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   - Rename `sample.env` to `.env`.
   - Add all the secrets and keys accordingly.

5. Start the server:

   ```bash
   npm run dev
   ```

The frontend application should now be accessible at [http://localhost:5173](http://localhost:5173).

## Server

The backend of CourseHub is built using Node.js, Express.js, and MongoDB. It provides authentication, authorization, and several APIs to manage courses, users, and enrollments. The server handles user registration, login, and session management. It also includes various APIs to manage courses and user interactions.

### API Documentation

For detailed information on the APIs provided by the server, you can refer to the [API Documentation](https://documenter.getpostman.com/view/23950566/2s9YXe8jLT).

### Installation

1. Clone the server repository to your local machine:

   ```bash
   git clone https://github.com/your-username/coursehub-server.git
   ```

2. Navigate to the project directory:

   ```bash
   cd server
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   - Rename `sample.env` to `.env`.
   - Add all the secrets and keys accordingly.

5. Start the server:

   ```bash
   npm start
   ```

The server will run at `http://localhost:8000`.

## Authentication and Authorization

- The server uses JSON Web Tokens (JWT) for user authentication and authorization.
- Middleware functions ensure that only authorized users can access certain routes, such as enrolling in a course or marking a course as completed.
- Passwords are hashed and salted using bcrypt for security.

## Database

- MongoDB is used as the database for storing course and user data. Make sure your MongoDB server is properly configured.

## Contributing

Contributions are welcome. Please follow the established code style and contribute to making the project better.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

Special thanks to the creators of the technologies and libraries used in this project.

---

You should customize the URLs, descriptions, and other details as needed for your specific project. Feel free to add more sections or details to the README based on your project's requirements.
