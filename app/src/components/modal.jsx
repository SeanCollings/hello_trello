import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../constants';

const SModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;
const SModalMain = styled.div`
  position: fixed;
  background: ${COLORS.background};
  height: 200px;
  max-width: 400px;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 10%);
`;
const SContentContainer = styled.div`
  height: 80%;
  text-align: center;
`;
const SButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 20%;
`;
const SButton = styled.button`
  border: none;
  background: ${COLORS.primary};
  color: white;
  max-width: 100px;
  width: 50%;
  border-radius: 4px;
  height: 36px;
  cursor: pointer;
  text-decoration: none;
  outline: none;

  &:hover {
    filter: brightness(85%);
  }
`;
const SButtonCancel = styled(SButton)`
  background: ${COLORS.background};
  border: 1px solid ${COLORS.primary};
  color: ${COLORS.primary};
`;
const STitleInput = styled.input`
  text-decoration: none;
  outline: none;
  border: 1px solid ${COLORS.secondary};
  border-radius: 4px;
  width: 90%;
  padding: 0.5rem;
`;
const STitle = styled.div`
  font-size: 18px;
  margin-bottom: 1rem;
`;

const Modal = ({ cancelModal, confirmModal }) => {
  const inputRef = useRef();
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <SModalContainer>
      <SModalMain>
        <SContentContainer>
          <STitle>Enter a new title</STitle>
          <STitleInput
            ref={inputRef}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </SContentContainer>
        <SButtonContainer>
          <SButtonCancel onClick={cancelModal}>Cancel</SButtonCancel>
          <SButton onClick={() => confirmModal(title)}>Submit</SButton>
        </SButtonContainer>
      </SModalMain>
    </SModalContainer>
  );
};

export default Modal;
