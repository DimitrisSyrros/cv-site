import React from 'react';
import Navbar from '../components/Navbar/NavBar'
import '../styles/AboutMePage.module.scss'
import { timelineData } from './timeline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faUniversity } from '@fortawesome/free-solid-svg-icons'

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
                <p className="details">{item.details}</p>
            </article>
        );
        return (
            <div className='container'>
                <Navbar />
                <main>
                    <h2 className="header">About <span className="yellow">Me</span></h2>
                    <h1 className="shadow">Resume</h1>
                    <h3>Education <span className="yellow">&</span> Experience</h3>
                    <div className="timeline-grid">
                        {list}
                    </div>
                </main>
            </div>
        );
    }
}

export default AboutMePage;