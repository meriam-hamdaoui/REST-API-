const Contact = require("../models/contact");

exports.readContact = async (req, res) => {
  try {
    const contactList = await Contact.find();
    res.status(200).send({ msg: "your contact list : ", contactList });
  } catch (error) {
    console.error("OUPS readContact => " + error);
    res.status(500).send("we couldn't read your contact list");
  }
};

exports.getContactByid = async (req, res) => {
  const { id } = req.params;
  try {
    const getContact = await Contact.findById(id);
    console.log(getContact);
    res.status(200).send({ getContact });
  } catch (error) {
    console.error("OUPS getContactById => " + error);
    res.status(500).send("we couldn't read your one contact");
  }
};

exports.createContact = async (req, res) => {
  try {
    const newContact = await new Contact(req.body).save();

    res.status(200).send({ msg: "you added a new contact ", newContact });
  } catch (error) {
    console.error("OUPS createContact => " + error);
    res.status(500).send("we couldn't create a new contact");
  }
};

exports.updateContact = async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await Contact.findByIdAndUpdate(id, {
      $set: { ...req.body },
    });
    res.status(200).send({ msg: "your contact is updated", updated });
  } catch (error) {
    console.error("OUPS updateContact => " + error);
    res.status(500).send("we couldn't update a new contact");
  }
};

exports.removeContact = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Contact.findByIdAndDelete(id);
    res.status(200).send({ msg: "your contact is deleted", deleted });
  } catch (error) {
    console.error("OUPS removeContact => " + error);
    res.status(500).send("we couldn't remove the contact");
  }
};
