import { useState } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState(false);

  function handelTheme(){
    setTheme(prev => !prev);
  }

  return (
    <div className="App">
      <p>Change Theme <input type="checkbox" checked={theme} onChange={handelTheme}/> </p>
      <p style={theme ? {backgroundColor : 'black', color : 'white'} : null } >Change Color</p>
    </div>
  )
}

export default App;
