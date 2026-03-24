import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    // Replace with your actual EmailJS credentials
    const SERVICE_ID = 'service_52gjz2r';
    const TEMPLATE_ID = 'template_it3db2t';
    const PUBLIC_KEY = 'Go_W8SsN--mcJ-jvx';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        formRef.current?.reset();
        setTimeout(() => setStatus('idle'), 5000);
      }, (error) => {
        console.error(error.text);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-12 bg-white/5 backdrop-blur-xl rounded-none p-8 shadow-2xl relative overflow-hidden group transition-all duration-500">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 ml-1">Name</label>
            <input
              type="text"
              name="from_name"
              required
              placeholder="Your Name"
              className="w-full bg-black/40 border border-white/5 rounded-none px-4 py-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-all font-mono text-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 ml-1">Email</label>
            <input
              type="email"
              name="from_email"
              required
              placeholder="Your Email Address"
              className="w-full bg-black/40 border border-white/5 rounded-none px-4 py-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-all font-mono text-sm"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 ml-1">Message</label>
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Your Message"
            className="w-full bg-black/40 border border-white/5 rounded-none px-4 py-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-all font-mono text-sm resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className={`w-full py-4 rounded-none flex items-center justify-center font-bold tracking-[0.3em] uppercase transition-all duration-300 border border-transparent cursor-pointer ${
            status === 'sending' 
              ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
              : 'bg-white text-black hover:bg-[#0a0a0f] hover:text-white hover:border-white/20 active:scale-[0.98]'
          }`}
        >
          {status === 'sending' ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
            />
          ) : (
            'Send'
          )}
        </button>

        <AnimatePresence>
          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-white text-xs font-mono text-center absolute -bottom-8 left-0 right-0"
            >
              Thanks! Your message has been sent successfully.
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-rose-400 text-xs font-mono text-center absolute -bottom-8 left-0 right-0"
            >
              Oops! Something went wrong. Please try again.
            </motion.p>
          )}
        </AnimatePresence>
      </form>

      {/* Decorative scan line back */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-indigo-500/5 to-transparent h-1/2 w-full -translate-y-full group-hover:animate-scan pointer-events-none" />
    </div>
  );
}
