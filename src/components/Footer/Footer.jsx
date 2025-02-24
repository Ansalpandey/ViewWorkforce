import "./Footer.css";
import logo from "../../assets/logo.jpeg";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-company">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p>
            View Workforce is a one-stop solution for recruitment services. We
            assist companies in hiring smart and professional talent to take
            their businesses to the next level.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li onClick={() => scrollToSection("about")}>About Us</li>
              <li onClick={() => scrollToSection("expertise")}>
                Our Expertise
              </li>
              <li onClick={() => scrollToSection("services")}>Services</li>
              <li onClick={() => scrollToSection("contact")}>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3>Services</h3>
            <ul>
              <li>Executive Search</li>
              <li>Senior & Middle Level Hiring</li>
              <li>Resume Writing</li>
              <li>Staffing Solution</li>
            </ul>
          </div>
          <div>
            <h3>Job Seeker</h3>
            <ul>
              <li>Search Our Jobs</li>
              <li>Submit Resume</li>
              <li>Testimonials</li>
              <li>Fraud Alert</li>
            </ul>
          </div>
          <div>
            <h3>Employer</h3>
            <ul>
              <li>Hire With Us</li>
              <li>Our Clients</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-industries">
        <h3>Industries</h3>
        <p>
          Aerospace & Defense | Automobile & Auto Components | Consumer Durables
          & Building Materials | Development | Education | Electrical &
          Electronics | Financial Services | FMCG | Healthcare
        </p>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright &copy; 2016-{new Date().getFullYear()} View Workforce.
          All Rights Reserved. <a href="#">Privacy Policy</a> |
          <a href="#">Terms & Conditions</a> | <a href="#">Disclaimer</a> |
          <a href="#">Sitemap</a>
        </p>
        <div className="social-icons">
          <img
            alt="facebook-icon"
            onClick={() => window.open("https://facebook.com/", "_blank")}
            src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook.png"
          />
          <img
            onClick={() => window.open("https://x.com/", "_blank")}
            alt="twitter-icon"
            src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter.png"
          />
          <img
            onClick={() => window.open("https://linkedin.com/", "_blank")}
            alt="linkedin-icon"
            src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png"
          />
          <img
            onClick={() => window.open("https://instagram.com/", "_blank")}
            alt="instagram-icon"
            src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
