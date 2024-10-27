import styled, { keyframes } from 'styled-components'

import backgroundCell from '../../../assets/background-cell.jpg'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.section`
  color: #FFF;
  width: 100vw;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;

  background-image: url(${backgroundCell});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  opacity: 0;
  animation: ${fadeIn} 1s forwards;
  animation-delay: 0.3s;
`

export const SiteName = styled.span`
  color: #d1a50e;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 3px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const Title = styled.h1`
  font-size: 40px;
  width: 1000px;
  text-transform: uppercase;
  max-width: 90%;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`

export const Description = styled.p`
  color: #b2b2b2;
  max-width: 90%;
  width: 700px;
  font-size: 18px;

  span {
    color: #FFF;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const VideoFrame = styled.iframe`
  width: 900px;
  height: 520px;
  max-width: 90vw;

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 450px) {
    height: 250px;
  }
`