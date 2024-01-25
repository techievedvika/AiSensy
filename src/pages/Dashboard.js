import React from 'react'
import Sidebar from '../components/Sidebar'
import { faBolt, faBookOpen, faCalendarDays, faCheck, faChevronDown, faChevronUp, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import Sidebtn from '../components/Sidebtn';

const Dashboard = () => {
    const[showApiDetails,setShowApiDetails]=useState(true); //Toggle whatsapp Business APi button
    const[showPhoneDetails,setShowPhoneDetails]=useState(false); //Toggle Phone annd Display Name Verification button
    const[showfbDetails,setShowfbDetails]=useState(false);//Toggle facebook Manager Verification button
    const[showProfileDetails,setShowProfileDetails]=useState(false); // Setup profile button toggle
    const[showGreenTickDetails,setShowGreentick]=useState(false); // Toggle green tick button
    const[showSteps,setShowSteps]=useState(false); // Toggle steps button
    const[showTutorials,setShowtutorials]=useState(false);
    const[showSidebar,setShowSidebar]=useState(false);
	const [phone,setPhoneValue]=useState();
    return (
    <>
      <div className="grid relative grid-cols-12 ">
            <Sidebar 
              show={showSidebar}
              handleClose={()=>setShowSidebar(false)}
            />
        <div className={`lg:col-span-11 lg:absolute lg:ms-24 col-span-12 border ${showSidebar && 'hidden'}`}>
          <Sidebtn
            onShow={()=>setShowSidebar(!showSidebar)}
          />
          {/* NAVBAR */}
          <div className="flex flex-col gap-3 lg:flex-row lg:justify-between p-4">
            <h5 className="">Vedvika Tech</h5>
            <div>
              <span>WABA Status : </span>
              <span className="text-red-800"> PENDING</span>
              <button className="bg-[#10c110] mx-2 text-white p-2 py-1 font-bold text-sm rounded-lg">
                Apply Now
              </button>
            </div>
            <div>
              <span>Current Plan : </span>
              <span className=""> BASIC</span>
              <button className=" bg-purple-900 mx-2 text-white p-2 py-1 font-semibold text-sm rounded-lg">
                Upgrade Now
              </button>
            </div>
            <div></div>
          </div>
          <div className="bg-[#f7f7f7] lg:p-6 p-3 lg:grid lg:grid-flow-row-dense grid-cols-3">
            {/* Left Container */}
			<div className="lg:col-span-2 flex flex-col items-center gap-4">
              <div className="flex flex-col gap-3 lg:flex-row lg:justify-between p-4">
                <h5 className="text-start">Hey User, Welcome to AiSensy!</h5>
                <div className="flex flex-col lg:flex-row justify-start content-start items-start">
                  <button className="p-2  text-[14px] hover:bg-[#f0f0f0] rounded-lg">
                    <FontAwesomeIcon icon={faPlay} /> Onboarding Video
                  </button>
                  <button className="p-2  text-[14px] hover:bg-[#f0f0f0] rounded-lg">
                    <FontAwesomeIcon icon={faBolt} /> Start Tour
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-start content-start items-start text-white bg-[#600e7d] lg:px-16 px-6 py-6 rounded-lg ">
                <h5 className="font-bold text-lg tracking-tight">
                  Start WhatsApp Engagement for your Business
                </h5>
                <p className="text-sm mt-4">
                  Your account is currently in test mode.You can try &
                  experience a feature like Broadcasting, Live chat with your
                  test Contact via Test Business Number
                </p>
                <p className="text-sm mb-4">
                  Test Business number : +918142102723
                </p>
                <h6 className="">
                  You'll need to Apply for WhatsApp Business API to use AiSensy
                  for your Business
                </h6>
                <button className="bg-white flex p-2 mt-6 rounded-md text-purple-700">
                  <span>
                    <img
                      className="max-h-5 max-w-20 mt-1 mx-1"
                      alt="whatsapp-icon"
                      src="data:image/jpeg;base64,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"
                    />
                  </span>
                  <span>Apply for WhatsApp Business API {`(FREE)`}</span>
                </button>
                <button className="border border-white flex p-2 my-3  rounded-md ">
                  <span>
                    <FontAwesomeIcon
                      className="max-h-5 max-w-20 mt-1 mx-2"
                      icon={faCalendarDays}
                    />
                  </span>
                  <span>Schedule Live Demo</span>
                </button>
              </div>
              {/* Conversation Credits */}
              <div className="bg-[#02545a] w-full  rounded-lg text-white">
                <div className="flex justify-between px-4 mx-6 py-3 my-2 gap-8">
                  <h6 className="text-xs">
                    Complete the steps & win 200 WhatsApp Conversation Credits
                  </h6>
                  <h6 className="text-xs">4 Steps Left</h6>
                </div>
                <hr className="text-white h-5" />
                <div className=" px-4 mx-6 py-3 ">
                    {/* STEP 1 */}
                  <div className="flex justify-between">
                    <div>
                      <img src="" />
                      <div className="">
                        <span className="text-[9px] pe-2">Step 1</span>
                        <span className="text-[9px] ps-2 text-[#ffb443]">PENDING</span>
                        <div className='text-xs'>Get Your API Live</div>
                      </div>
                    </div>
                    <div>
                        <img alt='img' className='max-h-6' src='https://www.app.aisensy.com/static/media/reward_pending.a6850ee0e6aa7b1fb03679dfa416bfd9.svg'/>
                        <div className='h-6 bg-gray-500 w-0.5 flex self-center ms-3 my-1.5'></div>
                    </div>   
                  </div>
                    {/* STEP 2 */}
                    <div className="flex justify-between">
                        <div>
                        <img src="" />
                        <div className="">
                            <span className="text-[9px] pe-2">Step 2</span>
                            <span className="text-[9px] ps-2 text-[#ffb443]">PENDING</span>
                            <div className='text-xs'>Get FBM Verified</div>
                        </div>
                        </div>
                        <div>
                            <img alt='img' className='max-h-6' src='https://www.app.aisensy.com/static/media/reward_pending.a6850ee0e6aa7b1fb03679dfa416bfd9.svg'/>
                            <div className='h-6 bg-gray-500 w-0.5 flex self-center ms-3 my-1.5'></div>
                        </div>   
                    </div>
                    {/* STEP 3 */}
                    <div className="flex justify-between">
                        <div>
                        <img src="" />
                        <div className="">
                            <span className="text-[9px] pe-2">Step 3</span>
                            <span className="text-[9px] ps-2 text-[#ffb443]">PENDING</span>
                            <div className='text-xs'>Recharge WCC</div>
                        </div>
                        </div>
                        <div>
                            <img alt='img' className='max-h-6' src='https://www.app.aisensy.com/static/media/reward_pending.a6850ee0e6aa7b1fb03679dfa416bfd9.svg'/>
                            <div className='h-6 bg-gray-500 w-0.5 flex self-center ms-3 my-1.5'></div>
                        </div>   
                    </div>
                    {/* STEP 4 */}
                    <div className="flex justify-between">
                        <div>
                        <img src="" />
                        <div className="">
                            <span className="text-[9px] pe-2">Step 4</span>
                            <span className="text-[9px] ps-2 text-[#ffb443]">PENDING</span>
                            <div className='text-xs'>Spend 500 WCC</div>
                        </div>
                        </div>
                        <div>
                            <img alt='img' className='max-h-6' src='https://www.app.aisensy.com/static/media/reward_pending.a6850ee0e6aa7b1fb03679dfa416bfd9.svg'/>
                            <div className='h-6 bg-gray-500 w-0.5 flex self-center ms-3 my-1.5'></div>
                        </div>   
                    </div>
                    {/* STEP 5 */}
                    <div className="flex justify-between opacity-55">
                        <div>
                        <img src="" />
                        <div className="">
                            <span className="text-[9px] pe-2">Congratulations</span>
                            <span className="text-[9px] ps-2 text-[#ffb443]">PENDING</span>
                            <div className='text-xs'>WCC Won</div>
                        </div>
                        </div>
                        <div>
                            <img alt='img' className='max-h-6' src='https://www.app.aisensy.com/static/media/reward_pending.a6850ee0e6aa7b1fb03679dfa416bfd9.svg'/>
                        </div>   
                    </div>
                </div>
                <div className='w-full flex px-2 text-sm rounded-b-md py-3 justify-between text-white bg-[#007e60]'>
                    <p className='text-[10px] max-w-60'>
                    Your WhatsApp Conversation Credits have been sent to your WCC account
                    </p>
                    <button className='bg-[#29c853] px-3 text-xs'>
                    <FontAwesomeIcon className='me-1' icon={faCheck} style={{color: "#eceff3",}} />
                        Thank You</button>
                </div>
              </div>
              {/* WhatsApp Business Account */}
                <div className="bg-white border rounded-lg w-full lg:px-16 px-6 py-6">
                  <div className="flex mx-16 lg:my-3 lg:gap-12 flex-col lg:flex-row lg:justify-between">
                    <div className="text-lg flex font-medium">
                      <img
                        className="max-w-8 mx-1 max-h-8 lg:max-h-10"
                        alt="whatsapp-icon"
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQMCBAYFB//EAEQQAAEDAgMFBAcGAwQLAAAAAAEAAgMEEQUSIQYxQVFxEzJhgRQiUpGhsdEjM0JicsEHQ+EkU7LxJTQ1RGN0goSSk9L/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAwQFAQIG/8QAMREBAAICAQMCBQEIAgMAAAAAAAECAxEEEiExBUETIjJRYXEUIzNCgZGhsWLRFUPB/9oADAMBAAIRAxEAPwD7igICAgICAgIIugguQYl6B2iCM55H3IGc+KCe0QSHXQZXQSgICAgICAgICAgICAgICCCUGLn2QY3c7c3zKCQz2nIMgxrdwQZICAgggHeEGJY3hogxyuHIoGcg6iyDMFBkgICAgICAgICAgICDFzrIMLl3dQS1gGp1KDNAQYSSxxi8kjWj8xsuTaI8uTaI8y0JsdwyI2dWRkjg31vko5z4490E8rDH8yg7TYWP5zz0id9F4/acf3RTzsH3/wASybtHhbv95t+pjh+y7HJx/d6jm4J925T4lRVH3NVC/wAA8XXuMtJ8SmpmxW+mzaBB3G6kSpuEEEA7xdBhlc3um4QS16CxAQEBAQEBAQEBBi5yCsAvPhxQWAW0A0QTcXQeXieN0eHXbI8vl4Rx6nz5KHJmpj8q2blY8Ud+8uZrdpq6puIbU7Duy6u96p35V7eOzNyc/JbtHZ5Esr5jmme+R3N5uq82mfKla82+qd/qx4LjggX5IIIBKDcpMTraQj0eoeAPwuNwfJSVy3r4lNj5GTH4l72H7VtJDcQiy/8AEj1HmPorVOX7Xhfw+oRM6yQ6WnqIaiISQyNew8WlXKzExuGlW9bxusrbrr0wey+o0cghrtbILAboJQEBAQEBAQQTyQUj7Q24cUFo0FrWCCHyNjaXPOVoFyTuCTOvLkzERuXIY5tK6Yuhw5xbHuMvE9OXVUM3Jme1WTyedM/Li/u5u+pOtzxvqVTnc+WZ7pugXQLoF0C6BdAuggnRBs0GIVOHS9pSvLfaae67qF7pktSdxKbFmvindZdxg2NQYmzKDknAu6M/McwtLFmjJH5bfH5Nc0fl6imWWD231G8IIjd/VBYDdBKAgICAggmwQVPdezRvKDMNDQAEEPcGNLnEBrRck8FyZ13lydR3lwm0ONuxGQwU7i2kaf8A2eJ8Fm8jN1zqPDD5fKnLPTX6f9vGvfeqyl4LoF0C6Gy6Gy6Gy6Gy6Gy6Gy6Gy6G2cUr4ZGSRPLHsNw5p1C7WZidw7W01nqh3eAYy3E4cstm1LB67Rud4haeDL8SO/lvcXk/GrqfL2FYW1coyuzjzCDNhQZoCAgICDB7rIMIhf13bzuQZk2QcjtfjBc84dTu0H35H+FUeVl/khk8/k/8Arr/Vy3AKiyoLoflv4dhFbiIz00X2e7O42ClphvfwsYuNky96R2bVRszicEbpMjJA3Uhjrm3RSTxckQmtwc1Y3p4yrqIuAgICAgICAhtbS1MtJUMnhdaRhuPp0XulprbcPePJbHaLVfSMMr48Ro46mLQO0cDvaeIWtjvF6xaH0eHLGWkWht233XtKqBLZC3hvQXNN0EoCAgglBRIS4hvtH4ILtBpyQaONV7cOw+WoOrgLMHNx3KPLforMoeRljDjm8vmhe97i+Qlz3HMSeJOqyJl83MzM7kuuON7BMPdimIsguREBmlI4N/qpsOPrv+FjjYfjZOn2jy+kQQRwQsiiaGsaLADgtWsajT6KtYrGoWWXXXzjaSh9AxeQNAEUw7SPwvvHkfmFlcinTd89zMXw8s/aXmXUCqXQLoF0C6BdAugXQLoPc2RxH0Ov9Gkd9jUG3R3A/t/krXFydNte0r/AzdF+ifE/7d75LSbiuYbnDggyYdNEFiAgIMHlBVHrK53hYILUHFbcVpfVxUbT6sbc7rcys/mX3MVY3qOXdopHs5m6psxN0HabCQBtBUVBHrSSWv4AfUlaPDrqsy2vTaaxzb7y6gblbaSUHObZ0XpOGioYLvpzm6t4qtysfVTceyhz8XVi6o8w4QFZjCTdAugXQLoF0C6BdAugNc5jg5ps4G4PiuxOp3DsTMTEw+n4TViuw6nqWm+dgv4Hj+62Md+usWfTYcnXjizaIu0jmvaVXCbDLyNkF43IJQEFcm4oMIPu78ySgsPig+WYrUelYnVT3vmlNug0HyWPlt1XmXzOe/Xltb8tVRoQIO82GeH4MWg6slcD56rS4k7x6bvp1v3Ovy6MblaX0oNLFJ4qbD55agjsww3B4rxeYik7RZrRXHM2fLAfC1+Cx5/D5j3FwEBAQEBAQEBB22wlRnoZ6cnWKS46O/qCtDhz8mm16bfeOa/Z06uNJUNJnDnqgvbuQSgIKZT6p6IEX3bRyCDCtl7Cjnm/u43O9wJXm06rLxknVZl8labNaPBYr5WPCboF0HS7C1whrpaN5s2cZmfqG/3j5K5w76tNfu0/TcurzSfd3g3LQbSUHzjanGJMQrX07LspoJC0N9pwNiT+yzORlm9un2hgc3k2yXmseIeJdVlEugXQLoF0C6BdAugXQTdHXS7BS2xOpi9uHN7nD/6Vvhz80w0fTLayWr94dydy0W2pk/1gW4tQXs3IMkAoNeo7juiCxvdCDSx3/YmIf8tJ/hKjy/RKDk/wL/pP+nywHQLHfMl0C6DOKZ8E0c0Li2SNwc0jgQvVbdMxL1W80mJjzD6lhGIxYnQx1EelxZ7fZdxC1sd4vXb6bDmjLSLQ31IlcLtpg/YznEqdp7OT74D8Lufnx8VQ5WLU9cf1Y3qHG1Pxa/1/7crdUmWXQLoF0C6BdAugXQLoF0HQbDH/AE9/27/m1WeJ/EX/AE7+P/T/AKfQhvWm3lEn3zehQXs3IMkBBr1Aux3RBnGbxtPggoxOPtsNq4gL54Xt97SvGSN0lHljeO0fh8kY67QeaxnysMroF0EFB62zeMuwiuvISaWXSQb8v5h0U+DN8O3fwucPkThv38S+mxyMfG17HNc1wBa4G4IWrHd9DE7jcMZYmTROjlYHMcLOaRvXJjcakmImNS+cbRYFLhM5ljDn0bz6j+LPyu+qzM+CaTuPDA5fEtht1R9Lxrquol0EEoM2xSujMjY3mMGxcGmwXYrMxuIeopaY6tdmAcuOJujhdAugXQdJsCzNjM8nsU5Hvc36K3w4+eZaPpkbzTP4/wDrvgtFuqX/AH7f0oL2bkGSAgplFwQgxpjeFvhp7kGbtRY7jog+R1sJpa2opyLdlK5tvAHT4WWLeNWmHymSvRea/aVN15eC6BdBCOup2R2hFK5uH1zvsSbRSO/CeR8Fc42fXy2afB5nT+7vPb2d9mHNaDaVzQsnidHMxr2OFi1wuCuTETGpebVi0atG3E47sfNEXT4UDJHvMBPrN6c+io5eLMd6Mjk+n2j5sXePs5R7XxvcyRjmPbva8ZSPIqlPadSy5jXaW5hGGT4rWiniBAGsjyO4PqpMeKck6hNx8Fs1+mH1Cjo4aSkZSwRhsTG5Q1a1axEaiH0lMcUrFYeTimylBXXfE30ab2o9x6hQ5ONS/ePKpm4GLJ3jtP4cbiuz2I4WS+WIzQ/3sQuB1G8fJUb8e9GTm4mXD5jcfd5INxooVVN0C6DtP4e0+WCsqiO+9sY6AX+bvgr/AA66rMtn0uny2u69XWqpGtS/8oAQbDdyDJAQVvCCimOWSSM88wQXlB8825ozT4x24HqVDL3/ADDQ/ss3l01bbB9Rx9OWLfdzl1VZ5dDZdDZdDY6xG5HHV7L7UeihlHiUhdCNI5z+DwPh4q7x+Tr5bNXh83p/d5PDvWPa9ocwgtOoI4q9E78NmJ3G4SdQuutHEcJosSZlrKdkltzjvHmvFsdb/VCHLgx5Y+eNpwvCqXCoDDRx5Wk3JJuXHxSmOtI1V3FhpirqsN0L2lSgwcOaeew+UbQ9mzHa5sIa1na6Bu4aC/xusjNr4k6fMcvXx7aefdRINl96D6ns5R+gYPTQHR+XM/8AUdVr4a9NIh9Nxcfw8VYenu1PDVSrDXpruu473ElBtjcglAQYuQasv2UzH8Nx6INjgg8Xa7DTiOESCNuaeH7SMDiRvHuUHIx9dFPm4fi4Z+8PmIcCAVlPnJTdAugXQLoIvr5WQevge0VZg7uzae2pOMLz3f0nh8lPiz2x/ot8fmZMM68x9nfYRtBh2KNHYTBsttYpNHD6rQx5q38NvBy8eaPlnu9a6lWUoCCCbINPFcRgwyjkqqh1mtGg4uPIeK83vFK7lFly1xV6rPkUkr55XzSd+Rxe7qTcrGmdzt8ta02tMyi6449fZbDjiWMRtc28MNnyH5DzKn49Ou8fhb4WH4uWN+I7vqAWq+kU1T7RFo7zvVQZwtysa3kEFw3IJQEEEINedocwgoIpZC+Mh3eabFBaUHzHbDD4sOxh3YOGScdrk9gk6+V1l8mkUv2fO8/DGLN293iKupCAgICCboI/EHDRwOhHBDc729fD9psWoLNZU9rGP5cwzD37/ip68jJXwt4ubmx+J7OjodvactAr6KSJ3F0Ts7f2Ks15kfzL+P1Ss/XXT1W7ZYG5ub0pw8DE4H5KT9px/dY/8hx9fV/iWhiG3VBGw+gxSVEltC4ZGjqTr8F4vy6RG47ocnqmKsfJ3n+zi8UxSsxWftq2XNbusbo1nQfuqOTJOTyyc3IyZp3dqXXhCljXSODI2lz3GzWgbzyXYjc69yImZ1D6hsxhAwjDhG+xqJDnmd48vJauDF8On5fS8Tj/AAcep8y9hTLTVH21QXfhboPFBttCDNAQEBBU+1jdBXALBzrd43QWH90Hynams9Nx+seDdsb+xb0bofjdZOe/Vkl8zzMnXntP27f2eUoVUXAQEBAQEBAugcLLru5LrhsXXAmw10R13mxuzppmtxGvYWzEXijd+AHifH5LQ42HXz2bfA4k0j4l47uw6aK41FFVIWjs2993w8UGUEYYxoCDYCCUBAQEFEx9Ujmglgs0DwQUYjUiioKiqduijLvO2nxXm9umNo8t+ik2+z43mJJc7vE3J5nmsV8mXQRmXOwm44IF10LoF0C6BdAugXQLoMo2vllZFDG6SR5sxjBck9F2ImZ1DsRMzER7u92Y2UbSFtXibWvqBqyO9xH4nmVoYON097tvicD4fzZfLrQrbUYTSiFl3b+A5oKaeMl5kk751Pgg3GhBkgICAgh25BryetIG+aCwIOd25knODejUsMkslRIG5Y2F2g1Kr8mZ6NR7qHqE3+F00jcy5Gi2QxmqsXwtp2njK4Xt0Cp14uSfLLx+n57e2v1e7RbBQAA1tZJIfZiblHvVivDj+aV3H6VWO97be7SbN4PStGShieR+KUZz8VPXBjj2XacPBTxV4uNbEwzl0uFvED9/ZO1YenJQZOJFu9FPP6bW3fF2n7OMxHDa3DXWrad8Y9u12H/qGipZMdqfVGmTmwZcX1101L6BeEJdcC6BdBGZdEtu9wawFzjua0XJ8k89odjczqHQ4RsjiNeQ+pb6JDzePWPQKzj4t7ee0L+H0/Nk72jph3WD4HQ4Qy1NGDKRZ0ztXO+nRX8eKuOOzZwcbHhj5Y7/AHenvCkWFc0zYm3O/g0cUFEUTpH9rLq47m8kG6xtkGaAgICAgwcgpj9aRzuWiCxAQLICGhAQQ5rXNLXAEHeCENPFrNlMFqyXOomxOO90BMZ9w0UNuPjt7aU8nB49/wCXX6PJn2Bo3fcVtRH+trX/AEUU8KvtKtPpVJ+m0tc/w+N/VxIecX9V4/Yv+X+HifSf+TJn8PmA/aYm635YR9UjhfeXY9Jj3s36fYbCYiDM6onPJ0mUfCx+KkrxKQlr6ZgjzuXuUGGUGHgiipIYb7y1up6neVPWla/TC7jw48f0ViG4vaU01Qa0tVrkhs9/wCCIYCX9pK7M88Sg22tQWICAgICAgrkOhQVxaN66oM+CCp9RDHo6RvQaoKTWF2kUL3eJ0CDHNVyfibG3wGvvQR6I++YyvL+ZduQZNnnh0mYJG+03QoLo6mGTuv15O0KC4eCAgICAgxe9rBdzgOpQUOrW7oWmR3uCCsxzz27Z1m+yzQeaDZigEYFhYILg1BmgICAgICAgomBymwQapdVO0YGRj3koHorpPvZXnzQWMpY26NYgubHZBmGIJLEGLo0FEtKx+9oQU+huYfs5HN6FBOSqb3Zr9QCgf2z22f8Aigf2s/zGjo1AMNQ7vzut4IJZRMBuRc8yboNhkIboBYILWssgyAQSgICAgICAgIMS26CMiCciCQLIFkEoCCLIBCCMqCMiBkQMiCciBlQTZBKAgICAgICAgIP/2Q=="
                      />
                      Setup FREE WhatsApp Business Account
                    </div>
                    <h5 className=" text-gray-700 text-sm m-2">5 steps left</h5>
                  </div>
                  {/* Whatsapp business api */}
                  <div className="bg-[#ebf5f3] p-4 px-8">
                    <h5 className="text-gray-900 font-medium">START</h5>
                    <button
                      onClick={() => setShowApiDetails(!showApiDetails)}
                      type="button "
                      className="my-3 w-full flex justify-between gap-10"
                    >
                      <span className="font-bold">
                        Apply for WhatsApp Business API
                      </span>
                      <FontAwesomeIcon
                        icon={showApiDetails ? faChevronUp : faChevronDown}
                        className="hidden rounded-full p-1 border-gray-500 border lg:block"
                      />
                    </button>
                    {/* Show Details when button is clicked */}
                    {showApiDetails && (
                      <div className='py-5'>
                        <h5 className="text-md my-2 text-[#0a474c]">
                          Click on Continue With Facebook to apply for WhatsApp
                          Business API
                        </h5>
                        <h5 className="text-md my-2 text-gray-500 ">
                          Requirements to apply for WhatsApp Business API
                        </h5>
                        <h6 className="text-sm my-2 text-slate-500">
                          • A Registered Business & Working Website.
                        </h6>
                        <Link
                          className="text-md my-3 mb-5 text-[#0a474c] flex"
                          to=""
                        >
                          <FontAwesomeIcon
                            className="my-1 mx-2"
                            icon={faBookOpen}
                          />
                          <h5 className=" hover:underline">
                            How to apply for WhatsApp Business API?
                          </h5>
                        </Link>
                        <iframe className='border-2 border-slate-900 rounded-md' width="460" height="150" src="https://www.youtube.com/embed/6I5iprduEEw" title="How to Verify Facebook Business Manager Account for WhatsApp Business API | AiSensy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                      </div>
                    )}
                  </div>
                  {/* Remaining Steps */}
                  {showSteps && (
                    <>
                      {/* Phone & Display Name Verification */}
                      <div className="my-3 shadow-sm p-4 px-8 border rounded-md">
                        <button onClick={()=>setShowPhoneDetails(!showPhoneDetails)} className="flex text-slate-800 font-semibold">
                          Phone & Display Name Verification
                        </button>
                        {showPhoneDetails && (
                          <div className='py-5'>
                            
                            <h5 className="text-md my-3 text-gray-500 ">
                            Complete display name & phone number verification to increase WhatsApp messaging limit.
                            </h5>
                            
                            <Link
                              className="text-md my-2 mt-4 text-[#0a474c] flex"
                              to=""
                            >
                              <FontAwesomeIcon
                                className="my-1 mx-2"
                                icon={faBookOpen}
                              />
                              <h5 className=" hover:underline">
                                Phone Number Rules
                              </h5>
                            </Link>
                            <Link
                              className="text-md my-2 mt-4 text-[#0a474c] flex"
                              to=""
                            >
                              <FontAwesomeIcon
                                className="my-1 mx-2"
                                icon={faBookOpen}
                              />
                              <h5 className=" hover:underline">
                                Display Name Rules
                              </h5>
                            </Link>
                          </div>
                        )}
                      </div>
                      {/* Facebook Manager Verification */}
                      <div className="my-3 shadow-sm p-4 px-8 border rounded-md">
                        <button onClick={()=>setShowfbDetails(!showfbDetails)} className="flex text-slate-800 font-semibold">
                          Facebook Manager Verification
                        </button>
                        {showfbDetails && (
                          <div className='py-5'>
                            
                            <h5 className="text-md my-3 text-gray-500 ">
                            Complete your Facebook manager verification to increase WhatsApp messaging limit
                            </h5>
                            
                            <Link
                              className="text-md my-2 mt-4 text-[#0a474c] flex"
                              to=""
                            >
                              <FontAwesomeIcon
                                className="my-1 mx-2"
                                icon={faBookOpen}
                              />
                              <h5 className=" hover:underline">
                              How to apply for FB Verification?
                              </h5>
                            </Link>
                            <Link
                              className="text-md my-2 mt-4 text-[#0a474c] flex"
                              to=""
                            >
                              <FontAwesomeIcon
                                className="my-1 mx-2"
                                icon={faBookOpen}
                              />
                              <h5 className=" hover:underline">
                              FB Verification button greyed out?
                              </h5>
                            </Link>
                            <iframe className='border-2 border-slate-900 rounded-md' width="460" height="150" src="https://www.youtube.com/embed/6I5iprduEEw" title="How to Verify Facebook Business Manager Account for WhatsApp Business API | AiSensy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                          </div>
                        )}
                      </div>
                      {/* Setup Profile */}
                      <div className="my-3 shadow-sm p-4 px-8 border rounded-md">
                        <button onClick={()=>setShowProfileDetails(!showProfileDetails)} className="flex text-slate-800 font-semibold">
                          Setup Your Profile
                        </button>
                        {showProfileDetails && (
                          <div className='py-5'>
                            
                            <h5 className="text-md my-3 text-gray-500 ">
                            Customize your WhatsApp profile, to help understand your customers well.
                            </h5>
                            
                            <Link
                              className="text-md my-2 mt-4 text-[#0a474c] flex"
                              to=""
                            >
                              <FontAwesomeIcon
                                className="my-1 mx-2"
                                icon={faBookOpen}
                              />
                              <h5 className=" hover:underline">
                              How to Edit Business Profile?
                              </h5>
                            </Link>
                            {/* Edit Profile Button */}
                            <button className=' bg-[#e0e0e0] text-gray-500 rounded-md text-sm my-2 px-2 py-1.5 ' disabled>Edit Profile</button>
                          </div>
                        )}
                      </div>
                      {/* Apply for Green Tick */}
                      <div className="my-3 shadow-sm p-4 px-8 border rounded-md">
                        <button onClick={()=>setShowGreentick(!showGreenTickDetails)} className="flex text-slate-800 font-semibold">
                          Apply for Green Tick
                        </button>
                        {showGreenTickDetails && (
                          <div className='py-5'>
                            
                            <h5 className="text-md my-3 text-gray-500 ">
                            Get Verified Green Tick on your Whatsapp.
                            </h5>
                            <ul className='list-disc'>
                              <li className="text-md my-3 max-w-96 text-gray-700 ">
                              Make sure to go through all eligiblity criteria
                              before applying for Green Tick.
                              </li>
                              <li className="text-md my-3 mb-5 max-w-96 text-gray-700 ">
                              For any help contact <button className='text-[#0a474c]'>AiSensy Support.</button>
                              </li>
                            </ul>
                            <Link
                              className="text-md my-2 mt-4 text-[#0a474c] flex"
                              to=""
                            >
                              <FontAwesomeIcon
                                className="my-1 mx-2"
                                icon={faBookOpen}
                              />
                              <h5 className=" hover:underline">
                              WhatsApp Green Tick
                              </h5>
                            </Link>
                            <Link
                              className="text-md my-2 mt-4 text-[#0a474c] flex"
                              to=""
                            >
                              <FontAwesomeIcon
                                className="my-1 mx-2"
                                icon={faBookOpen}
                              />
                              <h5 className=" hover:underline">
                              FB Verification button greyed out?
                              </h5>
                            </Link>
                            <iframe className='border-2 border-slate-900 rounded-md' width="460" height="150" src="https://www.youtube.com/embed/6I5iprduEEw" title="How to Verify Facebook Business Manager Account for WhatsApp Business API | AiSensy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            {/* Edit Profile Button */}
                            <button className=' bg-[#e0e0e0] text-gray-500 rounded-md text-sm my-2 px-2 py-1.5 ' disabled>Apply for Green Tick</button>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                  {/* Steps toggle button */}
                  <button className='my-2 text-sm text-gray-600' onClick={() => setShowSteps(!showSteps)}>
                    {showSteps ? (
                      <div className='flex'>
                        <span className=''>Show fewer steps</span>
                        <FontAwesomeIcon
                        icon={ faChevronUp}
                        className=" rounded-full p-1 mx-2  border-gray-500 border text-xs"
                        />
                      </div>
                    ) : (
                      <div className='flex'>
                      <span className=''>All steps</span>
                      <FontAwesomeIcon
                      icon={ faChevronDown}
                      className=" rounded-full p-1 mx-2  border-gray-500 border text-xs"
                      />
                    </div>
                    )}
                  </button>
                </div>
                {/* Platform Walkthrough and Tutorials */}
                <div className="bg-white w-full border rounded-lg min-w-96 lg:px-16 px-6 py-6">
                      <h5 className='text-xl'>Platform Walkthrough & Tutorials</h5>
                      <Link
                              className="text-md my-2 mt-4 text-[#0a474c] flex"
                              to=""
                            >
                              <FontAwesomeIcon
                                className="my-1 mx-2"
                                icon={faBookOpen}
                              />
                              <h5 className=" hover:underline">
                              Read Platform Guide
                              </h5>
                      </Link>
                      <iframe className='border w-full border-slate-900 h-60 rounded-sm my-5' width="460" height="150" src="https://www.youtube.com/embed/6I5iprduEEw" title="How to Verify Facebook Business Manager Account for WhatsApp Business API | AiSensy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                      {/* Tutorials Toggle */}
                      <button 
                        className='my-2 text-sm text-gray-600' 
                        onClick={() => setShowtutorials(!showTutorials)}
                        >
                        {showTutorials ? (
                          <div className='flex'>
                            <span className=''>Show less</span>
                            <FontAwesomeIcon
                            icon={ faChevronUp}
                            className=" rounded-full p-1 mx-2  border-gray-500 border text-xs"
                            />
                          </div>
                        ) : (
                          <div className='flex'>
                          <span className=''>Explore Tutorials</span>
                          <FontAwesomeIcon
                          icon={ faChevronDown}
                          className=" rounded-full p-1 mx-2  border-gray-500 border text-xs"
                          />
                        </div>
                        )}
                      </button>
                      {showTutorials && (
                        <>
						{/* TEMPLATE */}
						<div className='py-5 my-3'>  
							<h5 className="text-lg font-semibold my-3  text-gray-500 ">
                            Template
                            </h5>
							<Link to=''  className=" my-2 mt-4 text-[#0a474c] flex">
								<FontAwesomeIcon className="my-1 mx-2" icon={faBookOpen}/>
								<h5 className=" hover:underline">
								How to Create WhatsApp Template Message?
                              	</h5>
							</Link>  
							<Link to=''  className=" my-2 mt-4 text-[#0a474c] flex">
								<FontAwesomeIcon className="my-1 mx-2" icon={faBookOpen}/>
								<h5 className=" hover:underline">
								Use chatbot parameters for leads
                              	</h5>
							</Link>  
							<Link to=''  className=" my-2 mt-4 text-[#0a474c] flex">
								<FontAwesomeIcon className="my-1 mx-2" icon={faBookOpen}/>
								<h5 className=" hover:underline">
								Add Quick Reply to WhatsApp Template Message
                              	</h5>
							</Link>  
							<Link to=''  className=" my-2 mt-4 text-[#0a474c] flex">
								<FontAwesomeIcon className="my-1 mx-2" icon={faBookOpen}/>
								<h5 className=" hover:underline">
								Message formatting guideline {`(Bold, Italic & more)`}
                              	</h5>
							</Link>  
						</div>
						{/* CAMPAIGN */}
						<div className='py-5 my-3'>  
							<h5 className="text-lg font-semibold my-3  text-gray-500 ">
                            Campaign
                            </h5>
							<Link to=''  className=" my-2 mt-4 text-[#0a474c] flex">
								<FontAwesomeIcon className="my-1 mx-2" icon={faBookOpen}/>
								<h5 className=" hover:underline">
								Audience segregation for WhatsApp Broadcast
                              	</h5>
							</Link>  
							<Link to=''  className=" my-2 mt-4 text-[#0a474c] flex">
								<FontAwesomeIcon className="my-1 mx-2" icon={faBookOpen}/>
								<h5 className=" hover:underline">
								Upgrade WhatsApp Tier Limit
                              	</h5>
							</Link>  
							<Link to=''  className=" my-2 mt-4 text-[#0a474c] flex">
								<FontAwesomeIcon className="my-1 mx-2" icon={faBookOpen}/>
								<h5 className=" hover:underline">
								Import upto 2 lakh contacts in one go
                              	</h5>
							</Link>   
						</div>
						{/* Live Chat & Attributes */}
                          <div className='py-5 my-3'>  
                            <h5 className="text-lg font-semibold my-3  text-gray-500 ">
                            Live Chat & Attribute
                            </h5>          
                            <Link
                              className="text-md my-2 mt-4 text-[#0a474c] flex"
                              to=""
                            >
                              <FontAwesomeIcon
                                className="my-1 mx-2"
                                icon={faBookOpen}
                              />
                              <h5 className=" hover:underline">
                              Add user attributes manually
                              </h5>
                            </Link>
                            <Link
                              className="text-md my-2 mt-4 text-[#0a474c] flex"
                              to=""
                            >
                              <FontAwesomeIcon
                                className="my-1 mx-2"
                                icon={faBookOpen}
                              />
                              <h5 className=" hover:underline">
                              Add/Remove Tag & update attribute
                              </h5>
                            </Link>
							<Link to=''  className=" my-2 mt-4 text-[#0a474c] flex">
								<FontAwesomeIcon className="my-1 mx-2" icon={faBookOpen}/>
								<h5 className=" hover:underline">
                              		Send & Generate media link
                              	</h5>
							</Link>
							<Link to=''  className=" my-2 mt-4 text-[#0a474c] flex">
								<FontAwesomeIcon className="my-1 mx-2" icon={faBookOpen}/>
								<h5 className=" hover:underline">
								Create Live chat without chatbot
                              	</h5>
							</Link>
							<Link to=''  className=" my-2 mt-4 text-[#0a474c] flex">
								<FontAwesomeIcon className="my-1 mx-2" icon={faBookOpen}/>
								<h5 className=" hover:underline">
								Add first message tag
                              	</h5>
							</Link>
                          </div>
						  {/* ChatBot and Integration */}
						  <div className='py-5 my-3'>  
							<h5 className="text-lg font-semibold my-3  text-gray-500 ">
                            Chatbot & Integration
                            </h5>
							<Link to=''  className=" my-2 mt-4 text-[#0a474c] flex">
								<FontAwesomeIcon className="my-1 mx-2" icon={faBookOpen}/>
								<h5 className=" hover:underline">
								Setup Welcome WhatsApp Chatbot
                              	</h5>
							</Link>  
							<Link to=''  className=" my-2 mt-4 text-[#0a474c] flex">
								<FontAwesomeIcon className="my-1 mx-2" icon={faBookOpen}/>
								<h5 className=" hover:underline">
								Create WhatsApp Button for Free
                              	</h5>
							</Link>  
							<Link to=''  className=" my-2 mt-4 text-[#0a474c] flex">
								<FontAwesomeIcon className="my-1 mx-2" icon={faBookOpen}/>
								<h5 className=" hover:underline">
								Create WhatsApp Link for Free
                              	</h5>
							</Link>   
						</div>
                        </>
                      )}
                </div>
            </div>
			{/* Right Container */}
			<div className='flex flex-col items-center py-8 lg:px-4 '>
				{/* Account Info */}
				<div className='w-full border my-3 shadow-md rounded-md p-4 bg-white'>
					<h4 className='text-md font-medium lg:text-lg'>Account Status : 
						<span className='text-[#0a474c]'>Test Mode</span>
					</h4>
					<p className='text-gray-500 text-sm my-2'>
					Test mode enables you to explore Broadcasting and Live Chat features of AiSensy before applying for WhatsApp API
					</p>
					<h5>Test Business Number : <span className='text-xl text-[#0a474c]'>+918142189823</span></h5>
					{/* Contact form */}
					<div>
						<div className='flex justify-between my-3'>
							<h5 className='text-lg  lg:text-lg mt-1'>Test Contact</h5>
							<button className=' bg-[#e0e0e0] text-gray-500 rounded-md text-sm my-2 px-2 py-1.5 ' disabled>Submit</button>
						</div>
						<h6 className='text-sm text-red-600'>Recharge WhatsApp Conversation Credits to get started.</h6>
						<div className='grid grid-cols-5 mt-4 my-5'>
							<div className='col-span-2 mt-1 text-sm'>
								<label>Contact Name</label>
							</div>
							<div className='col-span-3'>
								<input
								type='text'
									placeholder='Enter Name'
									className='border-2 border-gray-500 w-full rounded-md py-1 px-2'
								/>
							</div>
						</div>
						<div className='grid grid-cols-5 my-5'>
							<div className='col-span-2 mt-1 text-sm'>
								<label>WhatsApp Number</label>
							</div>
							<div className='col-span-3'>
								{/* <PhoneInput
									country='US'
									defaultCountry='India'
									value={phone}
									onChange={(phone)=>setPhoneValue(phone)}
								/> */}
								<input
								type='text'
									placeholder='Mobile Number'
									className='border-2 border-gray-500 w-full rounded-md py-1 px-2'
								/>
							</div>
						</div>
						<div className='grid grid-cols-2 gap-2'>
							<button className='w-full bg-gray-400 rounded-md py-2 text-white font-semibold' disabled>Try Broadcasting</button>
							<button className='w-full border border-gray-800  rounded-md py-2 text-gray-600' disabled>Try Live Chat</button>
						</div>
						<hr className='w-full  text-black my-4' />
						<p className='text-[#0a474c] text-center text'>Wish to setup AiSensy for your Business?</p>
						<button className='my-2 w-full rounded-md py-2 text-center text-white font-semibold bg-green-500 hover:bg-green-600'>FREE WhatsApp Business API</button>
					</div>
				</div>
				{/* Credits */}
				<div className='w-full my-3 border shadow-md rounded-md p-4 bg-white'>
					<div className='flex justify-between font-medium'>
						<h5>Free Service Conversation</h5>
						<h4 className='text-lg'>0/1000 used</h4>
					</div>
					<input
						type='range'
						value='0'
						className='w-full mt-2 '
					/>
					<div className='text-sm flex justify-between'>
						<span>0</span>
						<span>1000</span>
					</div>
					<h5 className='my-2'>WhatsApp Conversation Credits (WCC)</h5>
					<div className='flex justify-between my-3'>
                        <h5 className='text-2xl font-medium'>₹ 0.00</h5>
                           <button className='rounded-md p-2 text-sm text-white bg-[#0a474c] text-center font-medium'>Buy Now</button>     
                    </div>
				</div>
                {/* Plan Details */}
                <div className='w-full my-3 border shadow-md rounded-md p-4 bg-white'>
                    <div className='flex justify-between'>
                        <div>
                            <span className='text-gray-500'>Current Plan</span>
                            <br/>
                            <h3 className='text-xl'>BASIC</h3>
                        </div>
                        <span className='text-xs text-gray-500'>trial ends on 18/01/24</span>
                    </div>
                    <div className='flex justify-center'>
                        <button className='text-white font- text-center rounded-md px-10 py-2 my-4 w-80 bg-purple-800 hover:bg-purple-900'>Upgrade Now</button>
                    </div>
                </div>
			</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard
