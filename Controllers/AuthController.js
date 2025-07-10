const bcrypt = require("bcrypt");
const UserModel = require("../Models/User");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({
      email,
    });

    if (user) {
      return res
        .status(409)
        .json({
          message: "User already exists .Please login.",
          success: false,
        });
    }
    const userModel = new UserModel({ name, email, password });
    userModel.password = await bcrypt.hash(password, 10);

    await userModel.save();
    res.status(201).json({ message: "Signup successful.", succss: true });
  } catch (err) {
    res.status(500).json({ message: "Internal server error.", succss: false });
  }
};

const login = async (req, res) => {
  try {
    const {email, password } = req.body;
    const user = await UserModel.findOne({
      email,
    });

    const errorMsg = "Auth failed email or password is not correct.";

    if (!user) {
      return res.status(403).json({ message: errorMsg, success: false });
    }
    // user password password ,user.password client password
    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res.status(403).json({ message: errorMsg, success: false });
    }

    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    res
      .status(200)
      .json({
        message: "Login successfully.",
        succss: true,
        jwtToken,
        email,
        name: user.name,
      });
  } catch (err) {
    res.status(500).json({ message: "Internal server error.", success: false });
  }
};

module.exports = {
  signup,
  login,
};
