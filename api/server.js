const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authenticate = require("../auth/authMiddleware");

const usersAuthRouter = require("../auth/authUsersRouter");
const infoRouter = require("../info/infoRouter");
const usersRouter = require("../users/usersRouter");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/users/users", authenticate, usersRouter);
server.use("/api/users/auth", usersAuthRouter);
server.use("/api/info", authenticate, infoRouter);

server.get("/", (req, res) => {
  res.json({ api: "Ready To try Webex!!!" });
});

module.exports = server;
