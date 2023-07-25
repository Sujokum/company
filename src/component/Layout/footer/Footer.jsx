"use client"
import React  , {useState} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Icon } from "@iconify/react";
import emailjs from 'emailjs-com';
const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Replace these values with your actual Email.js service details
    const serviceID = 'service_sxihvj9';
    const templateID = 'template_a4vi7yq';
    const userID = 'user_8TicjaWdRixPuefwf7YVd';

    


    emailjs
      .send(serviceID, templateID, {
        name,
        email,
        message,
      }, userID)
      .then(
        (response) => {
          toast.success('Send Message Successfully')
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          toast.error('Failed to send email. Please try again later.')
        }
      );
  };
  return (
    <section className="w-full flex flex-wrap  mt-auto  min-h-[404px] ">
      <Toaster/>
    <div className=" boxShadow flex order-1  px-14   py-[50px] flex-col items-center h-full bg-[#424143] w-[100%]  md:w-[50%] lg:w-[40%]">
      <div className="w-full  ">
        <h1 className="text-blue font-steelfish text-4xl">Contact Us</h1>
        <p className="text-white  sm:text-md md:text-xl font-poppins xs:text-lg">
          Do you need more information? Please contact us to find more about
          our products and services.
        </p>
      </div>
      <div className="w-full">
        <form className="flex flex-col">
          <div className="flex flex-col py-4">
            <label className="text-white font-poppins text-lg">First Name</label>
            <input
              className="bg-transparent text-white border-t-0 border-r-0 border-l-0 border-b-2 border-white outline-none"
              type="text"
              placeholder="Name"
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col py-4">
            <label className="text-white text-lg font-poppins ">Email Address</label>
            <input
              className="bg-transparent text-white border-t-0 border-r-0 border-l-0 border-b-2 border-white outline-none"
              type="text"
              placeholder="Email Here ..."
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col py-4">
            <label className="text-white text-lg font-poppins ">Your Message</label>
            <textarea
              className="bg-transparent text-white border-t-0 border-r-0 border-l-0 border-b-2 border-white outline-none"
              type="text"

              name='message'
              value={formData.message}
              placeholder="Your Message.."
              onChange={handleChange}
            />
            
          </div>
          <button onClick={handleSubmit}  className="mr-auto mt-3 bg-orange text-white font-poppins px-6 py-2 rounded-3xl text-xl">
            Send Message
          </button>
        </form>
      </div>
    </div>
    <div className="flex   min-h-[404px] max-lg:order-2 order-3 flex-col items-center w-[100%] md:w-[50%]  lg:w-[30%]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d807.8145831890074!2d74.35185402936096!3d35.9161763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e64993f0e6c903%3A0x8e22fcf3964d5fbf!2sTech%20ALPHALOGIX%20Pvt.%20Ltd.!5e0!3m2!1sen!2s!4v1683532647601!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div className="flex flex-col px-[20px] max-lg:order-3 order-2 py-[50px] min-h-[404] bg-blue w-[100%] md:w-[100%] lg:w-[30%]">
      <div className="heading  ">
        <h1 className="text-white text-4xl font-steelfish">
          Contact Information
        </h1>
      </div>

      {/* contact Information Start  */}
      <div className="flex h-full items-start flex-col">
        <div className="flex justify-between py-3 items-start gap-5">
          {/* <img className="w-[25px] h-[25px]"  src="/Images/icons/location.png" alt="location icon" /> */}
          <svg
            width="30"
            height="30"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.45837 10.9966H5.09207L2.95874 14.4099H14.9054L12.7721 10.9966H10.4058"
              stroke="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.1989 5.69827C13.1989 8.21176 8.93219 12.7033 8.93219 12.7033C8.93219 12.7033 4.66553 8.21176 4.66553 5.69827C4.66553 3.1212 6.87054 1.62573 8.93219 1.62573C10.9938 1.62573 13.1989 3.12077 13.1989 5.69827Z"
              stroke="white"
              strokeLinecap="square"
            />
            <circle
              cx="8.9321"
              cy="5.89206"
              r="1.28"
              stroke="white"
              strokeLinecap="square"
            />
          </svg>
          <div>
            <p className="text-white text-lg font-poppins ">
              Amir Hayat Hamiya market, Naveed Shaeed Road, Gilgit Pakistan
            </p>
          </div>
        </div>
        <div className="flex justify-center items-start py-3  gap-5">
          <svg
            width="25"
            height="25"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="8.93217"
              cy="12.17"
              r="0.96"
              stroke="white"
              strokeLinecap="square"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.7723 15.05H5.09226C4.38533 15.05 3.81226 14.4769 3.81226 13.77V2.24997C3.81226 1.54305 4.38533 0.969971 5.09226 0.969971H12.7723C13.4792 0.969971 14.0523 1.54305 14.0523 2.24997V13.77C14.0523 14.4769 13.4792 15.05 12.7723 15.05Z"
              stroke="white"
              strokeLinecap="square"
            />
          </svg>
          <div className="" >
            <p className="text-white text-lg font-poppins">+92 3334594176</p>
            <p className="text-white text-lg font-poppins">+92 3554211028</p>
          </div>
        </div>
        <div className="flex justify-center items-center py-3  gap-5">
          <Icon
            icon="mdi:world-wide-web"
            className="text-[24px] text-white"
          />
          <div className="text-sm" >
            <p className="text-white text-lg font-poppins">https://www.techalphalogix.com/</p>
          </div>
        </div>
        <div className="flex justify-center items-center py-3  gap-5">
          <svg
            width="25"
            height="25"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4121 4.81006L8.93215 9.29006L4.45215 4.81006"
              stroke="white"
              strokeLinecap="square"
            />
            <rect
              x="1.89209"
              y="2.25"
              width="14.08"
              height="11.52"
              stroke="white"
              strokeLinecap="square"
            />
            <path
              d="M5.73215 9.92993L4.45215 11.2099"
              stroke="white"
              strokeLinecap="square"
            />
            <path
              d="M12.1321 9.92993L13.4121 11.2099"
              stroke="white"
              strokeLinecap="square"
            />
          </svg>

          <div className = 'text-sm'  >
            <p className="text-white text-lg font-poppins">info@techalphalogix.com</p>
          </div>
        </div>
        <div className=" w-full text-2xl flex justify-center text-white flex-wrap mt-auto items-center py-3  gap-3">
          <h1 className = 'text-white' ><Icon icon="ph:github-logo-fill" /></h1>
          <h1 className = 'text-white' ><Icon icon="ic:baseline-whatsapp" /></h1>
          <h1 className = 'text-white' ><Icon icon="ri:facebook-fill" /></h1>
          <h1 className = 'text-white' ><Icon icon="ph:behance-logo-bold" /></h1>
          <h1 className="text-white" ><Icon icon="ri:linkedin-fill" /></h1>
          <h1 className = "text-white" ><Icon icon="mdi:instagram" /></h1>
        </div>
      </div>
      {/* contact Information End */}
    </div>
   
  </section>
  )
}

export default Footer