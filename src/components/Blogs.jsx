import "../styles/Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs">
      <div className="cont-1">
        <p className="p1">Digital Marketing & SEO <br />ServicesThat Grow Traffic &<br /> Increase Revenue</p>
        <div className="b1">
          <p>We are the top digital marketing agency for  branding corp. We offer a full <br />range of services to help clients improve their search engine rankings andbr
            drive more traffic to their websites.</p>
          <button className="btn">See More </button>
        </div>
      </div>
      <div className="cont-2">
        <div className="blog-cards">
          <div className="blog-card">
            <span className="indicator blue"></span>
            <p className="read-time">5 min read</p>
            <h3>How a Digital Marketing Agency Can Boost Your Business</h3>
            <p className="blog-desc">
              We are the top digital marketing agency for branding corp. We offer a full range....
            </p>
            <button className="arrow-btn">→</button>
          </div>

          <div className="blog-card">
            <span className="indicator orange"></span>
            <p className="read-time">5 min read</p>
            <h3>The Latest Trends and Strategies with a Digital Marketing Agency</h3>
            <p className="blog-desc">
              Working with this digital marketing agency has been a true partnership. They have tak...
            </p>
            <button className="arrow-btn">→</button>
          </div>

          <div className="blog-card">
            <span className="indicator purple"></span>
            <p className="read-time">5 min read</p>
            <h3>Maximizing ROI with the Expertise of a Digital Marketing Agency</h3>
            <p className="blog-desc">
              What sets this digital marketing agency apart is their commitment to transparency a...
            </p>
            <button className="arrow-btn">→</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Blogs;