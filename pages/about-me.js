import React from 'react';
import Navbar from '../components/Navbar/NavBar'
import '../styles/AboutMePage.module.scss'
import { timelineData } from './timeline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faUniversity } from '@fortawesome/free-solid-svg-icons'
import { faPhp, faReact, faPython, faSass, faHtml5 } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'

class AboutMePage extends React.Component {
    render() {
        const list = timelineData.map((item, index) =>
            <article key={index} className="timeline-entry">
                {
                    item.type === "faUniversity" ?
                        <FontAwesomeIcon icon={faUniversity} color={"#ffb400"} />
                        : <FontAwesomeIcon icon={faBriefcase} color={"#ffb400"} />
                }
                <span className="timestamp">{item.timeStamp}</span>
                <h4 className="entry-title">{item.entryTitle}</h4>
                <p className="sub-header">{item.subHeader}</p>
                <p className="details">{item.details}</p>
                {
                    item.details && <button className="readMoreBtn">Read More</button>
                }
            </article>
        );
        return (
            <div className='container'>
                <Navbar />
                <div>
                    <h2 className="header">About <span className="yellow">Me</span></h2>
                    <h1 className="shadow">Resume</h1>
                    <h3>Education <span className="yellow">&</span> Experience</h3>
                    <div className="timeline-grid">
                        {list}
                    </div>
                    <h3><span className="highlighted">Highlighted </span>Skills</h3>
                    <div className="languages">
                        <div className="box">
                            <h5 className="name">React</h5>
                            <FontAwesomeIcon icon={faReact} size={'3x'} color={"#61DBFB"} />
                        </div>
                        <div className="box">
                            <h5 className="name">PHP</h5>
                            <FontAwesomeIcon icon={faPhp} size={'3x'} color={"#787CB5"} />
                        </div>
                        <div className="box">
                            <h5 className="name">HTML</h5>
                            <FontAwesomeIcon icon={faHtml5} size={'3x'} color={"#E44D26"} />
                        </div>
                        <div className="box">
                            <h5 className="name">SCSS</h5>
                            <FontAwesomeIcon icon={faSass} size={'3x'} color={"#CD6799"} />
                        </div>
                        <div className="box">
                            <h5 className="name">Python</h5>
                            <FontAwesomeIcon icon={faPython} size={'3x'} color={"#FFE873"} />
                        </div>
                        <div className="box">
                            <h5 className="name">Go</h5>
                            <Image src="/Go-Logo_Aqua.png" alt="golang" layout='fill' />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default AboutMePage;