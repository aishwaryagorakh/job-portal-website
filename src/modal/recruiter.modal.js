export default class recruModal {
  static recruiter = [];

  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static add(name, email, password) {
    const newRecru = new recruModal(
      recruModal.recruiter.length + 1,
      name,
      email,
      password
    );
    recruModal.recruiter.push(newRecru);
  }

  static isValid(email, password) {
    const val = recruModal.recruiter.find(
      (u) => u.email === email && u.password === password
    );
    return val;
  }
}
