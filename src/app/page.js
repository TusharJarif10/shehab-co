'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import Head from 'next/head'
import ContactForm from '@/components/Contact'
import Image from 'next/image'
import Footer from '@/components/Footer'


export default function Home() {


  const services = [
    {
      title: 'Digital Marketing Services',
      description: 'Custom websites and web applications built with modern technologies.',
      icon: '💻',
    },
    {
      title: 'Enterprise Software & IT Solutions',
      description: 'iOS and Android applications with responsive design.',
      icon: '📱',
    },
    {
      title: 'Business Analytics & Market Research',
      description: 'Beautiful and intuitive user interfaces for better experiences.',
      icon: '🎨',
    },
    {
      title: 'Content, Design & Production',
      description: 'Improve your search rankings and online visibility.',
      icon: '🔍',
    },
    {
      title: 'Marketplace Optimization',
      description: 'Scalable cloud infrastructure for your business needs.',
      icon: '☁️',
    },
  ];



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
      <section className="min-h-screen flex items-center justify-center text-neutral-content relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/her.jpg"
            alt="Professional business team"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4 z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Strategic <span className="text-neutral-content/60">Business</span> Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
            Empowering organizations with data-driven strategies for sustainable growth
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn btn-primary btn-lg hover:scale-105 transition-transform">
              Get Consultation
            </button>
            <button className="btn btn-outline btn-lg text-neutral-content border-neutral-content hover:bg-neutral-content hover:text-neutral hover:scale-105 transition-transform">
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


      {/* consultancy Section */}
      <section className="py-20 relative overflow-hidden px-2">
        {/* Cosmic Background Elements */}
        <div className="absolute inset-0 -z-10">
          {/* Far Stars (subtle twinkling) */}
          <motion.div
            className="absolute inset-0 bg-[url('/stars.png')] bg-cover opacity-30"
            initial={{ y: 0, opacity: 0.3 }}
            style={{
              y: useTransform(useScroll().scrollYProgress, [0, 9], [0, -200]),
              opacity: useTransform(useScroll().scrollYProgress, [0, 0.1], [0.3, 0.6])
            }}
            animate={{
              x: [0, -30, 0, 7],
              y: [0, -30, 7, 0],
              transition: {
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          />

          {/* Additional twinkling stars for more depth */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`twinkle-${i}`}
              className="absolute bg-white rounded-full"
              style={{
                width: `${1 + Math.random() * 2}px`,
                height: `${1 + Math.random() * 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 7,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}

          {/* Mountains (main parallax layer) */}
          <motion.div
            className="absolute bottom-0 w-full h-full bg-[url('/mountains.png')] bg-cover bg-bottom"
            initial={{ y: 0 }}
            style={{
              y: useTransform(useScroll().scrollYProgress, [0, 1], [0, 200]),
              opacity: useTransform(useScroll().scrollYProgress, [0, 0.5], [1, 0.8])
            }}
          />

          {/* Planets (floating in mid-space) */}
          <motion.div
            className="absolute top-1/5 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-indigo-600 to-yellow-400 shadow-xl "
            initial={{ y: 0 }}
            style={{
              y: useTransform(useScroll().scrollYProgress, [0, 1], [0, -100]),
              x: useTransform(useScroll().scrollYProgress, [0, 1], [0, -50]),
              scale: useTransform(useScroll().scrollYProgress, [0, 1], [1, 1.1])
            }}
          />

          {/* Shooting Stars (animated) */}
          <motion.div
            className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-white"
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{
              x: [0, 100, 200],
              y: [0, -50, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatDelay: 10
            }}
          />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                Our Consulting Services
              </h2>
              <p className="text-xl max-w-2xl mx-auto">
                Expert solutions tailored to your business challenges
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 - New Card Design */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="card bg-base-300/50 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Card Header */}
                <div className="bg-primary/70 text-primary-content p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary-focus">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Advisory Hour</h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="card-body p-6">
                  <p className="mb-6">Comprehensive business strategy development to align your vision with actionable roadmaps for sustainable growth.</p>
                  <div className="card-actions">
                    <button className="btn">Learn more</button>
                  </div>
                </div>
              </motion.div>

              {/* Service 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                className="card bg-base-300/50 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Card Header */}
                <div className="bg-secondary/70 text-secondary-content p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-secondary-focus">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Marketing Audit & Strategy</h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="card-body p-6">
                  <p className="mb-6">Streamline processes, reduce costs, and enhance productivity through lean methodologies and best practices.</p>
                  <div className="card-actions">
                    <button className="btn">Learn more</button>
                  </div>
                </div>
              </motion.div>

              {/* Service 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, margin: "-50px" }}
                className="card bg-base-300/50 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Card Header */}
                <div className="bg-accent/70 text-accent-content p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-accent-focus">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Build My Marketing Team</h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="card-body p-6">
                  <p className="mb-6">Data-driven strategies for entering new markets, identifying opportunities, and scaling your business globally.</p>
                  <div className="card-actions">
                    <button className="btn">Learn more</button>
                  </div>
                </div>
              </motion.div>

              {/* Service 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true, margin: "-50px" }}
                className="card bg-base-300/50 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Card Header */}
                <div className="bg-info/70 text-info-content p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-info-focus">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Business Consultancy</h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="card-body p-6">
                  <p className="mb-6">Modernize your operations with cutting-edge technology solutions tailored to your business needs.</p>
                  <div className="card-actions">
                    <button className="btn ">Learn more</button>
                  </div>
                </div>
              </motion.div>

              {/* Service 5 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
                className="card bg-base-300/50 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Card Header */}
                <div className="bg-success/70 text-success-content p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-success-focus">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">One to One Mentorshi</h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="card-body p-6">
                  <p className="mb-6">Identify, assess, and mitigate business risks with comprehensive risk management frameworks.</p>
                  <div className="card-actions">
                    <button className="btn ">Learn more</button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>



      {/* Services Section */}
      <section className="py-28 bg-base-300 relative overflow-hidden px-4">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          {/* Large Planet */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 9.08 }}
            animate={{
              x: ["-15%", "5%", "-15%"],
              y: ["-15%", "5%", "-15%"],
              rotate: [0, 120, 240, 360]
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
              opacity: { duration: 1.5 }
            }}
            viewport={{ once: true }}
            className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-teal-600/50 to-slate-900/50 blur-[5px]"
          />


          {/* Abstract Floating Shape */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 7.1 }}
            animate={{
              x: ["-15%", "5%", "-15%"],
              y: ["-15%", "5%", "-15%"],
              rotate: [0, 120, 240, 360]
            }}
            transition={{
              duration: 90,
              repeat: Infinity,
              ease: "linear",
              opacity: { duration: 1.5 }
            }}
            viewport={{ once: true }}
            className="absolute top-1/4 left-1/4 w-80 h-80 border-2 border-indigo-300/90 rounded-[50%] blur-[3px]"
          /> */}

          {/* Small Planet */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 20.5 }}
            animate={{
              x: ["15%", "-5%", "15%"],
              y: ["25%", "-5%", "25%"],
              rotate: [360, 240, 120, 0]
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
              opacity: { duration: 9.5 }
            }}
            viewport={{ once: true }}
            className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-slate-800/50 to-indigo-500/50 blur-[5px]"
          />

          {/* Abstract Floating Shape */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 7.1 }}
            animate={{
              x: ["15%", "-5%", "15%"],
              y: ["25%", "-5%", "25%"],
              rotate: [360, 240, 120, 0]
            }}
            transition={{
              duration: 90,
              repeat: Infinity,
              ease: "linear",
              opacity: { duration: 1.5 }
            }}
            viewport={{ once: true }}
            className="absolute bottom-1/4 right-1/4 w-50 h-50 border-2 border-indigo-300/90 rounded-[50%] blur-[3px]"
          /> */}
        </div>

        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.9, y: 0 }}
                whileHover={{ opacity: 1, y: -10 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="bg-base-100/70 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}

            {/* Add an empty div to center when there's an odd number of services */}
            {services.length % 2 !== 0 && (
              <div className="hidden md:block md:col-span-2 lg:hidden" />
            )}
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
                  <p className="italic mb-6">{testimonial.quote}</p>
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


      <div className='py-10'>
        <ContactForm />
      </div>


      <Footer />

    </>
  )
}