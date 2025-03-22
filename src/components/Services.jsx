import Section from "./Section";
import Heading from "./Heading";
import { service3 } from "../assets";
import { brainwaveServicesIcons } from "../constants";
import { VideoBar, VideoChatMessage, Gradient } from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Our Theme"
          text="Hackblitz transforms visionary ideas into groundbreaking innovations"
        />

        {/* Service3 Block */}
        <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
          <div className="py-12 px-4 xl:px-8">
            <h4 className="h4 mb-4">About Hackblitz</h4>
            <p className="body-2 mb-[2rem] text-n-3">
            AI/ML, AR/VR, WEB3, ANDROID, IOT, GAME DEV
            </p>
            <ul className="flex items-center justify-between">
              {brainwaveServicesIcons.map((item, index) => (
                <li
                  key={index}
                  className={`rounded-2xl flex items-center justify-center ${
                    index === 2
                      ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                      : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                  }`}
                >
                  <div
                    className={
                      index === 2
                        ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                        : ""
                    }
                  >
                    <img src={item} width={24} height={24} alt={item} />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
            <img
              src={service3}
              className="w-full h-full object-cover"
              width={520}
              height={400}
              alt="Service"
            />

            <VideoChatMessage />
            <VideoBar />

            {/* Floating overlay window on top left with scroll on small devices */}
            <div className="absolute top-4 left-4 max-w-[60%] max-h-[50vh] overflow-y-auto md:overflow-visible p-4 bg-white/30 rounded-[25px] animate-float shadow-lg text-black">
              <p className="body-2">
                Join us for an intense 8-hour hackathon designed to push your limits in critical thinking and problem solving. Participants will face condensed real-world challenges that demand innovative coding and rapid decision-making. From the moment teams receive their carefully curated problem statements, the energy is palpable as everyone dives into a high-pressure coding sprint. Throughout the event, refreshing breaks provide time to recharge and network, while expert judges carry out two rounds of rigorous evaluation to ensure that every nuance of your solution is considered. As the final hours approach, teams refine their projects for compelling presentations, and then the moment of recognition arrives with the announcement of winners and prize awards. This immersive experience is not just about competing it’s about showcasing your ability to transform challenges into breakthrough solutions.
              </p>
            </div>
          </div>
        </div>

        <Gradient />
      </div>

      {/* Floating animation CSS */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </Section>
  );
};

export default Services;
