"use client";

import React ,{useState} from 'react'

const ContactUs = () => {



    const [formData , setFormData]= useState({
        name:'',
        company:'',
        contact:'',
        email:'',
        subject:'',
        message:'',
    })
    const [error , setError] = useState('')
    const handleChange = (e) =>{

        setFormData({...formData,[e.target.name]: e.target.value})
    }
    const validatecontact = (contact) =>{

        const pattern = /^\+\d{1,3}\d{10}$/
        return pattern.test(contact)
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      const { name, company, contact, email, subject, message } = formData;
    
      if (!name||!company||!contact||!email||!subject||!message) {
        setError('Please fill all the fields !');
        return;
      }
    
      if (!validatecontact(contact)) {
        setError('Please enter a valid contact no with country code');
        return;
      }
    
      try {
        const res = await fetch('/api/sendmail', {
          method:'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
    
        const data = await res.json();
    
        if (!res.ok) {
          throw new Error(data.error || 'Something went wrong');
        }
        alert('Message Sent Successfully!');
        console.log('Form Submitted!', formData);
        setError('');
        setFormData({
          name: '',
          company: '',
          contact: '',
          email: '',
          subject: '',
          message: '',
        });
      } catch (err) {
        console.error(err);
        setError('Failed to send message. Please try again later.');
      }
    };


  return (
    <div className='min-h-screen  bg-gradient-to-r bg-gray-100 flex items-center justify-center p-2'>

        <div className='bg-white shadow-lg rounded-lg flex w-full max-w-4xl'>

            <div className='w-[45%] p-4 bg-white flex flex-col justify-center items-center rounded-l-lg'>
               
               <img src='images/Contactus.svg' alt='Contactimg' width={300} className='mb-4'/>
                
            </div>

            <div className='w-[55%] bg-[#7e93a2]  text-white p-4 rounded-r-lg'>

              <form className='flex flex-col space-y-3' autoComplete='off' onSubmit={handleSubmit}>

                {error && <p className='text-red-500 font-medium'>{error}</p>}

                <div>

                    <label className='text-sm font-semibold '>NAME</label>
                    <input type='text' name='name' value={formData.name} onChange={handleChange} autoComplete='off' placeholder='Full Name' className='w-full p-1.5 rounded text-black  bg-white '/>

                </div>

                <div>

                    <label className='text-sm font-semibold '>COMPANY NAME</label>
                    <input type='text'name='company' value={formData.company} onChange={handleChange}  placeholder='Company Name' autoComplete='off' className='w-full p-1.5 rounded text-black  bg-white '/>

                </div>

                <div>

                    <label className='text-sm font-semibold '>CONTACT NUMBER</label>
                    <input type='text' name='contact' value={formData.contact} onChange={handleChange}  placeholder='Eg: +91...' autoComplete='off' className='w-full p-1.5 rounded text-black  bg-white '/>

                </div>

                <div>

                    <label className='text-sm font-semibold '>EMAIL ADDRESS</label>
                    <input type='email' name='email' value={formData.email} onChange={handleChange}  placeholder='Enter a valid email' autoComplete='off' className='w-full p-1.5 rounded text-black  bg-white '/>

                </div>

                <div>

                    <label className='text-sm font-semibold '>MESSAGE SUBJECT</label>
                    <textarea name='subject' value={formData.subject} onChange={handleChange}  autoComplete='off' placeholder='Briefly describe the subject' className='w-full p-1.5 rounded text-black resize-none  bg-white '></textarea>

                </div>

                <div>

                    <label className='text-sm font-semibold '>MESSAGE</label>
                    <textarea name='message' value={formData.message} onChange={handleChange}  autoComplete='off' placeholder='Write your message here' className='w-full p-1.5 rounded text-black resize-none h-24 bg-white'></textarea>

                </div>

                <button type='submit' className=' text-white  bg-[oklch(39.1%_0.09_240.876)] font-bold py-2 px-4 rounded hover:bg-[oklch(29.3%_0.066_243.157)] transition'>Send Message</button>

              </form>

            </div>

        </div>

    </div>
  )
}

export default ContactUs
