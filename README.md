# GitHub Profile Finder 🔍

A simple and responsive web application that allows users to search for GitHub profiles by username and view their public profile information using the GitHub REST API.

## 🚀 Features

- 🔎 Search for GitHub users by username
- 🖼️ Display the user's profile picture
- 👤 Show name, username, and bio
- 📊 Display public repository, follower, and following counts
- 📍 Show the user's location when available
- 🔗 Open the user's GitHub profile directly
- ⚠️ Handle empty input, invalid usernames, and request errors
- 📱 Responsive design for mobile and desktop screens

## 🛠️ Technologies Used

- **HTML5** — Page structure
- **CSS3** — Styling and responsive layout
- **JavaScript** — Application logic and DOM manipulation
- **GitHub REST API** — Fetching public user information

## 📂 Project Structure

```text
GitHub-Profile-Finder/
├── index.html
├── style.css
├── script.js
└── README.md
```

## ⚙️ How to Run

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in your browser.
4. Enter a GitHub username in the search box.
5. Click **Search** to view the profile.

No API key is required for basic public user lookups through the GitHub REST API. Unauthenticated requests are subject to GitHub's rate limits.

## 🔗 API Used

**GitHub REST API — Get a user**

https://api.github.com/users/{username}

The application retrieves publicly available profile information, including the username, avatar, bio, public repositories, followers, following, and location.

## 🎯 Learning Outcomes

- Working with asynchronous JavaScript using `async/await`
- Fetching data from a REST API using `fetch()`
- Handling HTTP responses and errors
- Manipulating the DOM dynamically
- Validating user input
- Building a responsive web interface

## 🔮 Future Improvements

- Display the user's public repositories
- Add a dark mode
- Show repository languages and recent activity
- Improve loading animations and error messages

## 📄 License

This project is open source and available for learning and personal use.
