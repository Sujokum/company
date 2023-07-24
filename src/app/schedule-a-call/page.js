"use client"
import React , {useState} from 'react'
import Calender from '@/component/calenderCompo/Calender'
import {BiTime} from 'react-icons/bi'
import logo from '/public/images/logo.png'
import ExportedImage from "next-image-export-optimizer";
// import Image from 'next/image'

import { startOfToday } from 'date-fns'
import { DigitalTime  } from "react-clock-select";

const page = () => {
  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  // const [selectedTime , setSelectedTime] = useState()
  const [step , setStep] = useState(false)


  return (
    <div className='w-full flex flex-col gap-y-10  items-center  py-20 ' >
        <h1 className='text-[40px] text-center  font-nasalization text-blue' >Schedule Call</h1>

        <div className='w-full flex max-lg:flex-col max-lg:items-center items-start justify-center ' >
          <div className='w-[30%] px-3 ' >
              <div>
                <ExportedImage src={logo} alt='logo'  width={500} height={500} className='w-[80%]' />
              </div>
              <div>
                 <small className='text-gray'>AlphaLogicx infoSystem</small>
                 <h1 className='text-gray-900 text-2xl capitalize'>Introduction Call With AlphaLogicx infosystem</h1>

                 <div className='py-2' >
                    <p className='flex items-center text-gray' ><span><BiTime/></span> 30 min</p>
                 </div>
                 <div>
                  <h3>Agenda:</h3>
                  <ul className='list-disc ps-4 mt-3'  >
                    <li>Introduction of AlphaLogicx infoSystem</li>
                    <li>Requirement understanding</li>
                    <li>Similar work showcase</li>
                    <li>Next actions</li>
                  </ul>
                 </div>
              </div>

          </div>
          <div className='flex flex-col gap-[40px]  min-w-[30%]  ' >
            {
              !step ?
              <>
              <Calender selectedDay = {selectedDay} setSelectedDay = {setSelectedDay} />
              <div className='px-6 flex flex-col gap-3' >
                <h1 className='text-gray text-2xl' >Select Time</h1>
              <DigitalTime               
           type={"picker"}
           value={new Date()}
           placeholder={"Select Time.."}
           hoursFormat={12}
           size={2}
           selectorPosition={"top"}
           liveUpdater={true}
           baseColor={"rgb(255,255,255)"}
           hourHandColor={"white"}
           minuteHandColor={"#FFFFFF"}
           secondHandColor={"#4d944e"}
           onConfirm={(e,value)=>{
            console.log('time' , value.time_string)
            // setSelectedTime(value.time_string)
          
           }}
        />
            </div>
            </>
            :
            <div>
               <h1 className='text-2xl text-gray py-3' >Enter Details:</h1>
              <form className='flex  shadow-md px-3 bg-white py-3 flex-col gap-y-4 ' >
                <div className='flex flex-col' >
                  <label >
                     Name <span className='text-red-500' >*</span>
                  </label>
                    <input type="text" className='py-2 border-blue border rounded-md px-3' placeholder='Enter Your Name'  />
                </div>
                <div className='flex flex-col' >
                  <label >
                     Email <span className='text-red-500' >*</span>
                  </label>
                    <input type="text" className='py-2 border-blue border rounded-md px-3' placeholder='Enter Your Name'  />
                </div>
                <div className='flex flex-col' >
                  <label >
                     Phone Number <span className='text-red-500' >*</span>
                  </label>
                    <input type="text" className='py-2 border-blue border rounded-md px-3' placeholder='Enter Your Name'  />
                </div>
             
                <div className='flex flex-col' >
                <label>
                    Preferred Contact Mode <span className='text-red-500' >*</span>
                  
                  </label>
                  <select  className='py-2 border-blue border rounded-md px-3' >
                      <option value="Zoom_Call" key="zoom"> Zoom Conference Call </option>
                      <option value="phone_Call" key="zoom"> Phone Call </option>
                      <option value="whatsApp_Call" key="zoom"> Whatsapp Call </option>
                    </select>
                </div>
                <div className='flex flex-col' >
                <label>
                Send text messages to <span className='text-red-500' >*</span>
                  
                  </label>
                  <input type="text"  className='py-2 border-blue border rounded-md px-3' placeholder='Enter Your Name'  />
                </div>
             
                
                  <button className='bg-blue text-white rounded-xl px-8 py-2 mt-4' >Schedule Event</button>
              </form>
            </div>
            }
            <div className='flex justify-center' >
              {
                !step ?
              <button className='bg-blue text-white px-10 py-2' onClick={()=>setStep(!step)} >Next</button>
             :
              <button className='bg-orange text-white px-10 py-2' onClick={()=>setStep(!step)} >Prev</button>
             }
            </div>
          </div>
        </div>
    </div>
  )
}

export default page