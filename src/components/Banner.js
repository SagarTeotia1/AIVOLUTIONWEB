import { useState, useEffect, useCallback } from "react";
import headerImg from "../assets/img/cropped_circle_image.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // REMOVED: unused 'index' state to fix compiler warning
  const toRotate = [ "Society", "Community", "Family" ];
  const period = 2000;

  // Wrapped tick in useCallback to fix 'missing dependencies' warning
  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [isDeleting, loopNum, text.length, toRotate, period]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta, tick]); // Included missing dependencies

  return (
    <section className="relative min-h-screen flex items-center py-20 lg:py-32 overflow-hidden" id="home">
      
      {/* Background Gradient Spotlights */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10 mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10 mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content - Increased width slightly and added padding */}
          <div className="w-full md:w-6/12 lg:w-7/12 order-2 md:order-1 text-left">
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : "opacity-0"}>
                
                <span className="inline-block px-4 py-2 mb-6 border border-secondary/50 bg-secondary/10 text-secondary font-bold font-mono tracking-widest text-xs md:text-sm uppercase backdrop-blur-sm">
                  Innovating the Future
                </span>
                
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  {`We are `} 
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-2 min-h-[1.2em]">
                    {text}
                    <span className="border-r-4 border-white ml-1 animate-pulse"></span>
                  </span>
                </h1>
                
                <p className="text-gray-400 text-base md:text-lg lg:text-xl leading-relaxed mb-10 max-w-xl border-l-4 border-primary/50 pl-6 bg-black/10 backdrop-blur-[2px] py-4 rounded-r-xl">
                  The official Artificial Intelligence Society of MAIT, Delhi. We are a vibrant community of curious, creative, and ambitious minds.
                </p>
                
                <a 
                  href="https://chat.whatsapp.com/IAwNmxi4lyG8z52Zh3QTbU?mode=ems_copy_t" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center group gap-3 text-lg md:text-xl font-bold text-white transition-all duration-300"
                >
                  <span className="border-b-2 border-transparent group-hover:border-primary group-hover:text-primary transition-all pb-1">Join the Revolution</span> 
                  <ArrowRightCircle size={25} className="group-hover:translate-x-2 group-hover:text-primary transition-all duration-300" />
                </a>
              </div>}
            </TrackVisibility>
          </div>

          {/* Hero Image - Constrained more strictly to prevent overlap */}
          <div className="w-full md:w-5/12 lg:w-4/12 flex justify-center order-1 md:order-2">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : "opacity-0"}>
                  <div className="animate-[float_6s_ease-in-out_infinite] w-full flex justify-center">
                    <img 
                      src={headerImg} 
                      alt="AIvolution Logo" 
                      className="w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[420px] h-auto object-contain drop-shadow-[0_0_30px_rgba(163,27,246,0.3)] filter contrast-110"
                    />
                  </div>
                </div>}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  )
}