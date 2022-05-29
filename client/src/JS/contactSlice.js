import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

//we only need the redux-reducer to get and set data

const contactSlice = createSlice({
  name: "contact",
  initialState: [
    {
      id: uuidv4(),
      name: "mariem",
      phone: 55123789,
      email: "mariem@gmail.com",
    },
  ],
  reducers: {
    //add contact reducer
    addContact: (state, action) => {
      const newContact = {
        id: uuidv4(),
        ...action.payload,
      };
      return [...state, newContact];
    },
    //set || display contacts reducer
    setContacts: (state, action) => {
      return action.payload;
    },
  },
});

//export the action to dispatch them with buttons at the UI
export const { addContact, setContacts } = contactSlice.actions;
//export the reducer to create the store
export default contactSlice.reducer;
