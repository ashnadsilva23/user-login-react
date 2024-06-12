import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
import ViewAll from './components/ViewAll';
import Login from './components/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/add' element={<AddUser/>}/>
       

      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
