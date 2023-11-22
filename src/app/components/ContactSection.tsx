"use client";
import React from 'react';
import GitHubIcon from "../../../public/images/icons/github-mark.svg";
import LinkedinIcon from "../../../public/images/icons/linkedin.svg";
import Link from 'next/link';
import Image from 'next/image';
import {motion} from "framer-motion";
import ContactFormComponent from './ContactFormComponent';

const ContactSection = () => {

  // const handleSubmit = async (e: any) =>{
  //   e.preventDefault();

  //   const data = {
  //     email: e.target.email.value,
  //     submit: e.target.submit.value,
  //     message: e.target.message.value
  //   }
  
  // const JSONdata = JSON.stringify(data);
  // const endPoint = "api/send";

  // const options = {
  //   method: 'POST',
  //   headers: {
  //     'Content-type': 'application/json'
  //   },
  //   body: JSONdata
  // }
  // const response = await fetch(endPoint, options);
  // const resData = await response.json();
  // if(resData.status === 'success'){
  //   console.log('Message sent.')
  // }

  // }

  return (
    <motion.section 
      key="contact"
      id='contact' 
      className='grid md:grid-cols-2 my-12 md:my-12 py-24 px-12 gap-4'
      initial={{opacity:0}} 
      animate={{opacity: 1}} 
      transition={{duration:0.75, ease: "easeOut"}}
      exit={{opacity:0}}>
        <div>
            <h5 className='text-xl font-bold my-2'>Let&apos;s connect</h5>
            <p className='mb-4 max-w-md'>I&apos;m currently looking for a 6 month internship in a web agency in Europe in a full-stack of front-end development position. I am open to any opportunity ! :) If you have any question or if you&apos;re interested by my porfile, contact me by any platform you want !</p>
            <div className='socials flex flex-row gap-2'>
              <Link href='https://github.com/poupsipoups' target='_blank'>
                  <Image src={GitHubIcon} alt='github icon' width={30} height={30}></Image>
              </Link>
              <Link href='https://www.linkedin.com/in/pauline-gobe/' target='_blank'>
                <Image src={LinkedinIcon} alt='Linkedin icon' width={30} height={30}></Image>
              </Link>
            </div>
        </div>
        <ContactFormComponent></ContactFormComponent>
    </motion.section>
  )
}

export default ContactSection