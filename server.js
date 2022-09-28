const express = require("express");
const studentRoutes = require("./src/student/routes");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/students", studentRoutes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

// CREATE TABLE students (
//     ID SERIAL PRIMARY KEY,
//     name VARCHAR(255),
//     email VARCHAR(255),
//     age INT,
//     dob DATE
// );

// INSERT INTO students (name, email, age, dob)
// VALUES
//     ('Joe', 'joe@gmail.com', 49, '1973-04-04'),
//     ('Anna', 'anna@gmail.com', 22, '2000-01-01')
