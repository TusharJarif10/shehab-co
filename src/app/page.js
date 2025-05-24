'use client'
import { motion, useScroll } from 'framer-motion'
import Head from 'next/head'
import ContactForm from '@/components/Contact'

export default function Home() {
  const { scrollYProgress } = useScroll()

  return (
    <>
      <Head>
        <title>StratEdge Consulting | Business Growth Specialists</title>
        <meta name="description" content="Strategic business consulting for growth-focused organizations" />
      </Head>

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral to-neutral-focus text-neutral-content relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4 z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Strategic <span className="text-base-300">Business</span> Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Empowering organizations with data-driven strategies for sustainable growth
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn btn-primary btn-lg">Get Consultation</button>
            <button className="btn btn-outline btn-lg text-neutral-content border-neutral-content hover:bg-neutral-content hover:text-neutral">
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div 
          className="absolute bottom-0 left-0 w-full h-1/3 bg-base-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </section>

      {/* About Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-primary">StratEdge</span> Consulting
              </h2>
              <p className="text-lg mb-4">
                We are a premier business consultancy firm specializing in strategic planning, operational efficiency, and market expansion for mid-to-large sized enterprises.
              </p>
              <p className="text-lg mb-8">
                With over 15 years of industry experience, our team of experts delivers tailored solutions that drive measurable results and sustainable competitive advantages.
              </p>
              <button className="btn btn-primary">Our Approach</button>
            </div>
            <div className="lg:w-1/2">
              <div className="stats stats-vertical lg:stats-horizontal shadow bg-neutral text-neutral-content">
                <div className="stat">
                  <div className="stat-title">Years Experience</div>
                  <div className="stat-value">15+</div>
                </div>
                
                <div className="stat">
                  <div className="stat-title">Clients Worldwide</div>
                  <div className="stat-value">250+</div>
                </div>
                
                <div className="stat">
                  <div className="stat-title">Success Rate</div>
                  <div className="stat-value">98%</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-neutral text-neutral-content">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Comprehensive solutions designed to address your most critical business challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Strategic Planning",
                desc: "Data-driven strategies for sustainable growth and competitive advantage",
                icon: "📊"
              },
              {
                title: "Operational Excellence",
                desc: "Streamlining processes to maximize efficiency and reduce costs",
                icon: "⚙️"
              },
              {
                title: "Market Expansion",
                desc: "Strategic guidance for entering new markets and demographics",
                icon: "🌍"
              },
              {
                title: "Digital Transformation",
                desc: "Modernizing your business with cutting-edge technology solutions",
                icon: "💻"
              },
              {
                title: "Financial Advisory",
                desc: "Expert financial planning and investment strategies",
                icon: "💰"
              },
              {
                title: "Leadership Development",
                desc: "Building high-performance teams and executive capabilities",
                icon: "👥"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card bg-neutral-focus shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="card-body">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="card-title text-2xl">{service.title}</h3>
                  <p>{service.desc}</p>
                  <div className="card-actions justify-end mt-4">
                    <button className="btn btn-sm btn-primary">Learn more</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Hear from organizations that have transformed with our guidance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "StratEdge's strategic guidance helped us expand into three new markets within 18 months.",
                name: "Sarah Johnson",
                title: "CEO, TechForward Inc.",
                avatar: "👩‍💼"
              },
              {
                quote: "Their operational efficiency program saved us $2.4M in annual costs without workforce reduction.",
                name: "Michael Chen",
                title: "COO, GlobalManufacturing Co.",
                avatar: "👨‍💼"
              },
              {
                quote: "The digital transformation roadmap they provided was instrumental in our pivot to e-commerce.",
                name: "David Wilson",
                title: "Director, Retail Solutions Group",
                avatar: "👨‍💻"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card bg-base-200 shadow-lg"
              >
                <div className="card-body">
                  <div className="text-5xl mb-4">{testimonial.avatar}</div>
                  <p className="italic mb-6">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm opacity-70">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-content">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with one of our senior partners to discuss your strategic challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-accent btn-lg">Get Started</button>
            <button className="btn btn-outline btn-lg border-primary-content text-primary-content hover:bg-primary-content hover:text-primary">
              Contact Us
            </button>
          </div>
        </motion.div>
      </section>



<ContactForm />


      {/* Footer */}
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <span className="footer-title">Services</span> 
              <a className="link link-hover">Strategic Planning</a>
              <a className="link link-hover">Operational Excellence</a>
              <a className="link link-hover">Market Expansion</a>
              <a className="link link-hover">Digital Transformation</a>
            </div> 
            <div>
              <span className="footer-title">Company</span> 
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Leadership</a>
              <a className="link link-hover">Careers</a>
              <a className="link link-hover">Press</a>
            </div> 
            <div>
              <span className="footer-title">Legal</span> 
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </div> 
            <div>
              <span className="footer-title">Contact</span> 
              <a className="link link-hover">info@stratedge.com</a>
              <a className="link link-hover">+1 (555) 123-4567</a>
              <a className="link link-hover">123 Business Ave, Suite 500</a>
            </div>
          </div>
        </div>
      </footer> 
      <footer className="footer px-10 py-4 border-t bg-neutral text-neutral-content border-base-300">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="items-center grid-flow-col">
            <p>© 2023 StratEdge Consulting. All rights reserved.</p>
          </div> 
          <div className="flex gap-4 md:place-self-center md:justify-self-end">
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>


        </div>
      </footer>
    </>
  )
}