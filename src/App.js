import React from "react";
import MyReductor from './components/MyReductor'
import MyState from './components/MyState'
import{Routes,Route} from 'react-router-dom'

function App(){
  return(
      <div style={{backgroundColor:'grey'}}>
    <Routes>
        <Route path='/' element={<MyState/>}/>
        <Route path='reductor' element={<MyReductor/>}/>
    </Routes>
    </div>
  );
}

export default App;
