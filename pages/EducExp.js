import React, {useState} from 'react';
import '../styles/AboutMePage.module.scss';
import { AboutMeContainer, EntryTitle, MainHeader, MainHeaderShadow,
        TimeLineEntry, SectionHeader, LangLogo, SubHeader, ReadMoreBtn, TimeLineDetails,
        TimeLineGrid, Timestamp } from './Static/AboutMeStyled';
import {timelineData} from './timeline';
import {faBriefcase, faUniversity} from '@fortawesome/free-solid-svg-icons';
import Modal from "../components/Modal/Modal";

const EducExp = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState("");
    const list = timelineData.map((item, index) =>
        <TimeLineEntry key={index}>
            {
                item.type === "faUniversity" ?
                    <LangLogo icon={faUniversity} color={"#ffb200"}/>
                    : <LangLogo icon={faBriefcase} color={"#ffb200"}/>
            }
            <Timestamp>{item.timeStamp}</Timestamp>
            <EntryTitle>{item.entryTitle}</EntryTitle>
            <SubHeader>{item.subHeader}</SubHeader>
            <TimeLineDetails>{item.details}</TimeLineDetails>
            {
                item.details && <ReadMoreBtn onClick={() => {
                    setShowModal(true)
                    setModalTitle(item.entryTitle)
                    setModalContent(item.readMore)
                }}>Read More</ReadMoreBtn>
            }
            <Modal
                onClose={() => setShowModal(false)}
                show={showModal}
                title={modalTitle}
            >
                {modalContent}
            </Modal>
        </TimeLineEntry>
    );
    return (
        <AboutMeContainer>
                <MainHeader>About <span className="yellow">Me</span></MainHeader>
                <MainHeaderShadow>Resume</MainHeaderShadow>
                <SectionHeader>Education <span className="yellow">&</span> Experience</SectionHeader>
                <TimeLineGrid>
                    {list}
                </TimeLineGrid>
        </AboutMeContainer>
    );
}

export default EducExp;