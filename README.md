# PiSys - Product Dashboard

**PiSys** is a dynamic and interactive product management interface built with React. It connects to a public mock API to allow users to display, manage, search, filter, and sort a list of products. This project showcases skills in React, API integration, state management, and user interface design.


**GitHub Repository:** `[https://github.com/Mesta-Jeff/PiSys.git]`

## Table of Contents

1.  [Objective](#objective)
2.  [Core Features Implemented](#core-features-implemented)
3.  [Additional Features Implemented](#additional-features-implemented)
4.  [Bonus Features (Optional)](#bonus-features-optional)
5.  [Tech Stack](#tech-stack)
6.  [Setup and Installation](#setup-and-installation)
7.  [Navigation Flow](#navigation-flow)
8.  [Assumptions and Decisions Made](#assumptions-and-decisions-made)
9.  [Potential Future Improvements (What you'd improve with more time)](#potential-future-improvements-what-youd-improve-with-more-time)

## Objective

To build a robust product management interface using React, enabling users to:
*   Fetch and display product data from a public API.
*   Perform CRUD (Create, Read, Update, Delete) operations on products.
*   Implement additional user-friendly features like favorites, search, filtering, sorting, detailed views, pagination, and notifications.

## Core Features Implemented

*   **Fetch & Display Products:**
    *   Successfully fetches product data from `https://mock-data-josw.onrender.com/products`.
    *   Displays products in a clear, tabular, or card-based layout, showing:
        *   Name
        *   Price
        *   Category
        *   Rating (if available from API)
*   **CRUD Operations:**
    *   **Create:** Users can add new products through a form modal. Data is sent via a `POST` request.
    *   **Read:** All products are displayed on the product dashboard.
    *   **Update:** Existing products can be edited. Data is sent via a `PUT` request to `https://mock-data-josw.onrender.com/products/:id`.
    *   **Delete:** Products can be removed from the list via a `DELETE` request to `https://mock-data-josw.onrender.com/products/:id`.

## Additional Features Implemented

*   **⭐ Favorites:**
    *   Users can mark products as favorites.
    *   Favorite status is persisted across browser sessions using `localStorage`.
    *   A visual indicator shows if a product is a favorite.
*   **Search & Filter:**
    *   **Search by Name:** An input field allows users to search for products by their name.
    *   **Filter by Category:** Products can be filtered using a dropdown of categories fetched from `https://mock-data-josw.onrender.com/categories`.
*   **Sort by Price:**
    *   Products can be sorted by price (functionality might be client-side or dependent on API support).
*   **Modal Details:**
    *   Clicking on a product opens a modal.
    *   The modal displays detailed information: `name`, `price`, `description`, and `category`.
*   **Pagination:**
    *   Implemented to manage large lists of products, improving performance and user experience.
    *   Users can navigate through different pages of products.
*   **Notifications:**
    *   User-friendly toast messages are displayed for success actions.
    *   SweetAlert2/modal prompts are used for error messages.

## Tech Stack

*   **Core:**
    *   React
    *   JavaScript (ES6+)
    *   HTML5
    *   CSS 
*   **State Management**
    *   `[Zustand / Primarily component state with localStorage for persistence]`
*   **Styling **
    *   `[Plain CSS / CSS Modules / Bootstrap,]`
*   **API Calls:**
    *   `[Axios]`
*   **Notifications:**
    *   `[SweetAlert2 & Toast]`
*   **Routing:**
    *   React Router DOM
*   **Build Tool:**
    *   Vite
*   **Development Environment:**
    *   Node.js v22.0.4 LTS (recommended v18+)

## Setup and Installation

This project was built using React with Vite, and developed using Node.js v22.0.4 LTS. To run it locally, you can either use an attached zip file (if provided) or clone the project from GitHub.

### Option 1: Using an Attached ZIP (e.g., PiSys.zip) from email meaasge
(If you are submitting a ZIP file)

1.  Download the `PiSys.zip` file (or similarly named archive) and extract it to any location on your computer.
2.  Open the extracted folder in your preferred code editor or IDE (e.g., VS Code, IntelliJ, etc.).
3.  Ensure Node.js is installed on your machine. The project was built using Node.js v22.0.4 LTS, so using Node v18 or later is recommended.
4.  In your terminal or command prompt, navigate to the project folder and run:
    ```bash
    npm install
    ```
    This installs all required project dependencies.
5.  After installation, start the development server by running:
    ```bash
    npm run dev
    ```
6.  Once started, open your browser and go to:
    `http://localhost:5173`

💡 **Note:** If port 5173 is in use, Vite will automatically assign a different port and display the new local URL in the terminal.

### Option 2: Cloning from GitHub

1.  Open your terminal and run the following command to clone the repository:
    ```bash
    git clone git@github.com:Mesta-Jeff/PiSys.git
    ```
    (Or use the HTTPS URL: `git clone https://github.com/Mesta-Jeff/PiSys.git`)
2.  Navigate into the cloned project folder:
    ```bash
    cd PiSys
    ```
3.  Install all dependencies:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```
5.  Visit `http://localhost:5173` in your browser to view the app.

### Additional Notes
*   This project uses Vite for fast local development and hot module reloading.
*   Ensure that no other application is running on port 5173, or Vite will use a different port (check terminal output).
*   If you encounter errors related to missing modules:
    *   Delete the `node_modules` folder and `package-lock.json` file.
    *   Then run `npm install` again to reset the dependencies.

## Navigation Flow

1.  **Login Page (Entry Point):**
    *   Access the application by navigating to `http://localhost:5173/` or `http://localhost:5173/auth/login`.
    *   The system requires you to enter any random Username and Password to mimic real application behavior and create a session. This is the default entry page.

2.  **Dashboard Page:**
    *   Upon successful login, you are redirected to the dashboard page: `http://localhost:5173/admin/dashboard`.
    *   This page displays summary statistics, including counts of Favorites, Expected Income (if applicable), Categories, and Products.
    *   Attempting to access this route directly without an active session will redirect you to the login page.

3.  **Products Page:**
    *   Accessible via the route: `http://localhost:5173/admin/products`.
    *   This page is central to product management and handles:
        *   **Viewing Products:** Products are displayed in a list (default table view, with an option for grid view).
        *   **Adding Products:** Click an "Add Product" button to open a modal form for creating new products.
        *   **Updating Products:** Each product record has an "Edit" action button, which opens a modal pre-filled with product data for modification.
        *   **Deleting Products:** Each product record has a "Delete" action button to remove the product (typically with a confirmation).
        *   **Adding to Favorites:** Each product record allows toggling its favorite status.
        *   **Viewing Product Details:** Clicking on a product (or a specific "View" button) opens a modal displaying detailed information about that single product.
    *   The page supports both **Table List** and **Grid** views for user preference.

    **Modals:**
    *   **Add/Update Product Modal:** A form modal is used for both creating new products and editing existing ones.
        ![Image of Add/Update Product Modal (if you have one, otherwise remove this line)]
    *   **View Product Detail Modal:** A modal displays comprehensive details of a selected product.
        ![Image of View Product Detail Modal (if you have one, otherwise remove this line)]

## Assumptions and Decisions Made

While developing the product dashboard, several assumptions and intentional decisions were made to align with the project requirements and ensure timely and practical delivery.

*   **User Authentication:** One key assumption was that user authentication was not required, as it was not specified in the brief. Based on this, features such as managing favorites were implemented using `localStorage` to persist data across sessions on a single device. In a real-world scenario, this functionality would ideally be tied to authenticated user profiles with backend support to ensure persistence across multiple devices.
*   **Category Management:** Regarding category management, I assumed that the list of categories retrieved from the API (`https://mock-data-josw.onrender.com/categories`) was fixed and not meant to be altered by the user through the UI. As a result, I focused on allowing filtering by category but did not include functionality for users to create or modify categories.
*   **Notification Strategy:** Another important design decision was related to user notifications and feedback. While the brief might have suggested using toast messages for all action feedback, I made a conscious decision to blend toast notifications with prompt-style alerts/modals. I used toast messages for success responses (like successful creation, updates, or deletions), since these typically don’t require user intervention and allow the user to continue their task uninterrupted. However, for error handling, I chose to use standard alert or modal prompts. My reasoning was that when something goes wrong, it’s important that the user is forced to pause and acknowledge the issue. Toasts are easily missed or ignored—especially during active interaction—which is not ideal when immediate attention is required. This approach ensures that error messages are not overlooked, preserving clarity and usability.
*   **UI/UX Design:** For styling and layout, I decided to keep the UI clean and simple, prioritizing functional completeness over heavy design customizations. The product display offers both table and grid views for user preference.
*   **Detailed Information Display:** I chose to display detailed product information in modals rather than on separate pages. This decision helped streamline the user experience by keeping interactions fast and avoiding unnecessary routing or page transitions, maintaining context on the product list page.
*   **API Behavior:** The mock API (`https://mock-data-josw.onrender.com`) is assumed to simulate backend behavior. Actual data persistence for `POST`, `PUT`, and `DELETE` operations is dependent on the mock API's implementation; changes might be temporary or session-based.

These assumptions and decisions were made to ensure clarity, functionality, and a balance between user experience and development efficiency within the given time constraints.

## Potential Future Improvements (What you'd improve with more time)

Working on this project has been both insightful and rewarding. It presented real-world challenges, such as dealing with APIs that don’t always return clean, well-structured JSON responses. Handling and transforming such data required thoughtful design and attention to detail to ensure smooth integration with the frontend.

Given more time, here are areas I would focus on improving:

*   **Enhanced Favorites Storage:** Currently, favorites are saved in `localStorage`, which means they only persist on the same device and browser. With more time or access to backend services, I would implement user authentication and store favorites in the database, ensuring they are synchronized across devices for a more consistent and personalized experience.
*   **Category Management:** The API allows filtering products by predefined categories, but users cannot create or modify them. I would implement category management features, allowing users to create, edit, and delete categories so the system can adapt to a broader range of use cases.
*   **Advanced Error Handling & Form Validation:** I would invest more effort into error handling and form validation. Currently, error messages and validation logic are quite basic. A more polished approach would involve using libraries like Yup or Zod for robust client-side form validation and improving feedback during API failures. This would help users better understand what went wrong and how to fix it.
*   **Performance Optimization:** As the number of products increases, performance becomes an important factor. To address this, I would look into optimizations such as memoization (`React.memo`, `useMemo`, `useCallback`), code-splitting (especially with Vite), and using virtualized lists (e.g., `react-window` or `react-virtualized`) for rendering large datasets efficiently.
*   **UI/UX Refinement:** While the current interface is functional, I would refine the design using a modern styling framework like Tailwind CSS, Material UI, or Shadcn UI. I would also work on making the layout fully responsive, ensuring that the dashboard looks and works well on both desktop and mobile devices.
*   **Automated Testing:** At this stage, the project lacks automated testing. Given more time, I would implement unit and integration tests using Jest and React Testing Library to ensure the reliability of critical features like CRUD operations, form handling, and API interactions.
*   **Accessibility (a11y):** Making sure the application is usable by everyone—including people who rely on screen readers or keyboard navigation—is essential. I would conduct a thorough accessibility audit and implement improvements (e.g., semantic HTML, proper ARIA roles, keyboard navigation, focus management) and test with tools like Lighthouse or Axe.
*   **Code Structure & Scalability:** I would work on improving the overall code structure and scalability. Modularizing the codebase, separating concerns like API logic and utility functions more strictly, and potentially introducing TypeScript for static type checking would all contribute to better maintainability and developer experience as the application grows.
*   **Optimistic Updates:** For CRUD operations, implement optimistic updates to the UI for a snappier user experience, reverting changes if the API call fails.
*   **Internationalization (i18n):** Add support for multiple languages if the application targets a diverse user base.

Overall, while the project meets the core requirements, these enhancements would elevate it to a more scalable, reliable, and user-friendly product dashboard.
