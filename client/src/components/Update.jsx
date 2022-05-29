import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateContact, GetUniqueContact } from "../api/contact";

const Update = () => {
  const { id } = useParams();
  // console.log("useParams", id);
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");

  //get unique to set values inside our update inputs
  // const getContactById = async (contactId) => {
  //   const data = await getUnique(contactId);
  //   console.log("getUnique data => " + data);
  //   // setName(data.getContact.name);
  //   // setPhone(data.getContact.phone);
  //   // setEmail(data.getContact.email);
  // };

  const getContactbyId = async (contactId) => {
    const data = await GetUniqueContact(contactId);
    console.log("datagetunique", data);
    setEmail(data.getContact.email);
    setPhone(data.getContact.phone);
    setName(data.getContact.name);
  };

  useEffect(() => {
    if (id) {
      getContactbyId(id);
    }
    // console.log("useeffect id =>" + id);
  }, [id]);

  //handle update which update our contact fields and redirect us to the contact list
  const handleClick = async (contactId, valeur) => {
    await updateContact(contactId, valeur);
    navigate("/contacts");
  };

  return (
    <div className="add">
      <form>
        <div className="form-group">
          <label>name :</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            className="form-control"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>email</label>
          <input
            className="form-control"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          onClick={() => handleClick(id, { name, phone, email })}
          className="btn btn-primary"
        >
          update
        </button>
      </form>
    </div>
  );
};

export default Update;
