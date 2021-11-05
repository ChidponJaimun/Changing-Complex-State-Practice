import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function changeHandle(event) {
    const { name, value } = event.target;
    console.log(name, value);

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={changeHandle}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={changeHandle}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={changeHandle}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
