import recruModal from "../modal/recruiter.modal.js";
import JobModal from "../modal/job.modal.js";
export default class recruController {
  getRegister(req, res) {
    res.render("register");
  }

  postRegister(req, res) {
    const { name, email, password } = req.body;
    recruModal.add(name, email, password);
    res.render("login");
  }
  getLogin(req, res) {
    res.render("login");
  }

  postLogin(req, res) {
    const { email, password } = req.body;
    const recruiter = recruModal.isValid(email, password);
    if (!recruiter) {
      return res.render("error"); // Add return statement here
    }
    req.session.useremail = email;
    req.session.userRole = "recruiter"; // Set userRole here
    let Jobs = JobModal.get();
    return res.render("job", {
      Jobs,
      useremail: req.session.useremail,
      userRole: req.session.userRole,
    });
  }

  addNewJob(req, res) {
    // Check if the user is authenticated and is a recruiter
    if (req.session.userRole !== "recruiter") {
      // If the user is not a recruiter, render an error page or redirect
      return res.render("error", {
        message: "Only recruiters can access this feature.",
      });
    }

    // If the user is a recruiter, render the "add-new-job" page
    return res.render("add-new-job");
  }
}
