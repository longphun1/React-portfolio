import './navbar.styles.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li><a className="nav" href="#intro">Intro</a></li>
                    <li><a className="nav" href="#skills">Skills</a></li>
                    <li><a className="nav" href="#projects">Projects</a></li>
                    <li><a className="nav" href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
};

export default Navbar;