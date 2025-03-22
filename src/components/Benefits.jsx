import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Venue"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => {
            const isCenterCard = item.id === "0";
            const containerClasses = isCenterCard
              ? "block relative p-0.5 bg-no-repeat bg-cover w-full max-w-5xl mx-auto border-2 border-indigo-500 hover:scale-105 hover:shadow-lg transition-transform duration-300"
              : "block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]";
            const contentClasses = isCenterCard
              ? "relative z-2 flex flex-col p-[3rem] pointer-events-none min-h-[20rem]"
              : "relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none";

            return (
              <div
                className={containerClasses}
                style={{ backgroundImage: `url(${item.backgroundUrl})` }}
                key={item.id}
              >
                <div className={contentClasses}>
                  <h5 className="h5 mb-5">{item.title}</h5>
                  <p className="body-2 mb-6 text-n-3">{item.text}</p>
                  <div className="flex items-center mt-auto">
                    <img
                      src={item.iconUrl}
                      width={48}
                      height={48}
                      alt={item.title}
                    />
                    {/* <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                      Explore more
                    </p> */}
                    <Arrow />
                  </div>
                </div>

                {item.light && <GradientLight />}

                <div
                  className="absolute inset-0.5 bg-n-8"
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        width={380}
                        height={362}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>

                <ClipPath />
              </div>
            );
          })}
        </div>

        {/* Google Maps Location Button */}
        <div className="flex justify-center mt-8">
          <a
            href="https://maps.app.goo.gl/9XcpWbu535FmS67J8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-n-7 rounded-full hover:bg-n-6 transition-colors duration-300 text-n-1 font-bold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-n-1"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            View Location on Google Maps
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
