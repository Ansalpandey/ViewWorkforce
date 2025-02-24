import "./Expertise.css";

const Expertise = () => {
    return (
        <section className="expertise-section" id="expertise">
            <header>
                <h2>Our Expertise</h2>
                <p className="subtitle">Recruit the best candidate, in the shortest possible time.</p>
                <div className="yellow-line"></div>
            </header>

            <div className="expertise-cards">
                {[
                    {
                        title: "Client Centric Approach",
                        description:
                            "We prioritize our clients' needs by understanding their unique requirements and delivering customized recruitment solutions that align with their business goals.",
                        iconPath:
                            "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z",
                    },
                    {
                        title: "Industry-Specific Recruitment Experts",
                        description:
                            "Our team comprises recruitment specialists with in-depth knowledge of various industries. This expertise enables us to identify and hire candidates who perfectly match the required skill set and job role.",
                        iconPath:
                            "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z",
                    },
                    {
                        title: "Reduced Turnaround Time",
                        description:
                            "We understand the urgency of hiring the right talent. Our streamlined recruitment process, advanced sourcing techniques, and extensive database help us significantly reduce the time taken to fill vacancies.",
                        iconPath:
                            "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18h14v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V18h6v-1.5c0-2.33-4.67-3.5-7-3.5z",
                    },
                    {
                        title: "Huge Candidate Network",
                        description:
                            "With access to a vast talent pool, we can quickly connect businesses with top-tier candidates across different domains. Our extensive network ensures that we find the perfect fit for every role.",
                        iconPath:
                            "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z",
                    },
                    {
                        title: "No Fees Until Candidate is Recruited",
                        description:
                            "We believe in delivering results first. Our clients are not charged any fees until we successfully place a candidate, ensuring a risk-free hiring experience.",
                        iconPath:
                            "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z",
                    },
                    {
                        title: "High-Performing, Stable Employees",
                        description:
                            "Our rigorous screening and assessment process ensures that we recruit not just skilled professionals but also individuals who align with the company’s culture and values, leading to long-term success.",
                        iconPath:
                            "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18h14v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V18h6v-1.5c0-2.33-4.67-3.5-7-3.5z",
                    },
                ].map((expertise, index) => (
                    <article className="expertise-card" key={index}>
                        <div className="card-accent"></div>
                        <div className="hexagon">
                            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d={expertise.iconPath} />
                            </svg>
                        </div>
                        <h3>{expertise.title}</h3>
                        <p>{expertise.description}</p>
                        <a href="#" className="read-more" aria-label={`Read more about ${expertise.title}`}>
                            Read more <span>›</span>
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Expertise;
