const express = require("express");
const {
  readContact,
  createContact,
  updateContact,
  removeContact,
  getById,
} = require("../controllers/contact");
const contactRouter = express.Router();

//get
contactRouter.get("/", readContact);

//post
contactRouter.post("/", createContact);

//getById
contactRouter.get("/:id", getById);

//put
contactRouter.put("/:id", updateContact);

//delete
contactRouter.delete("/:id", removeContact);

module.exports = contactRouter;
