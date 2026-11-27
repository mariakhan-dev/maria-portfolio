import { useState } from 'react'
function Contact() {
  const [form,setForm] = useState({name:'',email:'',project:'',message:''})
  const [status,setStatus] = useState('')
  const [loading,setLoading] = useState(false)
  const handleChange = e => setForm({...form,[e.target.name]:e.target.value})
  const handleSubmit = async e => {
    e.preventDefault(); setLoading(true); setStatus('')
    try {
      const response = await fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({access_key:import.meta.env.VITE_WEB3FORMS_KEY,subject:`New Portfolio Message from ${form.name}`,from_name:'Maria Portfolio',...form})})
      const data = await response.json()
      if(data.success){setStatus('success');setForm({name:'',email:'',project:'',message:''})}else setStatus('error')
    } catch { setStatus('error') } finally { setLoading(false) }
  }
  return <section id="contact" className="contact-section section-shell"><div className="section-kicker"><span>03 / LET’S MAKE SOMETHING</span><i /></div><div className="contact-grid"><div className="contact-copy"><p className="section-label">GET IN TOUCH</p><h2>Have a good idea?<br /><em>Let’s build it.</em></h2><p>Tell me what you’re thinking about — a website, a web application or a digital product. I’d love to hear about it.</p><div className="contact-note"><span>✳</span><div><b>Have a project to discuss?</b><small>Share a few details and I’ll get back to you.</small></div></div><div className="contact-social"><a href="https://github.com/mariakhan-dev" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div><form className="contact-form" onSubmit={handleSubmit}><div className="form-heading"><span>START A CONVERSATION</span><b>Tell me a little about your project.</b></div><div className="form-row"><label>Your name<input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" /></label><label>Email address<input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" /></label></div><label>What do you need?<select name="project" value={form.project} onChange={handleChange} required><option value="">Choose a project type</option><option>Business Website</option><option>E-Commerce Website</option><option>Full-Stack Web Application</option><option>Website Redesign</option><option>Other</option></select></label><label>Project details<textarea name="message" value={form.message} onChange={handleChange} required rows="5" placeholder="A little about your idea, goals and timeline..." /></label><button type="submit" disabled={loading}>{loading?'Sending your message…':'Send message'} <span>↗</span></button>{status==='success'&&<p className="form-success">Thank you — your message has been sent.</p>}{status==='error'&&<p className="form-error">Your message could not be sent. Please try again.</p>}</form></div></section>
}
export default Contact