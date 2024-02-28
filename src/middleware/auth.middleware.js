export const auth = (req, res, next) => {
  console.log("User Role in auth middleware:", req.session.userRole);
  if (req.session.useremail) {
    next();
  } else {
    res.render("error");
  }
};

export function checkRecruiter(req, res, next) {
  console.log("User Role in checkRecruiter middleware:", req.session.userRole);
  // Check if userRole session variable is set to 'recruiter'
  if (req.session.userRole === "recruiter") {
    // User is a recruiter, proceed to the next middleware or route handler
    next();
  } else {
    // User is not a recruiter, render an error page or redirect
    res.render("error", {
      message: "Only recruiters can access this feature.",
    });
  }
}
