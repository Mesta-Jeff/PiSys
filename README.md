# PiSys - Product Dashboard

**PiSys** is a dynamic and interactive product management interface built with React. It connects to a public mock API to allow users to display, manage, search, filter, and sort a list of products. This project fulfills the requirements of a frontend developer assignment, showcasing skills in React, API integration, state management, and user interface design.

**Live Demo:** `[Link to your hosted project on Render, Vercel, Netlify, etc.]`
**GitHub Repository:** `[Link to your GitHub repository]`

## Table of Contents

1.  [Objective](#objective)
2.  [Core Features Implemented](#core-features-implemented)
3.  [Additional Features Implemented](#additional-features-implemented)
4.  [Bonus Features (Optional)](#bonus-features-optional)
5.  [Tech Stack](#tech-stack)
6.  [Setup and Installation](#setup-and-installation)
7.  [Navigation Flow & How to Use](#navigation-flow--how-to-use)
8.  [Assumptions and Decisions Made](#assumptions-and-decisions-made)
9.  [Potential Future Improvements](#potential-future-improvements)

## Objective

To build a robust product management interface using React, enabling users to:
*   Fetch and display product data from a public API.
*   Perform CRUD (Create, Read, Update, Delete) operations on products.
*   Implement additional user-friendly features like favorites, search, filtering, sorting, detailed views, pagination, and toast notifications.

## Core Features Implemented

*   **Fetch & Display Products:**
    *   Successfully fetches product data from `https://mock-data-josw.onrender.com/products`.
    *   Displays products in a clear, tabular, or card-based layout, showing:
        *   Name
        *   Price
        *   Category
        *   Rating
*   **CRUD Operations:**
    *   **Create:** Users can add new products through a form. Data is sent via a `POST` request.
    *   **Read:** All products are displayed on the main dashboard.
    *   **Update:** Existing products can be edited. Data is sent via a `PUT` request to `https://mock-data-josw.onrender.com/products/:id`.
    *   **Delete:** Products can be removed from the list via a `DELETE` request to `https://mock-data-josw.onrender.com/products/:id`.

## Additional Features Implemented

*   **⭐ Favorites:**
    *   Users can mark products as favorites.
    *   Favorite status is persisted across browser sessions using `localStorage`.
    *   A visual indicator (e.g., a star icon) shows if a product is a favorite.
*   **Search & Filter:**
    *   **Search by Name:** An input field allows users to search for products by their name in real-time or upon submission.
    *   **Filter by Category:** Products can be filtered using a dropdown or list of categories fetched from `https://mock-data-josw.onrender.com/categories`.
    *   **Sort by Price:** Products can be sorted by price in ascending (Low → High) and descending (High → Low) order.
*   **Modal Details:**
    *   Clicking on a product row/card opens a modal.
    *   The modal displays detailed information: `name`, `price`, `description`, and `category`.
*   **Pagination:**
    *   Implemented to manage large lists of products, improving performance and user experience.
    *   Users can navigate through different pages of products.
*   **Toast Notifications:**
    *   User-friendly toast messages are displayed for actions like:
        *   Successful creation, update, or deletion of a product.
        *   Errors encountered during API calls or other operations.

## Bonus Features (Optional)

*(Only include this section and its items if you implemented them)*

*   **State Management:**
    *   Utilized `[React Context API / Redux / Zustand / Other]` for managing global application state, such as product lists, filters, and modal visibility.
*   **Responsive Design:**
    *   The application is designed to be responsive, providing an optimal viewing experience across various devices (mobile, tablet, desktop).
    *   `[Briefly mention approach, e.g., CSS Flexbox/Grid, media queries, or a UI library like Tailwind CSS/Material UI]`
*   **Loading Indicators & Error Messages:**
    *   Visual loading indicators (e.g., spinners) are shown during API calls.
    *   Clear error messages are displayed to the user if an API call fails or if there are issues fetching data.

## Tech Stack

*   **Core:**
    *   React `[e.g., v18.x]`
    *   JavaScript (ES6+)
    *   HTML5
    *   CSS3 `[or mention preprocessor like SASS/SCSS if used]`
*   **State Management (if applicable):**
    *   `[React Context API / Redux / Zustand]`
*   **Styling (if applicable):**
    *   `[Tailwind CSS / Material UI / Shadcn UI / Styled Components / Plain CSS Modules]`
*   **API Calls:**
    *   `[Fetch API / Axios]`
*   **Notifications (if applicable):**
    *   `[react-toastify / react-hot-toast / Custom solution]`
*   **Routing (if applicable for multi-page views, though likely not for this assignment):**
    *   `[React Router DOM]`
*   **Build Tool:**
    *   Create React App / Vite

## Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [Link to your GitHub repository]
    cd [repository-name, e.g., pisys-product-dashboard]
    ```

2.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using yarn:
    ```bash
    yarn install
    ```

3.  **Start the development server:**
    Using npm:
    ```bash
    npm start
    ```
    Or using yarn:
    ```bash
    yarn start
    ```
    This will typically open the application in your default web browser at `http://localhost:3000`.

4.  **Environment Variables (if any):**
    *   `[If you used any .env files for API keys or base URLs (though unlikely for this public API), explain how to set them up, e.g., "Create a .env file in the root directory and add `REACT_APP_API_URL=https://mock-data-josw.onrender.com`"]`
    *   For this project, the API base URL (`https://mock-data-josw.onrender.com`) is hardcoded as per the assignment.

## Navigation Flow & How to Use

1.  **Viewing Products:** Upon loading, the dashboard displays a list of products.
2.  **Pagination:** If there are many products, use the pagination controls at the bottom of the list to navigate between pages.
3.  **Product Details:** Click on any product row/card to open a modal displaying its `name`, `price`, `description`, and `category`. Click outside the modal or on a close button to dismiss it.
4.  **Add Product:** Click the "Add Product" (or similar) button. A form modal/page will appear. Fill in the product details (name, price, category, description, etc.) and submit.
5.  **Edit Product:** Each product in the list will have an "Edit" button/icon. Clicking it will open a form (often pre-filled with existing data) to modify the product details. Submit to save changes.
6.  **Delete Product:** Each product will have a "Delete" button/icon. Clicking it will prompt for confirmation, and upon confirmation, the product will be removed.
7.  **Mark as Favorite:** Click the star icon (or similar) next to a product to toggle its favorite status. Favorites are saved locally.
8.  **Search:** Type a product name into the search bar. The product list will dynamically update to show matching results.
9.  **Filter by Category:** Select a category from the dropdown/filter options. The product list will update to show only products belonging to that category.
10. **Sort by Price:** Use the sort controls (e.g., a dropdown) to sort products by price, either "Low to High" or "High to Low."
11. **Notifications:** Observe toast notifications in a corner of the screen for feedback on actions (e.g., "Product created successfully," "Error deleting product").

## Assumptions and Decisions Made

*   **API Behavior:** The mock API (`https://mock-data-josw.onrender.com`) is assumed to simulate backend behavior. Actual data persistence for `POST`, `PUT`, and `DELETE` operations is dependent on the mock API's implementation; changes might be temporary or session-based.
*   **Data Structure:** Assumed the product and category API responses conform to the example structures provided.
*   **UI/UX Choices:**
    *   `[e.g., Chose a table layout for products for easy comparison.]`
    *   `[e.g., Implemented modals for create/edit/details to keep the user on the main dashboard context.]`
    *   `[e.g., Debounced search input to avoid excessive API calls if search was API-driven, or explained client-side search.]`
*   **State Management Choice:**
    *   `[e.g., Opted for React Context API for managing global state as it's lightweight and sufficient for the project's scale, avoiding the boilerplate of Redux.]`
    *   `[e.g., Used component-level state (useState) for local UI states like form inputs or modal visibility where global state was not necessary.]`
*   **Error Handling:** Basic error handling for API requests is implemented, showing toast notifications. More granular error states (e.g., per-field validation errors) might be simplified for this assignment.
*   **Styling Approach:** `[e.g., Chose Tailwind CSS for rapid UI development and utility-first styling.]` or `[e.g., Used plain CSS Modules for scoped styling without external dependencies.]`
*   **Favorites Persistence:** `localStorage` was chosen for its simplicity in persisting favorites across sessions without requiring a backend.

## Potential Future Improvements (with more time)

*   **Advanced Filtering & Sorting:** Implement multi-select filters (e.g., multiple categories) or sorting by multiple criteria (e.g., sort by rating within a price range).
*   **Enhanced Form Validation:** More robust client-side and potentially server-side (if API supported) validation for product creation/editing forms.
*   **User Authentication:** If this were a real-world application, user accounts and authentication would be essential to scope product management.
*   **Unit & Integration Tests:** Write tests using Jest, React Testing Library, or Cypress to ensure component and application reliability.
*   **Accessibility (a11y) Enhancements:** Conduct a thorough accessibility audit and implement improvements (e.g., ARIA attributes, keyboard navigation).
*   **Performance Optimizations:**
    *   Code splitting for faster initial load.
    *   Memoization (`React.memo`, `useMemo`, `useCallback`) for performance-critical components.
    *   Virtualization for very long lists (e.g., using `react-window` or `react-virtualized`).
*   **Optimistic Updates:** For CRUD operations, update the UI immediately and then revert if the API call fails, providing a snappier user experience.
*   **Internationalization (i18n):** Support for multiple languages.
*   **More Sophisticated State Management:** If the application complexity grew significantly, migrating to Redux Toolkit or Zustand with more structured selectors and reducers/slices might be beneficial.
*   **Backend Integration:** Connect to a real backend with a persistent database instead of a mock API.
