import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import authService from '../service/authService';
import { Link } from 'react-router-dom';

const NavMenu = ({onShow,page}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  let user = authService.getUser();
  //console.log(user);
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="flex bg-white border px-4 pe-8 shadow-md  justify-between py-3 lg:px-6">
          <div>
            <div className='bg-white p-5 flex lg:hidden '>
              <button 
              onClick={onShow}
              className='mx-2 h-10 w-10 rounded-full text-center hover:bg-gray-100'
              >
                <FontAwesomeIcon className='text-xl   text-center  ' icon={faBars} />
              </button>
              <h5 className='text-xl'>AiSensy</h5>
            </div>
            <h3 className='text-xl hidden lg:block p-5'>{page}</h3>
          </div>
          <div className='p-5'>
            <button onClick={handleClick}>
                <span className='rounded-full border font-medium bg-slate-200 mx-1 uppercase p-2 text-lg '>{user?.name.slice(0,2)}</span>
               
            </button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <Link to='/profilesettings'>
                <MenuItem onClick={handleClose}>My Profile</MenuItem>
              </Link>
              <Link to='/user/subscription'>
                <MenuItem onClick={handleClose}>Subscription</MenuItem>
              </Link>
              <Link to='/user/support'>
                <MenuItem onClick={handleClose}>Support</MenuItem>
              </Link>
              <Link to='/logout'>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Link>
             
            </Menu>
        </div>
      </div>
  )
}

export default NavMenu
