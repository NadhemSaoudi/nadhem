import React from 'react';
import "./Contact.scss";
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import  { useState, useEffect } from "react";
import db from '../../../firebase';
const Contact = () => {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Phone, setPhone] = useState("");
  const [Message, setMessage] = useState("");
  const [Email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    setError("");
    try{db.collection("contacts")
      .add({
        First_: Firstname,
        Last_Name: Lastname,
        email: Email,
        message: Message,
        phone: Phone,
      })
      setError(" message sending successfully");

     }catch (err) {
        setError("Failed sending message", err);
      };

    setFirstname("");
    setLastname("");
    setPhone("");
    setEmail("");
    setMessage("");
  };
 

  return (
    <div className="container" id="contact">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="title"
      >
            <span>get in touch</span>
            <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
          className='contact_left_container'>
          <h3>Creative Solutions</h3>
          <p className='contact_text'>Turn your ideas into reality. Contact me for expert software development. Let's create something remarkable. Fill out the form below to get started!</p>
          {contacts.map(contact => {
            return (
              <div className='contact_left' key={contact.id} >
                <div className="icon">
                  {contact.icon}
                </div>
                <p>{ contact.infoText}</p>
              </div>
            )
          })}
          <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
            return (
              <div key={index} >
                {socialIcon}
              </div>
            )
          })}
          </div>
        </motion.div>
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [150,0], opacity: 1 }}
          transition={{duration: 1}}
          className="contact_right"
        
        >
        <form  onSubmit={handleSubmit}>
        <h3>Let's Build Your Dream Project</h3>
        <h3 style={{color:"red"}}>{error}</h3>
        <div className="row">
          <input type="text" placeholder='First Name'  value={Firstname}
          onChange={(e) => setFirstname(e.target.value)} />
          <input type="text" placeholder='Last name'  value={Lastname}
          onChange={(e) => setLastname(e.target.value)}  />
        </div>
        <div className="row">
          <input type="text" placeholder='Phone'   value={Phone}
          onChange={(e) => setPhone(e.target.value)} />
          <input type="email" placeholder='Email'  value={Email}
          onChange={(e) => setEmail(e.target.value)}  />
        </div>
        <div className="row">
          <textarea placeholder='message'  value={Message}
          onChange={(e) => setMessage(e.target.value)} ></textarea>
        </div>
        <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{duration: 0.3}}
        className="btn"
      >
        <a href="#">Send</a>
      </motion.div>
        </form>
       
        </motion.div>
      </div>
    </div>
  )
}

export default Contact