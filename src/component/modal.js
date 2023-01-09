import React from "react";
import "./repo.css";

export default function Modal({ closeRepo }) {

  const Repository = (props) => {
    const { repo } = props;
    console.log(repo.data);

  
    const listRepos =
      repo.length !== 0 ? (
        repo.data.map((item) => <li key={item.id}>{item.name}</li>))
   : (
        <p>Please Enter Your Username</p>
      );
    
    return <ul>{listRepos}</ul>
  }

  return (
    <div className="modalBackground">
      <div className="container">
        <div className="closeBtn">
          <button onClick={() => closeRepo(false)} className="tCancel" > X </button>
        </div>
        <div className="body">
          <h2>My Repository</h2>

          <p>Here are the Repositories available</p>        
        </div>
        {{ Repository }}
        <div className="footer">
          <button onClick={() => closeRepo(false)} id="cancelBtn">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
