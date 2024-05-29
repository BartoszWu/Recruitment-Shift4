# Shift4 Technical Task

My main idea for this task was to minimize dependencies in the project, only adding them if absolutely necessary. Additionally, I focused on clear code and readability.

## Quick Overview

To get started, clone the repository and run `npm install` to install dependencies 🙏

### Available Scripts:

- `npm run dev`: Run the server in development mode.
- `npm run build`: Build the project.
- `npm test`: Run all tests using Vitest.
- `npm run e2e`: Run app component tests using Cypress component testing.
- `npm run lint`: Lint the entire project.
- `npm run storybook`: Run Storybook in development mode.
- `npm run build-storybook`: Build Storybook.

## Technology Stack and Rationale

- **Vite**: I chose Vite for building the project due to its speed and ease when starting new projects.

- **TailwindCSS**: For styling, TailwindCSS was selected to avoid runtime style generation and to help in making the app responsive. For Tailwind, I tried to use tokens as much as possible, but in some design situations, arbitrary values were necessary.

- **Vitest**: I used Vitest to do unit tests.

## Potential Improvements

- Due to the lack of time and to avoid prolonging the home task indefinitely, I only included basic unit tests for the most complicated component here, which is the MoneyInput. Normally, in day-to-day work, I would include unit tests for every component. Additionally, I would definitely add E2E tests with tools like Cypress as ensuring inputs have correct values becomes increasingly complex and requires comprehensive testing scenarios.