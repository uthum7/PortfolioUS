import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(
        () => {
          setFormStatus('success');
          e.target.reset();
        },
        (error) => {
          setFormStatus('error');
          console.error('Email send error:', error);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setFormStatus(''), 5000);
      });
  };

  return (
    <section id="contact" className="py-32 px-6 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/10 dark:via-purple-950/10 dark:to-pink-950/10" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-5xl font-black text-gray-900 dark:text-white mt-4">
            Let's Work Together
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
            Have a project in mind? Drop me a message and let's create something amazing.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label 
                  htmlFor="from_name" 
                  className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="from_name"
                  required
                  className="w-full px-6 py-4 bg-gray-50 dark:bg-slate-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label 
                  htmlFor="from_email" 
                  className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  id="from_email"
                  required
                  className="w-full px-6 py-4 bg-gray-50 dark:bg-slate-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label 
                htmlFor="message" 
                className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2"
              >
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                required
                className="w-full px-6 py-4 bg-gray-50 dark:bg-slate-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>

            {/* Status Messages */}
            {formStatus === 'success' && (
              <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-xl">
                <p className="text-center text-green-700 dark:text-green-300 font-semibold">
                  ✓ Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}

            {formStatus === 'error' && (
              <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-xl">
                <p className="text-center text-red-700 dark:text-red-300 font-semibold">
                  ✗ Failed to send message. Please try again or email me directly.
                </p>
              </div>
            )}
          </form>
        </div>

        {/* Alternative Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Or reach me directly at{' '}
            <a 
              href="mailto:uthumwijenayake@gmail.com" 
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              uthumwijenayake@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;