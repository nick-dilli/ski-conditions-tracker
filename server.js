const express = require("express");
const app = express();
const port = 3000;

// Dummy snowfall data
const snowfallData = {
  resort1: { name: "Resort 1", snowfall: 120 },
  resort2: { name: "Resort 2", snowfall: 85 },
  resort3: { name: "Resort 3", snowfall: 150 },
};

// Serve the static HTML file
app.use(express.static("public"));

// API endpoint to fetch snowfall data
app.get("/api/snowfall/:resort", (req, res) => {
  const resort = req.params.resort;
  const data = snowfallData[resort];
  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ error: "Resort not found" });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});