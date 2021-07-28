import jwt from "jsonwebtoken";
import config from "../config";

export const ROLES = {
  person: "person",
  company: "company",
};

export const generateToken = (user) =>
  jwt.sign({ id: user._id }, config.SECRET, {
    expiresIn: 86400, //1 day -> 24 hours
  });