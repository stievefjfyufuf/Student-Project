# Student-Project

# Study Planner

Study Planner adalah aplikasi web sederhana untuk membantu mahasiswa membuat Course dan Study Session secara manual. Aplikasi ini dibuat sebagai project Software Engineering dua hari dengan bantuan AI secara bertanggung jawab.

## Features Implemented

- User can create a Course.
- User can view Course list.
- User can create a Study Session for a Course.
- User can view Study Session list.
- User can mark Study Session as Completed.
- User can see validation errors.
- Data is saved using LocalStorage.

## Tech Stack

- HTML
- CSS
- JavaScript vanilla
- LocalStorage
- Node.js for simple test execution

## Project Structure

```text
Student-Project/
├── README.md
├── docs/
│   ├── 01-requirements.md
│   ├── 02-prd.md
│   ├── 03-vertical-slice-issues.md
│   ├── 04-design.md
│   ├── 05-tdd-and-testing.md
│   └── 06-reflection.md
├── src/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── tests/
│   └── app.test.js
└── assets/
    └── screenshots/

How to Run the App
Clone or download this repository.
Open the src/index.html file in a browser.
Use the app to create Course and Study Session data.

If using VS Code, you can also open src/index.html with Live Server.

How to Run Tests

Run this command from the project root:

node tests/app.test.js

Expected result:

PASS: addCourse should add a valid course
PASS: markSessionCompleted should change status from pending to completed
Browser Verification

Browser verification evidence is stored in:

assets/screenshots/

Testing notes are documented in:

docs/05-tdd-and-testing.md
Known Limitations
No login or authentication.
No backend or database.
No edit/delete feature in v1.
No reminder feature.
No automatic scheduling.
Data is stored only in the current browser using LocalStorage.
