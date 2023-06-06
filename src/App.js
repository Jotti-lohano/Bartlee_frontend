import './App.css';
import { MyContext } from "./MyContext";
import { useState, React } from 'react';
import AuthRouth from './Routers/AuthRouter';

function App() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(false);

  return (

    <MyContext.Provider value={{ email, setEmail ,status ,setStatus }}>
    <div className="App">
      <AuthRouth />
    </div>
    </MyContext.Provider>
  );
}

export default App;
