import User from "../models/User";
import { generateToken } from "../libs/auth";

export default {
  signUp: async (req, res) => {
    try {
      const { password, ...rest } = req.body;
      const newUser = new User({
        ...rest,
        password: await User.encryptPassword(password),
      });
      const savedUser = await newUser.save();
      res.json({ username: savedUser, token: generateToken(savedUser) });
    } catch (e) {
      res.status(400).json({ error: e });
    }
  },

  signIn: async (req, res) => {
    try {

      const userFound = await User.findOne({ email: req.body.email });
      if (!userFound) return res.status(404).json({ message: "User not found" });
      const matchPassword = await User.comparePassword(
        req.body.password,
        userFound.password
      );
      if (!matchPassword)
        return res.json(401).json({ message: "Invalid password" });
     console.log("aqui",matchPassword);
      res.status(200).json({
        token: generateToken(userFound) ,
        username: userFound,
      });
    } catch(e){
       res.status(400).json({ error: e });
    }
  },
};
