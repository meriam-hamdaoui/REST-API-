1. cd phonebook && npx create-react-app client
2. npm i bootstrap react-redux/toolkit react-icons uuid axios react-router tachyons, Tilt(styling packages)
3. cd src && mkdir components JS api
4. cd JS && touch contactSlice.js store.js
5. cd components && touch NavBar.jsx Cards.jsx List.jsx Add.jsx Update.jsx Home.jsx
6. we import our packages and create our User Inertface
   //we only need the redux-reducer to get and set data
7. reducer => createSlice
8. store => configureStore
9. connect our app to the store (Provider)
   //we're gonna update and delete data using api requests
10. api => create all http request (get, post, delete, put)
11. display our contact list => import initialeState, useSelector, useDispatch
12. we create a function to import our data from DB then we call it inside the useEffect hook
13. update contact
14. add contact to phonebook
15. delete contact from phonebook
