const router = require("express").Router();

const Information = require("./infoModel");

router.get("/", (req, res) => {
  Information.find()
    .then((information) => {
      res.status(200).json(information);
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  Information.findById(id)
    .then((information) => {
      if (information) {
        res.status(200).json(information);
      } else {
        res.status(404).json({ message: "Could not find that information" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
});

router.post("/:id", (req, res) => {
  const id = req.params.id;
  req.body.usersId = id;
  const info = req.body;

  Information.add(info)
    .then((newInfo) => {
      res.status(201).json({ newInfo });
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  Information.findById(id)
    .then((info) => {
      if (info) {
        Information.update(updates, id).then((update) => {
          res.status(201).json(update);
        });
      } else {
        res.status(404).json({ message: "Unable to find info" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Information.destroy(id)
    .then((bye) => {
      if (bye) {
        res.status(200).json({ removed: bye });
      } else {
        res.status(404).json({ message: "Could not find info" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
});

router.get("/user/:id", (req, res) => {
  const id = req.params.id;

  Information.findByUser(id)
    .then((info) => {
      if (info) {
        res.status(200).json(info);
      } else {
        res.status(404).json({ message: "Unable to find info for that user." });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
});

module.exports = router;
