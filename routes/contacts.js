const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const Contact = require("../models/Contacts");

// @route   GET api/contacts
// @desc    get all user contacts
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    console.log(" @USER @ ", req.user.id);
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.status(200).json({ contacts });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   POST api/contact
// @desc    add new contact
// @access  Private
router.post(
  "/",
  [auth, [check("name", "Name is required ").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    console.log("###@@@", errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      name,
      email,
      position,
      firstInterview,
      secondInterview,
      comments,
      conservationPoint_1,
      conservationPoint_2,
      pointToImprove_1,
      pointToImprove_2,
      link,
      type,
    } = req.body;
    try {
      const Newcontact = new Contact({
        name,
        email,
        position,
        firstInterview,
        secondInterview,
        comments,
        conservationPoint_1,
        conservationPoint_2,
        pointToImprove_1,
        pointToImprove_2,
        link,
        type,
        user: req.user.id,
      });
      const contact = await Newcontact.save();
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route   PUT api/contacts/:id
// @desc    update contact
// @access  Private
router.put("/:id", auth, async (req, res) => {
  const {
    name,
    position,
    email,
    firstInterview,
    secondInterview,
    comments,
    conservationPoint_1,
    conservationPoint_2,
    pointToImprove_1,
    pointToImprove_2,
    link,
    type,
  } = req.body;
  console.log(
    name,
    email,
    position,
    firstInterview,
    secondInterview,
    comments,
    conservationPoint_1,
    conservationPoint_2,
    pointToImprove_1,
    pointToImprove_2,
    link,
    type
  );
  // Builde contact object
  const contactFields = {};
  if (name) contactFields.name = name;
  if (position) contactFields.position = position;
  if (email) contactFields.email = email;
  if (link) contactFields.link = link;
  if (type) contactFields.type = type;
  if (firstInterview) contactFields.firstInterview = firstInterview;
  if (!firstInterview) contactFields.firstInterview = "";
  if (secondInterview) contactFields.secondInterview = secondInterview;
  if (!secondInterview) contactFields.secondInterview = "";
  if (comments) contactFields.comments = comments;
  if (!comments) contactFields.comments = "";
  if (conservationPoint_1)
    contactFields.conservationPoint_1 = conservationPoint_1;
  if (!conservationPoint_1) contactFields.conservationPoint_1 = "";
  if (conservationPoint_2)
    contactFields.conservationPoint_2 = conservationPoint_2;
  if (!conservationPoint_2) contactFields.conservationPoint_2 = "";
  if (pointToImprove_1) contactFields.pointToImprove_1 = pointToImprove_1;
  if (!pointToImprove_1) contactFields.pointToImprove_1 = "";

  if (pointToImprove_2) contactFields.pointToImprove_2 = pointToImprove_2;
  if (!pointToImprove_2) contactFields.pointToImprove_2 = "";

  try {
    let contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ msg: "Contact cannot find" });
    // make sure user owns contact
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not autohrized" });
    }
    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: contactFields },
      //   create new if dosent exist
      { new: true }
    );
    res.json(contact);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
});

// @route   DELETE api/contacts/:id
// @desc    delete contact
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ msg: "Contact cannot find" });
    // make sure user owns contact
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not autohrized" });
    }
    const check = await Contact.findByIdAndRemove(req.params.id);
    res.json({ msg: "Contact removed" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
