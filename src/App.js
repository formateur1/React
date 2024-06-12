import './App.css';
import Fetch from './components/Fetch';
import Create from './components/create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Read from './components/read'
import Update from './components/update'

function App() {
  return (
    <Router>
      
      <div className="App">
        {/* <Fetch /> */}
        <div className="main">
          <h2 className="main-header">React Crud Operations</h2>
          <div>
          <Routes>
            <Route path='/create' element={<Create />} />
            <Route path='/read' element={<Read />} />
            <Route path='/update' element={<Update />} />
            </Routes>
          </div>

          
        </div>
      </div>
      
    </Router>
  );
}

export default App;
