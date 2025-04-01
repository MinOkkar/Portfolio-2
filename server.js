const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const projects = [
  {
    name: "Portfolio Site",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsa ducimus amet dolorem dicta eos! Adipisci provident iure dolor praesentium commodi quisquam maxime, exercitationem nesciunt. Iure reiciendis mollitia repudiandae exercitationem.",
    date: "4/2/2025",
    photo: "https://i.postimg.cc/DwQkq88F/Screenshot-2025-04-02-020442.png",
    link: "https://google.com",
  },
  {
    name: "Portfolio Site",
    description: "Built with Node.js and EJS",
    date: "4/2/2025",
    photo: "https://i.postimg.cc/DwQkq88F/Screenshot-2025-04-02-020442.png",
    link: "https://google.com",
  },
  {
    name: "Portfolio Site",
    description: "Built with Node.js and EJS",
    date: "4/2/2025",
    photo: "https://i.postimg.cc/DwQkq88F/Screenshot-2025-04-02-020442.png",
    link: "https://google.com",
  },
  {
    name: "Portfolio Site",
    description: "Built with Node.js and EJS",
    date: "4/2/2025",
    photo: "https://i.postimg.cc/DwQkq88F/Screenshot-2025-04-02-020442.png",
    link: "https://google.com",
  },
  {
    name: "Portfolio Site",
    description: "Built with Node.js and EJS",
    date: "4/2/2025",
    photo: "https://i.postimg.cc/DwQkq88F/Screenshot-2025-04-02-020442.png",
    link: "https://google.com",
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
