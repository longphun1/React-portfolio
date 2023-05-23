import './skills.styles.css';

const Skills = () => {
    return (
        <div className='idk123'>
            <div id="skills"></div>
            <div className="skills-container">
                <div className="skills-box">
                    <div className="skills-inner-box">
                        <div className="skills-sections">
                            <h2 className="skills-section-title">Languages</h2>
                            <img className="skills-icons-resize" src="/images/languages.png" alt='2'/>
                            <h3 className="text">Javascript</h3>
                            <h3 className="text">Python</h3>
                            <h3 className="text">Java</h3>
                            <h3 className="text">HTML/CSS</h3>
                            <h3 className="text">SCSS</h3>
                        </div>
                        <div className="skills-sections">
                            <h2 className="skills-section-title">Frameworks</h2>
                            <img className="skills-icons" src="/images/framework.png" alt='2'/>
                            <h3 className="text">React</h3>
                            <h3 className="text">Django</h3>
                            <h3 className="text">Spring</h3>
                            <h3 className="text">Angular</h3>
                            <h3 className="text">Flask</h3>
                            <h3 className="text">Bootstrap</h3>
                        </div>
                        <div className="skills-sections">
                            <h2 className="skills-section-title">Databases</h2>
                            <img className="skills-icons" src="/images/database.png" alt='2'/>
                            <h3 className="text">SQL</h3>
                            <h3 className="text">MySQL</h3>
                            <h3 className="text">MongoDB</h3>
                            <h3 className="text">Firebase</h3>
                            <h3 className="text">SQLite</h3>
                        </div>
                        <div className="skills-sections">
                            <h2 className="skills-section-title">Other</h2>
                            <img className="skills-icons" src="/images/others.png" alt='2'/>
                            <h3 className="text">AWS</h3>
                            <h3 className="text">CI/CD</h3>
                            <h3 className="text">Heroku</h3>
                            <h3 className="text">Netlify</h3>
                            <h3 className="text">Restful API</h3>
                            <h3 className="text">Pytest</h3>
                            <h3 className="text">Jest</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Skills;