import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateContact, getUnique } from "../api/contact";
console.log("getUnique => " + getUnique());

const Update = () => {
  const { id } = useParams();
  // console.log("useParams", id);
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");

  //get unique to set values inside our update inputs
  const getContactById = async (idCont) => {
    try {
      const data = await getUnique(idCont);
      console.log("getUnique data => " + data);
    } catch (error) {
      console.error(error);
    }

    // setName(data.getContact.name);
    // setPhone(data.getContact.phone);
    // setEmail(data.getContact.email);
  };

  useEffect(() => {
    id && getContactById(id);
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
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            type="text"
            value={name}
            placeholder="John Doe"
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
            value={phone}
            placeholder="+xxx xx-xxx-xxx"
          />
        </div>
        <div className="form-group">
          <label>email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            value={email}
            placeholder="john@example.com"
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
