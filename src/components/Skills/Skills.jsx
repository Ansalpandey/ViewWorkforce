import styles from "./Skills.css"
import { Lightbulb, Monitor, Clock, TreePine, Calendar, Coins } from "lucide-react"
import PropTypes from 'prop-types'

const SkillCard = ({ Icon, title, description }) => {
    return (
        <div className={styles.skillCard}>
            <div className={styles.iconWrapper}>
                <Icon className={styles.icon} />
            </div>
            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

const Skills = () => {
    const skillsData = [
        {
            Icon: Lightbulb,
            title: "EXPERT SECTOR KNOWLEDGE",
            description: "We will assign industry specific recruitment experts to help you get the best candidates.",
        },
        {
            Icon: Monitor,
            title: "HUGE CANDIDATE NETWORK",
            description: "We access multiples job boards, CV databases & social media touchpoints.",
        },
        {
            Icon: Clock,
            title: "QUICKLY FILLED VACANCIES",
            description: "On an average, we take 7 days of time to fill the vacancies of our clients.",
        },
        {
            Icon: TreePine,
            title: "EMPLOYEES REMAIN STABLE",
            description: "95% of our candidates stay with their company for more than 18 months.",
        },
        {
            Icon: Calendar,
            title: "ASSURED REBATE",
            description: "If a candidate leaves, then you get a guaranteed rebate.",
        },
        {
            Icon: Coins,
            title: "NO RECRUIT, NO FEE",
            description: "We take no fee until the candidate is recruited and starts working.",
        },
    ]

    return (
        <section className={styles.skillsSection}>
            <h1 className={styles.mainHeading}>Experience Recruitment Service Like Never Before</h1>

            <div className={styles.description}>
                <p>
                    The service offered at Human Resource India is unmatched. Whether you are an existing client or a new client,
                    you are always valued.
                </p>
                <p>
                    This is what you can expect when you work with us, we are the{" "}
                    <strong>best placement consultant in Delhi</strong>.
                </p>
            </div>

            <div className={styles.skillsGrid}>
                {skillsData.map((skill, index) => (
                    <SkillCard key={index} Icon={skill.Icon} title={skill.title} description={skill.description} />
                ))}
            </div>
        </section>
    )
}
SkillCard.propTypes = {
    Icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default Skills

