const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Admin } = require("mongodb");

let refreshTokens = [];

const authController = {
  //REGISTER
  registerUser: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);
      const newUser = await new User({
        username: req.body.username,
        email: req.body.email,
        password: hashed,
      });

      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        res.status(404).json("Incorrect username");
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        res.status(404).json("Incorrect password");
      }
      if (user && validPassword) {
        const accessToken = jwt.sign({
          id: user.id,
          admin: user.admin
        },
        process.env.JWT_ACCESS_KEY,
        {expiresIn:"30s"}
      );
      const refreshTokens = jwt.sign({
        id: user.id,
        admin: user.admin
      },
      process.env.JWT_REFRESH_KEY,
      {expiresIn:"365d"}
    );
      const{password,...others}=user._doc;
        res.status(200).json({...others,accessToken,refreshTokens});
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

}
module.exports = authController;