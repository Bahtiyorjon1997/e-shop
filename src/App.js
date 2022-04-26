import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route exact path='/' element={ <HomePage /> } /> 
      <Route  exact path='/hats' element = { <Hats/> } />
    </Routes>
  );
}

const Hats = () => {
  return(
    <div>Hats</div>
  )
}

export default App;
