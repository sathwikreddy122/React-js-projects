import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const style = "";

  const [tours, setTours] = useState([]);

  useEffect(() => {
    Axios.get("https://www.course-api.com/react-tours-project").then(
      (response) => {
        setTours(response.data);
      }
    );
  }, []);

  function deleteTour(index) {
    let deletedTour = tours.filter((element, i) => i !== index);

    setTours(deletedTour);
  }

  return (
    <div className="App">
      <h1>Our Tours</h1>

      <div className="container">
        {tours.map((element, index) => {
          return (
            <div key={index} className="tourCard">
              <img src={element.image} alt={element.name} />
              <p>{element.name}</p>
              <p>
                {element.info}
              </p>
              <p className="price">{element.price}</p>
              <button
                className="delete"
                onClick={() => {
                  deleteTour(index);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
