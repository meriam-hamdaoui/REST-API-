import React from "react";
import Avatar from "./Avatar";
import Tilt from "react-tilt";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { useNavigate } from "react-router";
import { deleteContact } from "../../api/contact";

const Cards = ({ contact, getContacts }) => {
  const { _id, name, phone, email } = contact;
  const navigate = useNavigate();

  const navigation = () => {
    navigate(`/updates/${_id}`);
  };

  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 mt0" options={{ max: 25 }}>
        <div className="Tilt-inner">
          <div className="card">
            <div className="top">
              <div className="top-card">
                <h2 className="name">{name}</h2>
                <button
                  onClick={async () => {
                    await deleteContact(_id);
                    getContacts();
                  }}
                  className="delete-btn"
                >
                  <MdOutlineDelete />
                </button>
              </div>
              <Avatar />
            </div>
            <div className="bottom">
              <div>
                <p className="info">{phone}</p>
                <p className="info">{email}</p>
              </div>
              <button onClick={() => navigation()}>
                <AiOutlineEdit />
              </button>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default Cards;
