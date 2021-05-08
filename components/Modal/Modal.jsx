import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import {StyledModalBody, StyledModalHeader, StyledModalWrapper, StyledModal, StyledModalOverlay, StyledModalTitle} from './ModalStyled';
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

    const modalContent = (
        <StyledModalOverlay>
            <StyledModalWrapper ref={modalWrapperRef}>
                <StyledModal>
                    <StyledModalHeader>
                        <a href="#" onClick={handleCloseClick}>
                            x
                        </a>
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