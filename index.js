import express from "express";
const server = express();
import path from "path";
import JobController from "./src/controller/job.controller.js";
import EjsLayouts from "express-ejs-layouts";

//setup view engine
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

//parse from data
server.use(express.urlencoded({ extended: true }));
server.use(EjsLayouts);

//instance of class
const job = new JobController();
server.get("/Job", job.getJob);
server.get("/new", job.getAddForm);
server.post("/", job.postNewJob);
//server.post("/new", job.getAddForm);

server.get("/", (req, res) => {
  return res.render("home");
});
// Route to handle job applications
server.post("/job/:id/apply", job.applyForJob);

server.listen(3400);
