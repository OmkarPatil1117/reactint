// imported all Components
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import Login from './components/Login';
import Buycards from "./components/Buycards"

function App() {
  return (
    <>
    <BrowserRouter>
    {/* used react router dom library for routing perpose */}
        <Nav></Nav>
              <Routes>
              <Route path='/' element={ <Home></Home> }> </Route>
              <Route path='/selling' element={ <Buycards></Buycards> }> </Route>
              <Route path='/login' element={ <Login></Login> }> </Route>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
