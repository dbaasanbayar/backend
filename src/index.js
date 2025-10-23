import chalk from "chalk";
import axios from "axios";
import express from "express";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import { connectDB } from "./database/db.js";
import { createUser } from "./controllers/user.js";
import { useRouter } from "./routers/user.router.js";

configDotenv();

// console.log(process.env.PORT, "port");

const port = process.env.PORT;

const app = express();

app.use(bodyParser.json());

const suragch = [];

// app.get("/", async (request, response) => {
//   const res = await axios.get("https://gogo.mn/cache/news-shinemedee?size=15");
//   response.send(res.data);
// });

// app.get("/students", async (request, response) => {
//   const suragch = [];

//   app.post("/students", async (request, response) => {
//     console.log(request.body);
//     const previousStudent = suragch.filter(
//       (student) => student.seat === request.body.seat
//     );
//     console.log(previousStudent, "filter");
//     if (previousStudent.length === 0) {
//       suragch.push(request.body);
//       response.send(suragch);
//     }
//   });
// });

// app.get("/students/details", async (request, response) => {
//   const studentsDetails = [
//     {
//       name: "amarbayar",
//       seat: "4b",
//       hobby: ["basktetball", "swimming"],
//     },
//     { name: "urantogos", seat: "4c", hobby: ["basktetball", "swimming"] },
//     { name: "baasanbayar", seat: "4d", hobby: ["basktetball", "swimming"] },
//     { name: "tuvshin", seat: "5a", hobby: ["basktetball", "swimming"] },
//   ];

//   response.send(studentsDetails);
// });

// app.get("/students", createUser);
app.use("/users", useRouter);
app.listen(3000, () => {
  connectDB();
  console.log(chalk.green(`Server is running ${port}`));
});

// axios.get('https://www.google.com')

// const getDataByGoogle = async () =>
// {
//     const response = await axios.get('https://gogo.mn/cache/news-shinemedee?size=15');
//     console.log(response.data)
// }

// getDataByGoogle()

// {
//   name: "amarbayar",
//   seat: "4b",
// },
// { name: "urantogos", seat: "4c" },
// { name: "baasanbayar", seat: "4d" },
// { name: "tuvshin", seat: "5a" },
