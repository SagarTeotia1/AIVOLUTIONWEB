import { useState } from "react";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send Message');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    
    try {
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({ success: true, message: 'Message sent successfully'});
        } else {
            setStatus({ success: false, message: 'Something went wrong, please try again later.'});
        }
    } catch (error) {
        setStatus({ success: false, message: 'Network error. Please try again later.'});
    } finally {
        setButtonText("Send Message");
    }
  };

  return (
    <section className="relative py-24 bg-dark" id="connect">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Side: Image - Throttled Observer */}
          <div className="w-full md:w-1/2">
            {/* Added 'once' so animation only plays the first time it enters view */}
            <TrackVisibility once partialVisibility offset={200}>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : "opacity-0"}>
                   <img 
                    src={contactImg} 
                    alt="Contact Us" 
                    className="w-[80%] mx-auto drop-shadow-[0_0_20px_rgba(163,27,246,0.2)]"
                   />
                </div>
              }
            </TrackVisibility>
          </div>

          {/* Right Side: Form */}
          <div className="w-full md:w-1/2">
            <TrackVisibility once partialVisibility offset={200}>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : "opacity-0"}>
                  <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-6">
                    Get In Touch
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <input 
                        type="text" 
                        value={formDetails.firstName} 
                        placeholder="First Name" 
                        onChange={(e) => onFormUpdate('firstName', e.target.value)} 
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-all duration-200"
                        required 
                      />

                      <input 
                        type="text" 
                        value={formDetails.lastName} 
                        placeholder="Last Name" 
                        onChange={(e) => onFormUpdate('lastName', e.target.value)} 
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-all duration-200"
                        required
                      />

                      <input 
                        type="email" 
                        value={formDetails.email} 
                        placeholder="Email Address" 
                        onChange={(e) => onFormUpdate('email', e.target.value)} 
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-all duration-200"
                        required 
                      />

                      <input 
                        type="tel" 
                        value={formDetails.phone} 
                        placeholder="Phone No." 
                        onChange={(e) => onFormUpdate('phone', e.target.value)}
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-all duration-200"
                      />
                    </div>

                    <textarea 
                      rows="4" 
                      value={formDetails.message} 
                      placeholder="Message" 
                      onChange={(e) => onFormUpdate('message', e.target.value)} 
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-all duration-200 resize-none"
                      required
                    ></textarea>

                    <button 
                      type="submit" 
                      className="px-10 py-3 bg-white text-black font-bold font-mono text-lg rounded-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-md"
                    >
                      {buttonText}
                    </button>

                    {status.message && (
                      <div className={`mt-4 p-3 rounded border text-sm ${status.success ? "bg-green-500/10 border-green-500/50 text-green-400" : "bg-red-500/10 border-red-500/50 text-red-400"}`}>
                        {status.message}
                      </div>
                    )}
                  </form>
                </div>
              }
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  )
}