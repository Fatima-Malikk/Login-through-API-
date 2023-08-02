import React, { useContext }  from 'react'
import Login from './components/Login';
import { AuthContext } from './components/AuthContext';
import Main from './components/Main';


function App() {
  const { token } = useContext(AuthContext);

  return (
    
  <div className="App">
    <Main/>
      {token ? <Main/> : <Login />}
    </div>
  );

}

export default App;
