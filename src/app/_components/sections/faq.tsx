"use client";

import cloudinaryLoader from "@/app/lib/cloudinary";
import Image from "next/image";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Faq = () => {
  const [active, setActive] = useState(0);

  const herosrc = "v1754448341/meg-jenson-_cp0vEyJb_Q-unsplash_xky98a.jpg";

  const faqs = [
    {
      id: 0,
      question: "What types of events do you host?",
      content:
        "We host weddings, corporate events, galas, product launches, private dinners, award ceremonies, and everything in between. Our space is fully customizable to fit your vision.",
    },
    {
      id: 1,
      question: "Do you offer in-house planning and coordination?",
      content:
        "Yes, our experienced planning team works with you from start to finish — ensuring smooth coordination, timeline management, vendor handling, and perfect execution on your big day.",
    },
    {
      id: 2,
      question: "Can we bring in our own vendors?",
      content:
        "We offer full-service packages through our trusted partners. However, if you prefer to use your own vendors, we’ll gladly collaborate with them, provided they meet our professional standards.",
    },
    {
      id: 3,
      question: "What’s included in your venue rental?",
      content:
        "Venue rental includes access to your selected space, professional lighting, in-house sound system, dedicated event staff, security, valet service, and standard furniture options.",
    },
    {
      id: 4,
      question: "How far in advance should I book?",
      content:
        "We recommend booking at least 4 to 6 months in advance to secure your preferred date. Peak seasons fill up quickly, so early inquiries are highly encouraged.",
    },
    {
      id: 5,
      question: "What is your payment structure?",
      content:
        "We require an initial deposit to secure your date, with the remaining balance split into two to three flexible payment milestones before your event date.",
    },
    {
      id: 6,
      question: "Do you offer on-site catering?",
      content:
        "Yes. Our culinary team delivers five-star dining experiences, from plated dinners to themed buffets, tailored to your event style and dietary needs.",
    },
    {
      id: 7,
      question: "Is parking available for guests?",
      content:
        "Absolutely. We offer on-site valet parking and ample space for all guest vehicles. We can also coordinate group transport logistics if needed.",
    },
    {
      id: 8,
      question: "What’s your cancellation or rescheduling policy?",
      content:
        "Cancellations or reschedules must be made in writing. Depending on the timing, partial refunds or credit toward a future event may apply. Full terms are provided during booking.",
    },
  ];

  const handleResponse = (id: number) => {
    setActive(id);
  };

  return (
    <section className="w-full lg:flex item-start overflow-hidden  lg:py-[10em] py-8 scroll-smooth relative min-h-[90vh]  text-white">
      <div className="bg-black opacity-90 z-1 top-0  absolute h-full w-full"></div>
      <div className="absolute w-full h-full top-0 overflow-hidden">
        <Image
          loader={cloudinaryLoader}
          src={herosrc}
          alt="Party, event, image"
          width={1000}
          height={1000}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="lg:sticky lg:top-48  mb-10 lg:w-[40%] flex h-fit lg:px-10 px-5 z-50 lg:pt-20">
        <h1 className="lg:text-[4rem] text-[2rem] font-bold z-50">FAQ</h1>
      </div>
      <div className="flex-col flex lg:w-[60%] lg:px-10 px-5 z-50 lg:pt-20">
        {faqs.map(({ id, question, content }) => {
          return (
            <div
              key={id}
              className="pb-10 pt-4 mb-12 border-b-[2px] px- border-solid border-background/20 z-50"
            >
              <div className="flex justify-between items-center">
                <h3
                  onClick={() => handleResponse(id)}
                  className="cursor-pointer text-[1.5rem] lg:text-[1.7rem] hover:text-background/50 font-semibold"
                >
                  {question}
                </h3>
                <button
                  onClick={() => handleResponse(id)}
                  className="cursor-pointer text-[1.5rem] lg:text-[1.7rem] hover:text-background/50 font-semibold"
                >
                  {active == id ? <FaMinus /> : <FaPlus />}
                </button>
              </div>
              <div
                className={`${
                  active == id ? "flex" : "hidden"
                }  text-white text-[1.1rem] w-[70%] mt-7`}
              >
                {content}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
