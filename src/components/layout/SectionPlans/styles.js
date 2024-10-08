import styled from 'styled-components'

export const Container = styled.section`
  color: #fff;
  margin: 90px 0;
  display: flex;
  flex-direction: column;
  gap: 50px;

  background-image: url('https://res.cloudinary.com/doalz5zdo/image/upload/v1727292431/background-cell_obmu8r.jpg');
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
  font-size: 15px;
  letter-spacing: 3px;
`

export const Title = styled.h3`
  text-transform: uppercase;
  font-size: 32px;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`

export const AreaPlan = styled.div`
  width: 400px;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 20px 0;
  box-shadow: 0 0 3px #b2b2b2;
  border-radius: 5px;

  background-image: url('https://res.cloudinary.com/doalz5zdo/image/upload/v1727290202/backgroundplan_w3jaun.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const AreaPlanTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const PlanTitle = styled.h4`
  font-size: 32px;
  text-transform: uppercase;
`

export const PlanSubTitle = styled.p`
  font-size: 18px;
`

export const AreaPrice = styled.div`
  display: flex;
  gap: 10px;
`

export const PriceBefore = styled.span`
  text-decoration: line-through;
  color: #b2b2b2;
  font-size: 20px;
`

export const PriceAfter = styled.span`
  font-size: 36px;
  color: #d1a50e;
  font-weight: bold;
`

export const Or = styled.span`
  font-size: 25px;
  margin: -30px 0;
`

export const Price = styled.span`
  color: #d1a50e;
  font-size: 30px;
  font-weight: bold;
`

export const ContainerChecked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 10px;
`

export const AreaChecked = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  text-align: left;
`

export const CheckedDescription = styled.p`
  @media (max-width: 450px) {
    font-size: 14px;
  }
`

export const AreaMessages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`

export const AreaMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const Message = styled.span`
  @media (max-width: 450px) {
    font-size: 14px;
  }
`

export const MessageYellow = styled.span`
  color: #d1a50e;
`

export const ButtonCheckout = styled.button`
  width: 90%;
  background-color: #545454;
  color: #fff;
  font-weight: bold;
  font-size: 25px;
  text-transform: uppercase;
  border-radius: 5px;
  padding: 20px 0;
  transition: all 0.5s;

  &:hover {
    color: #000;
    background: linear-gradient(to right, #d1a50e, orange);
    transform: translateY(-2px);
    box-shadow: 0 0 5px #0c0c0c;
  }

  @media (max-width: 450px) {
    color: #000;
    background: linear-gradient(to right, #d1a50e, orange);
    transform: translateY(-2px);
    box-shadow: 0 0 5px #0c0c0c;
  }
`