# Technical Documentation

## Architecture Overview

GitHub Explorer Pro is a Single Page Application (SPA) built with React. It utilizes a client-side routing strategy to ensure smooth transitions without page reloads, providing an app-like feel.

### Design System

The application implements a custom design system using Tailwind CSS configuration.

*   **Colors:** Uses a semantic color scale with a primary Violet/Purple brand color (`primary-50` to `primary-950`).
*   **Typography:** Uses 'Inter' via Google Fonts for a clean, modern aesthetic.
*   **Dark Mode:** Implements the `class` strategy in Tailwind. The `ThemeContext` handles the toggling of a `.dark` class on the HTML root element.

### State Management

1.  **Local State:** Used for form inputs (search) and UI states (loading, error).
2.  **Context API (`ThemeContext`):** Manages global application theme preference.
3.  **URL State:** The router uses the URL as a source of truth for user navigation (`/user/:username`), allowing deep linking.

### API Integration

Interactions with the GitHub API are centralized in `services/githubService.ts`.

*   **Error Handling:** All API calls are wrapped with error handling to provide user feedback (404s, Rate Limits).
*   **Pagination:** The repository endpoint supports pagination parameters which are hooked up to the `Pagination` component.

### Performance Optimizations

*   **Debouncing:** The SearchBar implements a custom debounce hook to prevent API spamming while typing.
*   **Code Splitting:** (Implicit via build tool) The architecture supports lazy loading of routes if needed in the future.
*   **Vector Icons:** Instead of heavy icon libraries, optimized SVGs are directly included.

## Component API

### `<UserCard />`
Displays a summary of a user.
- `user`: GithubUser object.
- `onClick`: Callback when clicked.

### `<Pagination />`
Smart pagination that truncates long lists with ellipsis.
- `currentPage`: Active page number.
- `totalPages`: Total calculated pages.
- `onPageChange`: Callback function.

## Future Improvements

- [ ] Add caching layer for API requests (React Query or SWR).
- [ ] Add sorting options for repositories (Stars, Forks, Date).
- [ ] Add "Favorites" feature using LocalStorage.
