import './projects.styles.css';

const Projects = () => {
    return (
        <div id='projects' className="projects-container">
            <div className="projects">
                <div className="project">
                    <img className="image1" src="/images/python_bmi_ss.png" alt='project'></img>
                    <h2 className="project-summary">BMI Tracker - Python website made with Django framework, SQLite database, and BMI(body mass index) API. A BMI tracking app that records user's data input and tells them their health. Integrated with Django All Auth to allow users to login with their Google Accounts. </h2>
                    <h2 className="tech-used">Tech Used</h2>
                    <h3 className="tech-used">Python | Django | SQLite | API</h3>
                    <a className="view-site" href="https://github.com/longphun1/python_bmi_api" target="_blank" rel="noopener noreferrer">View <img className="github-icon" src="https://i.imgur.com/GdNRuHu.png" alt='1'></img></a>
                </div>
                <div className="project">
                    <img className="image1" src="/images/budget-book-snapshot.png" alt='project'></img>
                    <h2 className="project-summary">Budget Book - Built with react, a responsive website that grant users the ability to login with their Google account and keep track of their spendings. Data storage and Google account authorization are handled with Firebase.</h2>
                    <h2 className="tech-used">Tech Used</h2>
                    <h3 className="tech-used">Javascript  |  React  |  HTML/SCSS | Firebase</h3>
                    <a className='view-site' href="https://github.com/longphun1/budgetBook-react-app" target="_blank" rel="noopener noreferrer">View <img className="github-icon" src="https://i.imgur.com/GdNRuHu.png" alt='1'></img></a>
                </div>
                <div className="project">
                    <img className="image1" src="https://i.imgur.com/ZAjgkZ0.png" alt='project'></img>
                    <h2 className="project-summary">Doctor Appointment - A software application thats allow users to register a account, make appointments, and make payments. Allow one user to be the admin to see all patients and appointments.</h2>
                    <h2 className="tech-used">Tech Used</h2>
                    <h3 className="tech-used">Javascript  |  Angular  |  MongoDB  |  Bootstrap</h3>
                    <a className="view-site" href="https://github.com/longphun1/doctors-app" target="_blank" rel="noopener noreferrer">View <img className="github-icon" src="https://i.imgur.com/GdNRuHu.png" alt='1'></img></a>
                </div>
                <div className="project">
                    <img className="image1" src="https://i.imgur.com/OZC7mZh.png" alt='project'></img>
                    <h2 className="project-summary">Blog app - A Java webapp where a user can register and create new posts for others to see. A different user can view other people's posts and leave comments.</h2>
                    <h2 className="tech-used">Tech Used</h2>
                    <h3 className="tech-used">Java  |  Spring Tool Suite  |  MySQL</h3>
                    <a className="view-site" href="https://github.com/longphun1/java-BlogApp" target="_blank" rel="noopener noreferrer">View <img className="github-icon" src="https://i.imgur.com/GdNRuHu.png" alt='1'></img></a>
                </div>
                <div style={{ marginBottom: "1%" }} className="project">
                    <img className="image1" src="https://i.imgur.com/rPMrX5f.png" alt='project'></img>
                    <h2 className="project-summary">Hangout App - Python application fabricated with Django as the framework and SQLite as the database. Utilized openweathermap API to get locations weather so users can plan events accordingly.</h2>
                    <h2 className="tech-used">Tech Used</h2>
                    <h3 className="tech-used">Python | Django | SQLite | API</h3>
                    <a className="view-site" href="https://github.com/longphun1/python_hangout_app/tree/master" target="_blank" rel="noopener noreferrer">View <img className="github-icon" src="https://i.imgur.com/GdNRuHu.png" alt='1'></img></a>
                </div>
            </div>
        </div>
    )
};

export default Projects;