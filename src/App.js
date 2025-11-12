import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Contact from "./Contact";

function App() {
  const [contacts, setContacts] = useState([]);
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const apiFetch = async () => {
      await axios
        //
        .get(`${BACKEND_URL}`)
        // .get("http://localhost:8000/")
        .then((res) => setContacts(res.data))
        .catch((err) => console.log(err));
    };
    apiFetch();
    // console.log(contacts);
  }, []);

  contacts.forEach((contact) => {
    console.log(contact);
  });

  var contactsList = contacts.map((obj) => <Contact data={obj} />);

  return (
    <div className="app">
      <div className="app-body">
        <div className="header">
          <h1 className="title">My Contacts</h1>
        </div>

        <div className="contacts-body">
          <div className="contacts-list">{contactsList}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
