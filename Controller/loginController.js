import jwt from "jsonwebtoken";
import { db } from "../DB/dbconnection.js";
import bcrypt from "bcrypt";

const userCollection = db.collection("Users");

const loginController = async (req, res) => {
  try {
    const userExist = await userCollection.findOne({ Email: req.body.email });
    if (userExist != null) {
      const compareHashedPassword = bcrypt.compare(
        req.body.password,
        userExist.Password
      );
      if (compareHashedPassword) {
        const data = await userCollection.findOne(
          { Email: req.body.email },
          { projection: { _id: 0, Password: 0 } }
        );
        const token = jwt.sign(data, process.env.SECREATKEY, {
          algorithm: "HS256",
          expiresIn: "10m",
        });

        res.send({ message: "Login Successful", token });
      } else {
        res.send({ message: "Password incorrect" });
      }
    } else {
      res.send({ message: "User Not Exist" });
    }

  } catch (e) {
    res.status(500).send({ message: "Internal server error" });
  }
};

export default loginController;
