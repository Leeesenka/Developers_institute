
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck, faStar} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from "react";
import firstPhoto from './contest-hero.png'
import myPhoto from './my_photo.jpeg'
import skills from './GroupSkills.png'
import contImage from './con.avif'
import Nikolas from './Nikolas-Weber.jpeg'
import Maksim from './Maksim-Chalov.jpeg'
import Elena from './Elena-Chuvilina.jpeg'
import Sergey from './Sergei-Boiko.jpeg'
import Icone from './Icone.png'
import Tor from './tor.png'
import Shop from './shop.png'
import Sea from './sea.png'
import Simps from './photoS.png'
import final from './FinalProject.png'

import ImageGallery from 'react-image-gallery';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import CSS from './CSS.png'
// import GitHub from './GitHub.png'
// import HTML from './HTML.png'
// import Reactt from './React.png'
import { faFacebook, faSquareInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';





const Header = () => {
    return (
        <>
        <header className="site-header site-header--static site-header--signed-out">
            <div className="site-header__inner1">
                <div className="hamburger-menu">
                    <input id="menu__toggle" type="checkbox" />
                    <label className="menu__btn" htmlFor="menu__toggle">
                        <span></span>
                    </label>
                    <ul className="menu__box">
                        <li><a className="menu__item" href="#About">About me</a></li>
                        <li><a className="menu__item" href="#Skills">Skills</a></li>
                        <li><a className="menu__item" href="#Projects">Projects</a></li>
                        <li><a className="menu__item" href="#Team">Team</a></li>
                        <li><a className="menu__item" href="#">Blog</a></li>
                        <li><a className="menu__item" href="#Contacts">Contacts</a></li>
                    </ul>
                </div>
                <div className="site-header__inner2">
                    <a className="menu__item" href="#About">About me</a>
                    <a className="menu__item" href="#Skills">Skills</a>
                    <a className="menu__item" href="#Projects">Projects</a>
                    <a className="menu__item" href="#Team">Team</a>
                    <a className="menu__item" href="#">Blog</a>
                    <a className="menu__item" href="#Contacts">Contacts</a>
                    <div className="top-level-nav__item">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <span className="tel">05 33 8 22 703
                        </span>
                    </div>
                </div>
            </div>
        </header>
        <div className="app__content">
            <div className="row">
                <div className="rowH">
                </div>
                <img src={firstPhoto} width="90%"/>
            </div>
            <div className="row1">
                <div className="rowR"></div>         
                <blockquote>
                    <h1>Good design makes great business</h1>
                    <cite>Somebody</cite>         
                </blockquote>
                <p>
                    Hello ,Welcome To My official Website
                </p>
                <ul className="list_1">
                    <li> <FontAwesomeIcon icon={faCheck}/>About me</li>
                    <li> <FontAwesomeIcon icon={faCheck}/>VC</li>
                    <li> <FontAwesomeIcon icon={faCheck}/>My skills</li>
                    <li> <FontAwesomeIcon icon={faCheck}/>My Projects</li>   
                    <li> <FontAwesomeIcon icon={faCheck}/>My Team</li>   
                    <li> <FontAwesomeIcon icon={faCheck}/>My Blog</li>   
                </ul>
                <span className="button_1">
                    <a href="#About">See more</a>
                </span>
                <div className="stars_logo">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
            </div>
        </div>
        </>
    );
};




const AboutMe = () => {
    return (
        <div className="about-me">
            <h1 id="About">About Me</h1>
            <div className="info">
                <div className="photo-my">
                    {/* <img src="5K0A9068.jpeg"> */}
                    <img src={myPhoto} alt="My profile" />
                </div>
                <div className="info-me">
                    <h2>F. Alesya</h2>
                    <p>
                    As a Full Stack Developer, I offer a successful track record in Python and JavaScript development and significant experience in the telecommunications sector. My technical leadership has consistently improved operational efficiency and customer satisfaction. <br/>
                    With deep knowledge of telecommunications and web development, I've developed solutions that cut network incident resolution times by 40% and increased department productivity by 20%. I excel in translating business requirements into technical solutions, demonstrated through creating chatbots and implementing system improvements.<br/>
                    Currently expanding my knowledge in AI and Machine Learning, I am committed to continuous learning and innovation. As your Full Stack Developer, I will bring my robust technical skills and results-oriented approach to drive digital transformation in your organization.
                     </p>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {

    const images = [
        {
            original: Tor,
            thumbnail: Tor,
            originalClass: 'my-original-class',
        },
        {
            original: Sea,
            thumbnail: Sea,
            originalClass: 'my-original-class',
        },
        {
            original: Simps,
            thumbnail: Simps,
            originalClass: 'my-original-class',
        },
        {
            original: Shop,
            thumbnail: Shop,
            originalClass: 'my-original-class',
        },
        {
            original: final,
            thumbnail: final,
            originalClass: 'my-original-class',
        },
        {
            original: Shop,
            thumbnail: Shop,
            originalClass: 'my-original-class',
        },
        {
            original: Shop,
            thumbnail: Shop,
            originalClass: 'my-original-class',
        },
        // Add more images as required
    ];

    return (
        <div className="app__content2">
            <h1 id="About">My Projects</h1>
            <div className="uder-lenta">
                <ImageGallery items={images} 
                              showFullscreenButton={true}
                              showPlayButton={false}
                              showBullets={true} />
            </div>
        </div>
    );
};



const Skills = () => {
    return (
        <div className="my_skills">
            <h1 id="About">My Skills</h1>
            <div className='skills'>
                    <img src={skills }></img>
                    {/* <img src={skills} id='main-skills' alt="skills" />
                    <img src={CSS}  id='css' alt="skills" />
                    <img src={Reactt} id='reactt' alt="skills" />
                    <img src={HTML} id='htmll' alt="skills" />
                    <img src={GitHub} id='git' alt="skills" /> */}
           
            </div>
	    </div>
    );
};

const CV =()=> {
    return(
        <div className='cv-photo'>
            <embed src="path/to/your/file.pdf" type="application/pdf" width="100%" height="600px" />

        </div>
    )
}


const Team = () => {
    return (
        <div className="team">
            <h1><a name ="Team"></a>Our course Team</h1>
            <div className="text-team">
                <span className="button_2">
                    <a href="NEW">NEW</a>
                </span>
                <b>This is my crazy team</b>
                <h2>Teamwork is everything to a company. Teammates are everything to each other.</h2>
                <p>Team building slogans, also commonly called team mottos, are catchy phrases that summarize a team’s spirit, mission, or character. Leaders often use slogans to motivate and inspire teams.
                </p>
            </div>
            <div className="team-photo">
                <div className="photo1">
                    <div className="name1">
                        <p>Sergei Boiko</p>
                    </div>
                    <img src={Sergey} height="290" width="250" alt="Sergei Boiko"/>
                    <div className="under-team-photo">
                        <p>Sergei Boiko</p>
                        <img src={Icone} height="25" alt="icon"/>
                    </div>
                </div>
                <div className="photo1">
                    <div className="name1">
                        <p>Maksim Chalov</p>
                    </div>
                    <img src={Maksim} height="290" width="250" alt="Maksim Chalov"/>
                    <div className="under-team-photo">
                        <p>Maksim Chalov</p>
                        <img src={Icone} height="25" alt="icon"/>
                    </div>
                </div>
                <div className="photo1">
                    <div className="name1">
                        <p>Nikolas Weber</p>
                    </div>
                    <img src={Nikolas} height="290" width="250" alt="Nikolas Weber"/>
                    <div className="under-team-photo">
                        <p>Nikolas Weber</p>
                        <img src={Icone} height="25" alt="icon"/>
                    </div>
                </div>
                <div className="photo1">
                    <div className="name1">
                        <p>Elena Chuvilina</p>
                    </div>
                    <img src={Elena} height="290" width="250" alt="Elena Chuvilina"/>
                    <div className="under-team-photo">
                        <p>Elena Chuvilina</p>
                        <img src={Icone} height="25" alt="icon"/>
                    </div>
                </div>
            </div>
        </div>
    );
};


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch("/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, message })
        });
        const data = await response.json();
        if (data.status === "success") {
            alert("Message Sent.");
            setName("");
            setEmail("");
            setMessage("");
        } else if(data.status === "fail") {
            alert("Message failed to send.")
        }
    };

    return (
        <div className="contacts">
            <div className="forms-cont"><a name="Contacts"></a>
                <div className="forms-for">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Your Name" size="50" className="Name" value={name} onChange={e => setName(e.target.value)} /><br />
                        <input type="email" placeholder="Your Email" size="50" className="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
                        <input type="text" placeholder="Message" size="50" className="text" id='message' value={message} onChange={e => setMessage(e.target.value)} />
                        <input type="submit" value="GO" className='button_3' />
                    </form>
                </div>
            </div>
            {/* I removed 'contImage' from the img src as it's not defined in the provided code, replace it with your actual image */}
            <div className="cont-photo">
                <div className="cont-ik">
                    <FontAwesomeIcon icon={faFacebook} id='facebook'/>
                    <FontAwesomeIcon icon={faSquareInstagram} id='instagram' />
                    <FontAwesomeIcon icon={faLinkedin} id='linedin'/>
                    <FontAwesomeIcon icon={faGithub} id='git' />
                </div>
                <img src={contImage} width="350px" alt="Contact"/>
            </div>
        </div>
    );
};





export { Header, AboutMe, Projects, Skills, Team, Contact, CV };

