import { useState } from "react";
import "./App.css";
import data from "./assets/data";

export default function App() {
  const [user, setUser] = useState(data);

  function clearAll() {
    setUser([]);
  }

  return (
    <div className="App">
     <div className="container">
       <h2>{user.length} Birthdays today</h2>
      {
        user.map((person, index) => {
          return (
            <div className="userCard" key={index}>
              <div className="image">
                <img src={person.image} alt={person.name} />
              </div>
              <div className="data">
                <p className="name">{person.name}</p>
                <p>{person.age}</p>
              </div>
            </div>
          )
        })
      }
      <button onClick={clearAll}>Clear All</button>
     </div>
    </div>
  );
}
