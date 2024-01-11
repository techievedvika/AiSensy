import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Contacts from './pages/Contacts';
import Messages from './pages/Messages';
import BulkMessages from './pages/BulkMessages';
import CreateBulkMsg from './pages/CreateBulkMsg';
import MyTemplates from './pages/MyTemplates';
import CreateTemplates from './pages/CreateTemplates';
import ScheduleMessage from './pages/ScheduleMessage';
import CreateSchedule from './pages/CreateSchedule';
import EditProfile from './pages/EditProfile';
import LiveChat from './pages/LiveChat';

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
        <Route path='/create-bulk-message' component={CreateBulkMsg}/>
        <Route path='/mytemplates' component={MyTemplates}/>
        <Route path='/create-template' component={CreateTemplates}/>
        <Route path='/schedulemessage' component={ScheduleMessage}/>
        <Route path='/create-schedule' component={CreateSchedule}/>
        <Route path='/profilesettings' component={EditProfile}/>
        <Route path='/livechat' component={LiveChat}/>
        <Redirect from='/' to='/home'/>
      </Switch>
    </>
  );
}

export default App;
