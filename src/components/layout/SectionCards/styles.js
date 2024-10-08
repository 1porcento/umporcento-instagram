import styled from 'styled-components'

export const Container = styled.section`
  color: #FFF;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
  padding-top: 50px;

  background-image: url('https://res.cloudinary.com/doalz5zdo/image/upload/v1727292431/background-cards_nlnizq.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #0c0c0c;

  @media (max-width: 768px) {
    gap: 30px;
    background-size: cover;
  }

  @media (max-width: 450px) {
    background-image: none;
  }
`

export const TitleCards = styled.h3`
  max-width: 90%;
  font-size: 32px;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`

export const AreaCards = styled.div`
  width: 1200px;
  max-width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  text-align: left;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Card = styled.div`
  cursor: pointer;
  backdrop-filter: blur(5px);
  box-shadow: 0px 0px 8px #ff3737;
  border-radius: 10px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0px 0px 10px #d1a50e;
    transform: scale(1.05);
    border: none;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`

export const CardName = styled.h4`
  font-size: 18px;
`

export const CardDescription = styled.p`
  color: #b2b2b2;
`