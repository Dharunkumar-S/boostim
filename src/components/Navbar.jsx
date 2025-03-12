import "../styles/Navbar.css";
import { FaChevronDown } from "react-icons/fa6";
import { FiBell } from "react-icons/fi";
const Navbar = () => {
  return (
    <>
      <nav className="nav-cont">
        <div className="nav-cont-1">
          <div className="nav-1">
            <img src={require("../assets/boostim.png")} alt="boostim logo" />
            <p>Boostim</p>
          </div>
          <div className="nav-2">
            <ul>
              <li>
                <p>Service</p>
                <FaChevronDown />
              </li>
              <li>
                <p>Agency</p>
                <FaChevronDown />
              </li>
              <li>
                <p>Case study</p>
                <FaChevronDown />
              </li>
              <li>
                <p>Resources</p>
                <FaChevronDown />
              </li>
              <li>
                <p>Contact</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-cont-2">
          <button className="nav-btn-1">Get started</button>
          <button className="nav-btn-2"><FiBell className="bell"/></button>
        </div>
      </nav>
    </>
  )
}

export default Navbar;