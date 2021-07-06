import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
// import api from "../api/contacts"
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] =useState("");
  const [serachesults, setSearchesults] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }])
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  const updateContactHandler  = (contact) =>{
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }])
  };

  const searchHandler = (searchTerm) => {
    // console.log(searchTerm);
    setSearchTerm(searchTerm);
    if (searchTerm !== ""){
      const newContactList = contacts.filter((contact) => {
          return  Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchesults(newContactList);
    }
    else{
      setSearchesults(contacts)
    }
  };
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

// // retrive_Contacts
//   const retriveContacts =  async () =>{
//     const response = await api.get("/contacts");
//     return response.data
//   }

//   const addContactHandler = (contact) => {
//     console.log(contact);
//     setContacts([...contacts, { id: uuid(), ...contact }])
//   }

//   const removeContactHandler = (id) => {
//     const newContactList = contacts.filter((contact) => {
//       return contact.id !== id;
//     });

//     setContacts(newContactList);
//   };

//   useEffect(() => {
//     // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//     // if (retriveContacts) setContacts(retriveContacts);
//     const getAllContacts = async () => {
//       const allContacts = await retriveContacts();
//       if(allContacts) setContacts(allContacts);
//     };
// getAllContacts();
//   }, []);

//   useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
//   }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact
            render={(props) => (<ContactList
              {...props}
              contacts={searchTerm.length <1 ? contacts : serachesults}
              getContactId={removeContactHandler}
              term ={searchTerm} 
              searchKeyword ={searchHandler}
              />
            )}
          />
          <Route path="/add"
            render={(props) => (<AddContact
              addContactHandler={addContactHandler} />
            )}
          />
          <Route path="/edit"
            render={(props) => (<EditContact
              updateContactHandler={updateContactHandler} />
            )}
          />
          <Route path="/contact/:id" component={ContactDetail}/>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
