import styled from 'styled-components'

export const Container = styled.section`
  color: #fff;
  display: flex;
  flex-direction: column;
  margin: 70px 0;
  gap: 30px;
`

export const ContainerTitle = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
`

export const SubTitle = styled.span`
  color: #d1a50e;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 3px;
`

export const AreaTitle = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const Title = styled.h3`
  text-transform: uppercase;
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`

export const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Gif = styled.img`
  width: 60%;
  height: 500px;
  object-fit: contain;

  @media (max-width: 768px) {
    height: 400px;
  }

  @media(max-width: 450px) {
    width: 100%;
  }
`

export const AreaInfo = styled.div`
  width: 40%;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;

  @media (max-width: 768px) {
    width: 90%;
    padding-right: 0;
  }
`

export const TitleInfo = styled.h4`
  text-transform: uppercase;
  font-size: 25px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

export const Description = styled.p`
  color: #b2b2b2;
  font-size: 18px;

  span {
    color: #fff;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const AreaCorrect = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const ContainerMoreInformations = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin-left: 0;
    margin-bottom: -30px;
  }
`

export const AreaInformationsTitle = styled.div`
  width: 40%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const ContainerCta = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
`

export const AreaCta = styled.div`
  display: flex;
  align-items: center;
`

export const DescriptionCta = styled.p`
  color: #b2b2b2;

  span {
    color: #fff;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`