const express = require('express');
const app = express();
const port = 3000;

// Serve static files (like logo.png and index.html)
app.use(express.static('public'));

// Data
const snowfallData = [
  { Year: 2014, Resort: "Breckenridge", "Annual Snowfall (inches)": 300, "Estimated Annual Visitors (millions)": 1.6 },
  { Year: 2014, Resort: "Vail", "Annual Snowfall (inches)": 320, "Estimated Annual Visitors (millions)": 1.7 },
  { Year: 2014, Resort: "Keystone", "Annual Snowfall (inches)": 230, "Estimated Annual Visitors (millions)": 1 },
  { Year: 2014, Resort: "Crested Butte", "Annual Snowfall (inches)": 250, "Estimated Annual Visitors (millions)": 0.5 },
  { Year: 2014, Resort: "Telluride", "Annual Snowfall (inches)": 270, "Estimated Annual Visitors (millions)": 0.6 },
  { Year: 2015, Resort: "Breckenridge", "Annual Snowfall (inches)": 280, "Estimated Annual Visitors (millions)": 1.6 },
  { Year: 2015, Resort: "Vail", "Annual Snowfall (inches)": 340, "Estimated Annual Visitors (millions)": 1.7 },
  { Year: 2015, Resort: "Keystone", "Annual Snowfall (inches)": 240, "Estimated Annual Visitors (millions)": 1 },
  { Year: 2015, Resort: "Crested Butte", "Annual Snowfall (inches)": 260, "Estimated Annual Visitors (millions)": 0.5 },
  { Year: 2015, Resort: "Telluride", "Annual Snowfall (inches)": 275, "Estimated Annual Visitors (millions)": 0.6 },
  { Year: 2016, Resort: "Breckenridge", "Annual Snowfall (inches)": 290, "Estimated Annual Visitors (millions)": 1.6 },
  { Year: 2016, Resort: "Vail", "Annual Snowfall (inches)": 330, "Estimated Annual Visitors (millions)": 1.7 },
  { Year: 2016, Resort: "Keystone", "Annual Snowfall (inches)": 235, "Estimated Annual Visitors (millions)": 1 },
  { Year: 2016, Resort: "Crested Butte", "Annual Snowfall (inches)": 255, "Estimated Annual Visitors (millions)": 0.5 },
  { Year: 2016, Resort: "Telluride", "Annual Snowfall (inches)": 280, "Estimated Annual Visitors (millions)": 0.6 },
  { Year: 2017, Resort: "Breckenridge", "Annual Snowfall (inches)": 310, "Estimated Annual Visitors (millions)": 1.6 },
  { Year: 2017, Resort: "Vail", "Annual Snowfall (inches)": 350, "Estimated Annual Visitors (millions)": 1.7 },
  { Year: 2017, Resort: "Keystone", "Annual Snowfall (inches)": 245, "Estimated Annual Visitors (millions)": 1 },
  { Year: 2017, Resort: "Crested Butte", "Annual Snowfall (inches)": 265, "Estimated Annual Visitors (millions)": 0.5 },
  { Year: 2017, Resort: "Telluride", "Annual Snowfall (inches)": 285, "Estimated Annual Visitors (millions)": 0.6 },
  { Year: 2018, Resort: "Breckenridge", "Annual Snowfall (inches)": 295, "Estimated Annual Visitors (millions)": 1.6 },
  { Year: 2018, Resort: "Vail", "Annual Snowfall (inches)": 345, "Estimated Annual Visitors (millions)": 1.7 },
  { Year: 2018, Resort: "Keystone", "Annual Snowfall (inches)": 240, "Estimated Annual Visitors (millions)": 1 },
  { Year: 2018, Resort: "Crested Butte", "Annual Snowfall (inches)": 260, "Estimated Annual Visitors (millions)": 0.5 },
  { Year: 2018, Resort: "Telluride", "Annual Snowfall (inches)": 275, "Estimated Annual Visitors (millions)": 0.6 },
  { Year: 2019, Resort: "Breckenridge", "Annual Snowfall (inches)": 300, "Estimated Annual Visitors (millions)": 1.6 },
  { Year: 2019, Resort: "Vail", "Annual Snowfall (inches)": 355, "Estimated Annual Visitors (millions)": 1.7 },
  { Year: 2019, Resort: "Keystone", "Annual Snowfall (inches)": 250, "Estimated Annual Visitors (millions)": 1 },
  { Year: 2019, Resort: "Crested Butte", "Annual Snowfall (inches)": 270, "Estimated Annual Visitors (millions)": 0.5 },
  { Year: 2019, Resort: "Telluride", "Annual Snowfall (inches)": 290, "Estimated Annual Visitors (millions)": 0.6 },
  { Year: 2020, Resort: "Breckenridge", "Annual Snowfall (inches)": 280, "Estimated Annual Visitors (millions)": 1.6 },
  { Year: 2020, Resort: "Vail", "Annual Snowfall (inches)": 340, "Estimated Annual Visitors (millions)": 1.7 },
  { Year: 2020, Resort: "Keystone", "Annual Snowfall (inches)": 235, "Estimated Annual Visitors (millions)": 1 },
  { Year: 2020, Resort: "Crested Butte", "Annual Snowfall (inches)": 255, "Estimated Annual Visitors (millions)": 0.5 },
  { Year: 2020, Resort: "Telluride", "Annual Snowfall (inches)": 275, "Estimated Annual Visitors (millions)": 0.6 },
  { Year: 2024, Resort: "Breckenridge", "Annual Snowfall (inches)": 280, "Estimated Annual Visitors (millions)": 1.6 },
  { Year: 2024, Resort: "Vail", "Annual Snowfall (inches)": 340, "Estimated Annual Visitors (millions)": 1.7 },
  { Year: 2024, Resort: "Keystone", "Annual Snowfall (inches)": 235, "Estimated Annual Visitors (millions)": 1 },
  { Year: 2024, Resort: "Crested Butte", "Annual Snowfall (inches)": 255, "Estimated Annual Visitors (millions)": 0.5 },
  { Year: 2024, Resort: "Telluride", "Annual Snowfall (inches)": 275, "Estimated Annual Visitors (millions)": 0.6 }
];

// API endpoint to fetch data
app.get('/api/data', (req, res) => {
  res.json(snowfallData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});