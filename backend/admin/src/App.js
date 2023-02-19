import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/*' element={<Dashboard />} />
        <Route path='/navbar' element={<h1>HIIII</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;