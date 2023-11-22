'use client';
import React from 'react';

import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast'; 

type FormInput = {
    email: string;
    subject: string;
    message: string;
  };

const ContactFormComponent = () => {

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset,
      } = useForm<FormInput>();

      
      async function onSubmit(formData: FormInput) { 
        await fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
    
          body: JSON.stringify({
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        }).then(() => {
          // Toast notification
          toast.success('Your email message has been sent successfully');
        });
    
        reset();
      }

  return (
    <div>
        <form className='flex flex-col gap-4 my-2' onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="email" className='block text-sm font-medium'>Your email</label>
            <input 
                type="email" 
                id='email' 
                required 
                {...register('email')}
                placeholder='iwanttohireyou@gmail.com'
                className='border border-[#abdafc] rounded-md px-2 py-1 w-full' />
        </div>
        <div>
            <label htmlFor="subject" className='block text-sm font-medium'>Subject</label>
            <input 
                type="text" 
                id='subject' 
                required 
                {...register('subject')}
                placeholder='Hey !'
                className='border border-[#abdafc] rounded-md px-2 py-1 w-full' />
        </div>
        <div>
            <label htmlFor="message"/>
            <textarea 
                id='message' 
                required 
                {...register('message')}
                placeholder='Write what you whant in there :)'
                className='border border-[#abdafc] rounded-md px-2 py-1 w-full' />
        </div>
        <button  
              type='submit'
              className='border-4 border-transparent bg-[#f970a9] hover:bg-transparent hover:border-4 hover:border-[#f970a9] text-white font-medium py-2 px-5 rounded-full w-full transition-all ease-in duration-200'
              disabled={isSubmitting}
            >Send message</button>
        </form>
      </div>
  )
}

export default ContactFormComponent