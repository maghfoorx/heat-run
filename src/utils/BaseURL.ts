export const BaseURL =
  process.env.NODE_ENV === "production"
    ? "https://heat-run-rest-api.onrender.com"
    : "http://localhost:5000";
