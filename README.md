# User Management Application

A React-based application to manage users, including functionalities for adding, editing, and deleting users, along with error handling and pagination.

## Features
- View Users: Displays a list of users with details such as ID, First Name, Last Name, Email, and Department.
- Add User: Provides a form to add a new user, submitting the data to the backend.
- Edit User: Allows editing existing user details.
- Delete User: Users can be deleted from the list with a single click.
- Error Handling: Displays user-friendly error messages in case of API issues.
- Responsive Design: Optimized for mobile, tablet, and desktop views.

## Technologies Used
- React.js: For building the user interface and managing state.
- CSS: For styling and responsive design.
- Axios: For making HTTP requests to the mock backend API (JSONPlaceholder).
- JSONPlaceholder API: A mock REST API for testing and demonstration purposes.
- Netlify: For hosting and deployment of the application.

## Project Setup Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/dhruvjaiswal2981/User-Management-Application.git
    cd user-management

2. Install dependencies:
    ```bash
    npm install

3. Start the development server:
    ```bash
    npm start

4. Open your browser and navigate to:
    
    - http://localhost:3000



## Directory Structure:
 - 
    ```bash
    src/
    ├── components/
    │   ├── UserList.js         # Displays the list of users
    │   ├── UserForm.js         # Handles adding and editing users
    ├── App.js              # Main application component
    ├── index.js                # Entry point for the app
    ├── styles.css               # styles
    ├── reportWebVitals.js      # Performance reporting

## Components Explained:
- App Component
    - Serves as the main wrapper for all child components.
    - Manages state for users and handles global error boundaries.
- UserList Component
    - Fetches and displays users in a tabular format.
    - Includes "Edit" and "Delete" buttons for managing users.
- UserForm Component
    - Contains a form for adding and editing user details.
    - Validates inputs like email and required fields. 


## Challenges Faced
1. API Limitations:
    - JSONPlaceholder does not persist changes; data resets on refresh.
    - Solution: Replace JSONPlaceholder with a real backend for persistent storage.
2. Error Handling:
    - Implementing comprehensive error boundaries to ensure graceful failure management.
3. Form Validation:
    - Added client-side validation for email format and required fields.

## Potential Improvements
1. Real Backend:
    - Integrate a real backend service for persistent data storage.
2. Authentication:
    - Add user authentication and role-based access controls.
3. UI/UX Enhancements:
    - Improve responsiveness using libraries like Material-UI or Tailwind CSS.
    - Add toast notifications for actions like successful add, edit, or delete.
4. Testing:
    - Write unit and integration tests using Jest and React Testing Library.
5. Pagination:
    - Replace simulated pagination with API-supported pagination for larger datasets.

## Deployment
- Live Demo: The application is hosted on Netlify.
- Access it here: https://users-management-site.netlify.app/