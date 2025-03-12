import "../styles/Services.css";

const Services = () => {
  return (
    <div className="serv-cont">
      <div className="bg-img1"></div>
      <div className="serv-cont1">
        <p>Real-world examples of how we have helped companies <br />achieve their marketing objectives.</p>
        <div className="btns">
          <button className="btn btn1">All Work [20]</button>
          <button className="btn btn2">UI/UX Design[10]</button>
          <button className="btn btn3">Digital Marketing [5]</button>
          <button className="btn btn4">Branding [5]</button>
        </div>
      </div>
      <div className="serv-cont2">
        <div className="serv-cont2-c1">
          <div className="details">See Details</div>
        </div>
        <div className="serv-cont2-body">
          <div className="serv-cont2-c serv-cont2-c2">
            <div className="b1">
              <div className="bar"></div>
              <p>Ai Corporation. 2023</p>
            </div>
            <div className="b2">Ai Wave - Ai Chatbot Mobile App</div>
          </div>
          <div className="serv-cont2-c serv-cont2-c3">
            <div className="b1">
              <div className="bar"></div>
              <p>Lancer Corporation. 2023</p>
            </div>
            <div className="b2">App Lancer - Freelance Mobile App</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;