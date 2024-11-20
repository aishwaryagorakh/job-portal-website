# Title: Job Portal

# Introduction + Scenario:

In the context of a job portal development project, your role as a developer involves enhancing several core features. This project focuses on the job-related functionalities and introduces a 'like' system for both jobs and user profiles.

# Route and Query Parameters:

For liking a job, use the following route:

1. Route: POST /codingninjas/api/likes/like
   Query Parameters:
   model: Accepts only 'Job'.
   id: Should contain the ObjectID of the job to be liked.

2. For liking a user profile, use the following route:

Route: POST /codingninjas/api/likes/like
Query Parameters:
model: Accepts only 'User'.
id: Should contain the ObjectID of the user profile to be liked.

# Resources:

Consult the Mongoose documentation for schema creation.

# Notes/Hints:

1. Explore the implemented JWT authentication middleware for user identification and authentication.
2. Access the logged-in user's ObjectID from the req object for user identification.
3. Implement robust error handling mechanisms to prevent duplicate job applications.
4. Ensure that user data is populated correctly when fetching likes for jobs and user profiles.
