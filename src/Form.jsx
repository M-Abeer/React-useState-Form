import React, { useState } from "react";
import "./index.css";

const Form = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  //   console.log(email, password);
  const [allEntry, SetAllEntry] = useState([]);

  const submitForm = (e) => {
    //HTml donot reload it after clicking
    e.preventDefault();
    /*
    const newEntry = {
      id: new Date().getTime().toString(),
      email: email,
      password: password,
    };
*/
    const newEntry = {
      id: new Date().getTime().toString(),
      email,
      password,
    };
    //Modern JS Code

    SetAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="form">
        <form className="app" action="" onSubmit={submitForm}>
          <div className="input-container">
            <label htmlFor="email">Email </label>
            <input
              type="text"
              name="uname"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password </label>
            <input
              type="password"
              name="pass"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="button-container">
            <input type="submit" value="Login" />
          </div>
          {/* {allEntry.map((c) => {
            
            return (
              <div key={c.id}>
                <p>
                  Email: {c.email} <br /> Password: {c.password}
                </p>
              </div>
            );
          })} */}

          {allEntry.map((c) => {
            const { id, email, password } = c;
            return (
              <div key={id}>
                <p>
                  Email: {email} <br /> Password: {password}
                </p>
              </div>
            );
          })}
        </form>
      </div>
    </>
  );
};

export default Form;
