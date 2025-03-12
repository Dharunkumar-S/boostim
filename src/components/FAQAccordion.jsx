import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi"; 
import "../styles/FAQAccordion.css";

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Why is digital marketing important for my business?",
      answer:
        "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive conversions, and increase brand awareness. With targeted campaigns, it helps businesses to adapt and optimize their strategies based on data and analysis. It provides measurable results that drive more traffic to your website.",
    },
    {
      question: "How can digital marketing help improve my website's visibility?",
      answer:
        "Digital marketing strategies such as SEO, content marketing, and social media marketing can increase your website's ranking on search engines and attract more visitors.",
    },
    {
      question: "How long does it take to see results from digital marketing efforts?",
      answer:
        "The timeline varies based on the strategy, but typically SEO takes months, while paid ads can yield results almost instantly.",
    },
    {
      question: "How do you measure the success of digital marketing campaigns?",
      answer:
        "Success is measured through key metrics like website traffic, conversion rates, engagement, and ROI using tools like Google Analytics.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-cont">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <h3>{faq.question}</h3>
            {openIndex === index ? <FiX /> : <FiPlus />}
          </div>
          {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
