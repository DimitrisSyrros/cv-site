import styled, {css} from 'styled-components';

export const StyledModalBody = styled.div`
  padding-top: 10px;
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

export const StyledModalWrapper = styled.div`
  width: 500px;
  height: 600px;
  z-index: 10;
`;

export const StyledModal = styled.div`
  background: #292C30;
  height: 100%;
  width: 100%;
  border-radius: 15px;
  padding: 15px;
`;

export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

export const StyledModalTitle = styled.span`
  color: #e6990b;
`;