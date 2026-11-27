import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (event) => setForm({ ...form, [event.target.name]: event.target.value })

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setStatus('')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `New Portfolio Message from ${form.name}`,
          from_name: 'Maria Portfolio',
          ...form,
        }),
      })
      const data = await response.json()
      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', project: '', message: '' })
      } else setStatus('error')
    } catch (error) {
      console.error(error)
      setStatus('error')
    } finally { setLoading(false) }
  }

  return (
    <section id="contact" className="contact-section section-pad">
      <div className="section-container contact-layout">
        <div className="contact-copy">
          <p className="section-kicker">LET'S CONNECT <span /></p>
          <h2>Have an idea?<br /><em>Let's make it real.</em></h2>
          <p className="contact-intro">Have a website, application or product in mind? Tell me a little about it. I'd love to hear what you're working on.</p>
          <div className="contact-details">
            <a href="https://github.com/mariakhan-dev" target="_blank" rel="noreferrer"><span>⌘</span><div><small>GITHUB</small><strong>github.com/mariakhan-dev ↗</strong></div></a>
            <div className="contact-note"><span>✿</span><div><small>PROJECT ENQUIRIES</small><strong>Use the form and tell me about your idea.</strong></div></div>
          </div>
        </div>
        <div className="contact-form-card">
          <div className="form-heading"><span>01 / START A PROJECT</span><h3>Tell me what you're dreaming up.</h3></div>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label>Your name<input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required /></label>
              <label>Email address<input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required /></label>
            </div>
            <label>What do you need?
              <select name="project" value={form.project} onChange={handleChange} required>
                <option value="">Choose a project type</option><option>Business website</option><option>E-commerce website</option><option>Full-stack web application</option><option>Website redesign</option><option>API / integrations</option><option>Something else</option>
              </select>
            </label>
            <label>Tell me a little about it<textarea name="message" value={form.message} onChange={handleChange} rows="5" placeholder="A few details about your idea, goals or timeline..." required /></label>
            <button type="submit" disabled={loading}>{loading ? 'Sending message…' : 'Send message ↗'}</button>
            {status === 'success' && <p className="form-success">Thank you! Your message has been sent.</p>}
            {status === 'error' && <p className="form-error">Sorry, your message couldn't be sent. Please try again.</p>}
          </form>
          <p className="form-note">Your project details stay between us.</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
