import logo from './logo.svg';
import './App.css';

import CompShowInicio from './persons/showPersons.js';
import CompCreatePersons from './persons/create.js';
import CompEditPersons from './persons/edit.js';

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       <h3>Lista de personas registradas</h3>
      </header>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<CompShowInicio></CompShowInicio>}/>
                  <Route path='/create' element={<CompCreatePersons></CompCreatePersons>}/>
                  <Route path='/edit/:id' element={<CompEditPersons></CompEditPersons>}/>
              </Routes>
          </BrowserRouter>

      
    </div>
  );
}

export default App;
