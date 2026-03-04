const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/smarttracker" );

const ProjectSchema = new mongoose.Schema({
  name: String,
  status: String,
  deadline: String,
});

const Project = mongoose.model("Project", ProjectSchema);

// Routes
app.get("/", (req, res) => {
  res.send("🚀 Smart Hybrid Project Tracker API with Database is running!");
});

app.post("/project", async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.json(project);
});

app.get("/projects", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

