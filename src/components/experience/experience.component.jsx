import Skills from '../skills/skills.component';
import './experience.styles.css';

const Experience = () => {
    return (
        <div className='experience-container'>
            <div id='experience' />
            <div className='experience-subContainer'>
                <div className='about-work-container'>
                    <div className='aboutMe-container'>
                        <h1 className='aboutMe-title'>About Me</h1>
                        <span className='aboutMe-body'> Hello! I'm Long and I am a <span className='orange-text'>Full Stack Developer</span>.
                            I attended a 14 weeks bootcamp at Coding Dojo learning Javascript, Python,
                            HTML, CSS, and many more. After the bootcamp, I self studied and got certified
                            in <span className='orange-text'>AWS Solutions Architect - Associate</span>. When
                            I am not coding, I enjoy playing video games, excerising, and watching movies.
                        </span>
                    </div>
                    <h1 className='work-title'>Work Experience</h1>
                    <div className='work-container'>
                        <span className='work-timeline'>2023 &#9866; PRESENT</span>
                        <div className='work-body-container'>
                            <span className='work-job-title'>Blissful Minds Mental Health</span>
                            <span className='position-title'>Freelance</span>
                            <span className='work-text-body'>Developing a web app for therapists to market themselves to potential clients and showcase what services they offer.</span>
                            <span className='work-tech-used'>React</span>
                            <span className='work-tech-used'>JavaScript</span>
                            <span className='work-tech-used'>JSX</span>
                            <span className='work-tech-used'>SCSS</span>
                            <span className='work-tech-used'>Netlify</span>
                        </div>
                    </div>
                    <div className='work-container'>
                        <span className='work-timeline'>FEB &#9866; MAY 2023</span>
                        <div className='work-body-container'>
                            <span className='work-job-title'>Seminaut Inc. / GuildingGaming</span>
                            <span className='position-title'>Software Developer Intern</span>
                            <span className='work-text-body'>Collaborated with 15+ other developers as part of the <span className='orange-text'>quality assurance</span> team. Unit tested development code before it goes into production with Jest and Pytest</span>
                            <span className='work-tech-used'>React</span>
                            <span className='work-tech-used'>JavaScript</span>
                            <span className='work-tech-used'>Python</span>
                            <span className='work-tech-used'>Jest</span>
                            <span className='work-tech-used'>Pytest</span>
                            <span className='work-tech-used'>JSX</span>
                        </div>
                    </div>
                </div>
                <Skills />
            </div>
        </div>


    )
};

export default Experience;