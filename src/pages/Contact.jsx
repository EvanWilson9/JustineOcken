import React from 'react'

function Contact() {
  return (
    <div className="contact-page-container">
      <div className="page-wrapper">
        <div className="contact-container">
          <div className='contact-form'>
            <div className='contact-form-title'>Lets Talk!</div>
            <div className='input-space'>
              <label>Name</label>
              <input className='name-input'/>
            </div>
            <div className='input-space'>
              <label>Email</label>
              <input className='email-input'/>
            </div>
            <div className='input-space'>
              <label>Message</label>
              <textarea className='message-input'></textarea>
            </div>
            <div className='send-button-container'>
              <button className='send-button'>Send</button>
            </div>
          </div>
          <div>
            <img className='contact-logo' src="/images/justine-logo.jpg"/>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Contact