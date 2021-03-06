import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../constants';

const SFooterWrapper = styled.footer`
  min-height: 5rem;
  position: relative;
  text-align: center;
  left: 0;
  width: 100%;
  font-size: 14px;
  background: ${COLORS.secondary};
`;
const SPadding = styled.div`
  padding: 1rem;
`;
const SLink = styled.a`
  color: white;
  line-height: 1.5;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: yellow;
  }
`;

const Footer = () => {
  return (
    <SFooterWrapper>
      <SPadding>
        <div>
          <SLink href="https://www.offerzen.com/" target="_blank">
            OfferZen
          </SLink>
        </div>
        <div>
          <SLink href="https://trello.com/" target="_blank">
            Trello
          </SLink>
        </div>
      </SPadding>
    </SFooterWrapper>
  );
};

export default Footer;
