import React, { useState } from "react";
import { postContact } from "../api/contact";
import { useNavigate } from "react-router";

const Add = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");

  const handleAjout = async (value) => {
    await postContact(value);
    navigate("/contacts");
  };

  return (
    <div className="add">
      <form>
        <div className="form-group">
          <label>name :</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            type="text"
            placeholder="John Doe"
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
            placeholder="+xxx xx-xxx-xxx"
          />
        </div>
        <div className="form-group">
          <label>email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="john@example.com"
          />
        </div>
        <button
          onClick={() => handleAjout({ name, phone, email })}
          className="btn btn-primary"
          type="submit"
        >
          add
        </button>
      </form>
    </div>
  );
};

export default Add;
