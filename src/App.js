import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Contacts from './pages/Contacts';
import Messages from './pages/Messages';
import BulkMessages from './pages/BulkMessages';

function App() {
  return (
    <>
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/contacts' component={Contacts}/>
        <Route path='/messages' component={Messages}/>
        <Route path='/bulkmessages' component={BulkMessages}/>
        <Redirect from='/' to='/home'/>
      </Switch>
    </>
  );
}

export default App;
