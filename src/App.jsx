import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from "./components/About/About.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Test from "./components/Test/Test.jsx";
import Expertise from "./components/Expertise/Expertise.jsx";
// import Title from "./components/Title/Title.jsx";
// import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Footer from "./components/Footer/Footer.jsx"
// import Blogs from "./components/Blogs/Blogs.jsx";
import Consults from "./components/Consult/Consult.jsx"
import Services from './components/Service/Services.jsx';
import Contact from './components/Contact/Contact.jsx';

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Test />
            <Expertise />
            <Consults />
            {/* <Title  title='Hear What Our Clients Have To Say' subTitle='Best Recruitment Agency in Delhi' />
            <Testimonials /> */}
            {/* <Blogs /> */}
            <Services />
<Contact />
            <Banner />
            <Footer />


        </div>
    )
}
export default App
