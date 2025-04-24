import {useState} from "react";
import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.init(import.meta.env.VITE_PUBLIC_KEY);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({name: "", email: "", message: ""});
      })
      .catch((e) => {
        console.log(e);
        alert("Something went wrong. Please try again.");
      });
  };
  return (
    <section
      id='contact'
      className='min-h-screen flex items-center justify-center py-20'
    >
      <RevealOnScroll>
        <div className='px-4 min-w-[200px] w-full sm:w-[400px] md:w-[600px] lg:w-[800px]'>
          <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-violet-400 bg-clip-text text-transparent text-center'>
            Get In Touch
          </h2>
          <form
            className='space-y-6'
            onSubmit={handleSubmit}
          >
            <div className='relative'>
              <input
                type='text'
                id='name'
                name='name'
                required
                value={formData.name}
                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-red-500 focus:bg-red-500/5'
                placeholder='Name'
                onChange={(e) =>
                  setFormData({...formData, name: e.target.value})
                }
              />
            </div>
            <div className='relative'>
              <input
                type='email'
                id='email'
                name='email'
                required
                value={formData.email}
                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-red-500 focus:bg-red-500/5'
                placeholder='example@gmail.com'
                onChange={(e) =>
                  setFormData({...formData, email: e.target.value})
                }
              />
            </div>
            <div className='relative'>
              <textarea
                id='message'
                name='message'
                required
                rows={5}
                value={formData.message}
                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-red-500 focus:bg-red-500/5'
                placeholder='Your Message'
                onChange={(e) =>
                  setFormData({...formData, message: e.target.value})
                }
              />
            </div>
            <button
              type='submit'
              className='w-full bg-red-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
