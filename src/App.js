import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <Route exact path='/' component = { HomePage  } />
      <Route  path='/hats' component = { Hats } />
    </div>
  );
}

const Hats = () => {
  return(
    <div>Hats</div>
  )
}

export default App;
