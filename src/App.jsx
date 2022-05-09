import './App.css';
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Multihealing1 from './pages/Multihealing1';
import Soulplan from './pages/Soulplan';

const App = () => {
  return (
    <>
    <div >
      <Routes>
          <Route path="/" element={
        <Landing/>  
        }/>
         <Route path="/multihealing" element={
        <Multihealing1/>
        }/>
         <Route path="/soulplan" element={
        <Soulplan/>
        }/>
      </Routes>
    </div>
    </>
  );
}

export default App;
