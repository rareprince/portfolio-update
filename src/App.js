import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import Modal from "./component/modal";

export default function App() {
  const [input, setInput] = useState();
  const [repo, setRepo] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    console.log(input);

    try {
      const result = await axios(`https://api.github.com/users/${input}/repos`);
      setRepo(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      <h1 style={{ textAlign: "center", marginTop: "6rem" }}>RepoCheck</h1>
      <div className="form-div">
        <h4>Enter your Github username</h4>
        <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
          <input
            type="text"
            name="github"
            placeholder="Username"
            value={input}
            onChange={handleChange}
            required
          />
        </form>
        <button
          style={{
            width: "30%",
            textAlign: "center",
            alignSelf: "center",
            padding: "0.5rem",
          }}
          onClick={() => { setRepo(true) ; handleSubmit() }}
        >
          Submit
        </button>
        {repo && <Modal closeRepo = {setRepo} />}
      </div>
 
    </section>
  );
}
