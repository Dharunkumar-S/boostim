import "../styles/Section3.css";
import { FaPlay } from "react-icons/fa";
const Section3 = () => {
  return (
    <div className="sec3-cont">
      <div className="sec3-cont1">
        <div className="bg-img"></div>
        <div className="para">
          <p>920<span>+</span></p>
          <p>Project finish with superbly</p>
        </div>
        <div className="profiles">
          <img src={require("../assets/person1.jpg")} alt="profiles" />
          <img src={require("../assets/person2.jpg")} alt="profiles" />
          <img src={require("../assets/person3.jpg")} alt="profiles" />
          <img src={require("../assets/person4.jpg")} alt="profiles" />
          <span>+</span>
        </div>
      </div>
      <div className="sec3-cont2">
        <div className="bg-img">HOW WE WORK</div>
        <div className="btn"><FaPlay /></div>
      </div>
    </div>
  )
}

export default Section3;