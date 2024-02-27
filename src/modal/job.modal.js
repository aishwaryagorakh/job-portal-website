export default class JobModal {
  constructor(
    id,
    jobcategry,
    jobdesignation,
    joblocation,
    companyname,
    salary,
    applyby,
    skillrequire,
    numberofopening,
    jobposted,
    applicants
  ) {
    this.id = id;
    this.jobcategry = jobcategry;
    this.jobdesignation = jobdesignation;
    this.joblocation = joblocation;
    this.companyname = companyname;
    this.salary = salary;
    this.applyby = applyby;
    this.skillrequire = skillrequire;
    this.numberofopening = numberofopening;
    this.jobposted = jobposted;
    this.applicants = applicants;
  }
  static get() {
    return Jobs;
  }
  static add(productObj) {
    let newJob = new JobModal(
      Jobs.length + 1,
      productObj.jobcategry,
      productObj.jobdesignation,
      productObj.joblocation,
      productObj.companyname,
      productObj.salary,
      productObj.applyby,
      productObj.skillrequire,
      productObj.numberofopening,
      productObj.jobposted,
      productObj.applicants
    );
    Jobs.push(newJob);
  }
  static findById(id) {
    return this.Jobs.find((job) => job.id === id);
  }
}

var Jobs = [
  new JobModal(
    1,
    "software developer",
    "Full Stack Developer",
    "pune",
    "Tech Solutions Inc",
    "8lpa",
    "freshers",
    "JavaScript, React, Node.js, MongoDB",
    55,
    "March 15, 2024",
    2
  ),
  new JobModal(
    2,
    "angular",
    "devloper",
    "pune",
    "tata",
    "8lpa",
    "freshers",
    "angular,nodejs",
    55,
    "june-2023",
    2
  ),
  new JobModal(
    3,
    "angular",
    "devloper",
    "pune",
    "tata",
    "8lpa",
    "freshers",
    "angular,nodejs",
    55,
    "june-2023",
    2
  ),
];
