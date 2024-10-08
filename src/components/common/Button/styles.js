import styled from 'styled-components'

export const Link = styled.a`
  width: 90%;
  display: flex;
  justify-content: center;
`

export const ButtonCta = styled.button`
  display: flex;
  align-items: center;
  font-size: 18px;
  gap: 10px;
  border-radius: 5px;
  padding: 15px 25px;
  color: #0c0c0c;
  background: linear-gradient(to bottom, #dbb533, #d1a50e, #dbb533);
  font-weight: bold;
  transition: all 0.3s;
  text-transform: uppercase;

  &:hover {
    background: linear-gradient(to bottom, #e6c12f, #d1a50e, #e6c12f);
    box-shadow: 0 0 30px rgba(209, 165, 14, 0.6);
    transform: scale(1.05);
  }
`