import { faAddressBook, faArrowRightFromBracket, faBorderAll, faBoxesStacked, faCalendarDays, faCommentDots, faEnvelopesBulk, faGear, faHeadphones, faMessage, faMoneyBills, faMoneyCheck, faObjectGroup, faRing, faTableColumns, faToggleOn, faUsers, faXmark, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import authService from '../service/authService'
import { faSlack } from '@fortawesome/free-brands-svg-icons'

const Sidebar = (props) => {
  let {show,handleClose,lgScreen} = props;
  const sidelinks = [
    {name:'Dashboard',icon:faBorderAll,link:'/dashboard'},
    {name:'Contacts',icon:faAddressBook,link:'/contacts'},
    {name:'Live Chat',icon:faMessage,link:'/livechat'},
    {name:'Custom Message',icon:faCommentDots,link:'/messages'},
    {name:'Send Bulk Messages',icon:faEnvelopesBulk,link:'/bulkmessages'},
    {name:'Message Log',icon:faSlack,link:'/user/messages'},
    {name:'My Templates',icon:faObjectGroup,link:'/mytemplates'},
    {name:'Schedule Messages',icon:faCalendarDays,link:'/schedulemessage'},
    {name:'Profile Settings',icon:faGear,link:'/profilesettings'},
    {name:'Subscription',icon:faRing,link:'/user/subscription'},
    {name:'Help and Support',icon:faHeadphones,link:'/user/support'},
    {name:'Logout',icon:faArrowRightFromBracket,link:'/logout'},
  ];
  const adminLinks = [
    {name:'Dashboard',icon:faBorderAll,link:'/admin/dashboard'},
    {name:'Orders',icon:faBoxesStacked,link:'/admin/dashboard'},
    {name:'Subscriptions',icon:faToggleOn,link:'/admin/dashboard'},
    {name:'Customers',icon:faUsers,link:'/admin/customers'},
    {name:'Payment Gateways',icon:faMoneyCheck,link:'/admin/dashboard'},
    {name:'User Tickets',icon:faHeadphones,link:'/admin/tickets'},
    {name:'Profile Settings',icon:faGear,link:'/profilesettings'},
    {name:'Logout',icon:faArrowRightFromBracket,link:'/logout'},
  ];
  let user = authService.getUser();
  const links = user?.role==='superadmin' ? adminLinks : sidelinks;
 
  
  return (
    <>
      {
        lgScreen && (
          <div className=' overflow-y-scroll h-full w-[250px] left-0 top-0 fixed bg-[#0a474c] hidden  lg:block  items-center'>
            <Link className='flex justify-center'  to={`${user.role==='superadmin' ? '/admin/dashboard':'/dashboard'}`}>
              <img className='max-h-12 my-2 flex self-center' src='data:image/png;base64,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' />
            </Link>
            <ul className='flex flex-col gap-3 mb-10 '>
              {links.map((a)=>(
                <li key={a.name}>
                  <Link className='text-xl flex  px-4 items-center' to={a.link}>
                    <FontAwesomeIcon
                    className='text-lg rounded-full p-2   active:bg-gray-500' icon={a.icon} style={{ color: "#ffffff", }} />
                    <div className=' text-sm  text-center text-white leading-tight'>{a.name}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )
      }
      {(show) && (
        !lgScreen &&
        (<div className={`bg-white   pb-5 pt-2 p-8 col-span-10  ease-linear `}>
            <div className='flex justify-between'>
              <Link className='' to='/'>
                <img className='max-h-16 my-6' src='data:image/png;base64,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'/>
              </Link>
              <div  className='h-10 translate-y-2 my-6 w-10 text-center rounded-full hover:bg-slate-100'>
                <button onClick={handleClose} className=' - text-center text-3xl'>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
            </div>
            <ul className='flex gap-4 w-full flex-col'>
              {links.map((a)=>(
                <li key={a.name} className='w-full'>
                  <Link to={a.link}>
                    <button 
                      onClick={handleClose}
                      className='text-xl rounded-md hover:border hover:bg-slate-200 py-1.5 flex  w-full hover:ease-out ' >
                      <FontAwesomeIcon
                      className=' rounded-full mx-6 p-2 h-6 w-6  active:bg-gray-500'
                      icon={a.icon} />
                      <div className='text-[16px] text-gray-600 font-medium  text-center'>{a.name}</div>
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
        </div>)
      )}
    </>
  )
}

export default Sidebar
