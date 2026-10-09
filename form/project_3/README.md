# User Manager (React Form with CRUD)

A small React app for creating, viewing, updating and deleting user cards through a controlled form. Built with React 19, Vite and Tailwind CSS.

## Features

- **Create:** add a user with a name, email and image URL.
- **Read:** users show up as cards with their image, name and email.
- **Update:** click "Update" on a card to open the form with that user's details filled in.
- **Delete:** click "Delete" on a card to remove that user.
- The navbar button switches between the form ("Create") and the card list ("View Cards").
- All fields are required, and the browser checks the email and URL formats.

Users are kept in React state only, so they are lost when you refresh the page.

## Project structure

```
src/
├── App.jsx                # Holds the users list and the create/update/delete handlers
├── main.jsx               # Entry point
├── index.css              # Tailwind directives
└── components/
    ├── Navbar.jsx         # Top bar with the Create / View Cards toggle
    ├── UserForm.jsx       # Controlled form used for both create and update
    └── UserCards.jsx      # Card grid with Update and Delete buttons
```

## How it works

- `App` holds three pieces of state: `users`, `showForm` and `editingUser`.
- When a new user is submitted, it gets an `id` from `Date.now()` and is appended to `users`.
- When `editingUser` is set, submitting the form replaces the matching user by `id`.
- `UserForm` gets a `key` based on the user being edited, so it remounts with fresh values each time you switch users.

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start the dev server with HMR     |
| `npm run build`   | Build for production into `dist/` |
| `npm run preview` | Preview the production build      |
| `npm run lint`    | Run ESLint                        |

## Tech stack

- React 19
- Vite 8
- Tailwind CSS 3
- ESLint
