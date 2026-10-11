import { useState } from 'react';

function Contact() {
  const [result, setResult] = useState('');
  const [status, setStatus] = useState('idle');

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    setResult('Sending…');
    const formData = new FormData(event.target);

    formData.append('access_key', '8f1310d6-55b7-425d-8e4c-bab40f64a599');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setStatus('success');
      setResult('Message received. I will be in touch soon.');
      event.target.reset();
    } else {
      console.log('Error', data);
      setStatus('error');
      setResult(data.message);
    }
  };

  return (
    <div className="page contact-page">
      <header className="page-intro">
        <p className="kicker">The studio</p>
        <div className="intro-row">
          <h1>Let&apos;s talk.</h1>
          <p>
            Commissions, questions about a piece, or a note to say hello — send
            a message and I will get back to you.
          </p>
        </div>
      </header>

      <div className="contact-layout">
        <aside className="contact-aside">
          <img
            className="contact-portrait"
            src="/images/contact-pic3.png"
            alt="Illustration for Justine Ocken studio contact"
          />
          <div className="contact-card">
            <p className="kicker">Prefer social</p>
            <p>
              Daily work and finished pieces live on Instagram.
            </p>
            <a
              className="text-link"
              href="https://www.instagram.com/art_justine58/"
              target="_blank"
              rel="noreferrer"
            >
              @art_justine58
            </a>
          </div>
        </aside>

        <form onSubmit={onSubmit} className="contact-form">
          <label className="field">
            <span>Name</span>
            <input type="text" name="name" autoComplete="name" required />
          </label>
          <label className="field">
            <span>Email</span>
            <input type="email" name="email" autoComplete="email" required />
          </label>
          <label className="field">
            <span>Message</span>
            <textarea
              name="message"
              rows="6"
              required
              placeholder="Tell me about the subject, medium, and timeline if you have one."
            />
          </label>
          <div className="form-footer">
            <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            {result && (
              <p className={`form-status is-${status}`} role="status">
                {result}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
