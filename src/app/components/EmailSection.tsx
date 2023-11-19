"use client";
import React from 'react';
import GitHubIcon from "../../../public/images/icons/github-mark.svg";
import LinkedinIcon from "../../../public/images/icons/linkedin.svg";
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {

  const handleSubmit = async (e: any) =>{
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      submit: e.target.submit.value,
      message: e.target.message.value
    }
  
  const JSONdata = JSON.stringify(data);
  const endPoint = "api/send";

  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSONdata
  }
  const response = await fetch(endPoint, options);
  const resData = await response.json();
  if(resData.status === 'success'){
    console.log('Message sent.')
  }

  }

  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 px-12 gap-4'>
        <div>
            <h5 className='text-xl font-bold my-2'>Let's connect</h5>
            <p className='mb-4 max-w-md'>I'm currently looking for a 6 month internship in a web agency in Europe in a full-stack of front-end development position. I am open to any opportunity ! :) If you have any question or if you're interested by my porfile, contact me by any platform you want !</p>
            <div className='socials flex flex-row gap-2'>
              <Link href='https://github.com/poupsipoups' target='_blank'>
                  <Image src={GitHubIcon} alt='github icon' width={30} height={30}></Image>
              </Link>
              <Link href='https://www.linkedin.com/in/pauline-gobe/' target='_blank'>
                <Image src={LinkedinIcon} alt='Linkedin icon' width={30} height={30}></Image>
              </Link>
            </div>
        </div>
        <div>
          <form className='flex flex-col gap-4 my-2' onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className='block text-sm font-medium'>Your email</label>
              <input type="email" id='email' required placeholder='iwanttohireyou@gmail.com'
              className='border border-[#abdafc] rounded-md px-2 py-1 w-full' />
            </div>
            <div>
              <label htmlFor="subject" className='block text-sm font-medium'>Subject</label>
              <input type="text" id='subject' required placeholder='Hey !'
              className='border border-[#abdafc] rounded-md px-2 py-1 w-full' />
            </div>
            <div>
              <label htmlFor="message"/>
              <textarea id='message' required placeholder='Write what you whant in there :)'
              className='border border-[#abdafc] rounded-md px-2 py-1 w-full' />
            </div>
            <button
              type='submit'
              className='border-4 border-transparent bg-[#f970a9] hover:bg-transparent hover:border-4 hover:border-[#f970a9] text-white font-medium py-2 px-5 rounded-full w-full transition-all ease-in duration-200'
            >Send message</button>
          </form>
        </div>
    </section>
  )
}

export default EmailSection