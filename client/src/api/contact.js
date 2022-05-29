import axios from "axios";

//http request functions

//read data
export const fetchContacts = async () => {
  //get our data from DB
  const { data } = await axios.get("http://localhost:5000/api/phonebook");
  return data;
};

//post data
export const postContact = async (value) => {
  await axios.post("http://localhost:5000/api/phonebook", {
    ...value,
  });
};

//update data
export const updateContact = async (id, value) => {
  await axios.put(`http://localhost:5000/api/phonebook/${id}`, value);
};

//get by id
export const getUnique = async (_id, value) => {
  const { data } = await axios.get(
    `http://localhost:5000/api/phonebook/${_id}`,
    value
  );

  return data;
};

//delete contact
export const deleteContact = async (id) => {
  await axios.delete(`http://localhost:5000/api/phonebook/${id}`);
};
