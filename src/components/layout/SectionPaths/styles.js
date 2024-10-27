import styled from 'styled-components'

import backgroundPrice from '../../../assets/background-prices.jpg'

export const Container = styled.section`
  display: flex;
  padding: 20px 0;
  flex-direction: column;
  gap: 40px;
  color: #fff;
  background-image: url(${backgroundPrice});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const AreaTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const SubTitle = styled.span`
  color: #d1a50e;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 3px;
`

export const Title = styled.h3`
  text-transform: uppercase;
  font-size: 32px;

  @media (max-width: 768px) {
    font-size: 25px;
    width: 90%;
    margin: 0 auto;
  }
`

export const AreaPrices = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 70px;
  }
`

export const Price = styled.div`
  width: 90%;
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    max-width: 400px;
  }
`

export const IconVs = styled.img`
  width: 130px;
  height: 130px;

  @media (max-width: 768px) {
    display: none;
  }
`

export const PriceTitle = styled.span`
  text-transform: uppercase;
  color: #b2b2b2;

  span {
    font-weight: bold;
    color: #fff;
  }
`

export const PriceTitleYellow = styled.span`
  text-transform: uppercase;
  color: #b2b2b2;
  color: #d1a50e;

  span {
    font-weight: bold;
  }
`

export const PriceFaculty = styled.span`
  font-size: 42px;
  font-weight: bold;
`

export const PriceCourse = styled.span`
  font-size: 42px;
  color: #d1a50e;
  font-weight: bold;
`

export const PriceDescription = styled.p`
  color: #b2b2b2;
  line-height: 1.5;
`

export const ButtonClt = styled.button`
  cursor: not-allowed;
  background-color: #242424;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 20px 20px;
  border-radius: 5px;
  text-transform: uppercase;
`