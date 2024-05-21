const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
// const cors = require("cors");
const studentRouter = require("./routes/student.routes");
const cohortRouter = require("./routes/cohort.routes");
// const authRouter = require("./routes/auth.routes");
// const userRouter = require("./routes/user.routes");

const PORT = 5005;

// STATIC DATA
// Devs Team - Import the provided files with JSON data of students and cohorts here:
// ...

//database with mongoose
mongoose
  .connect("mongodb://127.0.0.1:27017/cohort-tools-api")
  .then((x) => console.log(`Connected to Database: "${x.connections[0].name}"`))
  .catch((err) => console.error("Error connecting to MongoDB", err));

// INITIALIZE EXPRESS APP - https://expressjs.com/en/4x/api.html#express
const app = express();

// MIDDLEWARE
// Research Team - Set up CORS middleware here:
// ...
// const FRONTEND_URL =
//   process.env.ORIGIN || "http://localhost:5005" || "http://127.0.0.1:5173";

// Because this is a server that will accept requests from outside and it will be hosted ona server with a `proxy`, express needs to know that it should trust that setting.
// Services like heroku use something called a proxy and you need to add this to your server
app.set("trust proxy", 1);
// controls a very specific header to pass headers from the frontend
// app.use(
//   cors({
//     origin: ["http://127.0.0.1:5173"],
//   })
// );

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

app.use("/", studentRouter);
app.use("/", cohortRouter);
// app.use("/", authRouter);
// app.use("/", userRouter);

// START SERVER
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
