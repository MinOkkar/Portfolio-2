const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const projects = [
  {
    name: "Portfolio Terminal Style",
    description:
      "This Terminal-Style Portfolio is a unique and minimalistic personal website designed to resemble a command-line interface. Built with a sleek, retro aesthetic, it offers a nostalgic yet modern way to showcase skills, projects, and experiences. The design emphasizes simplicity and efficiency, making it an eye-catching portfolio for tech enthusiasts.",
    date: "3/10/2025",
    photo: "https://i.postimg.cc/DwQkq88F/Screenshot-2025-04-02-020442.png",
    link: "https://minokkar.github.io/",
  },
  {
    name: "Movie-Review-Website (static)",
    description:
      "This Movie Review Website is a simple static site built with HTML and CSS. It allows users to explore movie reviews, discover new films, and read insights on the latest blockbusters and classics. Designed with a clean and responsive layout, the website provides an easy-to-navigate experience. Perfect for movie enthusiasts looking for quick and honest reviews!",
    date: "10/23/2024",
    photo: "https://i.postimg.cc/15HvR4sY/movie.png",
    link: "https://minokkar.github.io/Movie-Review-Website/",
  },
  {
    name: "Color-Picker-HTML",
    description:
      "a simple and interactive color picker tool that allows users to select a color and see the result in multiple formats (hexadecimal, RGB, and HSL).",
    date: "11/10/2024",
    photo:
      "https://private-user-images.githubusercontent.com/129489004/378981895-f6d401c6-ecdc-47c6-8c6b-f51272d44e9b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDM1ODM5NzksIm5iZiI6MTc0MzU4MzY3OSwicGF0aCI6Ii8xMjk0ODkwMDQvMzc4OTgxODk1LWY2ZDQwMWM2LWVjZGMtNDdjNi04YzZiLWY1MTI3MmQ0NGU5Yi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDAyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQwMlQwODQ3NTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03NDcyMWI0YTkzZjA5YWIyNTZmZGM3NmE4MjQ5Mzc3NWNkYmQ1YTU4Yzc5OWE4NjE3ODg1OTdkOTM3ZTMyYzVhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.N13nuiM9JXIxUOTBrhlbIPTCHjfXKhwxNZfi2oZqBeQ",
    link: "https://github.com/MinOkkar/Color-Picker-HTML",
  },
  {
    name: "Blackmarket Firearm Management System",
    description:
      "The Blackmarket Firearm Management System is a simple graphical user interface (GUI) application built using Python's tkinter library. It allows users to manage a list of firearms by adding, updating, searching, and deleting firearms from the system. The data is stored in a CSV file, and the application dynamically updates the total count of firearms.",
    date: "5/8/2024",
    photo:
      "https://private-user-images.githubusercontent.com/129489004/377408160-50d41e35-f7c4-4412-97e7-29f0b9d7aefb.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDM1ODQxNDAsIm5iZiI6MTc0MzU4Mzg0MCwicGF0aCI6Ii8xMjk0ODkwMDQvMzc3NDA4MTYwLTUwZDQxZTM1LWY3YzQtNDQxMi05N2U3LTI5ZjBiOWQ3YWVmYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDAyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQwMlQwODUwNDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02M2NiMTZjY2RkYzA1ZDU4NTVmMGUzNDlhN2Y5YjFlMDMwZGQzZDJiNTc3YWU4MGMyNTNjMjUyMDVjNWYxNWYzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.XiXPvrW2tBd8N1IGRSrjpKi14ehncyGFJd7ePYOSWS8",
    link: "https://github.com/MinOkkar/GUI-DIT102",
  },
  {
    name: "Phonix",
    description:
      "A efficient Phone Book Management System built with Python, utilizing Binary Search Tree (BST) data structure for storing and managing contacts. This project allows users to add, search, update, and delete contacts, providing an efficient way to manage large sets of data.",
    date: "11/2/2024",
    photo:
      "https://private-user-images.githubusercontent.com/129489004/376189748-86bed877-75e6-4f58-b5ef-10c070b98ed3.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDM1ODQyMTgsIm5iZiI6MTc0MzU4MzkxOCwicGF0aCI6Ii8xMjk0ODkwMDQvMzc2MTg5NzQ4LTg2YmVkODc3LTc1ZTYtNGY1OC1iNWVmLTEwYzA3MGI5OGVkMy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDAyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQwMlQwODUxNThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hMDRiNmQ4NjZkYTQxMDJkYTk1NjE1ZmQzZGViMmE5OGJhNmJmYTNmNGFlODZmMGU1M2QzMGYyOGFkYjE5MWU4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.4Kse4c8TvEHXJEs8eHXhcVSP3Xjuc7gw-uaNolIBjVA",
    link: "https://github.com/MinOkkar/Phonix",
  },
];

// Routes
app.get("/", (req, res) => res.render("index"));
app.get("/contact", (req, res) => res.render("contact"));
app.get("/projects", (req, res) => res.render("projects", { projects }));

//form
app.post("/submit-form", (req, res) => {
  const { name, email, message } = req.body;
  console.log(` ${name}| (${email}): ${message}`);
  res.render("success", { name });
});

//server
const CUSTOM_PORT = process.env.PORT || 3000;
app.listen(CUSTOM_PORT, "0.0.0.0", () => {
  console.log(`Server is running on ${CUSTOM_PORT}`);
});
