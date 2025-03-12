import "../styles/Work.css";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
const Work = () => {
  return (
    <div className="work-cont">
      <p className="cont-1">
        “ They thoroughly analyze our industry and target audience, allowing them to <br />develop customized campaigns that effectively reach and engage our <br /> customers. Their creative ideas and cutting-edge techniques have helped us <br /> stay ahead of the competition.”
      </p>
      <div className="cont-2">
        <div className="profile">
          <img src={require("../assets/person1.jpg")} alt="person" />
          <div className="name">
            <p className="nam">Michael Kaizer</p>
            <p>CEO of Basecamp Corp</p>
          </div>
        </div>
        <div className="next">
          <FaArrowLeft className="left" />
          <p><span>01</span>/05</p>
          <FaArrowRight className="right" />
        </div>
      </div>
    </div>
  )
}

export default Work;