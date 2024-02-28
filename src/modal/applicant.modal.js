export default class ApplicantModal {
  static applicants = [];
  constructor(id, name, email, contact, resume) {
    this.id = id;
    this.name = name;
    (this.email = email), (this.contact = contact), (this.resume = resume);
  }
  static get() {
    return applicants;
  }
  static addtoApplicant(name, email, contact, resume) {
    const newApplicant = new ApplicantModal(
      ApplicantModal.applicants.length + 1,
      name,
      email,
      contact,
      resume
    );
    ApplicantModal.applicants.push(newApplicant);
  }
}
