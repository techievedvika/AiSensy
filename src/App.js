import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Contacts from './pages/Contacts';
import Messages from './pages/CustomMessages';
import BulkMessages from './pages/BulkMessages';
import CreateBulkMsg from './pages/CreateBulkMsg';
import MyTemplates from './pages/MyTemplates';
import CreateTemplates from './pages/CreateTemplates';
import ScheduleMessage from './pages/ScheduleMessage';
import CreateSchedule from './pages/CreateSchedule';
import EditProfile from './pages/EditProfile';
import LiveChat from './pages/LiveChat';
import SubsPlans from './pages/SubsPlans';
import logout from './pages/logout';
import Group from './pages/Group';
import MessageDetails from './pages/SentMessages';

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
        <Route path='/template/edit/:id' component={CreateTemplates}/>
        <Route path='/schedulemessage' component={ScheduleMessage}/>
        <Route path='/create-schedule' component={CreateSchedule}/>
        <Route path='/profilesettings' component={EditProfile}/>
        <Route path='/livechat' component={LiveChat}/>
        <Route path='/pricing' component={SubsPlans}/>
        <Route path='/logout' component={logout}/>
        <Route path='/group' component={Group}/>
        <Route path='/user/messages' component={MessageDetails}/>
        <Redirect from='/' to='/home'/>
      </Switch>
    </>
  );
}

export default App;
