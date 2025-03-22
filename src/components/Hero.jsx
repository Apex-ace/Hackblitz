import { curve, heroBackground, robot } from "../assets";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
// import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
// import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import TypingText from "./TypingText";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] relative overflow-hidden"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-8 sm:mb-10 md:mb-20 lg:mb-[6.25rem]">
          <div className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6
                         animate-fade-in-up">
            <span className="text-sm font-medium text-white/80">ACM Student Chapter Presents</span>
          </div>
          <h1 className="h1 mb-6 text-3xl sm:text-4xl md:text-4xl">
            <span className="inline-block relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              <TypingText 
                text="Hackblitz" 
                className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80" 
              />
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2 animate-slide-up"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 text-sm sm:text-base md:text-lg leading-relaxed
                       animate-fade-in-up delay-300">
            Join us for an unforgettable experience at Hackblitz, where innovation meets competition! Participate in an intense 8-hour hackathon at Jhulelal Institute of Technology, Lonara, Nagpur, organized by the ACM Student Chapter. Showcase your skills for a chance to win exciting prizes and exclusive goodies!
          </p>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 animate-fade-in-up delay-700">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8/80 backdrop-blur-sm rounded-[1rem] border border-white/10
                          hover:border-white/20 transition-colors duration-300">
              <div className="h-[1.4rem] bg-n-10/80 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]
                           transition-transform duration-700 hover:scale-105"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                {/* <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" /> */}

                <ScrollParallax isAbsolutelyPositioned>
                  {/* <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul> */}
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex
                             animate-fade-in-up delay-1000"
                    title="People Registered"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full opacity-50 animate-pulse-slow"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block animate-fade-in-up delay-1000" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero; 