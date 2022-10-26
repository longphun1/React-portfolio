import './intro.styles.css';

const Intro = () => {
    return (
        <div id="intro" className="intro">
            <div className="headshot-about-container">
                <div className="aboutMe">
                    <h1 className="info">Hi, my name's Long Phun.</h1>
                    <h2 className="info">I am a software developer, passionate about learning something new everyday.</h2>
                </div>
                <div className="links-container">
                    <a href="https://www.linkedin.com/in/long-phun-65bb8b191/" target="_blank" rel="noopener noreferrer"><img className="icon1" src="/images/linkin-icon2.png" alt='linkedin-icon'></img></a>
                    <a href="https://github.com/longphun1" target="_blank" rel="noopener noreferrer"><img style={{ borderRadius: "25px" }} className="icon2" src="/images/github-icon.png" alt='github-icon'></img></a>
                    <a className="resume-link" href="https://resume.creddle.io/resume/el4rrtd0w2l" target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
            </div>
        </div>
    )
};

export default Intro;