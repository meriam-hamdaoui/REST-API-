import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./contactSlice";

//create a store with reducer object : {reducerName : sliceName}
export default configureStore({
  reducer: {
    contact: contactSlice,
  },
});
