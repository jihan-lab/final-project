import User from "../models/userAccount.js";
import bcrypt from 'bcrypt';
import jwt  from "jsonwebtoken";

export const getAllUser = async (req, res) => {
    try {
        const user = await User.findAll();
        res.json(user);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createAccount = async (req, res) => {
  const {username, email, password } = req.body;
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await User.create({
      username: username,
      email: email,
      password: hashPassword,
    });
    res.json({ msg: "register berhasil" });
  } catch (error) {
    res.json({ error });
    console.log(error);
  }
};

export const loginAccount = async (req,res) =>{
    try {
        const user = await User.findAll({
          where: {
            email: req.body.email,
          },
        });
        const matchPassword = await bcrypt.compare(
          req.body.password,
          user[0].password
        );
        if (!matchPassword) {
          return res.json({ msg: "email or password is wrong" });
        }
        const user_id = user[0].id;
        const username = user[0].username;
        const email = user[0].email;
        const accessToken = jwt.sign({ user_id, username, email }, "*****", {
          expiresIn: "120s",
        });
        const refresh = jwt.sign({ user_id, username, email }, "*****", {
          expiresIn: "1d",
        });
        await User.update(
          { refresh_token: refresh },
          {
            where: {
              id: user_id,
            },
          }
        );
        res.cookie("refresh_token", refresh, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000,
        });
        res.json({ accessToken });
        console.log(req.headers["cookie"]);
      } catch (error) {
        console.log(error);
      }
    };

    // REFRESH TOKEN
    export const refresh = async (req, res) => {
      try {
        const refresh = req.cookies.refresh_token;
        if (!refresh) return res.status(401);
        const user = await User.findAll({
          where: {
            refresh_token: refresh,
          },
        });
        if (!user[0]) return res.status(403);
        jwt.verify(refresh, "*****", (error, decode) => {
          if (error) return res.status(403);
          const user_id = user[0].id;
          const username = user[0].username;
          const email = user[0].email;
          const accessToken = jwt.sign(
            { user_id, username, email }, "*****", {
              expiresIn: "30s",
            }
          );
          res.json({ accessToken });
        });
      } catch (error) {
        res.json({ msg: "error" });
        console.log(error);
      }
    };

    export const verify_token = (req, res, next) => {
      const authheader = req.headers["authorization"];
      const token = authheader && authheader.split(" ")[1];
      if (token == null) return res.sendStatus(401);
      jwt.verify(token, "*****", (error, decode) => {
        if (error) return res.sendStatus(403).json(error);
        req.email = decode.email;
        next();
      });
    };