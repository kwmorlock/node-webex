const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const secret = process.env.JWT_SECRET || "noneedforsecrets,tell the truth!";

    jwt.verify(token, secret, (error, decodedToken) => {
      if (error) {
        res.status(401).json({
          message:
            "No entry allowed with this method, please take this time to do something nice for someone!",
        });
      } else {
        req.jwt = decodedToken;

        next();
      }
    });
  } else {
    res
      .status(400)
      .json({ message: "Please provide the authentication information" });
  }
};
