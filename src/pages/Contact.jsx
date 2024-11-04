import React from 'react';

//Make artpiece background && change hue
function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e71062bb-4879-43f5-b5b8-2e799bf5ceed");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact-page-container'>
      <div className="page-wrapper">
        <div className="contact-container">
          <form onSubmit={onSubmit} className='contact-form'>
            <div className='contact-form-title'>Lets Talk!</div>
            <input type="hidden" name="access_key" value="e71062bb-4879-43f5-b5b8-2e799bf5ceed"/>
            <div className='input-space'>
              <label>Name</label>
              <input className='name-input' id="input" type="text" name="name" required/>
            </div>
            <div className='input-space'>
              <label>Email</label>
              <input className='email-input' id="input" type="email" name="email" required/>
            </div>
            <div className='input-space'>
              <label>Message</label>
              <textarea className='message-input' name="message" required></textarea>
            </div>
            <div className='send-button-container'>
              <button className='send-button' type="submit">Send</button>
            </div>
            </form>
          <div className='contact-pic-container'>
            <img className='contact-pic' src='/images/contact-pic3.png'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact