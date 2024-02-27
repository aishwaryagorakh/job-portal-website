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
}
