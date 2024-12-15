import { useState } from 'react'
import './App.css'
import data from './assets/data.js'

function App() {
  const [originalMenu] = useState(data);
  const [menu, setMenu] = useState(data);

  function filterFood(value){
    let filterFood;
    if(value === "All"){
      filterFood = originalMenu; 
    }
    else if(value){
      filterFood = originalMenu.filter((food) => value === food.category); 
    }
    setMenu(filterFood);
  }

  return (
    <div className="App">
      <h1>Our Menu</h1>
      <div className="buttons">
        <button onClick={() => filterFood("All")}>All</button>
        <button onClick={() => filterFood("breakfast")}>Breakfast</button>
        <button onClick={() => filterFood("lunch")}>Lunch</button>
        <button onClick={() => filterFood("shakes")}>Shakes</button>
      </div>
      <div className="container">
        {
          menu.map((element, index) => {
            return(
              <div className="itemContainer" key={index}>
                <img src={element.img} alt="" />
                <div className="content">
                  <p>{element.title.toUpperCase()}</p>
                  <p className='price'>{element.price}</p>
                </div>
                <p>{element.desc}</p>
                <p className='category'>{element.category.toUpperCase()}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App;
