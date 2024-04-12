# Admin Dashboard

This project is a web application designed for creating and managing courses, displaying FERPA tables, and viewing the created courses. It provides various forms for creating different types of courses, fetching semester data, and managing user information.

## Project Flow

The project follows a modular approach with components and hooks for better organization and reusability. Here's a brief overview of the key components and their functionalities:

### Pages:

- **Home:** Contains the homepage component.
- **Login:** Contains the login page component.

### Components:

- **BuildingSectionForm:** Handles the creation of building sections.
  - **BSFormSubmitHandler.js:** Handles form submission for building section creation.
  - **BuildingSectionForm.js:** Main component for building section form.
  - **BuildingSectionFormData.js:** Manages form data state for building section form.
  - **BuildingSectionFormFields.js:** Renders form fields for building section form.
  - **BuildingSectionForm.css:** Styles for the building section form.

- **Dropdown:** Provides a dropdown for selecting tables and semesters.
  - **Dropdown.js:** Dropdown component.
  - **SemesterDropdown.js:** Dropdown for selecting semesters.
  - **SemesterFetcher.js:** Fetches semester data for dropdown.
  - **Dropdown.css:** Styles for dropdown component.

- **Footer:** Displays the footer with Georgia State University information.
  - **Footer.js:** Footer component.
  - **Footer.css:** Styles for footer component.

- **Forms:** Manages various forms for creating different types of courses.
  - **Forms.js:** Main component for forms.
  - **UserFormData.js:** Manages form data state for user-related forms.
  - **UserFormFields.js:** Renders form fields for user-related forms.
  - **WindowResizeUseEffect.js:** Custom hook for handling window resize effect.
  - **Forms.css:** Styles for forms component.

- **Logs:** Manages logs display.
  - **Logs.js:** Logs component.
  - **Logs.css:** Styles for logs component.

- **Navbar:** Displays the navigation bar.
  - **Navbar.js:** Navbar component.
  - **Navbar.css:** Styles for navbar component.

- **SandboxCourse:** Manages sandbox course creation.
  - **SandboxCourse.js:** Main component for sandbox course creation.
  - **SandboxCourseForm.js:** Form for creating sandbox courses.
  - **SandboxCourseFormData.js:** Manages form data state for sandbox course form.
  - **SandboxCourse.css:** Styles for sandbox course component.

- **SubNavbar:** Displays the sub navigation bar.
  - **Subnavbar.js:** Subnavbar component.
  - **Subnavbar.css:** Styles for subnavbar component.

- **Tables:** Handles the display of tables.
  - **Tables.js:** Main component for displaying tables.
  - **Tables.css:** Styles for tables component.

- **UniversityRelatedForm:** Manages university-related course creation.
  - **UniversityRelatedForm.js:** Main component for university-related course creation.
  - **UniversityRelatedFormData.js:** Manages form data state for university-related course form.
  - **UniversityRelatedForm.css:** Styles for university-related course component.

### Hooks:

- **useLoadUser:** Handles loading user data.
  - **useLoadUser.js:** Custom hook for loading user data.

- **useLoginUrl:** Handles fetching login URLs.
  - **useLoginUrl.js:** Custom hook for fetching login URLs.

- **useToggleComponents:** Handles toggling component visibility.
  - **useToggleComponents.js:** Custom hook for toggling component visibility.

## Usage

To run the project locally, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm start`.

