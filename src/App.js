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
import AdminDashboard from './pages/admin/AdminDashboard';
import HelpSupport from './pages/HelpSupport';
import UserTickets from './pages/admin/UserTickets';
import Customers from './pages/admin/Customers';
import authService from './service/authService';
import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import ResetPassword from './pages/ResetPass';
import UserSubscription from './pages/UserSubscription';

function App() {
  const user = authService.getUser();
  const[showSidebar,setShowSidebar]=useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
   
    useEffect(() => {
      const handleResize = () => {
        const isLarge = window.innerWidth > 1024;
        setIsLargeScreen(isLarge);
        if (isLarge) {
          setShowSidebar(false); // Hide sidebar on large screens
        }
      };
    
      window.addEventListener('resize', handleResize);
      handleResize(); // Initial check
    
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  return (
    <>
     
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        
          <Route path='/admin/dashboard' 
          render={
            (props)=><AdminDashboard
              {...props}
              onShow={()=>setShowSidebar(!showSidebar)}
              show={showSidebar}
              lgScreen={isLargeScreen}
              onClose={()=>setShowSidebar(false)}
             
            />
            }
          />
          <Route path='/dashboard' 
           render={
            (props)=><Dashboard
              {...props}
              onShow={()=>setShowSidebar(!showSidebar)}
              show={showSidebar}
              lgScreen={isLargeScreen}
              onClose={()=>setShowSidebar(false)}
            
            />
            }

          />
          <Route path='/contacts' 
            render={
            (props)=><Contacts
              {...props}
              onShow={()=>setShowSidebar(!showSidebar)}
              show={showSidebar}
              lgScreen={isLargeScreen}
              onClose={()=>setShowSidebar(false)}
            />
            }

            />
          <Route path='/messages' 
            render={
            (props)=><Messages
              {...props}
              onShow={()=>setShowSidebar(!showSidebar)}
              show={showSidebar}
              lgScreen={isLargeScreen}
              onClose={()=>setShowSidebar(false)}
            />
            }

            />
          <Route path='/bulkmessages' 
          render={
            (props)=><BulkMessages
              {...props}
              onShow={()=>setShowSidebar(!showSidebar)}
              show={showSidebar}
              lgScreen={isLargeScreen}
              onClose={()=>setShowSidebar(false)}
            />
            }
          />
          <Route path='/create-bulk-message' 
          render={
            (props)=><CreateBulkMsg
              {...props}
              onShow={()=>setShowSidebar(!showSidebar)}
              show={showSidebar}
              lgScreen={isLargeScreen}
              onClose={()=>setShowSidebar(false)}
            />
            }
          />
          <Route path='/mytemplates' 
            render={
            (props)=><MyTemplates
              {...props}
              onShow={()=>setShowSidebar(!showSidebar)}
              show={showSidebar}
              lgScreen={isLargeScreen}
              onClose={()=>setShowSidebar(false)}
            />
            }
            />
          <Route path='/create-template' 
           render={
            (props)=><CreateTemplates
              {...props}
              onShow={()=>setShowSidebar(!showSidebar)}
              show={showSidebar}
              lgScreen={isLargeScreen}
              onClose={()=>setShowSidebar(false)}
            />
            }

          />
          <Route path='/template/edit/:id' 
            render={
            (props)=><CreateTemplates
              {...props}
              onShow={()=>setShowSidebar(!showSidebar)}
              show={showSidebar}
              lgScreen={isLargeScreen}
              onClose={()=>setShowSidebar(false)}
            />
            }
            />
          <Route path='/schedulemessage' 
            render={
            (props)=><ScheduleMessage
              {...props}
              onShow={()=>setShowSidebar(!showSidebar)}
              show={showSidebar}
              lgScreen={isLargeScreen}
              onClose={()=>setShowSidebar(false)}
            />
            }
            />
          <Route path='/create-schedule' 
          render={
            (props)=><CreateSchedule
              {...props}
              onShow={()=>setShowSidebar(!showSidebar)}
              show={showSidebar}
              lgScreen={isLargeScreen}
              onClose={()=>setShowSidebar(false)}
            />
            }
          />
          <Route path='/profilesettings' 
            render={
            (props)=><EditProfile
              {...props}
              onShow={()=>setShowSidebar(!showSidebar)}
              show={showSidebar}
              lgScreen={isLargeScreen}
              onClose={()=>setShowSidebar(false)}
            />
            }
            />
          <Route path='/livechat' 
            render={
            (props)=><LiveChat
              {...props}
              onShow={()=>setShowSidebar(!showSidebar)}
              show={showSidebar}
              lgScreen={isLargeScreen}
              onClose={()=>setShowSidebar(false)}
            />
            }
            />
          <Route path='/pricing' 
            render={
            (props)=><SubsPlans
              {...props}
              onShow={()=>setShowSidebar(!showSidebar)}
              show={showSidebar}
              lgScreen={isLargeScreen}
              onClose={()=>setShowSidebar(false)}
            />
            }
            />
          <Route path='/logout' 
            component={logout}
            />
          <Route path='/group' 
            render={
            (props)=><Group
              {...props}
              onShow={()=>setShowSidebar(!showSidebar)}
              show={showSidebar}
              lgScreen={isLargeScreen}
              onClose={()=>setShowSidebar(false)}
            />
            }
            />
          <Route path='/user/messages' 
          render={
            (props)=><MessageDetails
              {...props}
              onShow={()=>setShowSidebar(!showSidebar)}
              show={showSidebar}
              lgScreen={isLargeScreen}
              onClose={()=>setShowSidebar(false)}
            />
            }
          />
          <Route path='/user/support' 
          render={
            (props)=><HelpSupport
              {...props}
              onShow={()=>setShowSidebar(!showSidebar)}
              show={showSidebar}
              lgScreen={isLargeScreen}
              onClose={()=>setShowSidebar(false)}
            />
            }
          />
          <Route path='/admin/tickets' 
          render={
            (props)=><UserTickets
              {...props}
              onShow={()=>setShowSidebar(!showSidebar)}
              show={showSidebar}
              lgScreen={isLargeScreen}
              onClose={()=>setShowSidebar(false)}
            />
            }
          />
          <Route path='/admin/customers' 
            render={
              (props)=><Customers
                {...props}
                onShow={()=>setShowSidebar(!showSidebar)}
                show={showSidebar}
                lgScreen={isLargeScreen}
                onClose={()=>setShowSidebar(false)}
              />
              }
          />
          <Route path='/user/subscription' 
            render={
              (props)=><UserSubscription
                {...props}
                onShow={()=>setShowSidebar(!showSidebar)}
                show={showSidebar}
                lgScreen={isLargeScreen}
                onClose={()=>setShowSidebar(false)}
              />
              }
          />
          <Route path='/reset-password' 
            render={
              (props)=><ResetPassword
                {...props}
                
              />
              }
          />
      
        <Redirect from='/' to='/home'/>
      </Switch>
    </>
  );
}

export default App;
