import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dbxylca', 'template_lhpxkra', form.current, {
        publicKey: 'IlV9WX0WattBVb_Ii', // Твій Public Key
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Error sending message. Please try again.');
        }
      );
  };

  return (
    <footer className="px-4 sm:px-6 md:px-10 lg:px-20" id="my-section">
      <div className="w-full h-[1px] bg-[#484848] mt-16 sm:mt-24 mb-10 sm:mb-14"></div>
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:gap-20 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start w-full">
            <h2 className="uppercase text-lg sm:text-xl">Let’s connect</h2>
            <div className="mt-4 mb-8 flex flex-col gap-2">
              <p className="body--text">
                Say hello at{" "}
                <a
                  className="text-white underline decoration-[#D3E97A] decoration-[1px] underline-offset-4"
                  href="mailto:pytulyalybomyr@gmail.com"
                >
                  pytulyalybomyr@gmail.com
                </a>
              </p>
              <p className="body--text">
                For more info, here’s my{" "}
                <a
                  className="text-white underline decoration-[#D3E97A] decoration-[1px] underline-offset-4"
                  href="/"
                >
                  page about
                </a>
              </p>
            </div>
            <div className="flex justify-center lg:justify-start gap-6 items-center">
              <img src="linkedin.svg" alt="LinkedIn" className="w-6 sm:w-8" />
              <img src="github.svg" alt="GitHub" className="w-6 sm:w-8" />
              <img src="instagram.svg" alt="Instagram" className="w-6 sm:w-8" />
              <img src="x.svg" alt="Twitter (X)" className="w-6 sm:w-8" />
            </div>
          </div>
          <div className="w-full max-w-[400px]">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col items-start lg:items-start w-full">
              <label className="!mt-0" htmlFor="Name">Name</label>
              <input className="body--text w-full p-2 rounded-md" type="text" name="user_name" placeholder="John Doe" />

              <label htmlFor="Email">Email</label>
              <input className="body--text w-full p-2 rounded-md" type="email" name="user_email" placeholder="example@gmail.com" />

              <label htmlFor="Subject">Subject</label>
              <input className="body--text w-full p-2 rounded-md" type="text" name="subject" placeholder="Developer" />

              <label htmlFor="Message">Message</label>
              <textarea
                className="body--text w-full p-2 h-[120px] resize-none rounded-md"
                name="message"
                placeholder="Write your message here..."
              ></textarea>

              <button
                type="submit"
                className="py-3 px-6 rounded-full bg-n1 uppercase !text-black body--text mt-6 w-full sm:w-auto"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
