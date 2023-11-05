# CourseHub Frontend

CourseHub is a web application designed to showcase a list of courses and their details using React, Vite, Redux, Tailwind CSS, cookies, and various other features. The project focuses on providing users with a comprehensive platform for exploring and interacting with course information. It includes the ability to search for courses, enroll in courses, like courses, view detailed course information, and manage a user dashboard.

## Screenshot
![image](https://github.com/AKASH-PRASAD7/CourseHub/assets/110546856/7f0ec3cf-b6e9-47ef-b4a6-c0fa657c3303)


## Features

- **Course Listing Page:** Display a list of available courses, enabling users to explore course details.

- **Course Details Page:** View detailed information about a specific course, including the course name, instructor, description, enrollment status, duration, schedule, location, prerequisites, and an expandable syllabus.

- **Student Dashboard:** Users can access a dashboard to view their enrolled courses. Each enrolled course is displayed with its name, instructor, thumbnail, due date, and progress bar. Users can also mark courses as completed.

- **User Authentication:** Implement user authentication to ensure that only authorized students can access the dashboard, enroll in courses, and mark them as completed.

- **Pagination:** Implement pagination for the course list, limiting the number of courses per page and allowing users to specify the page number.

- **Search Options:** Enable users to search for courses based on various criteria, such as course name, instructor name, keywords, enrollment status, or course duration.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/AKASH-PRASAD7/CourseHub.git
   ```

2. Change your current working directory to the project folder:

   ```bash
   cd client
   ```

3. Rename sample.env to .env and add your Server Port accordingly

4. Install the required dependencies using Yarn:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

The frontend application should now be accessible at [http://localhost:5173](http://localhost:5173).

## Usage

To use this application, follow these steps:

1. Register and log in to your user account.

2. Explore the list of available courses on the Course Listing Page.

3. Click on a course to view its detailed information on the Course Details Page.

4. Enroll in courses that interest you.

5. Access the Student Dashboard to view your enrolled courses and mark them as completed.

6. Use the search and pagination features to refine your course selection.

## Backend Integration

The CourseHub frontend is designed to work in conjunction with a backend API. The backend API should include the following features:

- Retrieve Course List API
- Retrieve Course Details API
- Enroll in a Course API
- Retrieve Enrolled Courses API
- Mark Courses as Completed API
- Course Details for Dashboard API
- User Authentication
- Pagination Support
- Search Options

Ensure that the backend is properly set up and integrated for full functionality of the CourseHub application.

## Technologies Used

- React: JavaScript library for building user interfaces.
- Vite: Build tool for modern web development.
- Redux: State management library for handling application data.
- Tailwind CSS: Utility-first CSS framework for rapid development.
- Cookies: Client-side storage for managing user sessions.
- Axios: HTTP client for making API requests.
- React Router: Routing library for navigating between pages.
- React Icons: Icon library for adding icons to components.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Special thanks to the creators of the technologies and libraries used in this project.

---

You should customize the `<repository-url>`, descriptions, and other details as needed for your specific project. Feel free to add more sections or details to the README based on your project's requirements.
