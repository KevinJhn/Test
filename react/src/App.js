import './App.css';
// import Register from './Component/Register'
import Navbar from './Navbar'
import Home from './Component/Home'
import Register from './Component/Daftar'
import Edit from './Component/Edit'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/register' component={Register}/>
        <Route path='/edit' component={Edit}/>
      </Switch>
    </Router>
      // <Register/>
  );
}

export default App;
