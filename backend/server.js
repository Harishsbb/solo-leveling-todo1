const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// ⭐ MONGODB CONNECTION HERE
mongoose.connect("mongodb+srv://bavaharishkumar:Harish2006@cluster0.cfoj6si.mongodb.net/todoDB?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Error:", err));


app.use("/tasks", taskRoutes);

app.listen(5000, () => console.log("Backend running on 5000"));
