import "../styles/CalltoAction.css";
import { FaArrowRight } from "react-icons/fa";
const CalltoAction = () => {
  return (
    <div className='call'>
      <p>Ready to work with us ?</p>
      <button>
        Get Started
        <FaArrowRight />
      </button>
    </div>
  )
}

export default CalltoAction