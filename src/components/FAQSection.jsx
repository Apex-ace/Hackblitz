import { useState } from 'react';
// import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";

const FAQSection = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [questionsViewed, setQuestionsViewed] = useState(0);

  const faqs = [
    {
      question: "Is there any eligibility criteria to participate in hackblitz hackthon? If yes, which candidates are eligible?",
      answer: "There are no specific eligibility requirements to participate in hackblitz.The event is typically open to students and professionals with a background in technology, coding, or software development. Candidates who are enthusiastic about problem-solving, innovation, and have the technical skills to contribute to a team are eligible to participate."
    },
    {
      question: "Why should I participate in the hackblitz?",
      answer: "The competition provides the participants with real life problems which they have to solve through code using their programming and algorithmic skills. Participants work together to solve the problems in a given time"
    },
    {
      question: "How to register?",
      answer: "Follow this steps for registration : www.techfest.org > Competitions > CoDecode > Explore More -> Register > Fill all your details > You will be registered and now you must either Create a team/Join a team ."
    },
  ];

  const handleQuestionClick = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      if (activeQuestion === null || activeQuestion !== index) {
        setQuestionsViewed(questionsViewed + 1);
      }
      setActiveQuestion(index);
    }
  };

  return (
    <Section className="overflow-hidden"  id="roadmap">
      <div className="container px-4 sm:px-6 md:px-8">
        <Heading tag="Get Answers" title="Frequently Asked Questions" />
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8">
          <div className="text-n-1 text-lg sm:text-xl font-bold mb-4 sm:mb-0">Common Questions</div>
          <div className="flex items-center px-3 py-1 sm:px-4 sm:py-2 bg-n-6 rounded-xl sm:rounded-2xl">
            <div className="text-n-4 text-sm sm:text-base mr-2 sm:mr-3">Questions Explored:</div>
            <div className="text-gradient bg-clip-text text-transparent bg-conic-gradient font-bold text-xl sm:text-2xl">{questionsViewed}</div>
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`p-0.25 rounded-[1.5rem] sm:rounded-[2rem] transition-all duration-300 ${activeQuestion === index ? "bg-conic-gradient" : "bg-n-6"}`}
            >
              <div className="bg-n-8 rounded-[1.45rem] sm:rounded-[1.95rem] p-4 sm:p-6 overflow-hidden">
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => handleQuestionClick(index)}
                >
                  <h4 className="text-sm sm:text-base md:text-lg lg:h5 text-n-1 pr-2">{faq.question}</h4>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-n-6 rounded-full flex items-center justify-center flex-shrink-0 ml-2 sm:ml-4">
                    <div className="text-n-1 text-lg sm:text-xl font-bold">
                      {activeQuestion === index ? "−" : "+"}
                    </div>
                  </div>
                </div>
                
                {activeQuestion === index && (
                  <div className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-n-4 overflow-hidden transition-all duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="flex justify-center">
          <Button href="/faq">View All Questions</Button>
        </div> */}
      </div>
    </Section>
  );
};

export default FAQSection;