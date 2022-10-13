import './App.css';
import { Route, Routes } from "react-router-dom"
import NavBar from './components/NavBar/NavBar'
import StartshipList from './pages/Starship List/Starship List';
import Ship from './pages/Ship/Ship';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route 
          path='/starship-list'
          element={<StartshipList />}
        />
        <Route 
          path="/starship"
          element={<Ship />}
        />
      </Routes>
    </>
  );
}

export default App;
