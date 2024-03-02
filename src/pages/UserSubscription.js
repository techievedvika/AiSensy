import React, { useEffect, useState } from 'react'
import NavMenu from '../components/NavMenu'
import Sidebar from '../components/Sidebar'
import httpReq from '../service/httpReq';
import { faCheck, faCircleCheck, faCirclePlay, faCirclePlus, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import authService from '../service/authService';

const UserSubscription = ({show,onShow,onClose,lgScreen}) => {

    const[plans,setPlans]=useState([]);
    const[selPlan,setSelplan]=useState('basic');
    const user = authService.getUser();

    const fetchData = async()=>{
        try{
            let response = await httpReq.get('/plans');
            console.log(response);
            if(response.status===200){
                setPlans(response.data);
            }
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        fetchData();
    },[]);
  return (
    <div className="grid grid-flow-row-dense grid-cols-12 ">
        <Sidebar 
              show={show}
              handleClose={onClose}
              lgScreen={lgScreen}
            />
          <div className={` lg:ms-64 lg:relative col-span-12 border ${show && 'hidden'}`}>
                <NavMenu
                    onShow={onShow}
                    page={'Subscription'}
                />
            
            <div className="bg-[#f7f7f7]  flex flex-col h-full items-center     gap-4 w-full p-6 lg:px-10 ">
                <div className='my-6  flex  w-full gap-4 h-full'>
                    {plans.length>0 && plans.map((a,ind)=>(
                        <div key={ind} className='bg-white py-2 text-center lg:text-lg w-1/3 px-3 border lg:px-5 col-span-2'>
                            <h3 className='text-2xl my-2 '>{a.name}</h3>
                            <h3 className='text-xl font-medium '>Rs {a.price}</h3>
                            <h5 className='text-slate-500 text-sm mb-6'>{a.duration==='Monthly' ? 'Per Month':'Per Year'}</h5>
                            <hr/>
                            <div className='text-slate-500 mb-6 text-start text-sm lg:text-base font-medium text-wrap'>
                                <p className='mt-6 my-1.5'>
                                <FontAwesomeIcon className='mx-1' icon={faCircleCheck} style={{color: "#63E6BE",}} />
                                    Message limit {`(${a.messages})`}
                                </p>
                                <p className='my-1.5'>
                                <FontAwesomeIcon className='mx-1' icon={faCircleCheck} style={{color: "#63E6BE",}} />
                                Contacts limit {`(${a.contacts})`}</p>
                                <p className='my-1.5'>
                                <FontAwesomeIcon className='mx-1' icon={faCircleCheck} style={{color: "#63E6BE",}} />
                                Template limit {`(${a.templates})`}</p>
                                <p className='my-1.5'>
                                {
                                    a.chatBot==='yes' 
                                    ? 
                                    (
                                        <FontAwesomeIcon className='mx-1' icon={faCircleCheck} style={{color: "#63E6BE",}} />
                                    ) : (
                                        <FontAwesomeIcon className='mx-1' icon={faCircleXmark} style={{color: "#c71f1f",}} />
                                    )
                                }
                                ChatBot
                                </p>
                                <p className='my-1.5'>
                                {
                                    a.chatListAccess==='yes' 
                                    ? 
                                    (
                                        <FontAwesomeIcon className='mx-1' icon={faCircleCheck} style={{color: "#63E6BE",}} />
                                    ) : (
                                        <FontAwesomeIcon className='mx-1' icon={faCircleXmark} style={{color: "#c71f1f",}} />
                                    )
                                }
                                Chatlist Access
                                </p>
                                <p className='my-1.5'>
                                {
                                    a.groupListAccess==='ye' 
                                    ? 
                                    (
                                        <FontAwesomeIcon className='mx-1' icon={faCircleCheck} style={{color: "#63E6BE",}} />
                                    ) : (
                                        <FontAwesomeIcon className='mx-1' icon={faCircleXmark} style={{color: "#c71f1f",}} />
                                    )
                                }
                                Grouplist Access
                                </p>
                                <p className='my-1.5'>
                                {
                                    a.trial==='yes' 
                                    ? 
                                    (
                                        <FontAwesomeIcon className='mx-1' icon={faCircleCheck} style={{color: "#63E6BE",}} />
                                    ) : (
                                        <FontAwesomeIcon className='mx-1' icon={faCircleXmark} style={{color: "#c71f1f",}} />
                                    )
                                }
                                Trial
                                </p>
                                <p className='my-1.5'>
                                {
                                    a.featured==='ye' 
                                    ? 
                                    (
                                        <FontAwesomeIcon className='mx-1' icon={faCircleCheck} style={{color: "#63E6BE",}} />
                                    ) : (
                                        <FontAwesomeIcon className='mx-1' icon={faCircleXmark} style={{color: "#c71f1f",}} />
                                    )
                                }
                                Featured
                                </p>
                            </div>
                            <hr/>
                            <div className='relative top-10'>
                                <button onClick={()=>setSelplan(a.name)} className='bg-[#f0f0f0] hover:bg-gray-200 rounded-md py-2 border w-full'>
                                    {(selPlan===a.name) ? (
                                       <>
                                       <FontAwesomeIcon className='mx-1 text-xl relative top-[1px]' icon={faCheck} style={{color: "#0a474c",}} />
                                       </>
                                    ):(
                                        <>
                                            <FontAwesomeIcon className='text-xl mx-1.5 relative top-[1px]' icon={faCirclePlus} style={{color: "#0a474c",}} />
                                            Subscribe
                                        </>
                                    ) }
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserSubscription
