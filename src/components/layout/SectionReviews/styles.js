import styled from 'styled-components'

export const Container = styled.section`
  color: #FFF;
  width: 90%;
  margin: 70px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media(max-width: 450px) {
    width: 100%;
  }
`

export const AreaTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`

export const SubTitle = styled.span`
  color: #d1a50e;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 3px;
`

export const Title = styled.h2`
  width: 100%;
  font-size: 32px;
  text-transform: uppercase;

  @media(max-width: 768px) {
    font-size: 25px;
  }
`

export const Description = styled.p`
  color: #b2b2b2;
  font-size: 18px;

  @media(max-width: 768px) {
    font-size: 16px;
  }

  span {
    color: #fff;
    font-weight: bold;
  }
`

export const AreaImages = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);

    &:nth-child(9) {
      display: none;
    }
  }

  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
    width: 90%;

    &:nth-child(9) {
      display: none;
    }
  }
`

export const Image = styled.img`
  cursor: pointer;
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0px 0px 3px #b2b2b2;
  }

  @media (max-width: 768px) {
    &:nth-child(9) {
      display: none;
    }
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