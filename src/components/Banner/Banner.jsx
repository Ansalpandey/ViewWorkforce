import "./Banner.css";

const Banner = () => {
  return (
    <div className="hiring-banner">
      <h2 className="hiring-banner__title">
        Are You Looking To Hire Right Talent?
      </h2>
      <button
        className="hiring-banner__button"
        onClick={() =>
          window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=pandeyansal77@gmail.com",
            "_blank"
          )
        }
      >
        Connect With Us
        <svg
          className="hiring-banner__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </div>
  );
};
export default Banner;
