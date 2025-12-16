const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Import routes
const apiRoutes = require("./src/routes/api");

// Middleware
app.use(cors());
app.use(express.json());

// Use routes
app.use("/api", apiRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
