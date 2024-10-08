import styled from 'styled-components'

export const GeralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin: 70px 0;
`

export const Container = styled.section`
  width: 90%;
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`

export const Gif = styled.img`
  width: 45%;
  max-width: 550px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`

export const AreaInfo = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const AreaTitle = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  color: #fff;
  text-align: left;
`

export const Icon = styled.img`
  width: 70px;
`

export const Title = styled.h3`
  font-weight: normal;
  font-size: 30px;
  text-transform: uppercase;

  span {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 25px;
  }
`

export const AreaDescription = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  color: #fff;
  text-align: left;
`

export const Description = styled.p`
  color: #b2b2b2;
  font-size: 20px;

  span {
    color: #fff;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`