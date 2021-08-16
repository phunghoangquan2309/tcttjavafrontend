import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import FormInfor from './FormInfor';
import FormInforPage from './FormInforPage';
import DisplayInforPage from './DisplayInforPage';
function App() {
  return (
    <Router>
      <Switch>
          <Route
           exact path="/"
          >
           <FormInforPage />
          </Route>
          <Route
           exact path="/display"
          >
           <DisplayInforPage />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
