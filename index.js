import express from "express";
import path from "path";
import JobController from "./src/controller/job.controller.js";
import EjsLayouts from "express-ejs-layouts";
import { checkRecruiter } from "./src/middleware/auth.middleware.js";
const server = express();
import recruController from "./src/controller/recruiter.controller.js";
const router = express.Router(); // Create a router instance
import session from "express-session";
import { auth } from "./src/middleware/auth.middleware.js";

// Setup view engine
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

// Parse form data
server.use(express.urlencoded({ extended: true }));
server.use(EjsLayouts);

//session
server.use(
  session({
    secret: "secreteKey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Create an instance of the JobController class
const job = new JobController();
const recru = new recruController();

// Define routes on the router
router.get("/job", job.getJob);
//router.get("/new", job.getAddForm);
//router.post("/", job.postNewJob);
router.get("/apply/:id", job.getApply);
router.get("/register", recru.getRegister);
router.get("/login", recru.getLogin);
router.post("/register", recru.postRegister);
router.post("/login", recru.postLogin);
// Route to handle form submission
router.post("/apply/:id", job.applyForJob);
router.get("/add-new-job", auth, checkRecruiter, recru.addNewJob);

router.get("/new", auth, checkRecruiter, job.getAddForm);

//router.get("/job", job.getJob);
//router.get("/new", auth, checkRecruiter, job.getAddForm); // Apply middleware here
router.post("/", auth, checkRecruiter, job.postNewJob); // Apply middleware here
router.get("/apply/:id", job.getApply);
//router.get("/job", auth, checkRecruiter, recru.addNewJob);

// Mount the router on the server
server.use("/", router);

server.get("/", (req, res) => {
  return res.render("home");
});

server.listen(3400);
