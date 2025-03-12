import "../styles/Section1.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
const Section1 = () => {
  return (
    <>
      <section className="sec-1">
        <div className="sec-cont-1">
          <div className="para1">Stay ahead of the <br /> curve with our <br /> forward-thinking </div>
          <div className="para2">An award-winning SEO agency with disciplines in digital marketing, design, and website development. focused on understanding you.</div>
          <div className="btns">
            <button>Schedule Call <FaArrowRight /></button>
            <p>View Case Study</p>
          </div>
          <div className="logos">
            <p>Trusted by the world's <br />biggest brands</p>
            <img src={require("../assets/brands.png")} alt="brands" />
          </div>
        </div>
        <div className="sec-cont-2">
          <div className="sec-cont-11">
            <div className="circle"><FaArrowTrendUp /></div>
            <div className="rectangle"></div>
          </div>
          <div className="sec-cont-12">
            <p>230+</p>
            <p>some big companies that we work with, and trust us very much</p>
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
          </div>
          <div className="sec-cont-13">
            <div className="bg-img"></div>
            <div className="para">
              <div className="para1">
                <div className="bar"></div>
                <p>Drive More Traffic and Sales </p>
              </div>
              <p className="para2">Drive more traffic <br />and product sales</p>
            </div>
            <div className="boxes">
              <div className="box-1"></div>
              <div className="box-2"></div>
              <div className="box-3"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section1