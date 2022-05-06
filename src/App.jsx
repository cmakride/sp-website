import './App.css';
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Multihealing from './pages/Multihealing';
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
        <Multihealing/>
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
