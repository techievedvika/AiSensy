import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const SubsPlans = () => {
    const [showQues,setShowQues] = useState([]);
    const plans = [
        {
            name:'Basic',
            tag1:'Unlimited Users',
            price:'999',
            tag2:'1000 Free Service Conversations/month',
            details:[
                'Unlimited Agent Logins','Smart Audience Segregation','Broadcasting & Retargeting','Template Message APIs','Multi-Agent Live Chat'
            ]
        },
        {
            name:'Pro',
            tag1:'Unlimited Users',
            price:'2399',
            tag2:'1000 Free Service Conversations/month',
            details:[
                'All features in Basic Plan','Upto 100 Tags','Template Message APIs','Upto 20 Custom Attributes'
            ]
        },
        {
            name:'Enterprise',
            tag1:'Unlimited Users',
            price:'4299',
            tag2:'1000 Free Service Conversations/month',
            details:[
                'All features in Basic Plan','Multi-Agent Live Chat','Upto 100 Tags','Template Message APIs','Upto 20 Custom Attributes'
            ]
        }
    ];
    const wpricing = [
        {
            url:'https://unicorn-cdn.b-cdn.net/e792b864-cee4-4b94-a6bd-7edbac776c4b/broad.png?width=100&height=100',
            name:'MARKETING',
            details:'Product updates, special offers, general advertisements, or promotional messages '
        },
        {
            url:'https://unicorn-cdn.b-cdn.net/9938a898-3be8-40c9-a9e0-6da21fa4478b/util.png?width=100&height=100',
            name:'UTILITY',
            details:' Transactional messages like delivery updates or pay confirmation '
        },
        {
            url:'https://unicorn-cdn.b-cdn.net/f058009a-87cc-4813-a698-627b12aefabc/auth.png?width=100&height=100',
            name:'AUTHENTICATION',
            details:' OTP messages such as account registration, account recovery, and integrity challenges. '
        },
        {
            url:'https://unicorn-cdn.b-cdn.net/9e3bbcda-a69e-4a10-8618-dec60aebadaf/serv.png?width=100&height=100',
            name:'SERVICE',
            details:'Messages related to personalised customer support, addressing queries. '
        },
    ];
    const qans = [
        {
            ques:'What does Unlimited Users mean?',
            ans:'Unlimited User means that there is no limit on the number of Monthly Active Users (MAUs) you can connect with in a month. Be it a thousand users, hundred thousand users, or a million users - you can connect with as many users as you want! You will just need to pay for the WhatsApp Conversation Charges after 1000 Free Conversations per month along with the Subscription fee.'
        },
        {
            ques:'Is it a Pre-paid Billing or Post-paid?',
            ans:'All billings are pre-paid.'
        },
        {
            ques:'Are WhatsApp Conversations managed separately?',
            ans:'Yes, WhatsApp Conversation Credits are recharged and managed Separately.'
        },
        {
            ques:'What is a Customer Service Window / Session Window?',
            ans:'A Messaging session window starts when a user sends your Whatsapp Business Number a message and lasts for 24 hours from the most recently received message. You can intervene/respond with ANY kind of message within these 24 hours. '
        },
        {
            ques:'How many Contacts Can I Import',
            ans:'You can Import Unlimited Contacts to the AiSensy Dashboard. You are only charged for the WhatsApp Conversations you initiate with a user.'
        },
        {
            ques:'How do Upgrade or Downgrade work?',
            ans:'Upgrades and Downgrades work on a pro-rata basis.'
        },
    ];
    const features = [
        {
            name:'Customer Support',
            details:[
                'FREE WhatsApp Business API','Multiple Human Agent Live Chat','One Click Dialogflow Integration','Unlimited Live Chat Agent Dashboards','No-Code Chatbot Templates','Mobile Responsive Dashboard','Web & Mobile Push Notifications'
            ]
        },
        {
            name:'Broadcasting & Automation',
            details:[
                'Unlimited Broadcasting Campaigns','Template Message Approvals','Automate Notifications via API','WhatsApp Retargeting Campaigns','Real-Time Campaign Analytics','Smart Audience Segmentation'
            ]
        },
        {
            name:'Chat CRM & More',
            details:[
                'Import and Export Contacts','Track Customer Journey','Add Tags & Attributes','Shopify & WooCommerce Integration','Zapier and Pabbly Integration','Shared Team Inbox'
            ]
        }
    ]
    const handleShow = (ind)=>{
        let qArr = [...showQues]; 
        let findInd = qArr.findIndex((a)=>a===ind);    
        if(findInd>=0){
           qArr.splice(findInd,1);
        }else{
            qArr.push(ind);
        }
        console.log(qArr);
        setShowQues(qArr);
    }
  return (
    <div>
      <Navbar/>
      <div>
      <div className='my-10'>
        <h2 className='mt-10 font-bold text-3xl text-center'>AiSensy Platform Pricing Plans</h2>
        <h5 className='text-slate-500 text-center my-3 text-md'>Monthly / Yearly Subscription | Unlimited Users Plan</h5>
        {/* Pricing Plans */}
        <div className='flex flex-col my-24 gap-10 lg:flex-row items-center lg:items-stretch lg:justify-center   '>
            {plans.map((a,ind)=>(
                <div key={ind} className='flex lg:flex-col gap-5  '>
                    <Link to='signup'>
                        <div className=' rounded-lg min-w-[300px] border hover:shadow-xl hover:border-[#03cf65]  flex flex-col items-center p-3 shadow-lg px-10'>
                            <h5 className='font-bold text-2xl mt-4'>{a.name}</h5>
                            <p className='my-2 text-sm text-slate-500'>{a.tag1}</p>
                            <p className='text-sm  -translate-x-16 my-1  text-slate-400 font-bold'>&#8377;</p>
                            <p className='ms-8 text-5xl mb-2 -translate-y-3'>
                                {a.price} <span className='text-sm text-slate-400 font-bold'>/month</span>
                            </p>
                            <p className='text-sm max-w-32 my-4 text-slate-500'>{a.tag2}</p>  
                        <div className='flex justify-center'>
                                <button className='my-4 p-2 hover:text-white hover:bg-[#03cf65] border-2 font-semibold text-[#03cf65] rounded-md border-[#03cf65]'>Start 14-Day FREE Trial</button>
                        </div>
                        </div>
                    </Link>
                    <div className=''>
                        <ul>
                            {a.details.map((d,ind)=>(
                                <li key={ind} className='my-3'>
                                    <FontAwesomeIcon className='mx-2 font-semibold' icon={faCheck} style={{color: "#63E6BE",}} />
                                {d}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}     
        </div>
        <div className='bg-[#303030] flex lg:justify-normal justify-center p-5 py-8'>
            <div className='flex flex-col lg:flex-row lg:mx-24 lg:w-full lg:justify-between'>
                <div>
                    <p className='text-slate-50 text-center opacity-50 font-semibold text-lg tracking-tight'>
                    Unlock 5 Flows @ ₹ 1,999/ month
                    </p>
                    <p className=' text-white text-center max-w-80 my-2 text-xl font-semibold'>
                    (Add-on) Drag & Drop Chatbot & Catalogue Flow Builder. Create 5 Chatbots simultaneously @ ₹ 1,999/ month
                    </p>
                </div>
                <div className='flex justify-center lg:items-center my-6 lg:my-1'>
                    <button className='border-2 border-white text-white font-semibold rounded-md p-2 transform hover:translate-y-px ease-out shadow-sm shadow-white'>Learn more</button>
                </div>
            </div>
        </div>
        {/* Conversation based pricing */}
        <div className='text-center w-full py-8 flex flex-col  my-6 '>
            <h3 className='font-bold text-3xl my-6 self-center max-w-96'>WhatsApp's Conversation Based Pricing</h3>
            <div className='text-start p-4 px-8 lg:px-24'>
                <p className='max-w-[400px] my-2 text-gray-600'>WhatsApp Conversation is a 24-hour messaging window initiated only when a business messages a user.</p>
                <p className='max-w-[400px] my-2 text-gray-600'>Businesses and users can exchange any number of messages, including template messages, within a 24 hour conversation session without incurring additional charges. </p>
                <ul>
                    <li className='max-w-[400px] list-disc list-green-500  my-2 text-green-600'>
                        <span className='text-gray-600'>
                        WhatsApp Conversations are Charged depending on the category of Template message & vary as per the receiver's country.
                        </span> 
                    </li>
                    <li className='max-w-[400px] list-disc list-green-500  my-2 text-green-600'>
                        <span className='text-gray-600'>
                        Conversations costs(applicable for Indian numbers) -<span className='font-bold'>₹0.81/ Marketing Conversation ₹0.35/ Authentication Conversation ₹0.35/ Utility Conversation ₹0.35/ Service Conversation</span>
                        </span> 
                    </li>
                    <li className='max-w-[400px] list-disc list-green-500  my-2 text-green-600'>
                        <span className='text-gray-600'>
                        The above Prices are for Sending Conversations in India
                        </span> 
                    </li>
                    <li className='max-w-[400px] list-disc list-green-500  my-2 text-green-600'>
                        <span className='text-gray-600'>
                        All conversations are valid only in a 24 hour period
                        </span> 
                    </li>
                    <li className='max-w-[400px] list-disc list-green-500  my-2 text-green-600'>
                        <span className='text-gray-600'>
                        1000 FREE Conversations/ month (User-initiated conversations)
                        </span> 
                    </li>
                    <li className='max-w-[400px] list-disc list-green-500  my-2 text-green-600'>
                        <span className='text-gray-600'>
                        All above pricing mentioned is exclusive of GST
                        </span> 
                    </li>
                </ul>
            </div>
        </div>
        {/* WhatsApp Pricing */}
        <div className='my-8 flex flex-col items-center'>
            <h2 className='mt-10 font-bold text-3xl text-center'>WhatsApp Pricing</h2>
            <h5 className='text-slate-500 text-center my-3  max-w-96'> WhatsApp pricing has been categorized into 4 different categories including:</h5>
            <div className='grid lg:mx-24 my-6 mx-16 lg:grid-cols-4 grid-cols-2 gap-3'>  
                { wpricing.map((a,ind)=>(
                    <div  className='border flex flex-col items-center shadow-lg rounded-md p-5 lg:px-3 lg:py-8' key={ind}>
                        <img alt='img' src={a.url}/>
                        <h3 className='font-semibold my-4 text-gray-700'>{a.name}</h3>
                        <p className='text-center lg:max-w-40 lg:mx-12 text-gray-600 text-sm my-2'>{a.details}</p>
                    </div>
                ))}
            </div>
        </div>
        {/* QNA */}
        <div className='flex flex-col items-center  my-8 w-full gap-8'>
            <h3 className='font-bold text-3xl my-6 text-center max-w-96'>We Have Answered Almost All Your Questions</h3>
            { qans.map((a,ind)=>(
                <div onClick={()=>handleShow(ind)} key={ind} className='border-2 border-slate-300 transition duration-150 ease-in  hover:border-[#03cf65] rounded-md py-5 px-6 lg:px-12 my-1 lg:w-2/3 w-5/6'>
                    <div className='flex justify-between'>
                        <h5 className='font-bold'>{a.ques}</h5>
                        <button onClick={()=>handleShow(ind)}>
                            <FontAwesomeIcon icon={showQues.includes(ind) ? faChevronUp : faChevronDown} />
                        </button>
                    </div>
                    {(showQues.includes(ind)) && <p className='my-1.5 text-gray-600'>{a.ans}</p>}
                </div>
            ))}
        </div>
        {/* All Plans features */}
        <div className='my-12 w-full flex flex-col items-center mb-16'>
            <h3 className='font-bold text-3xl my-6  text-center max-w-96'>Features Included in ALL PLANS</h3>
            <div className='flex flex-col lg:flex-row lg:justify-center gap-8 lg:gap-12'>
                {features.map((a,ind)=>(
                    <div className='' key={ind}>
                        <h5 className='font-bold text-2xl my-6 lg:text-center '>{a.name}</h5>
                     
                            {a.details.map((d)=>(
                                <p key={d} className='my-3 '>
                                    <FontAwesomeIcon className='mx-2  font-semibold' icon={faCheck} style={{color: "#63E6BE",}} />
                                    <span className='text-gray-600  text-lg my-3 '>{d}</span>
                                </p>
                            ))}
                   
                    </div>
                ))}
            </div>
        </div>
      </div>
        <Footer/>
      </div>
    </div>
  )
}

export default SubsPlans
