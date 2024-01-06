import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'

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
            <div className='section text-center my-24'>
                <div className='font-bold text-3xl text-center leading-3 my-8'>Founders & Marketers Love Us</div>
                <div className='text-lg text-slate-800 my-2 mb-8 '>Join thousands of AiSensy Business Today</div>
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
            <div className='lg:grid flex justify-center grid-cols-2 gap-2 px-8 my-8'>
                <div className=' drop-shadow-lg '>
                    <img 
                    className='hidden lg:block '
                    src='https://unicorn-cdn.b-cdn.net/32352181-be6f-4100-8911-bd403831b035/flow-builder-banner.png?width=570&height=321'
                    />
                </div>
                <div className='lg:grid lg:grid-rows-3 flex flex-col items-center  justify-center gap-6'>
                    <div>
                        <div className='font-bold leading-snug tracking-tight text-balance  '>DRAG & DROP CHATBOT & CATALOG BUILDER</div>
                        <div className='max-w-96 text-wrap'>Build your Own Chatbot Flows your Way! Easy-to-use Chatbot & Catalog Flow builder to build your conversational journeys</div>
                    </div>
                    <div className='lg:hidden my-6 shadow-lg rounded-md'>
                        <img
                            alt='img'
                            src='https://unicorn-cdn.b-cdn.net/32352181-be6f-4100-8911-bd403831b035/flow-builder-banner.png?width=720&height=405'
                        />
                    </div>
                    <div>
                        <div className='font-bold leading-snug tracking-tight text-balance  '>WHATSAPP CART & CATALOGS</div>
                        <div className='max-w-96 text-wrap'>Drive Orders via WhatsApp with WhatsApp Catalogs and Cart. Seamlessly build your Catalog in 10 minutes and get going!</div>
                    </div>
                    <div className='lg:hidden my-6 shadow-lg rounded-md'>
                        <img
                            alt='img'
                            src='https://unicorn-cdn.b-cdn.net/90331533-408f-4383-83ae-37fccf5182df/group-176-(2).png?width=720&height=542'
                        />
                    </div>
                    <div>
                        <div className='font-bold leading-snug tracking-tight text-balance  '>WHATSAPP PAYMENTS</div>
                        <div className='max-w-96 text-wrap'>Yes! Collect Payments now on WhatsApp Seamlessly with WhatsApp Pay and other modes of Payments {'(Razorpay, Payu etc)'} and grow your revenues.</div>
                    </div>
                    <div className='lg:hidden my-6 shadow-lg rounded-md'>
                        <img
                            alt='img'
                            src='https://unicorn-cdn.b-cdn.net/31d4dabb-4e0e-4c0e-910c-a632b5f5bee3/group-176-(3).png?width=720&height=574'
                        />
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
            <div className=' flex  justify-center'>
                <div className='border shadow-lg rounded-md my-5 w-full lg:mx-40 lg:py-14  mx-10 px-16  py-6 grid lg:grid-cols-3 grid-cols-2 content-center items-center gap-5'>
                    <div>
                        <img className='max-h-12' src='https://unicorn-cdn.b-cdn.net/cd1abbf6-d694-4151-b842-1045b5b75c47/storytelling.png'/>
                        <div className='font-bold text-2xl '>98% Open Rates</div>
                    </div>
                    <div>
                        <img className='max-h-12' src='https://unicorn-cdn.b-cdn.net/43c167d5-78b2-4334-87ba-dd73132dea87/click-(1).png'/>
                        <div className='font-bold text-2xl '>45-60% Click Rates</div>
                    </div>
                    <div>
                        <img className='max-h-12' src='https://unicorn-cdn.b-cdn.net/1056c82f-579b-461d-8f06-21a3f2fe9837/youth.png'/>
                        <div className='font-bold text-2xl '>2.4 Bn+ Users</div>
                    </div>
                </div>
            </div>    
            <div className='flex justify-center my-10 '>
                <button className='rounded-2xl transition duration-150 hover:ease-out hover:bg-purple-300 bg-purple-200 text-lg px-2 p-1 text-purple-700'>
                        <span className='font-semibold mx-1.5 bg-purple-700 text-xs p-1 px-1.5 rounded-2xl text-white'>EXCITED?</span>
                                Get Started Now
                            <FontAwesomeIcon className='mx-2  ' icon={faArrowRight} />
                </button>
            </div>
            {/* Customer Reviews */}
            <div className='flex flex-col items-center justify-center my-16 mt-20'>
                <h2 className=' text-gray-700 text-5xl font-bold tracking-wide mx-16 lg:mx-44 text-center'>Let's hear it from our Successful Customers!</h2>
                <div className='h-40'>

                </div>
                <h2 className=' text-gray-800 mt-16 text-3xl lg:text-4xl font-bold tracking-wide mx-12 lg:mx-44 text-center'>Onboarding, Product & Support</h2>
                <h5 className='my-3 text-lg  text-[#757575]'>We Excel at all of it! </h5>
                <div className='flex flex-col mt-8 lg:flex-row justify-center gap-6'>
                    <div className='border flex items-start justify-start flex-col shadow-md rounded-lg text-start px-8 lg:px-16 py-10'>
                        <div className='my-4'>
                            <img src='https://unicorn-cdn.b-cdn.net/44e0ae47-800a-4d34-8301-cc1f18f4fdd2/physicswallah.png?width=195&height=50' alt='img'/>
                        </div>
                        <p className=' max-w-80 text-md text-slate-800 text-wrap '>
                            AiSensy team has shown exceptional professionalism, reliability and a true commitment to customer satisfaction.
                        </p>
                        <h2 className='   text-xl lg:text-2xl font-bold mt-2  text-center text-slate-800'>Priya Otswal,</h2>
                        <h2 className='   text-xl lg:text-2xl font-bold mt-1  text-center text-slate-800'>Sr Marketing Manager -</h2>
                        <h2 className='   text-xl lg:text-2xl font-bold   text-center text-slate-800'>PhysicsWallah</h2>
                    </div>
                    <div className='border  flex items-start justify-start flex-col shadow-md rounded-lg text-start px-8 lg:px-16 py-10'>
                        <div className='my-4'>
                            <img src='https://unicorn-cdn.b-cdn.net/f1b647ba-15a5-4f48-985e-1d775469287f/cosco-logo.png?width=71&height=50' alt='img'/>
                        </div>
                        <p className=' max-w-80 text-md text-slate-800 text-wrap '>
                        AiSensy helped us increase our customer engagement. Our customer engagement increased from 35% to 90% with AiSensy's Smart Retargeting feature.
                        </p>
                        <h2 className='   text-xl lg:text-2xl font-bold mt-2 text-slate-800 text-center'>Akaash Jain,</h2>
                        <h2 className='   text-xl lg:text-2xl font-bold mt-1 text-slate-800  text-center'>Business Executive - Cosco, India</h2>
                    </div>
                </div>
                <div className='mt-16'>
                    <div className='flex'>
                        <div className=' '>
                            <img alt='img' className='max-h-12 mx-4 mt-6' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACUCAMAAAAwLZJQAAABIFBMVEWKSzj39/f/rDP0kAz0q7pVrO6Iyfn3+v3/rjOISTj6+/v///+FRjj3+Pr/sTOISTWMRiv/qSb/pQeLSTP65M2BQziFQSuERS5Rsfb1oVT6lAX0iwB/QCaI0f/48+yshnzLtrD+tFCWUjL56tf63sHi2daVYFGANhuBPCPYycXCfoDXkZjhmqRZpeKNRCWIT0CBXmDs5uTDqqOhdWmbal2iYlmvbmmWVkiFVU16bX1klcaIuuJye5ehWjC9bCb/1qLfkjT8xHz9umPEfDXqmzSxbDb716z+sEL8y4y2lY2KiZmJfIaHrM6LPRiJnbhuhKeKcXXSeh3ihBX1mDb0qmH3uX3IpZL0wpKdYEHEmH3Gkm3FjF7CdB/FhUvkzbvRiDVP8fiNAAAOfklEQVR4nO2cCVfiShbHk9gaEhKSEEhoF0B2FBRwAbFRRECxXZ76enrmjTN8/28xlYWkklRlQWzPO9P3nPdOy5L88r91b223IMi/iRGfDRDWfoOu2n6Drtr+z0BZy8A/zRfsV/lV3OLdoCwbZ8l2u1yu1/OdzmyWM202m3U6+Xq9XG6TZDxu8H8OKECMx8lyvZM7Oq4cEqpSq9UU2LQ/VeKwcnw069TbgPY9uEuCandslzu5w2q1WlNkQRAInIH3wDOAz3VzeaAuuyTsEqA8Gyfb+dkRARTD83lNVaq1Sg5oC5T9eFBNj/qsAu4aCdKSV/vacacMLvSRoEDKcudIqSo+ng4BK9eq3RkQNhJrBFA23s4fHSpKFKbt7W0V9VCCIldydTYCa1hQlm3Xj6s1OYKUgto92dvfP+2q6LeBZ2ZlMmxshQMFYnYq1ShaAsyT/cYXzRonuKcTamouT4aTNQwoSOg5QpGjYBICsf9lYY0u1g8guCqddhhVg0FZsp6LJqZO0Phi2yna+eYna0onRGAFgbLx8pEcGZNQTyHOL/vb/g9Vq3TI+LtAWbacq0bzuWn7MGjDH1RDlfMBmdUXFISQ6qemeCDinsIBuufnehO1epz39b8PKMvWCb/uRxZbd997MhJV2INB8cEEmark2j6keNA48LrfDeTW/c7OzsZ9C4UqnMCxFDL5Kn7+x4LG613fGJKJ8w3DHnsPCH0sSfdPgh2/eDwlhw0qDChL+stJEA+POyboxs4jQlN1DySoxv6puh1lXKBU6xhR0aAgJ9UCLikuBNVI7w4QpN2Tk64aWk3TBGWGJkWCxuuC7XZZFBGtUBY2YEMGHXY4Da7HCOgoBJnqCEmKAmXz0H3F3tnZWUs8cF/24BwGbUVItqLcemo2m0+HmO/UjsuIhooAjXdgzrPmema92f/GiC7Qux0I9A/Xu3iTH1r9ZmZ9PZPpYzQllAqC1APK87MqhPMNXFOzzHrLxSLDkvbCKiof9s0rrmeecF9SibrH+x7Q+AzKSoK8blnTBSP3rLjfuUckKLSJFqd2RVxCkAWPpm5QtlOFL3tmXzbzzS2p2Lo3QM9DCyqe2U++nsG3bLlSZn1B2Y4jy1ue1y7b9+Qg0N7uzzfOH0NzEuJTBiL1CUGl4upPnaDxsjPPOBT1gmq9Xq/Vw45MvCbDoM1D6GaCum2a8aJy5BxOO0DZtmsmJkNtNPOEjGw5yjSKEL9BgsJtSejugflVo9EAXa6Rfms5H0Vz7u4d9n2UXIkzuWU99/qTaD+iAA+094zX1XwcAxrvePtN+ayZ0VkzZ6FTpZ+ZTw6y6B8yhnMx3BJqcDOFQNk2KsmI4tlTv9nsn4XOQAGkZ32tW2o9wP5RGw5Qc0agwM6HFfU4XjcZdJ+9nrwSPTUTD1vu+BO6X5xmai1Ded8GBT089uLCCpondDF33+kYZkOgahepaGWVNJHMrag1Gaza8WSBxvNV34t9qG0726g1dxEq1pDPVrQSdYyLNsa0SF9ySrpnpwMl7wZl6+9ZSdT4OC4NjCEKuhGM/ifHhSMWThqQnhCoFfgW6Cz6csjCOI6QC4PJ2/PL2trapmngny/PzxcDwByGVlBPTk9Pul1CdXSOQm0xOFmAtitLKsqlicEFQDThHKa/9vL8NiloUgeiqqp3LbXWiTtA2fJSocRwzEDT0YPotpeLAhex3RqmVpyg8Rly1qk/JR6TGbyteXVE2ubmC9B1CdJFP7oAPUY0UWGb0FaMBQxquvAcLCWECmQFrTkyaN0BSnqTvaB2zdUO5IoxV3iOQGmyvkwi+18xG6kByrY9nlcJa1GmgQDlJi+ROTV7liOSKjlYUbbsAhXUU6iz8C4bpi+WodRFJaKRqkdwMLF5B6hKnDr6tIYblJksJaduL4VIpPJxm7dB4/DISdg+cSzDekGZwdKYQNO3SMEvHBth7wVVu84RAsL1nCeOtoCtrb2+foXt9VV/fctNGqmZCpU2iQT1jA2/eFeMOTfk658/fk5LqWI2SwNjaf3/2WwxVZr+/KHjwqAXUZKUUMEoqnj09MYSA1Ou/SgVsySpsfE8XOwA/tJ4SQA8/RNi3byI4nsnKPuPBahX0IZ3lyhtUX79mdIASV8DwGy29ON1axlFmX/CwcT+awGq7rkxCW/HZLbRra8l4Gp/SAuWpos/DVU3I4U9M0hBoNm/Fq3QCdrYQ3b1ZtRPA7V0sWb/BKSbz5GinruY2qB89t/W4B8ea+8h1DRILzbXtqYhxbSNzn7dwuRRbAUA93ZJ26DF/1jNRrVy6F4XXz+Qft58jcwJSEtbawMvpyzKhwxmBYt7u4VAU9cW6GJbeL/ru52RvnhdojCETr0UvJEkH35rZjJ99FIMdz2CQEtv9tcF4nRvf+8EWbgAX2Dw36B9Vo+x9F8iwu8PfXPRCLFcCEB3bVB6+gY/p4CaE3iMIfLRKoNYto1ci7EW4pqoZThuLtnBRF++RR/REkJ1Vo6HVpWNk/Vj1DRC7jVR65ALSw8lkrdAb5+XAAW9GHFUD1FxpRfotTsVGZlD7EVo5O5DepzM2qBXw2WmM8DUatWoD0NXs7FaWRzbLtdnlWoN3ZrElrUCi1wq5mLJog06Gi8JCkypqRWt+K5MarV6DmPJdj0/yx1VFAwlYUWSboi4ZwqJZIm2QG+oMK6XRQKd7QRZLxqUicqxVudolDseHXcJRdHKCv0Wz0VoSbuPaqLXDlApFoJT7D31+0/ufTEHMMgXWpGjUfaohqg3E+xIWs+gLp0exqSpBconE8EDBRCdGWDI0FzaHuxdEuSuC1O4oaRbC5RMJiZBjVQ+NJ89E37fM9DkHryPh8qikxgEymeTsXkQqLXlhHzyJQ3acPRsDBqgQwB6ZYEWk1Rg2B9Y12wSq1qallt2C22iNjOYAUW5QKmARirb6a6J22h/FyhySJKeJwDpyAE68U9QtqDrzZW5Htoe66MenitQmo1YE5QuJanYMOCS1rOjBzlLWn9xVeS+LwNaKKwonQKK+vse3sNcmeftCM08IUd4E8pQlIRBE9d+4WSDYvZul7SDM81TTeQ1GYbSBaV2tVHJwvUUdeO3emUXBCAHjcubeHj29K2HbkzDBIUCjflJaqd7VIesDbXBf0vtAsiiiJ4tcXNDTw8oRSGmXZaJrXWtOWWayEo8fckXXyJMyAfiQbQWw3BzU08vaMw36Yt/9DOZ5lMPcT+BMJeBcKQHvcf7x+8PEVAZW0+Eoolrv1wqi0xPRo/yrEULdEGraJRInX8nQqIyXGFs6QmDppLmS/5ZHzNsE+x1SmQxs/Ldqjr6LoZox0y6MKdsPSFQvWcyDDHrDjRoXW0f+YF7u5DrMZCUSRPXYxgT5FGedIPGbpYghVeBEK1U6EEVZzt3Ad5PD4aJBOW0ETTMW7wWGy+jqb2kiqhmdoBunB/6SpoexNyY0OiJpG2pY9Qg5IawbfAKIELRQ0ddpG8x16LTdIJe2qBXEkQ6L6R1VRltJzsMNOx7RDgpd2ELOLkBFfOCJlM26KUEvREbzwcMxzHyYDKZDIh0sMLb0HELhO+J+51QrmeIMYKTghYg+JTzAwmtPccSho2vC0G6BoST/HBned8vmMxRndvz0CIZn91FfGIhcOxmTgREGHQyZA+lmNi729gxyrbxgqavUZzm3G6xaXsloT5jsYKewFdUqBKsgfyALBJ35+e+CZ8bIDkpCV7Dp6e+oEDVue8WJtQ5oUHBRw4eDvx6e6aAbKBmv7QAhTIpDnXoq6m9oI7unIItjWygWhY1fG66nh75SwoCbOy7Myj4BFMozokn0ZugJdoBWgqSFGjqNwpcHGBCxlKwmfNN1G15h6JkdjdIUiox94t9tbvfaEQ4F+IwRsY0UCp5STtB+ctAUDBZ8SMVtlUh0rkQyNJzjOOpWNalKJ8N5AQ2WH6915fzGscp3S72Bq3aPPoysJWC51tmbBWCE+N3cMOiB5TPYj8NfW8crc4iHOcEe2djhOcEdY1McKRUUG8a2Tg8p91CYVA+G5hLKS2dDsKThihyYrhr/M0kaF8Yqsi153j+mk6CBlN6hSbHcTIwvToTjBkxzByB6ZB0zpEN5yjGpm9DSKrlU59xH5PmCoPJ9XCsDxb18eJ4OL+eDAoE5x7ZgunmhMLFO6UNRGk0aJisr5NSaFRNvYHGCPggnWIx7U8dt2AUv3JGVezgeuyDaU5BkKB0MQyndm9qOIDrV8GNtWLXyRBQxTC+jOlvjYfXYNow0ESnsB81OK9gNNcRDHoapplqloiNgUCyUR9MAG/PwY0TwRluMW9IeCbFbs7dLI8HJXn/EbTjlmDoPwYOnQ/H4xuNPEQejmBS0Vlh4QZlw5OatCsGXHCWXJUg7hNifMiA+mBLeiprvIcDQ+X9DzbJWwHkPW5Jf76mXj2R50Lp4ieTJi8RlUqok7Y0eRU2S32ASZQ7jrCgJE/efhqpFENyYk6D82Ci/znul0ZFJCf2hwDo0qc0VNBvYirpsL9YQGdHv9z9UnJK4uon8b8BwdOlm18rqnSVxcjpC6rlqV8Z/VIML2cAKMnzqV8lqiTd+sgZBKql1MtfgSpJV6WA6t6g39Lh6ext8qNRkzcpXLCHBjVQbz4wq0rSbilESXeY33vi6eL05oNklZKjkn/jjACqoZKlXWrlsoIL3hbJcKXnoX88jaZTt7srlTVJXU2zoQvkI/zKG81nU1fSalglKXlzGVbMqKCkfj4hdTuKva8NSJJ0M7rMRjttEP0nE2k6W5xe3SSXVBZ4ZPeyVOSjUS4DSuqhRQLYXV2csLzGR0e3pSzpPKTzgaAGrHaiZnp7NbqRgLp4Xg0QvL87urqcFrXjTkve8B2/P6rB8tppJY13V+NFmEGoHckig88TfRSoicvTppHZYgq2oq4gbRzJeu9t3g9qG28z094DY++0VYJ+qP0GXbX9Bl21/QZdtf1tQP8Hj+HT6Hh11A8AAAAASUVORK5CYII='/>
                        </div>
                        <div>
                        <h2 className='   text-3xl  font-bold mt-2 text-gray-800 '>Zero Setup Fee</h2>
                        <h6 className='tracking-wid leading-relaxed text-gray-800 text-lg text-wrap max-w-96 text-md my-2'>Get Started with AiSensy Instantly. Pay only for the Messages</h6>
                        </div>
                    </div>
                    <div className='flex my-6'>
                        <div className=' '>
                        <FontAwesomeIcon className='text-5xl mx-5 mt-6' icon={faHeart} style={{color: "#dd2e44",}} />
                        </div>
                        <div>
                        <h2 className='   text-3xl  font-bold mt-2 text-gray-800 '>The Friendliest Support</h2>
                        <h6 className='tracking-wid leading-relaxed text-gray-800 text-lg text-wrap max-w-96 text-md my-2'>Our lovely support team is always happy to talk to you and help with any issues</h6>
                        </div>
                    </div>
                    <div className='flex justify-center gap-8 my-6'>
                        <div className='mx-2'>
                            <img src='https://unicorn-cdn.b-cdn.net/91b87bc9-0f7e-410d-81a7-ecae775905a3/medal-(1).png?width=77&height=100' alt='img'/>
                        </div>
                        <div className='mx-2'>
                            <img src='https://unicorn-cdn.b-cdn.net/bbd08729-ed49-4409-9732-1ba5306d413f/medal.png?width=90&height=100' alt='img'/>
                        </div>
                        <div className='mx-2'>
                            <img src='https://unicorn-cdn.b-cdn.net/1451078b-f528-4a56-8099-b4c7f54cb204/users-love-us.png?width=77&height=99' alt='img'/>
                        </div>
                    </div>
                </div>
                <div className='d-flex p-12 px-16 lg:px-60 justify-center items-center border border-green-500 rounded-md my-16'>
                    <div>
                        <h2 className=' my-4 text-center leading-relaxed text-3xl  font-bold mt-2 text-gray-800 max-w-96 '>Your Customers are on WhatsApp! Are You?</h2>
                        
                    </div>
                    <div className='flex justify-center my-6'>
                        <button className='border py-2 px-3 mt-4 text-white transition duration-100 hover:ease-in hover:-translate-y-px bg-green-500 hover:bg-green-600 font-semibold rounded-md m-1'>Get Started Now</button>
                        <button className='border-2  text-white  py-2 px-3 mt-4 transition duration-100 hover:ease-in hover:-translate-y-px text-center rounded-md bg-slate-800 hover:bg-slate-900 m-1 font-semibold'>Talk to Sales</button>
                    </div>

                </div>
            </div>
            <Footer/>

        </div>
    </>
  )
}

export default Home
