import "./Services.css";

const servicesData = [
  {
    category: "General Staffing",
    services: [
      "Sourcing white & blue collar in all Sectors",
      "Recruitment of all types of Skill Sets",
      "Associate Life Cycle Management",
      "Payroll Management",
      "Statutory Governance",
      "Hire, Train & Deployment",
      "Customised MIS",
      "Automation",
    ],
  },
  {
    category: "IT Recruitment Services",
    services: [
      "FTE/C2H/Contract staffing",
      "Catering to Skills across verticals and Levels",
      "Competency in both Services and Product Verticals",
      "Adherence to TAT & SLA as per Client Requirement",
      "Candidate management team",
      "Grievance Redressal System",
    ],
  },
  {
    category: "Technical Services",
    services: [
      "Electrical Distribution",
      "Backup Diesel Generators",
      "UPS / Rotary UPS systems, HVAC",
      "Compressed air systems",
      "Water & Treatment Systems & STP",
      "Material Handling Equipment",
      "Building Maintenance",
      "Data Centre Management",
    ],
  },
  {
    category: "Asset & Project Management Services",
    services: [
      "Inventory control",
      "Improved operational efficiency",
      "Transparency of information on all asset management activity",
      "Shared best practice",
      "Continuous availability of facilities",
      "Project management consultancy",
      "Business automation services",
    ],
  },
  {
    category: "Security Services",
    services: [
      "Security (Non-armed)",
      "Ex. Servicemen",
      "Transportation Security",
      "Escort Services",
      "Fire Protection & Preventive Systems",
      "E-Security",
      "Canine Brigade",
      "Parking Management",
    ],
  },
  {
    category: "Soft Services & Housekeeping",
    services: [
      "Cleaning (incl. specialized cleaning)",
      "Grounds maintenance",
      "Waste management / segregation",
      "Reception, Helpdesk, Switchboard",
      "Meeting Room, Conference center",
      "Mail Room, Postal services",
      "Reprographics, Print shop",
      "Laundry",
      "Transportation / Fleet management",
      "Warehouse management",
    ],
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="section-title">Our Services Spectrum and Scope</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-category" key={index}>
            <h3 className="service-title">{service.category}</h3>
            <ul className="service-list">
              {service.services.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
