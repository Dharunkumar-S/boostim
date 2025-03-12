import "../styles/Testimonial.css";
import FAQAccordion from "./FAQAccordion";
const Testimonial = () => {
  return (
    <div className="test">
      <div className="cont-1">
        <p className="p1">
          Digital Marketing FAQs
        </p>
        <p className="p2">
          As a leading digital marketing agency, we are dedicated to providing <br />comprehensive educational resources and answering frequently <br />asked questions to help our clients.
        </p>
        <div className="btns">
          <button>More Questions</button>
          <p>Contanct Us</p>
        </div>
      </div>
      <div className="cont-2">
        <FAQAccordion/>
      </div>
    </div>
  )
}

export default Testimonial;