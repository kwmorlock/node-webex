const router = require("express").Router();

const Users = require("./usersModel");
const restricted = require("../auth/authMiddleware");
const { isValid } = require("./usersService");

router.use(restricted);

router.get("/", (req, res) => {
  Users.findUser()
    .then((users) => {
      res.status(200).json({ users, jwt: req.jwt });
    })
    .catch((err) => res.send(err));
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  Users.findById(id)
    .then((user) => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "Could not find user" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
});

router.post("/", checkRoles(["admin"]), (req, res) => {
  const user = req.body;

  if (isValid(user)) {
    Users.add(user)
      .then((saved) => {
        res.status(201).json({ data: saved });
      })
      .catch((error) => {
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(400).json({ message: "please provide all user information" });
  }
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Users.destroy(id)
    .then((bye) => {
      if (bye) {
        res.status(200).json({ removed: bye });
      } else {
        res.status(404).json({ message: "Could not find user" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
});

function checkRoles(roles) {
  return function (req, res, next) {
    const role = req.jwt.role;

    if (req.jwt && req.jwt.role && roles.includes(role)) {
      next();
    } else {
      res.status(403).json({ message: "What you doing?" });
    }
  };
}

module.exports = router;
