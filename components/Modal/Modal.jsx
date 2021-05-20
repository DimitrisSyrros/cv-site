import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import {StyledModalBody, StyledModalHeader, StyledModalWrapper, StyledModal, StyledModalOverlay, StyledModalTitle} from './ModalStyled';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-regular-svg-icons";
const Modal = ({ onClose, children, show, title }) => {
    const [isBrowser, setIsBrowser] = useState(false);
    const modalWrapperRef = useRef();

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };
    console.log(children)


    const modalContent = (
        <StyledModalOverlay>
            <StyledModalWrapper ref={modalWrapperRef}>
                <StyledModal>
                    <StyledModalHeader>
                        <FontAwesomeIcon icon={faTimesCircle} color={'white'} onClick={handleCloseClick}/>
                    </StyledModalHeader>
                    {title && <StyledModalTitle>{title}</StyledModalTitle>}
                    <StyledModalBody>{children}</StyledModalBody>
                </StyledModal>
            </StyledModalWrapper>
        </StyledModalOverlay>
    );

    if (isBrowser && show) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        );
    } else {
        return null;
    }
};
export default Modal