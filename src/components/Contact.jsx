'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';

export default function ContactSection() {
  const { scrollYProgress } = useScroll();

  const bgOffsetY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const [topic, setTopic] = useState('');

  return (
    <section className="py-20 relative overflow-hidden px-4">
      {/* Background Stars */}
      <motion.div
        className="absolute inset-0 bg-[url('/stars.png')] bg-cover opacity-20 -z-10"
        style={{ y: bgOffsetY }}
      />

      {/* Floating planet */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-purple-700 to-blue-400 rounded-full blur-xl"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -150]),
          scale: useTransform(scrollYProgress, [0, 1], [1, 1.2]),
        }}
      />

      {/* Form Content */}
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Contact Our Experts</h2>
          <p className="text-lg max-w-xl mx-auto">
            Reach out to us for personalized consultancy and support.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-neutral/80 text-white/80 rounded-md focus:outline-none"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-neutral/80 text-white/80 rounded-md focus:outline-none"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          {/* Dropdown */}
          <div>
            <label className="block mb-2 text-sm font-medium">Consultancy Topic</label>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-4 py-2 bg-neutral/80 text-white/80 rounded-md focus:outline-none"
              required
            >
              <option value="">Select a topic</option>
              <option value="advisory-hour">Advisory Hour</option>
              <option value="marketing-strategy">Marketing Audit & Strategy</option>
              <option value="team-building">Build My Marketing Team</option>
              <option value="consultancy">Business Consultancy</option>
              <option value="mentorship">One to One Mentorship</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 bg-neutral/80 text-white/80 rounded-md focus:outline-none"
              placeholder="How can we help you?"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary px-6 py-3 text-neutral-content text-lg font-semibold rounded-lg"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
