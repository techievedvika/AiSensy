import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div>
      <div>
        <div className="grid lg:grid-cols-2">
          <div className="hidden lg:block bg-contain bg-[#ebf5f3] py-8 px-12  ">
            <Link to="/" className="">
              <img
                className="max-h-12  transition duration-150 hover:ease-out hover:opacity-85 "
                src="https://www.app.aisensy.com/static/media/full_logo.5c8cd2004689fd2d18de.png"
                alt="logo"
              />
            </Link>
            <div className="text-3xl font-bold tracking-wider text-center m-6">
              Send personalized campaigns on WhatsApp
            </div>
            <img src="https://www.app.aisensy.com/static/media/store-01.177d4d436865e0fc95ae.png" />
          </div>
          <div className='px-10'>
              <div className="py-6 lg:py-8 flex flex-col ">
                <Link to="/" className="lg:hidden">
                  <img
                    className="max-h-10  transition duration-150 hover:ease-out hover:opacity-85 "
                    src="https://unicorn-cdn.b-cdn.net/67244a6e-1849-42d1-ae59-0afc5948afa8/aisensy---whatsapp-marketing-platform-logo.png"
                    alt="logo"
                  />
                </Link>
                <div className='text-right text-slate-500'>Not a member yet ? 
                  <Link className='text-blue-800' to='/pricing'>Sign up</Link>
                </div>
                <div className='px-16 py-5'>
                  <h4 className='text-md my-2 mt-5 text-slate-500'>WELCOME BACK</h4>
                  <h3 className='text-3xl tracking-wide font-semibold'>Log in to AiSensy</h3>
                  <button className='text-center text-white font-bold tracking-tight hover:bg-blue-600 w-full py-3 my-4 mt-14 rounded-md bg-[#4285f4]'>
                    <FontAwesomeIcon className='text-2xl align-text-bottom mx-2' icon={faGooglePlusG} />
                    Continue with Google
                  </button>
                <div className='grid grid-cols-5 my-2'>
                    <hr/>
                    <hr/>
                    <span className='text-center pb-2'>OR</span>
                    <hr/>
                    <hr/>
                </div>
                  <LoginForm/>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Login
