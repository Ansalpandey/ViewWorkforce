import { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpeg';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMobileMenu((prev) => !prev);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setMobileMenu(false); // Close menu on mobile after navigation
        }
    };

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="logo" className="logo" />
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li onClick={() => scrollToSection('about')}>About Us</li>
                <li onClick={() => scrollToSection('expertise')}>Our Expertise</li>
                <li onClick={() => scrollToSection('services')}>Services</li>
                {/* <li onClick={() => scrollToSection('blogs')}>Blog</li> */}
                <li onClick={() => scrollToSection('contact')}>Contact Us</li>
            </ul>
            <img src={menu_icon} alt="menu" className="menu-icon" onClick={toggleMenu} />
        </nav>
    );
};

export default Navbar;
