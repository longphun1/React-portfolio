import { useState } from 'react';
import './navbar.styles.scss';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)

    const toggleShow = (event) => {
        event.preventDefault()
        setShowLinks(!showLinks)
    }

    return (
        <div className="navbar">
            <a href="#" className="toggle-button" onClick={toggleShow} >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <nav id={showLinks ? "hidden" : ""}>
                <ul>
                    <li><a className="nav" href="#intro" onClick={() => setShowLinks(false)}>Intro</a></li>
                    <li><a className="nav" href="#experience" onClick={() => setShowLinks(false)}>Experience</a></li>
                    <li><a className="nav" href="#projects" onClick={() => setShowLinks(false)}>Projects</a></li>
                    <li><a className="nav" href="#contact" onClick={() => setShowLinks(false)}>Contact</a></li>
                </ul>
            </nav>
        </div>
    )
};

export default Navbar;