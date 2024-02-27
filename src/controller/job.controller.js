import path from "path";
import JobModal from "../modal/job.modal.js";

export default class JobController {
  getJob(req, res) {
    let Jobs = JobModal.get();
    // console.log(Jobs);
    res.render("job", { Jobs: Jobs });
  }

  getAddForm(req, res) {
    return res.render("add-new-job");
  }
  postNewJob(req, res) {
    console.log(req.body);
    // let Jobs = JobModal.get();
    // console.log(Jobs);
    JobModal.add(req.body);
    let Jobs = JobModal.get();
    return res.render("job", { Jobs });
  }

  // Method to handle job applications
  applyForJob(req, res) {
    const jobId = req.params.id;
    const { name, email, resume } = req.body;

    // Find the job by ID
    const job = JobModal.findById(parseInt(jobId));

    if (!job) {
      return res.status(404).send("Job not found");
    }

    job.applicants++; // Increase the number of applicants

    // Log the applicant's information
    console.log(
      `Job Application for ${job.title}: Name - ${name}, Email - ${email}, Resume - ${resume}`
    );

    res.send("Job application submitted successfully");
  }
}
