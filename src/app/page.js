'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import Head from 'next/head'
import ContactForm from '@/components/Contact'
import Image from 'next/image'


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
      <section className="py-24 bg-base-100">
        <div className="container mx-auto px-4 xl:px-0">
          {/* Section Header with Staggered Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-primary font-medium mb-3"
            >
              OUR EXPERTISE
            </motion.p>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              Comprehensive Business Solutions
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="mx-auto w-24 h-1 bg-primary mb-6"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="text-lg text-base-content/80 max-w-3xl mx-auto"
            >
              Tailored strategies and innovative approaches to drive your business forward in today's competitive landscape.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                title: "Strategic Planning",
                desc: "Data-driven strategies for sustainable growth and competitive advantage",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                color: "primary"
              },
              {
                title: "Operational Excellence",
                desc: "Streamlining processes to maximize efficiency and reduce costs",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                color: "secondary"
              },
              {
                title: "Market Expansion",
                desc: "Strategic guidance for entering new markets and demographics",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: "accent"
              },
              {
                title: "Digital Transformation",
                desc: "Modernizing your business with cutting-edge technology solutions",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                ),
                color: "info"
              },
              {
                title: "Financial Advisory",
                desc: "Expert financial planning and investment strategies",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: "success"
              },
              {
                title: "Leadership Development",
                desc: "Building high-performance teams and executive capabilities",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                color: "warning"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "backOut"
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className={`relative card bg-base-200 h-full border-l-4 border-${service.color} hover:shadow-xl transition-all duration-300`}>
                  <div className="card-body p-8">
                    <div className={`mb-6 p-3 rounded-lg w-fit bg-${service.color}/10 text-${service.color}`}>
                      {service.icon}
                    </div>
                    <h3 className="card-title text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-base-content/70 mb-6">{service.desc}</p>
                    <div className="card-actions">
                      <button className={`btn btn-${service.color} btn-sm rounded-full px-6`}>
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <button className="btn btn-primary btn-wide rounded-full px-8 text-lg">
              Explore All Services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </motion.div>
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