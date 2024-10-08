import styled from 'styled-components'

export const Container = styled.section`
  width: 90%;
  margin: 70px auto;
  display: flex;
  flex-direction: column;
  color: #fff;
  gap: 30px;
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
  font-size: 32px;
  text-transform: uppercase;

  @media(max-width: 768px) {
    font-size: 25px;
  }
`

export const AreaModules = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 990px) {
    width: 100%;
    margin: 0 auto;
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Module = styled.div`
  cursor: pointer;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0px 0px 3px #b2b2b2;
  }
`

export const AreaDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  text-align: left;
  padding: 20px;
`

export const TitleDescription = styled.h3`
  text-transform: uppercase;
  font-size: 20px;

  @media(max-width: 450px) {
    font-size: 18px;
  }
`

export const Description = styled.p`
  font-size: 18px;
  color: #b2b2b2;

  @media(max-width: 450px) {
    font-size: 16px;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 230px;
  border-radius: 0px 0px 8px 8px;
  object-fit: cover;

  @media(max-width: 990px) {
    height: 100%;
  }
`

export const AreaNew = styled.div`
  width: 500px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`

export const NewTitle = styled.h3`
  text-transform: uppercase;

  @media(max-width: 450px) {
    width: 250px;
  }
`

export const NewDescription = styled.div`
  color: #b2b2b2;
  line-height: 1.5;

  @media(max-width: 450px) {
    font-size: 14px;
  }
`

export const AreaMiniDescription = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`

export const MiniDescription = styled.p`
  color: #b2b2b2;

  span {
    color: #fff;
    font-weight: bold;
  }

  @media(max-width: 450px) {
    font-size: 14px;
  }
`