import styled from 'styled-components'
import backgroundContent from '../../../assets/background-content.jpg'

export const Container = styled.section`
  width: 100%;
  margin: 70px 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  font-size: 20px;

  background-image: url(${backgroundContent});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const Logo = styled.img`
  object-fit: contain;
  width: 80px;

  @media(max-width: 768px) {
    width: 50px;
  }
`

export const TitleContent = styled.h2`
  max-width: 90%;
  font-size: 32px;
  text-transform: uppercase;

  span {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 25px;
  }
`

export const TextContent = styled.p`
  font-size: 18px;
  color: #b2b2b2;
  max-width: 90%;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const TextContentWhite = styled.p`
  font-size: 18px;
  font-weight: bold;
  max-width: 90%;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const StudentsIcon = styled.img`
  width: 150px;
  margin: -16px 0;
`

export const StudentsNumber = styled.p`
  font-size: 18px;
  color: #b2b2b2;
  width: 90%;

  span {
    color: #fff;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`