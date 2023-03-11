import React from "react";
import "./blog.css";
import IMG from "../../assets/blog1.png";
import IMG2 from "../../assets/blog2.png";
import IMG3 from "../../assets/blog3.jpg";

const Blog = () => {
  return (
    <section className="blog container section grid-blog" id="blog">
      <h2 className="section-title">Latest Posts</h2>

      <div className="blog-container grid">
        <div className="blog-card">
          <div className="blog-thumb">
            <a
              href="https://www.linkedin.com/posts/praveen-s-237916250_javascript-promises-activity-7032527508331720704-Ct1F?utm_source=share&utm_medium=member_desktop"
              target="_blank"
            >
              <img src={IMG} alt="no-img" className="blog-img" />
            </a>
          </div>
          <div className="blog-details">
            <h3 className="blog-title">explanation of JavaScript Promise</h3>
            <div className="blog-meta">
              <span>18 February, 2023</span>
            </div>
          </div>
        </div>

        <div className="blog-card">
          <div className="blog-thumb">
            <a
              href="https://www.linkedin.com/posts/praveen-s-237916250_spread-operators-js-activity-7029629944771088384-mC8j?utm_source=share&utm_medium=member_desktop"
              target="_blank"
            >
              <img src={IMG2} alt="no-img" className="blog-img" />
            </a>
          </div>
          <div className="blog-details">
            <h3 className="blog-title">JavaScript Spread Operators</h3>
            <div className="blog-meta">
              <span>10 February, 2023</span>
            </div>
          </div>
        </div>

        <div className="blog-card">
          <div className="blog-thumb">
            <a
              href="https://www.linkedin.com/posts/praveen-s-237916250_js-conditions-activity-7028909545288581120-LO-c?utm_source=share&utm_medium=member_desktop"
              target="_blank"
            >
              <img src={IMG3} alt="no-img" className="blog-img" />
            </a>
          </div>
          <div className="blog-details">
            <h3 className="blog-title">
              JavaScript Conditional Statements and Ternary Operators
            </h3>
            <div className="blog-meta">
              <span>08 February, 2023</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
