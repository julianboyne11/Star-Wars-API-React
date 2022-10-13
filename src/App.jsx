import './App.css';
import { Route, Routes } from "react-router-dom"
import NavBar from './components/NavBar/NavBar'
import StartshipList from './pages/Starship List/Starship List';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route 
          path='/starship-list'
          element={<StartshipList />}
        />
      </Routes>
    </>
  );
}

export default App;
