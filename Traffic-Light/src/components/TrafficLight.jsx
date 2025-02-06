import React, { useEffect, useState } from "react";

const TrafficLight = () => {

  const [currentLight, setCurrentLight] = useState("red");

  useEffect(() => {
    if(currentLight === 'red'){
        setTimeout(() => {
            setCurrentLight("yellow");
        }, 5000);
    }
    else if(currentLight === 'yellow'){

        setTimeout(() => {
            setCurrentLight("green");
        }, 1000);
    }
    else if(currentLight === 'green'){
        setTimeout(() => {
            setCurrentLight("red");
        }, 4000);
    }
  }, [currentLight]);

  

  return (
    <div className="container">
      <div
        style={currentLight !== "red" ? { opacity: 0.3 } : null}
        className="red"
      >
        Red
      </div>
      <div
        style={currentLight !== "yellow" ? { opacity: 0.3  } : null}
        className="yellow"
      >
        Yellow
      </div>
      <div
        style={currentLight !== "green" ? { opacity: 0.3   } : null}
        className="green"
      >
        Green
      </div>
    </div>
  );
};

export default TrafficLight;
