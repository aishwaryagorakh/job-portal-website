import path from "path";
import JobModal from "../modal/job.modal.js";
import { auth, checkRecruiter } from "../middleware/auth.middleware.js";

export default class JobController {
  getJob(req, res) {
    let Jobs = JobModal.get();
    // console.log(Jobs);
    res.render("job", {
      Jobs,
      useremail: req.session.useremail,
      userRole: req.session.userRole,
    });
  }

  getAddForm(req, res) {
    let Jobs = JobModal.get();
    return res.render("add-new-job", {
      Jobs,
      useremail: req.session.useremail,
      userRole: req.session.userRole,
    });
  }

  postNewJob(req, res) {
    console.log(req.body);
    // let Jobs = JobModal.get();
    // console.log(Jobs);
    JobModal.add(req.body);
    let Jobs = JobModal.get();
    return res.render("job", {
      Jobs,
      useremail: req.session.useremail,
      userRole: req.session.userRole,
    });
  }

  // Method to handle job applications

  getApply(req, res) {
    const id = req.params.id;
    const job = JobModal.getById(id);
    if (job) {
      return res.render("apply", {
        job,
        useremail: req.session.useremail,
        userRole: req.session.userRole,
      });
    } else {
      return res.status(404).send("Job not found");
    }
  }

  applyForJob(req, res) {
    const jobId = parseInt(req.params.id);
    console.log("Applying for job with ID:", jobId);
    JobModal.increaseApplicants(jobId);
    res.redirect("/");
  }

  addNewJob(req, res) {
    console.log("User Role in :", req.session.userRole);
    if (req.session.userRole !== "recruiter") {
      return res.render("error", {
        message: "Only recruiters can access this feature.",
      });
    }
    return res.render("add-new-job");
  }
}
