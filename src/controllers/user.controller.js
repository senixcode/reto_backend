import User from "../models/User";
export default {
  all: async (_, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  getById: async (req, res) => {
    try {
      console.log("id",req.params.id);
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  updateById: async (req, res) => {
    try {
      const userUpdated = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators:true
      });
      res.status(200).json(userUpdated);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  deleteById: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(204).json();
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};
