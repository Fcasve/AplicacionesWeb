const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');   // cross origin

const { User } = require("./model_user");
const { Diag } = require("./model_diag");
const { Treat } = require("./model_treat");
const { Meds } = require("./model_meds");

const app = express();

app.use(express.json());

app.use(cors());

const path = __dirname + '/views/';
app.use(express.static(path));
app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});

//USERS
app.get("/users", async (req, res) => {
  const allUsers = await User.find();
  return res.status(200).json(allUsers);
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  return res.status(200).json(user);
});

app.post("/users", async (req, res) => {
  const newUser = new User({ ...req.body });
  const insertedUser = await newUser.save();
  return res.status(201).json(insertedUser);
});

app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  await User.updateOne({ id }, req.body);
  const updatedUser = await User.findById(id);
  return res.status(200).json(updatedUser); 
});

app.delete("/users/:id", async (req, res) => {
  try{
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    return res.status(200).json(deletedUser);
  } catch(error) {
    return res.status(500).json({resultado: false, mensaje:error.message});
  }
});

//DIAGNOSTICS
app.get("/diags", async (req, res) => {
    const allDiags = await Diag.find();
    return res.status(200).json(allDiags);
  });

app.get("/diags/:id", async (req, res) => {
    const { id } = req.params;
    const diag = await Diag.findById(id);
    return res.status(200).json(diag);
  });

app.post("/diags", async (req, res) => {
    const newDiag = new Diag({ ...req.body });
    const insertedDiag = await newDiag.save();
    return res.status(201).json(insertedDiag);
  });

app.put("/diags/:id", async (req, res) => {
    const { id } = req.params;
    await Diag.updateOne({ id }, req.body);
    const updatedDiag = await Diag.findById(id);
    return res.status(200).json(updatedDiag); 
  });

  //TREATMENTS
app.get("/treats", async (req, res) => {
    const allTreats = await Treat.find();
    return res.status(200).json(allTreats);
  });

app.get("/treats/:id", async (req, res) => {
    const { id } = req.params;
    const treat = await Treat.findById(id);
    return res.status(200).json(treat);
  });

app.post("/treats", async (req, res) => {
    const newTreat = new Treat({ ...req.body });
    const insertedTreat = await newTreat.save();
    return res.status(201).json(insertedTreat);
  });

app.put("/treats/:id", async (req, res) => {
    const { id } = req.params;
    await Treat.updateOne({ id }, req.body);
    const updatedTreat = await Treat.findById(id);
    return res.status(200).json(updatedTreat); 
  });

  //MEDICATION
app.get("/meds", async (req, res) => {
    const allMeds = await Meds.find();
    return res.status(200).json(allMeds);
  });

app.get("/meds/:id", async (req, res) => {
    const { id } = req.params;
    const Meds = await Meds.findById(id);
    return res.status(200).json(Meds);
  });

app.post("/meds", async (req, res) => {
    const newMeds = new Meds({ ...req.body });
    const insertedMeds = await newMeds.save();
    return res.status(201).json(insertedMeds);
  });

    app.put("/meds/:id", async (req, res) => {
        const { id } = req.params;
        await Meds.updateOne({ id }, req.body);
        const updatedMeds = await Meds.findById(id);
        return res.status(200).json(updatedMeds); 
    });


const start = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/Proyecto"
    );
    app.listen(3000, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();