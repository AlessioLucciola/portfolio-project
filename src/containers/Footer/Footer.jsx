import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { Popup, SectionDivider } from '../../components';

const Footer = () => {
  const [formValues, setFormValues] = useState({ name: '', surname: '', email: '', message: '' });
  const [focused, setFocused] = useState({ name: false, surname: false, email: false, message: false });
  const [popup, setPopup] = useState({trigger: false, title: '', description: ''});
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const emailRegex = "^[a-zA-Z0-9_!#$%&*+/=?`{|}~^-]+(?:\\.[a-zA-Z0-9_!#$%&’*+/=?`{|}~^-]+)*@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$"
    if (formValues['name'] === '' || formValues['surname'] === '' || formValues['email'] === '' || !formValues['email'].match(emailRegex) || formValues['message'] === '')
      console.log("Form Debug: Something's wrong. Please, check the data.")
    else {
      emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        setLoading(false);
        setPopup({'trigger': true, 'title': 'Email Sent Successfully', 'description': 'You will receive an answer as soon as possible.'});
        resetForm();
      }, (error) => {
        setPopup({'trigger': true, 'title': 'An Error Occurred', 'description': error.text});
        setLoading(false);
      });
    }
  }

  const resetForm = () => {
    setFormValues({name: '', surname: '', email: '', message: ''})
  }

  const handleFocus = (e) => {
    setFocused({...focused, [e.target.name]: true});
  }

  return (
    <>
      <a id='contact' />
      <div className='app-container'>
        <h2 className='head-text'>
          Contact.
        </h2>

        <div className='app-section'>
          <form ref={form} onSubmit={handleSubmit} className='flex flex-col gap-2'>
              <input className='app-form-field' type='text' placeholder='Name' name='name' value={formValues['name']} onChange={(e) => setFormValues({...formValues, [e.target.name]: e.target.value})} errormessage='Name field cannot be left blank' required />
              <input className='app-form-field' type='text' placeholder='Surname' name='surname' value={formValues['surname']} onChange={(e) => setFormValues({...formValues, [e.target.name]: e.target.value})} errormessage='Surname field cannot be left blank' required />
              <input className='app-form-field' type='text' placeholder='Email' name='email' value={formValues['email']} onChange={(e) => setFormValues({...formValues, [e.target.name]: e.target.value})} errormessage='Type a valid email address' pattern='^[a-zA-Z0-9_!#$%&*+/=?`{|}~^-]+(?:\\.[a-zA-Z0-9_!#$%&*+/=?`{|}~^-]+)*@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$' required />
              <textarea className='app-form-field' type='text' placeholder='Your Message' name='message' value={formValues['message']} onChange={(e) => setFormValues({...formValues, [e.target.name]: e.target.value})} errormessage='Message field cannot be left blank' required />
              <button type='submit' className='app-button'>
                {loading ? 'Sending' : 'Send Message'}
              </button>
          </form>
        </div>

        <div className='app-section mt-2'>
          <p className='text-center'>
            Or you can send me a message on <a href='https://t.me/alessiolucciola' target='_blank' rel='noreferrer' className='text-[--secondary-color]'>Telegram</a>
          </p>
        </div>

        <SectionDivider />

        <div className='app-section mt-[1rem]'>
          <p className='text-center'>
            Made with ❤️ (and a pinch of Javascript) by Alessio Lucciola
          </p>
        </div>
      </div>
      <Popup trigger={popup['trigger']} title={popup['title']} description={popup['description']} onClick={() => setPopup({...popup, 'trigger': false})} />
    </>
  )
}

export default Footer