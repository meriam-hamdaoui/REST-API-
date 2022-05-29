import React, { useEffect } from "react";
import Cards from "./card/Cards";
//import initialeState
import { setContacts } from "../JS/contactSlice";
//import react-redux-hooks
import { useSelector, useDispatch } from "react-redux";
//import apis
import { fetchContacts } from "../api/contact";
import { v4 as uuidv4 } from "uuid";

const List = () => {
  //redux connection
  const Contacts = useSelector((state) => state.contact);
  // console.log("contactList", Contacts);
  const dispatch = useDispatch();

  //import data from DB
  const getContacts = async () => {
    const data = await fetchContacts();
    // console.log("data", data.constactList);
    dispatch(setContacts(data.contactList));
  };
  //useEffect to control the lifecycle of our component
  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="list">
      {Contacts.map((el) => (
        <Cards key={uuidv4()} contact={el} getContacts={getContacts} />
      ))}
    </div>
  );
};

export default List;
