const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

const students = [
  { id: 1, name: "Aman", course: "Backend" },
  { id: 2, name: "Riya", course: "Frontend" },
  { id: 3, name: "Kabir", course: "Full Stack" },
];

// Logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} request came to ${req.url}`);
  next();
};

// Apply middleware globally
app.use(logger);

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to Student Portal");
});

// About route
app.get("/about", (req, res) => {
  res.send("This portal is used to manage student data");
});

// Students route
app.get("/students", (req, res) => {
  res.json(students);
});

// Single student route
app.get("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const student = students.find((stu) => stu.id === id);

  if (!student) {
    return res.json({ message: "Student not found" });
  }

  res.json(student);
});

// Login route
app.post("/login", (req, res) => {
  res.json({ message: "Login route called" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});