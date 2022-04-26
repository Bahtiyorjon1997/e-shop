import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <Switch>
      <Route exact path='/' component={ HomePage  } /> 
      <Route  exact path='/hats' component = { Hats } />
    </Switch>
  );
}

const Hats = () => {
  return(
    <div>Hats</div>
  )
}

export default App;
