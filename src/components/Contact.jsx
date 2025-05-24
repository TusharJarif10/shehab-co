'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'general',
    company: '',
    message: '',
    phone: '',
    agreeToTerms: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('Form submitted:', formData)
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        inquiryType: 'general',
        company: '',
        message: '',
        phone: '',
        agreeToTerms: false
      })
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="card bg-success text-success-content p-8 shadow-lg max-w-2xl mx-auto">
        <div className="card-body items-center text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <h2 className="card-title text-2xl">Thank You!</h2>
          <p className="text-lg">Your message has been successfully submitted. Our team will get back to you within 24-48 hours.</p>
          <button 
            onClick={() => setSubmitSuccess(false)}
            className="btn btn-outline mt-4"
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="card bg-base-100 shadow-xl max-w-2xl mx-auto">
      <div className="card-body">
        <h2 className="card-title text-3xl mb-2">Contact Our Team</h2>
        <p className="mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="input input-bordered"
                required
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                className="input input-bordered"
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Company</span>
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="input input-bordered"
              />
            </div>
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Type of Inquiry*</span>
            </label>
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="select select-bordered"
              required
            >
              <option value="general">General Inquiry</option>
              <option value="sales">Sales Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="partnership">Partnership Opportunity</option>
              <option value="careers">Careers</option>
              <option value="media">Media/Press</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="textarea textarea-bordered h-32"
              placeholder="How can we help you?"
              required
            ></textarea>
          </div>
          
          <div className="form-control">
            <label className="label cursor-pointer justify-start gap-2">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="checkbox checkbox-primary"
                required
              />
              <span className="label-text">
                I agree to the <a href="#" className="link link-primary">privacy policy</a> and <a href="#" className="link link-primary">terms of service</a>*
              </span>
            </label>
          </div>
          
          <div className="card-actions justify-end mt-6">
            <button
              type="submit"
              className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}