import { useState, useEffect } from "react";
import "./Hero.css"; // Ensure this file contains the updated styles
import docImage from "../../assets/doc.jpg"; // Adjust path based on project structure
import heroImage2 from "../../assets/hero2.jpg";

const Hero = () => {
    const slides = [
        { id: 1, background: docImage, title: "Welcome to View Workforce", text: "Find the perfect candidates for your company who can help you in achieving all the business goals." },
        { id: 2, background: heroImage2, title: "Grow with Us", text: "Submit your resume and explore endless opportunities." }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 10000); // Change slide every 10 seconds

        return () => clearInterval(slideInterval);
    }, []);

    return (
        <div className="hero-container">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`hero-slide ${index === currentSlide ? "active" : ""}`}
                    style={{ backgroundImage: `url(${slide.background})` }}
                >
                    <div className="hero-text">
                        <h1>{slide.title}</h1>
                        <p>{slide.text}</p>
                        <div>
                            <button className="btn btn-green">Our Services</button>
                            <button className="btn btn-yellow">Submit Resume</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Hero;
