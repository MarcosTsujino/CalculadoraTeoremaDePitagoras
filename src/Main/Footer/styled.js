import styled from 'styled-components'

export const FooterStyle = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  right: 0;
  height: 2.2rem;
  color: #ffffff;
  background-color: #8a2be2;
  box-shadow: 0px -2px 2px gray;
  width: 100%;

  p {
    margin-right: 1.5rem;
    position: relative;
    bottom: 0.3rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    position: relative;
  }

  @media (max-width: 767px) {
    display: flex;
    position: relative;
  }
`
