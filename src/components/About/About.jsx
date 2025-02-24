import './About.css';
import about_img from '../../assets/about.jpg';

const About = () => {
    return (
        <section className='about' id='about'>
            <div className='about-left'>
                <img className='about-img' src={about_img} alt="About Us" />
            </div>
            <div className='about-right'>
                <h3>About Us</h3>
                <p>
                View Workforce, a unit of Youth Skill India Pvt. Ltd., is amongst the best HR recruiting firms that help businesses in getting quality team members. Our mission is to provide you with highly talented and dedicated individuals who can offer your business their greatest service. We believe that “Quality is better than quantity”, therefore, we help you get only the quality employees with an amazing set of skills that helps your business to grow.
                </p>
                <p>
                    Since 2016, we have been providing top-notch placement services to organizations, helping 
                    them choose from a wide selection of highly talented candidates. Today, we are recognized 
                    as one of the top placement agencies in Delhi. Our expert team, with in-depth knowledge of 
                    the recruitment industry, meets the demands of employers across the country.
                </p>
                <p>
                    With 6 years of recruitment experience, we have emerged as the best placement consultant in Delhi. 
                    Our dedication to providing the most suitable candidates has driven us to work tirelessly to 
                    deliver best-in-class services. Apart from being the best job consultancy in Bangalore, we have 
                    recently expanded our services to Delhi, quickly establishing ourselves as one of the top manpower 
                    consultants in the region.
                </p>
            </div>
        </section>
    );
};

export default About;
