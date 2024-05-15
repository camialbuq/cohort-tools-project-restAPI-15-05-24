const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const PORT = 5005;

// STATIC DATA
// Devs Team - Import the provided files with JSON data of students and cohorts here:
// ...

// INITIALIZE EXPRESS APP - https://expressjs.com/en/4x/api.html#express
const app = express();

// MIDDLEWARE
// Research Team - Set up CORS middleware here:
// ...
const cors = require("cors");
const FRONTEND_URL =
  process.env.ORIGIN || "http://localhost:5005" || "http://localhost:5173";

// Because this is a server that will accept requests from outside and it will be hosted ona server with a `proxy`, express needs to know that it should trust that setting.
// Services like heroku use something called a proxy and you need to add this to your server
app.set("trust proxy", 1);
// controls a very specific header to pass headers from the frontend
app.use(
  cors({
    origin: [FRONTEND_URL],
  })
);

app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// ROUTES - https://expressjs.com/en/starter/basic-routing.html
// Devs Team - Start working on the routes here:
// ...

//with routes in separate folder like ex "proj maagement server"
// const cohortRouter = require("./routes/cohort.routes");
// app.use("/", cohortRouter);

// const studentRouter = require("./routes/student.routes");
// app.use("/", studentRouter);

app.get("/docs", (req, res) => {
  res.sendFile(__dirname + "/views/docs.html");
});

app.get("/api/cohorts", (req, res) => {
  res.sendFile(__dirname + "/cohorts.json");
});

app.get("/api/students", (req, res) => {
  res.sendFile(__dirname + "/students.json");
});

// START SERVER
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
