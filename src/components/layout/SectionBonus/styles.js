import styled from 'styled-components'

export const Container = styled.section`
  width: 90%;
  margin: 70px auto;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 32px;

  @media(max-width: 990px) {
    font-size: 30px;
  }

  @media(max-width: 450px) {
    font-size: 25px;
  }
`

export const AreaCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 990px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Card = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 8px;
  background-color: #121212;
  text-align: left;
  padding: 40px 20px;
  transition: all 0.3s;
  box-shadow: 0px 0px 8px #7ed957;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 0px 10px #d1a50e;
  }

  @media (max-width: 990px) {
    margin: 0 auto;
    width: 80%;
    gap: 30px;
    align-items: center;
    text-align: center;
  }

  @media(max-width: 450px) {
    width: 100%;
  }
`

export const AreaCardTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
`

export const CardDescription = styled.p`
  color: #b2b2b2;
  line-height: 1.3;

  @media (max-width: 990px) {
    width: 90%;
    max-width: 400px;
  }
`