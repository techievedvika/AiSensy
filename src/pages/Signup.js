import { faGooglePlus, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import SignupForm from '../components/SignupForm'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
      <div>
        <div className="grid lg:grid-cols-2">
          <div className=" hidden lg:block bg-contain bg-[#ebf5f3] py-8 px-12  ">
            <Link to="/" className="">
              <img
                className="max-h-12 my-6  transition duration-150 hover:ease-out hover:opacity-85 "
                src="https://www.app.aisensy.com/static/media/full_logo.5c8cd2004689fd2d18de.png"
                alt="logo"
              />
            </Link>
            <div className='my-16'>
                  <div className="text-3xl font-semibold tracking-wide  m-6">
                    Start your 14 day FREE Trial Now
                  </div>
                  <ul>
                    <li className='flex my-4'>
                        <span>
                            <img className='max-w-6 mx-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////j+u1M3I8b0nHM9t9e4Jsy139r4qOJ6LUc03IIz2UJz2ZL3I4w1n4P0Gkn1Xiy8M+A56/7/v3S9uOt78wl1XcL0Gd45Kqv8M73/fsd03Ku78yn7sgM0Gh+5q/H9NzB89gx134Q0GrK9d6W674x2H8Q0Wqj7cap7skS0WuN6biI6LVN3JC58dSR6rqs78vF9NsO0Gm18dF25Koc03Hk+u412IHx/Pc52YTv/PX+//5f4Jtx46Yn1Xm08dAp1XpH24zT9+Sw8M7U9+Qm1Xiz8NCB57Ez14Bs4qOK6LYx1n4AAACP2WgDAAAAOHRSTlMATdb4gW/TuISh3MXs961E/nMi3/s/HqPp/d442yY92vqr6sOigNVMf4XEbjx06N2fFNlt0rfrS1Y0fKcAAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5AweBwoiHveBcgAAAaJJREFUOMt1k+VDAkEUxFdRFBMVA7vFbh0DY1FBwEDFblHs7ta/3L292oNzvlz85u7tvp1HiEEJiZYk8o+SrSmpNjClpWdkZsXzbLsEBwaHhqUrcmJ5bh7cI6Nj45R6JianvHDki7SgsAjwUUHTgLO4RDMUwh8IzoiG2bn5EEo1Q5F/gcbJE3Jo9RGgJppHmczLK7BoZphDJd9Lsh0+Q326tMQv4WWgihmscBu/XAFW5TsvMpkhBWuxXHWso5oZUjEq8g3eSGxK91uoYYZajMloe2d3j+7LHAfSmwjS2PlhYFzmh+zPRwqPyq04Rh1JRIQ/nJxCV1CpNwQLqVcMZwKPqgs6Z4YGXPASl1fx3DMMFyE2ZZHXNzH/VxZJGtVtKg6ds202GRolOW6jOqdTvFFW3FHNcXsvNu2Bt7rZjkf1sJ6eBRxmseLhbakQ64rH7WhVA/NiZniFFtw288g5xdC+Bd9FGj57DaFdj31HMfAhGj5Z7Nv12DN1dsH99f0jDU7kdz12cHh0nVIbLyL/jR4h3T29yvA29ZkNr6z+eovL+OYPuam/Kb9sCC0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTItMzBUMDc6MTA6MzQrMDA6MDCI6PqpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTEyLTMwVDA3OjEwOjM0KzAwOjAw+bVCFQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=" />
                        </span>
                        FREE WhatsApp Business API Verification
                    </li>
                    <li className='flex my-4'>
                        <span>
                            <img className='max-w-6 mx-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////j+u1M3I8b0nHM9t9e4Jsy139r4qOJ6LUc03IIz2UJz2ZL3I4w1n4P0Gkn1Xiy8M+A56/7/v3S9uOt78wl1XcL0Gd45Kqv8M73/fsd03Ku78yn7sgM0Gh+5q/H9NzB89gx134Q0GrK9d6W674x2H8Q0Wqj7cap7skS0WuN6biI6LVN3JC58dSR6rqs78vF9NsO0Gm18dF25Koc03Hk+u412IHx/Pc52YTv/PX+//5f4Jtx46Yn1Xm08dAp1XpH24zT9+Sw8M7U9+Qm1Xiz8NCB57Ez14Bs4qOK6LYx1n4AAACP2WgDAAAAOHRSTlMATdb4gW/TuISh3MXs961E/nMi3/s/HqPp/d442yY92vqr6sOigNVMf4XEbjx06N2fFNlt0rfrS1Y0fKcAAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5AweBwoiHveBcgAAAaJJREFUOMt1k+VDAkEUxFdRFBMVA7vFbh0DY1FBwEDFblHs7ta/3L292oNzvlz85u7tvp1HiEEJiZYk8o+SrSmpNjClpWdkZsXzbLsEBwaHhqUrcmJ5bh7cI6Nj45R6JianvHDki7SgsAjwUUHTgLO4RDMUwh8IzoiG2bn5EEo1Q5F/gcbJE3Jo9RGgJppHmczLK7BoZphDJd9Lsh0+Q326tMQv4WWgihmscBu/XAFW5TsvMpkhBWuxXHWso5oZUjEq8g3eSGxK91uoYYZajMloe2d3j+7LHAfSmwjS2PlhYFzmh+zPRwqPyq04Rh1JRIQ/nJxCV1CpNwQLqVcMZwKPqgs6Z4YGXPASl1fx3DMMFyE2ZZHXNzH/VxZJGtVtKg6ds202GRolOW6jOqdTvFFW3FHNcXsvNu2Bt7rZjkf1sJ6eBRxmseLhbakQ64rH7WhVA/NiZniFFtw288g5xdC+Bd9FGj57DaFdj31HMfAhGj5Z7Nv12DN1dsH99f0jDU7kdz12cHh0nVIbLyL/jR4h3T29yvA29ZkNr6z+eovL+OYPuam/Kb9sCC0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTItMzBUMDc6MTA6MzQrMDA6MDCI6PqpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTEyLTMwVDA3OjEwOjM0KzAwOjAw+bVCFQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=" />
                        </span>
                        Unlimited Monthly Active Users on new plans
                    </li>
                    <li className='flex my-4'>
                        <span>
                            <img className='max-w-6 mx-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////j+u1M3I8b0nHM9t9e4Jsy139r4qOJ6LUc03IIz2UJz2ZL3I4w1n4P0Gkn1Xiy8M+A56/7/v3S9uOt78wl1XcL0Gd45Kqv8M73/fsd03Ku78yn7sgM0Gh+5q/H9NzB89gx134Q0GrK9d6W674x2H8Q0Wqj7cap7skS0WuN6biI6LVN3JC58dSR6rqs78vF9NsO0Gm18dF25Koc03Hk+u412IHx/Pc52YTv/PX+//5f4Jtx46Yn1Xm08dAp1XpH24zT9+Sw8M7U9+Qm1Xiz8NCB57Ez14Bs4qOK6LYx1n4AAACP2WgDAAAAOHRSTlMATdb4gW/TuISh3MXs961E/nMi3/s/HqPp/d442yY92vqr6sOigNVMf4XEbjx06N2fFNlt0rfrS1Y0fKcAAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5AweBwoiHveBcgAAAaJJREFUOMt1k+VDAkEUxFdRFBMVA7vFbh0DY1FBwEDFblHs7ta/3L292oNzvlz85u7tvp1HiEEJiZYk8o+SrSmpNjClpWdkZsXzbLsEBwaHhqUrcmJ5bh7cI6Nj45R6JianvHDki7SgsAjwUUHTgLO4RDMUwh8IzoiG2bn5EEo1Q5F/gcbJE3Jo9RGgJppHmczLK7BoZphDJd9Lsh0+Q326tMQv4WWgihmscBu/XAFW5TsvMpkhBWuxXHWso5oZUjEq8g3eSGxK91uoYYZajMloe2d3j+7LHAfSmwjS2PlhYFzmh+zPRwqPyq04Rh1JRIQ/nJxCV1CpNwQLqVcMZwKPqgs6Z4YGXPASl1fx3DMMFyE2ZZHXNzH/VxZJGtVtKg6ds202GRolOW6jOqdTvFFW3FHNcXsvNu2Bt7rZjkf1sJ6eBRxmseLhbakQ64rH7WhVA/NiZniFFtw288g5xdC+Bd9FGj57DaFdj31HMfAhGj5Z7Nv12DN1dsH99f0jDU7kdz12cHh0nVIbLyL/jR4h3T29yvA29ZkNr6z+eovL+OYPuam/Kb9sCC0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTItMzBUMDc6MTA6MzQrMDA6MDCI6PqpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTEyLTMwVDA3OjEwOjM0KzAwOjAw+bVCFQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=" />
                        </span>
                       1000 FREE conversations/month on all plans
                    </li>
                    <li className='flex my-4'>
                        <span>
                            <img className='max-w-6 mx-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////j+u1M3I8b0nHM9t9e4Jsy139r4qOJ6LUc03IIz2UJz2ZL3I4w1n4P0Gkn1Xiy8M+A56/7/v3S9uOt78wl1XcL0Gd45Kqv8M73/fsd03Ku78yn7sgM0Gh+5q/H9NzB89gx134Q0GrK9d6W674x2H8Q0Wqj7cap7skS0WuN6biI6LVN3JC58dSR6rqs78vF9NsO0Gm18dF25Koc03Hk+u412IHx/Pc52YTv/PX+//5f4Jtx46Yn1Xm08dAp1XpH24zT9+Sw8M7U9+Qm1Xiz8NCB57Ez14Bs4qOK6LYx1n4AAACP2WgDAAAAOHRSTlMATdb4gW/TuISh3MXs961E/nMi3/s/HqPp/d442yY92vqr6sOigNVMf4XEbjx06N2fFNlt0rfrS1Y0fKcAAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5AweBwoiHveBcgAAAaJJREFUOMt1k+VDAkEUxFdRFBMVA7vFbh0DY1FBwEDFblHs7ta/3L292oNzvlz85u7tvp1HiEEJiZYk8o+SrSmpNjClpWdkZsXzbLsEBwaHhqUrcmJ5bh7cI6Nj45R6JianvHDki7SgsAjwUUHTgLO4RDMUwh8IzoiG2bn5EEo1Q5F/gcbJE3Jo9RGgJppHmczLK7BoZphDJd9Lsh0+Q326tMQv4WWgihmscBu/XAFW5TsvMpkhBWuxXHWso5oZUjEq8g3eSGxK91uoYYZajMloe2d3j+7LHAfSmwjS2PlhYFzmh+zPRwqPyq04Rh1JRIQ/nJxCV1CpNwQLqVcMZwKPqgs6Z4YGXPASl1fx3DMMFyE2ZZHXNzH/VxZJGtVtKg6ds202GRolOW6jOqdTvFFW3FHNcXsvNu2Bt7rZjkf1sJ6eBRxmseLhbakQ64rH7WhVA/NiZniFFtw288g5xdC+Bd9FGj57DaFdj31HMfAhGj5Z7Nv12DN1dsH99f0jDU7kdz12cHh0nVIbLyL/jR4h3T29yvA29ZkNr6z+eovL+OYPuam/Kb9sCC0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTItMzBUMDc6MTA6MzQrMDA6MDCI6PqpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTEyLTMwVDA3OjEwOjM0KzAwOjAw+bVCFQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=" />
                        </span>
                       Acess all Basic Plan Features in your Free Trial
                    </li>
                  </ul>
            </div>
            <div className='flex flex-col justify-center items-center my-4'>
                <div className='text-lg text-slate-500 text-center'>Trusted by 15000+ Brands</div>
                <div className='flex justify-around gap-3 my-4 pb-16'>
                    <img className='max-w-24' src='https://www.app.aisensy.com/static/media/icon_physicswallah.a2235072a970aee25d2c.png'/>
                    <img className='max-w-24' src='https://www.app.aisensy.com/static/media/icon_rentomojo.8be7aa600859484203d4.png'/>
                    <img className='max-w-24' src='https://www.app.aisensy.com/static/media/icon_scullcandy.806291bf9cf62071043f.png'/>
                    <img className='max-w-24 max-h-6' src='https://www.app.aisensy.com/static/media/icon_vivo.c054741b472c761dc679.png'/>

                </div>
            </div>
          </div>
          <div className="px-10">
            <div className="py-6 lg:py-8 flex flex-col ">
              <Link to="/" className="lg:hidden">
                <img
                  className="max-h-10  transition duration-150 hover:ease-out hover:opacity-85 "
                  src="https://unicorn-cdn.b-cdn.net/67244a6e-1849-42d1-ae59-0afc5948afa8/aisensy---whatsapp-marketing-platform-logo.png"
                  alt="logo"
                />
              </Link>
              <div className="text-right text-slate-500">
                Already a member ? {' '} 
                <Link className="text-blue-800" to="/login">
                   Log in
                </Link>
              </div>
              <div className="px-16 py-8">
                <div className='hidden lg:block'>
                    <h3 className='text-3xl my-4 tracking-wide font-semibold'>Create Your AiSensy Account</h3>
                    <h5 className='text-slate-500 tracking-tight text-center '>Fill in the details below to start your 14 Day FREE trial.</h5>
                    <h5 className='text-slate-500 tracking-tight text-center '>No Credit Card Needed.</h5>
                </div>
                <div className='lg:hidden'>
                  <div className="text-xl font-bold tracking-wide  m-6">
                    Start your 14 day FREE Trial Now
                  </div>
                  <ul>
                    <li className='flex my-4'>
                        <span>
                            <img className='max-w-6 mx-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////j+u1M3I8b0nHM9t9e4Jsy139r4qOJ6LUc03IIz2UJz2ZL3I4w1n4P0Gkn1Xiy8M+A56/7/v3S9uOt78wl1XcL0Gd45Kqv8M73/fsd03Ku78yn7sgM0Gh+5q/H9NzB89gx134Q0GrK9d6W674x2H8Q0Wqj7cap7skS0WuN6biI6LVN3JC58dSR6rqs78vF9NsO0Gm18dF25Koc03Hk+u412IHx/Pc52YTv/PX+//5f4Jtx46Yn1Xm08dAp1XpH24zT9+Sw8M7U9+Qm1Xiz8NCB57Ez14Bs4qOK6LYx1n4AAACP2WgDAAAAOHRSTlMATdb4gW/TuISh3MXs961E/nMi3/s/HqPp/d442yY92vqr6sOigNVMf4XEbjx06N2fFNlt0rfrS1Y0fKcAAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5AweBwoiHveBcgAAAaJJREFUOMt1k+VDAkEUxFdRFBMVA7vFbh0DY1FBwEDFblHs7ta/3L292oNzvlz85u7tvp1HiEEJiZYk8o+SrSmpNjClpWdkZsXzbLsEBwaHhqUrcmJ5bh7cI6Nj45R6JianvHDki7SgsAjwUUHTgLO4RDMUwh8IzoiG2bn5EEo1Q5F/gcbJE3Jo9RGgJppHmczLK7BoZphDJd9Lsh0+Q326tMQv4WWgihmscBu/XAFW5TsvMpkhBWuxXHWso5oZUjEq8g3eSGxK91uoYYZajMloe2d3j+7LHAfSmwjS2PlhYFzmh+zPRwqPyq04Rh1JRIQ/nJxCV1CpNwQLqVcMZwKPqgs6Z4YGXPASl1fx3DMMFyE2ZZHXNzH/VxZJGtVtKg6ds202GRolOW6jOqdTvFFW3FHNcXsvNu2Bt7rZjkf1sJ6eBRxmseLhbakQ64rH7WhVA/NiZniFFtw288g5xdC+Bd9FGj57DaFdj31HMfAhGj5Z7Nv12DN1dsH99f0jDU7kdz12cHh0nVIbLyL/jR4h3T29yvA29ZkNr6z+eovL+OYPuam/Kb9sCC0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTItMzBUMDc6MTA6MzQrMDA6MDCI6PqpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTEyLTMwVDA3OjEwOjM0KzAwOjAw+bVCFQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=" />
                        </span>
                        FREE WhatsApp Business API Verification
                    </li>
                    <li className='flex my-4'>
                        <span>
                            <img className='max-w-6 mx-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////j+u1M3I8b0nHM9t9e4Jsy139r4qOJ6LUc03IIz2UJz2ZL3I4w1n4P0Gkn1Xiy8M+A56/7/v3S9uOt78wl1XcL0Gd45Kqv8M73/fsd03Ku78yn7sgM0Gh+5q/H9NzB89gx134Q0GrK9d6W674x2H8Q0Wqj7cap7skS0WuN6biI6LVN3JC58dSR6rqs78vF9NsO0Gm18dF25Koc03Hk+u412IHx/Pc52YTv/PX+//5f4Jtx46Yn1Xm08dAp1XpH24zT9+Sw8M7U9+Qm1Xiz8NCB57Ez14Bs4qOK6LYx1n4AAACP2WgDAAAAOHRSTlMATdb4gW/TuISh3MXs961E/nMi3/s/HqPp/d442yY92vqr6sOigNVMf4XEbjx06N2fFNlt0rfrS1Y0fKcAAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5AweBwoiHveBcgAAAaJJREFUOMt1k+VDAkEUxFdRFBMVA7vFbh0DY1FBwEDFblHs7ta/3L292oNzvlz85u7tvp1HiEEJiZYk8o+SrSmpNjClpWdkZsXzbLsEBwaHhqUrcmJ5bh7cI6Nj45R6JianvHDki7SgsAjwUUHTgLO4RDMUwh8IzoiG2bn5EEo1Q5F/gcbJE3Jo9RGgJppHmczLK7BoZphDJd9Lsh0+Q326tMQv4WWgihmscBu/XAFW5TsvMpkhBWuxXHWso5oZUjEq8g3eSGxK91uoYYZajMloe2d3j+7LHAfSmwjS2PlhYFzmh+zPRwqPyq04Rh1JRIQ/nJxCV1CpNwQLqVcMZwKPqgs6Z4YGXPASl1fx3DMMFyE2ZZHXNzH/VxZJGtVtKg6ds202GRolOW6jOqdTvFFW3FHNcXsvNu2Bt7rZjkf1sJ6eBRxmseLhbakQ64rH7WhVA/NiZniFFtw288g5xdC+Bd9FGj57DaFdj31HMfAhGj5Z7Nv12DN1dsH99f0jDU7kdz12cHh0nVIbLyL/jR4h3T29yvA29ZkNr6z+eovL+OYPuam/Kb9sCC0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTItMzBUMDc6MTA6MzQrMDA6MDCI6PqpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTEyLTMwVDA3OjEwOjM0KzAwOjAw+bVCFQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=" />
                        </span>
                        Unlimited Monthly Active Users on new plans
                    </li>
                    <li className='flex my-4'>
                        <span>
                            <img className='max-w-6 mx-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////j+u1M3I8b0nHM9t9e4Jsy139r4qOJ6LUc03IIz2UJz2ZL3I4w1n4P0Gkn1Xiy8M+A56/7/v3S9uOt78wl1XcL0Gd45Kqv8M73/fsd03Ku78yn7sgM0Gh+5q/H9NzB89gx134Q0GrK9d6W674x2H8Q0Wqj7cap7skS0WuN6biI6LVN3JC58dSR6rqs78vF9NsO0Gm18dF25Koc03Hk+u412IHx/Pc52YTv/PX+//5f4Jtx46Yn1Xm08dAp1XpH24zT9+Sw8M7U9+Qm1Xiz8NCB57Ez14Bs4qOK6LYx1n4AAACP2WgDAAAAOHRSTlMATdb4gW/TuISh3MXs961E/nMi3/s/HqPp/d442yY92vqr6sOigNVMf4XEbjx06N2fFNlt0rfrS1Y0fKcAAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5AweBwoiHveBcgAAAaJJREFUOMt1k+VDAkEUxFdRFBMVA7vFbh0DY1FBwEDFblHs7ta/3L292oNzvlz85u7tvp1HiEEJiZYk8o+SrSmpNjClpWdkZsXzbLsEBwaHhqUrcmJ5bh7cI6Nj45R6JianvHDki7SgsAjwUUHTgLO4RDMUwh8IzoiG2bn5EEo1Q5F/gcbJE3Jo9RGgJppHmczLK7BoZphDJd9Lsh0+Q326tMQv4WWgihmscBu/XAFW5TsvMpkhBWuxXHWso5oZUjEq8g3eSGxK91uoYYZajMloe2d3j+7LHAfSmwjS2PlhYFzmh+zPRwqPyq04Rh1JRIQ/nJxCV1CpNwQLqVcMZwKPqgs6Z4YGXPASl1fx3DMMFyE2ZZHXNzH/VxZJGtVtKg6ds202GRolOW6jOqdTvFFW3FHNcXsvNu2Bt7rZjkf1sJ6eBRxmseLhbakQ64rH7WhVA/NiZniFFtw288g5xdC+Bd9FGj57DaFdj31HMfAhGj5Z7Nv12DN1dsH99f0jDU7kdz12cHh0nVIbLyL/jR4h3T29yvA29ZkNr6z+eovL+OYPuam/Kb9sCC0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTItMzBUMDc6MTA6MzQrMDA6MDCI6PqpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTEyLTMwVDA3OjEwOjM0KzAwOjAw+bVCFQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=" />
                        </span>
                       1000 FREE conversations/month on all plans
                    </li>
                    <li className='flex my-4'>
                        <span>
                            <img className='max-w-6 mx-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////j+u1M3I8b0nHM9t9e4Jsy139r4qOJ6LUc03IIz2UJz2ZL3I4w1n4P0Gkn1Xiy8M+A56/7/v3S9uOt78wl1XcL0Gd45Kqv8M73/fsd03Ku78yn7sgM0Gh+5q/H9NzB89gx134Q0GrK9d6W674x2H8Q0Wqj7cap7skS0WuN6biI6LVN3JC58dSR6rqs78vF9NsO0Gm18dF25Koc03Hk+u412IHx/Pc52YTv/PX+//5f4Jtx46Yn1Xm08dAp1XpH24zT9+Sw8M7U9+Qm1Xiz8NCB57Ez14Bs4qOK6LYx1n4AAACP2WgDAAAAOHRSTlMATdb4gW/TuISh3MXs961E/nMi3/s/HqPp/d442yY92vqr6sOigNVMf4XEbjx06N2fFNlt0rfrS1Y0fKcAAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5AweBwoiHveBcgAAAaJJREFUOMt1k+VDAkEUxFdRFBMVA7vFbh0DY1FBwEDFblHs7ta/3L292oNzvlz85u7tvp1HiEEJiZYk8o+SrSmpNjClpWdkZsXzbLsEBwaHhqUrcmJ5bh7cI6Nj45R6JianvHDki7SgsAjwUUHTgLO4RDMUwh8IzoiG2bn5EEo1Q5F/gcbJE3Jo9RGgJppHmczLK7BoZphDJd9Lsh0+Q326tMQv4WWgihmscBu/XAFW5TsvMpkhBWuxXHWso5oZUjEq8g3eSGxK91uoYYZajMloe2d3j+7LHAfSmwjS2PlhYFzmh+zPRwqPyq04Rh1JRIQ/nJxCV1CpNwQLqVcMZwKPqgs6Z4YGXPASl1fx3DMMFyE2ZZHXNzH/VxZJGtVtKg6ds202GRolOW6jOqdTvFFW3FHNcXsvNu2Bt7rZjkf1sJ6eBRxmseLhbakQ64rH7WhVA/NiZniFFtw288g5xdC+Bd9FGj57DaFdj31HMfAhGj5Z7Nv12DN1dsH99f0jDU7kdz12cHh0nVIbLyL/jR4h3T29yvA29ZkNr6z+eovL+OYPuam/Kb9sCC0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTItMzBUMDc6MTA6MzQrMDA6MDCI6PqpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTEyLTMwVDA3OjEwOjM0KzAwOjAw+bVCFQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=" />
                        </span>
                       Acess all Basic Plan Features in your Free Trial
                    </li>
                  </ul>
                </div>
                <button className="text-center text-white font-bold tracking-tight hover:bg-blue-600 w-full py-3 my-4 mt-14 rounded-md bg-[#4285f4]">
                  <FontAwesomeIcon
                    className="text-2xl align-text-bottom mx-2"
                    icon={faGooglePlusG}
                  />
                  Signup with Google
                </button>
                <div className="grid grid-cols-5 my-2">
                  <hr />
                  <hr />
                  <span className="text-center pb-2">OR</span>
                  <hr />
                  <hr />
                </div>
                <SignupForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup
