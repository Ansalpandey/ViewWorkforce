import "./Consult.css";
import consultImage from "../../assets/consult.jpg"; // Replace with actual image path

const Consult = () => {
    return (
        <section className="consult-section">
            <div className="consult-container">
                <div className="consult-image">
                    <img src={consultImage} alt="Job Consultancy" />
                </div>
                <div className="consult-content">
                    <h2 className="consult-title">
                        Job Consultancy <span className="title-underline"></span>
                    </h2>
                    <p>
                    Being the best job consultancy in India, our sole aim at View Workforce is to provide you with ample job opportunities that you deserve. At View Workforce, you can explore job opportunities across various sectors. You can also search for jobs using filters like job role, job title, skills, location preference, recent job postings, and more. Moreover, our team of the best placement consultants in Delhi is always available to guide you about current job openings and provide top-notch placement assistance. Start your job search today based on your interests and skill set with View Workforce!
                    </p>
                    <button className="consult-btn">Search For Job →</button>
                </div>
            </div>
        </section>
    );
};

export default Consult;
