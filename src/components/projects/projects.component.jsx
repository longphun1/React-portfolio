import './projects.styles.css';

const Projects = () => {
    return (
        <div className="projects-container">
            <div id='projects'/>
            <div className="projects">
                <div className="project">
                    <div className='image-container'>
                        <img className="image1" src="/images/python_bmi_ss.png" alt='project'></img>
                    </div>
                    <div className='project-body-container'>
                        <a className="view-site" href="https://github.com/longphun1/python_bmi_api" target="_blank" rel="noopener noreferrer"><h3 className='project-title'>BMI Tracker</h3></a>
                        <span className="project-summary">Web app made with a BMI(body mass index) API. Return back the user health status based on their body measurements. Integrated with Django All Auth to allow users to login with their Google Accounts. </span>
                        <span className='tech-used'>Python</span>
                        <span className='tech-used'>Django</span>
                        <span className='tech-used'>SQLite</span>
                        <span className='tech-used'>API</span>
                    </div>
                </div>
                <div className="project">
                    <div className='image-container'>
                        <img className="image1" src="/images/budget-book-snapshot.png" alt='project'></img>
                    </div>
                    <div className='project-body-container'>
                        <a className='view-site' href="https://github.com/longphun1/budgetBook-react-app" target="_blank" rel="noopener noreferrer"><h3 className='project-title'>Budget Book</h3></a>
                        <span className="project-summary">A responsive website that grant users the ability to login with their Google account and keep track of their spendings. Data storage and Google account authorization are handled with Firebase.</span>
                        <span className='tech-used'>React</span>
                        <span className='tech-used'>JavaScript</span>
                        <span className='tech-used'>JSX</span>
                        <span className='tech-used'>SCSS</span>
                        <span className='tech-used'>Firebase</span>
                    </div>
                </div>
                <div className="project">
                    <div className='image-container'>
                        <img className="image1" src="https://i.imgur.com/ZAjgkZ0.png" alt='project'></img>
                    </div>
                    <div className='project-body-container'>
                    <a className="view-site" href="https://github.com/longphun1/doctors-app" target="_blank" rel="noopener noreferrer"><h3 className='project-title'>Doctor Appointment</h3></a>
                    <span className="project-summary">A software application thats allow users to register a account, make appointments, and payments. Allow one user to be the admin to see all patients and appointments.</span>
                    <span className='tech-used'>Node</span>
                    <span className='tech-used'>Angular</span>
                    <span className='tech-used'>MongoDB</span>
                    <span className='tech-used'>JavaScript</span>
                    <span className='tech-used'>Bootstrap</span>  
                    </div>                  
                </div>
                <div className="project">
                    <div className='image-container'>
                        <img className="image1" src="https://i.imgur.com/OZC7mZh.png" alt='project'/>
                    </div>
                    <div className='project-body-container'>
                    <a className="view-site" href="https://github.com/longphun1/java-BlogApp" target="_blank" rel="noopener noreferrer"><h3 className='project-title'>Blog App</h3></a>
                    <span className="project-summary">Web application where a user can register and create new posts for others to see. A different user can view other people's posts and leave comments.</span>
                    <span className='tech-used'>Java</span>
                    <span className='tech-used'>Spring Tool Suite</span>
                    <span className='tech-used'>MySQL</span>
                    </div>
                </div>
                <div style={{ marginBottom: "1%" }} className="project">
                    <div className='image-container'>
                        <img className="image1" src="https://i.imgur.com/rPMrX5f.png" alt='project'/>
                    </div>
                    <div className='project-body-container'>
                    <a className="view-site" href="https://github.com/longphun1/python_hangout_app/tree/master" target="_blank" rel="noopener noreferrer"><h3 className='project-title'>Hangout</h3></a>
                    <span className="project-summary">Utilized openweathermap API to get locations weather and users can register events accordingly. Others can view events and apply to join them.</span>
                    <span className='tech-used'>Python</span>
                    <span className='tech-used'>Django</span>
                    <span className='tech-used'>SQLite</span>
                    <span className='tech-used'>API</span>  
                    </div>                  
                </div>
            </div>
        </div>
    )
};

export default Projects;