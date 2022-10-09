const router = require("express").Router();
const NewAddress = require("../models/Delivery");
var bcrypt = require("bcryptjs");
// register address
router.post("/new", async (req, res) => {
  try {
    // create new address
    const newaddress = new NewAddress({
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      pincode: req.body.pincode,
    });
    // save address and send response
    const savedaddress = await newaddress.save();
    res.status(200).json(savedaddress);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
