const expres = require("express");
const router = expres.Router();

// get all pets
router.get("/", (req, res) => {
  res.send({ msg: "meow" });
});

// create a pet
router.post("/", (req, res) => {
  res.send({ msg: "bark" });
});

// delete a pet
router.delete("/:id", (req, res) => {
  res.send({ msg: "delete a pet" });
});

// update a pet
router.patch("/:id", (req, res) => {
    res.send({ msg: "update a pet" });
}); 

module.exports = router;
