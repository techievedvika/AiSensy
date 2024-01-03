import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <>
        <Navbar/>
        <div className='home pt-16'>
            <div className='content-container grid lg:grid-cols-2 '>
                <div className='left'>
                    <div className='   px-8'>    
                        <h1 className='text-5xl px-4 leading-normal font-bold  text-center text-slate-800 '>
                            Your Complete WhatsApp Marketing Platform
                        </h1>
                    </div>
                    <div className='text-center mt-2'>
                        <div className='font-bold text-xl'>Business drive 25-60% Revenues using AiSensy</div>
                        <ul className=' list-disc text-lg'>
                            <li>Broadcast Promotional Offers to Unlimited Users</li>
                            <li>Sell your Products on WhatsApp using Catalogs</li>
                            <li>Automate Messages via Integrations</li>
                            <li>Enable Multi-Agent Live Chat for Customer Support</li>
                            <li>Build Chatbots & Solve for 24 x 7 Support & Engagement</li>
                        </ul>
                        <div className='text-lg'>Powered by <span className='font-bold'>Official WhatsApp Business API</span></div>
                        <button className='border py-2 px-3 mt-4 text-white transition duration-150 hover:ease-in hover:-translate-y-px bg-green-500 font-semibold rounded m-1'>Start 14-Day Free Trial</button>
                        <button className='border-2  border-black p-2 transition duration-150 hover:ease-in hover:-translate-y-px text-center rounded m-1 font-semibold'>Join Live Demo</button>
                        <div className='my-2 text-sm text-slate-500 '>No Credit Card Needed</div>
                    </div>
                </div>
                <div className='right'>
                    <img alt='img' className='lg:mt-24' src='https://unicorn-cdn.b-cdn.net/ffa5f423-330f-4d27-b9d4-d78d221b3647/aisensy-whatsapp-api-integrations.png?width=620&height=433'/>
                </div>
            </div>
            <div className='section text-center'>
                <div className='font-bold text-3xl text-center leading-3 my-8'>Founders & Marketers Love Us</div>
                <div className='text-lg text-slate-800 my-2 '>Join thousands of AiSensy Business Today</div>
                <div className='flex justify-center'>

                    <div className='grid grid-cols-3 justify-around gap-2 lg:grid-cols-5 self-center px-12'>
                        <Link to='/'>
                            <img className='max-h-16 max-w-24' src='https://unicorn-cdn.b-cdn.net/740001d6-e384-44a4-a0d1-e2a4302375ad/cosco.png'/>
                        </Link>
                        <Link to='/'>
                            <img className='max-h-16 max-w-28' src='https://unicorn-cdn.b-cdn.net/b52c0b16-53ae-4805-811e-bd3d75b28fbc/-/crop/2433x715/0,258/-/preview/skullcandy-logo.png'/>
                        </Link>
                        <Link to='/'>
                            <img className='max-h-12 max-w-20' src='https://unicorn-cdn.b-cdn.net/0f518097-daba-4a36-948a-feb12fb0e866/2560px-vivo-logo-2019.svg.png'/>
                        </Link>
                        <Link to='/'>
                            <img className='max-h-12 max-w-20' src='https://unicorn-cdn.b-cdn.net/f2fdb291-9707-49af-b1cb-a75772d6b355/bsc-logo-155x.png'/>
                        </Link>
                        <Link to='/'>
                            <img className='max-h-12 max-w-20' src='https://unicorn-cdn.b-cdn.net/37e02314-377b-417a-8e5a-8b5da441a51c/nmims-university-logo-(2)-(1).png'/>
                        </Link>
                        <Link to='/'>
                            <img className='max-h-12 max-w-20' src='https://unicorn-cdn.b-cdn.net/651167a1-6c5e-4486-a5ff-ee749b2c3c6b/download-(2).png'/>
                        </Link>
                        <Link to='/'>
                            <img className='max-h-12 max-w-20' src='https://unicorn-cdn.b-cdn.net/bedd7212-5949-4834-8f64-d94b6de3fc72/rentomojo-logo.png'/>
                        </Link>
                        <Link to='/'>
                            <img className='max-h-12 max-w-20' src='https://unicorn-cdn.b-cdn.net/c988bf13-03d7-4733-8218-2703bdfd8e86/-/crop/900x135/0,369/-/preview/tata-motorfinance.png'/>
                        </Link>
                        <Link to='/'>
                            <img className='max-h-12 max-w-20' src='https://unicorn-cdn.b-cdn.net/db1aed86-0976-47bb-a5ad-8ec3d446f216/image.png?width=81&height=34'/>
                        </Link>
                        <Link to='/'>
                            <img className='max-h-12 max-w-20' src='https://unicorn-cdn.b-cdn.net/91ed2ee3-ee55-404a-b96d-84e962e55f5b/quikr.png?width=73&height=28'/>
                        </Link>
                        <Link to='/'>
                            <img className='max-h-12 max-w-20' src='https://unicorn-cdn.b-cdn.net/2d4bdf49-94dd-4a86-a73d-5bd5cf3b1132/isckon-1.png?width=47&height=43'/>
                        </Link>
                        <Link to='/'>
                            <img className='max-h-12 max-w-20' src='https://unicorn-cdn.b-cdn.net/8175f95a-70b3-442d-96c8-4b0ddf7e72d7/image-216.png?width=60&height=60'/>
                        </Link>
                        <Link to='/'>
                            <img className='max-h-12 max-w-20' src='https://unicorn-cdn.b-cdn.net/3b9e28de-f8ff-42ac-b269-e394ec671d7a/upgrad-1.png?width=88&height=22'/>
                        </Link>
                        <Link to='/'>
                            <img className='max-h-12 max-w-20' src='https://unicorn-cdn.b-cdn.net/7bd8d414-ce15-4d8c-9c7a-4de63629ece5/image-143.png?width=101&height=26'/>
                        </Link>
                        <Link to='/'>
                            <img className='max-h-12 max-w-20' src='https://unicorn-cdn.b-cdn.net/9b15e1e6-e98b-4d15-85a9-d5e91cc2fabb/sibmb1-1.png?width=92&height=34'/>
                        </Link>
                        <Link to='/'>
                            <img className='max-h-12 max-w-20' src='https://unicorn-cdn.b-cdn.net/651167a1-6c5e-4486-a5ff-ee749b2c3c6b/download-(2).png'/>
                        </Link>
                        <Link to='/'>
                            <img className='max-h-12 max-w-20' src='https://unicorn-cdn.b-cdn.net/65aab9dc-a46f-468a-833b-cfd14e2c936e/image-210.png?width=74&height=46'/>
                        </Link>
                        <Link to='/'>
                            <img className='max-h-12 max-w-20' src='https://unicorn-cdn.b-cdn.net/683afe88-b5ce-4e88-a4d4-4b2811aa0200/growthx-india-logo-1.png?width=101&height=36'/>
                        </Link>
                        <Link to='/'>
                            <img className='max-h-12 max-w-20' src='https://unicorn-cdn.b-cdn.net/6c5b6ef6-2da9-47c9-941c-016e9f2a50c9/emudhra-1.png?width=124&height=34'/>
                        </Link>
                        <Link to='/'>
                            <img className='max-h-12 max-w-20' src='https://unicorn-cdn.b-cdn.net/f31048cf-f259-4cbd-85e5-e7370c127c6a/stayvista.png?width=54&height=39'/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 lg:my-10'>
                <div className='flex flex-col text-center items-center justify-center'>
                    <div className='font-bold text-3xl text-center my-4 mt-8 max-w-96'>Broadcast Promotional Messages {"(Officially)"}</div>
                    <p className='max-w-96 text-lg'>Well, WhatsApp recently allowed Business to Broadcast and Automate Promotional Messages via WhatsApp Business API</p>
                    <p className='max-w-96 my-4 text-lg'>You can Now Send Exciting Offers, Discount Coupon Code and Festival Wishes without getting your Number blocked!</p>
                    <div type='button' className='rounded-2xl transition duration-150  hover:ease-out hover:bg-purple-300 bg-purple-200 text-lg px-2 p-1 text-purple-700'>
                        <span className='font-bold mx-1 bg-purple-700 text-xs p-1 rounded-2xl text-white'>INTERESTING?</span>
                        <span>Start Now for FREE</span> 
                        <FontAwesomeIcon className='mx-2  ' icon={faArrowRight} />
                    </div>
                </div>
                <div className='my-20 lg:my-2'>
                        <img src='https://unicorn-cdn.b-cdn.net/c72dca37-abfa-4e4a-b42a-b7767288cc0f/promotional-messages-on-whatsapp.png?width=585&height=828'/>
                </div>
            </div>
            <div className='font-bold text-3xl text-center leading-3 my-8'>Sell your Products on WhatsApp</div>
            <div className='text-lg text-slate-800 my-2 text-center '>WhatsApp Catalog, Cart & payments in One Place!</div> 
            <div className='grid grid-cols-2 gap-2 px-8 my-8'>
                <div className=' drop-shadow-lg'>
                    <img src='https://unicorn-cdn.b-cdn.net/32352181-be6f-4100-8911-bd403831b035/flow-builder-banner.png?width=570&height=321'/>
                </div>
                <div className='grid grid-rows-3 text-center justify-center gap-6'>
                    <div>
                        <div className='font-bold leading-snug tracking-tight text-balance  '>DRAG & DROP CHATBOT & CATALOG BUILDER</div>
                        <div className='max-w-96 text-wrap'>Build your Own Chatbot Flows your Way! Easy-to-use Chatbot & Catalog Flow builder to build your conversational journeys</div>
                    </div>
                    <div>
                        <div className='font-bold leading-snug tracking-tight text-balance  '>WHATSAPP CART & CATALOGS</div>
                        <div className='max-w-96 text-wrap'>Drive Orders via WhatsApp with WhatsApp Catalogs and Cart. Seamlessly build your Catalog in 10 minutes and get going!</div>
                    </div>
                    <div>
                        <div className='font-bold leading-snug tracking-tight text-balance  '>WHATSAPP PAYMENTS</div>
                        <div className='max-w-96 text-wrap'>Yes! Collect Payments now on WhatsApp Seamlessly with WhatsApp Pay and other modes of Payments {'(Razorpay, Payu etc)'} and grow your revenues.</div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center my-24'>
                    <button className='rounded-2xl transition duration-150 hover:ease-out hover:bg-purple-300 bg-purple-200 text-lg px-2 p-1 text-purple-700'>
                            <span className='font-bold mx-1 bg-purple-700 text-xs p-1 rounded-2xl text-white'>GET STARTED</span>
                            Start your 14-Day Free Trial
                            <FontAwesomeIcon className='mx-2  ' icon={faArrowRight} />
                    </button>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 justify-center text-center'>
                <div className='flex flex-col items-center'>
                    <div className='font-bold text-3xl max-w-96 tracking-wide '>Run Click to WhatsApp Ads for 5X Leads</div>
                    <div className='max-w-96 my-3'>Run Ads on Facebook & Instagram that land on WhatsApp. 5X Your lead generations & 2-3 Conversions Instantly!</div>
                    <ul>
                        <li>Build Click to WhatsApp Ads from AiSensy Platform</li>
                        <li>Get all your Leads Segregated according to Ad Campaigns</li>
                        <li>Build Chatbot Flows based on Ads or Retarget via Broadcast</li>
                    </ul>
                    <div className='text-green-500 font-bold text-lg my-4 mb-8 transform duration-150 hover:ease-out hover:translate-y-0.5'>Start Your 14-Day Free Trial</div>
                </div>
                <div className='flex justify-center my-4'>
                    <img src='https://unicorn-cdn.b-cdn.net/57b54efc-1dca-4407-b9a1-a5a8554d6215/group-177-(1).png?width=585&height=396' alt='img'/>
                </div>
            </div>
            <div className='font-bold text-3xl text-center leading-3 my-8'>Smart Retargeting for 3X Sales</div>
            <div className='text-lg text-slate-800 my-2 text-center  '>Segregate your Audience Smartly and Re-Broadcast for Higher Conversions!</div> 
            <div className='grid lg:grid-cols-2 grid-cols-1'>
                <div></div>
                <div className='flex flex-col items-start px-6'>
                    <div className='my-4'>
                        <div className='font-bold tracking-tighter'>SMART AUTO SEGREGATION</div>
                        <div className='text-lg'>AiSensy automatically segregates your broadcast audience by Delivered, Read, Replied Audiences. Run Retargeting Campaigns on the Basis of these filters.</div>
                    </div>
                    <div className='my-4'>
                        <div className='font-bold tracking-tighter'>DRIVE 3X SALES</div>
                        <div className='text-lg'>Retargeting Campaigns have proven to Increase sales and engagement for Businesses</div>
                    </div>
                    <div className='text-green-500 font-bold text-lg my-4 mb-8 transform duration-150 hover:ease-out hover:translate-y-0.5'>Get Started with AiSensy</div>
                </div>
            </div>
            <div className='font-bold text-3xl text-center  my-8'>The Most 'Complete' WhatsApp Platform</div>
            <div className='text-lg text-slate-800 my-2  text-center mx-12'>Everything you need to notify, chat & engage your users All in one place</div> 
            <div>

            </div>
            <div className='flex flex-col lg:flex-row-reverse px-4'>
                <div className='flex flex-col items-center'>
                    <div className='font-bold text-3xl text-center lg:text-start  my-4 mt-10'>Save your Drop-offs</div>
                    <div className='text-lg text-slate-800 my-3 text-center lg:text-start lg:mx-0 mx-12 '>Recover Abandoned Carts, Application Drop-offs within minutes using Whatsapp Smart Notifications.</div> 
                    <div className='text-lg text-slate-800 my-3 text-center lg:text-start lg:mx-0 mx-12 '>These Notifications have special CTA{'(Call-to-Action)'} Buttons that drive Engagement</div> 
                    <button className='border-2 px-3 drop-shadow-lg border-green-500 text-green-500 p-2 transition duration-150 hover:ease-out hover:-translate-y-px text-center rounded my-5 font-bold'>Start for FREE</button>
                </div>
                <div className='flex justify-center my-2'>
                    <img src='https://unicorn-cdn.b-cdn.net/6eb57d59-e823-4b04-9457-410e53760d90/whatsapp-abandoned-cart-use-case.png?width=585&height=497'/>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row-reverse px-4'>
                <div className='flex flex-col items-center'>
                    <div className='font-bold text-3xl text-center lg:text-start  my-4 mt-10'>Get WhatsApp Business API in 10 Minutes</div>
                    <div className='text-lg text-slate-800 my-3 text-center lg:text-start lg:mx-0 mx-12 '>AiSensy Platform is powered by Official Whatsapp Business APIs and is in alignment with all Whatsapp Rules.</div> 
                    <div className='text-lg text-slate-800 my-3 text-center lg:text-start lg:mx-0 mx-12 '>
                        <ul>
                            <li>Get Verified Green Tick on your Whatsapp</li>
                            <li>Broadcast Unlimited Notifications everyday</li>
                            <li>24x7 Chat Support by AiSensy Team</li>
                        </ul>    
                    </div> 
                    <button className='border-2 px-3 drop-shadow-lg bg-green-500 text-white p-2 transition duration-150 hover:ease-out hover:-translate-y-px hover:bg-green-600 text-center rounded-md my-5 font-bold'>Apply for WhatsApp Business API FREE</button>
                </div>
                <div className='flex justify-center my-2'>
                    <img src='https://unicorn-cdn.b-cdn.net/fa3d6a68-9a20-42c1-93fc-9f8dd509a544/green-tick-verification-in-whatsapp-business-api.png?width=585&height=379'/>
                </div>
            </div>
            <div className='font-bold text-3xl text-center   my-4 mt-20'>Why Choose WhatsApp?</div>
            <div className='text-lg text-slate-800 my-3 text-center  lg:mx-0 mx-12 '>Whatsapp is the One Platform that brings together Actionable Notifications & Customer Support! </div> 
            <div className=' flex justify-center'>
                <div className='border drop-shadow-md px-24 py-6 grid lg:grid-cols-3 grid-cols-2 justify-center content-center'>
                    <div>
                        <img className='max-h-12' src='https://unicorn-cdn.b-cdn.net/cd1abbf6-d694-4151-b842-1045b5b75c47/storytelling.png'/>
                        <div className='font-bold text-2xl max-w-24'>98% Open Rates</div>
                    </div>
                    <div>
                        <img className='max-h-12' src='https://unicorn-cdn.b-cdn.net/43c167d5-78b2-4334-87ba-dd73132dea87/click-(1).png'/>
                        <div className='font-bold text-2xl max-w-24'>98% Open Rates</div>
                    </div>
                    <div>
                        <img className='max-h-12' src='https://unicorn-cdn.b-cdn.net/1056c82f-579b-461d-8f06-21a3f2fe9837/youth.png'/>
                        <div className='font-bold text-2xl max-w-24'>98% Open Rates</div>
                    </div>
                </div>
            </div>    
        </div>
    </>
  )
}

export default Home
