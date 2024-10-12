const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Authorization token not found" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;

// mongodb+srv://b3ingsahil:3508DC6xIqXxF8d6@cluster0.4pkft4a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// b3ingsahil
// 3508DC6xIqXxF8d6
