"use client"
import React , {useState} from 'react'
import Calender from '@/component/calenderCompo/Calender'
import {BiTime} from 'react-icons/bi'
import logo from '/public/images/logo.png'
import ExportedImage from "next-image-export-optimizer";
// import Image from 'next/image'
import toast, { Toaster } from 'react-hot-toast';
import { startOfToday } from 'date-fns'
import emailjs from 'emailjs-com';
import { DigitalTime  } from "react-clock-select";

const page = () => {
  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  const [selectedTime , setSelectedTime] = useState()

  const [fields , setFields] = useState({
    name : "",
    email : '',
    phone : "",
    callMode : "",
    textMessageNum : ""      
  })

  const [step , setStep] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone , callMode , textMessageNum } = fields;

    // Replace these values with your actual Email.js service details
    const serviceID = 'service_sxihvj9';
    const templateID = 'template_a4vi7yq';
    const userID = 'user_8TicjaWdRixPuefwf7YVd';

    


    emailjs
      .send(serviceID, templateID, {
        name,
        email,
        phone,
        callMode,
        textMessageNum,
        selectedDate : selectedDay,
        selectedTime : selectedTime

      }, userID)
      .then(
        (response) => {
          toast.success('Send Message Successfully')
          setFields({ name: '', email: '', phone: '' , callMode : "" , textMessageNum : "" });
        },
        (error) => {
          toast.error('Failed to send email. Please try again later.')
        }
      );
  };

  return (
    <div className='w-full flex flex-col gap-y-10  items-center  py-20 ' >
      <Toaster/>
        <h1 className='text-[40px] text-center  font-nasalization text-blue' >Schedule Call</h1>

        <div className='w-full flex max-lg:flex-col  max-lg:items-center items-start justify-center ' >
          <div className='max-lg:w-[100%] max-lg:items-center max-lg:flex max-lg:flex-col  w-[30%] px-3 ' >
              <div>
                <ExportedImage src={logo} alt='logo'  width={500} height={500} className='w-[80%]' />
              </div>
              <div>
                 <small className='text-gray'>AlphaLogicx infoSystem</small>
                 <h1 className='text-gray-900 text-2xl capitalize max-lg:mt-[20px] '>Introduction Call With AlphaLogicx infosystem</h1>

                 <div className='py-2' >
                    <p className='flex items-center text-gray' ><span><BiTime/></span> 30 min</p>
                 </div>
                 <div>
                  <h3 className='max-lg:mt-[20px]' >Agenda:</h3>
                  <ul className='list-disc ps-4 mt-3 '  >
                    <li>Introduction of AlphaLogicx infoSystem</li>
                    <li>Requirement understanding</li>
                    <li>Similar work showcase</li>
                    <li>Next actions</li>
                  </ul>
                 </div>
              </div>

          </div>
          <div className='flex flex-col max-lg:flex-row gap-[40px] max-lg:mt-[40px]   min-w-[30%]  ' >
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
            setSelectedTime(value.time_string)
          
           }}
        />
            </div>
            </>
            :
            <div   >
               <h1 className='text-2xl text-gray py-3' >Enter Details:</h1>
              <form className='flex  shadow-md px-3 max-sm:w-full  max-lg:w-[400px] rounded-[20px] bg-white py-3 flex-col gap-y-4 ' >
                <div className='flex flex-col' >
                  <label >
                     Name <span className='text-red-500' >*</span>
                  </label>
                    <input name='name' value={fields.name} onChange={e => setFields({...fields , name : e.target.value})}  type="text" className='py-2 border-blue border rounded-md px-3' placeholder='Enter Your Name'  />
                </div>
                <div className='flex flex-col' >
                  <label >
                     Email <span className='text-red-500' >*</span>
                  </label>
                    <input type="email" name='email' value={fields.email} onChange={e => setFields({...fields , email : e.target.value})} className='py-2 border-blue border rounded-md px-3' placeholder='Enter Your Email'  />
                </div>
                <div className='flex flex-col' >
                  <label >
                     Phone Number <span className='text-red-500' >*</span>
                  </label>
                    <input type="text" name='phone' value={fields.phone} onChange={e => setFields({...fields , phone : e.target.value})} className='py-2 border-blue border rounded-md px-3' placeholder='Enter Your Phone'  />
                </div>
             
                <div className='flex flex-col' >
                <label>
                    Preferred Contact Mode <span className='text-red-500' >*</span>
                  
                  </label>
                  <select  className='py-2 border-blue border rounded-md px-3'  name='name' value={fields.callMode} onChange={e => setFields({...fields , callMode : e.target.value})} >
                      <option value="Zoom_Call" key="zoom"> Zoom Conference Call </option>
                      <option value="phone_Call" key="zoom"> Phone Call </option>
                      <option value="whatsApp_Call" key="zoom"> Whatsapp Call </option>
                    </select>
                </div>
                <div className='flex flex-col' >
                <label>
                Send text messages to <span className='text-red-500' >*</span>
                  
                  </label>
                  <input type="text" name='textMessageNum' value={fields.textMessageNum} onChange={e => setFields({...fields , textMessageNum : e.target.value})}  className='py-2 border-blue border rounded-md px-3' placeholder='Enter Your Text Number'  />
                </div>
             
                
                  <button onClick={handleSubmit} className='bg-blue text-white rounded-xl px-8 py-2 mt-4' >Schedule Event</button>
              </form>
            </div>
            }
            <div className='flex justify-center' >
              {
                !step ?
              <button className='bg-blue text-white h-[40px] px-10 py-2' onClick={()=>setStep(!step)} >Next</button>
             :
              <button className='bg-orange text-white h-[40px] px-10 py-2' onClick={()=>setStep(!step)} >Prev</button>
             }
            </div>
          </div>
        </div>
    </div>
  )
}

export default page