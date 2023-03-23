const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/employee");


//POST REQUEST
router.post("/user/create", async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ msg: "Please Enter all fields" });
    }

    if (!(fullName.match(/^([\w\s]{3,})+\s+([\w\s]{3,})+$/))) {
      return res.status(400).json({ msg: "Enter correct full name" });
    }

    if (!(password.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/))) {
      return res.status(400).json({ msg: "Password Should Contain atleast one smallcase, bigcase, Special Character(@$!%*?&) and Number" });
    }

    if (!(email.match(/(\W|^)[\w.+\-]*@northeastern\.edu(\W|$)/))) {
      return res
        .status(400).json({ msg: "Enter Northeastern Credentials" });
    }

    // Checking database and running an email check to ensure no duplicate emails upon register 
    const existingEmail = await User.findOne({ email: email });
    if (existingEmail) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    // using Bcrypt to hash passwords for security
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // creating out new user notice password value is passwordHash not password
    const newUser = new User({
      fullName: fullName,
      email: email,
      password: passwordHash,

    });
    const savedUser = await newUser.save();
    res.status(201);
    res.send("New user added");

  }

  catch (error) {
    res.status(500).json({ err: error.message });
  }

});


//GET REQUEST
router.get('/user/getAll', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  }
  catch (error) {
    res.status(500).json({ err: error.message });
  }
});



router.delete('/user/delete', async (req, res) => {
    try {
        const email = req.body.email;
      const emailExists = await User.findOne({ email: email });
      if (emailExists) {
        await User.findOneAndRemove({ email: email }).exec();
        return res.send(`User with email ${req.body.email} deleted`);
      } else {
        return res.send(`User with email ${req.body.email} does not exist`);
      }
    } catch (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
  });
  

  
router.put('/user/edit', async (req, res) => {
    try {
        const email = req.body.email;
      let user = await User.findOne({ email: email });
      if (!user) return res.status(404).send('User not found');
  
    //   if (req.body.email && req.body.email !== req.params.email) {
    //     return res.status(400).send('Email cannot be updated');
    //   }
  
      if (req.body.fullName) user.fullName = req.body.fullName;
  
      if (req.body.password) {
        password = req.body.password;
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        user.password = passwordHash;
      }
  
      const updatedUser = await user.save();
      return res.send(`User with email ${req.body.email} updated`);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  


module.exports = router;