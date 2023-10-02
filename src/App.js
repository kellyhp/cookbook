import './App.css';
import American from './Components/American';
import Chinese from './Components/Chinese';
import Japanese from './Components/Japanese';
import HomePage from './Components/HomePage';
import {Routes, Route} from 'react-router-dom';


function App() {
    return (
      <div className="App">
         <Routes> 
          <Route path = "" element = {<HomePage/>}/>
          <Route path = "/home" element = {<HomePage/>}/>
          <Route path = "/american" element = {<American/>}/>
          <Route path = "/chinese" element = {<Chinese/>}/>
          <Route path = "/japanese" element = {<Japanese/>}/>
        </Routes>
      </div>
  );
}

        
export default App;
