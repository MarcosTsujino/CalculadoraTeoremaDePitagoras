import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 45rem;
  height: 30rem;
  padding-top: 2rem;
  margin-left: 20rem;

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-left: 1rem;
  }

  @media (max-width: 767px) {
    padding-top: 0.5rem;
    margin-left: 3rem;
    display: grid;
    grid-template-columns: 1fr;
    width: 22rem;
    height: 41.5rem;
  }
`

export const InputGrid = styled.div`
  display: grid;
  gap: 1rem;
  width: 15rem;
  padding-bottom: 2rem;
  margin-left: 2rem;
  @media (max-width: 767px) {
    gap: 0.2rem;
  }

  p {
    text-align: center;
    font-family: 'Roboto', sans-serif;
  }
`

export const MiniGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  width: 10rem;
  margin-left: 4rem;
  @media (max-width: 767px) {
    gap: 0.5rem;
  }
`

export const Img = styled.img`
  width: 26.5rem;

  @media (max-width: 767px) {
    width: 20rem;
    margin-top: 0.5rem;
  }
`

export const Hipotenusa = styled.p`
  width: 150px;
  position: relative;
  bottom: 17rem;
  right: -24rem;
  transform: rotate(-40deg);
  font-size: 1.7rem;
  text-align: center;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 767px) {
    bottom: 11rem;
    right: -4rem;
  }
`

export const Op = styled.p`
  position: relative;
  width: 30px;
  bottom: 20rem;
  right: -41.5rem;
  font-size: 1.5rem;
  text-align: center;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 767px) {
    bottom: 19rem;
    right: -18rem;
  }
`

export const Adj = styled.p`
  position: relative;
  bottom: 17rem;
  right: -28.5rem;
  width: 50px;
  font-size: 1.5rem;
  text-align: center;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 767px) {
    bottom: 18rem;
    right: -8rem;
  }
`

export const Result = styled.div`
  position: relative;
  bottom: 19.5rem;
  right: -14.5rem;
  height: 30px;
  width: 30px;
  font-size: 1.7rem;
  transform: rotate(-40deg);
  text-align: center;
  font-family: Roboto, sans-serif;

  @media (max-width: 767px) {
    bottom: 18.5rem;
    right: -12.5rem;
  }
`

export const ResultOp = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  bottom: 16.8rem;
  right: -29.5rem;
  font-size: 1.5rem;
  text-align: center;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 767px) {
    bottom: 22.2rem;
    right: -24rem;
  }
`

export const ResultAdj = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  bottom: 13.8rem;
  right: -13.5rem;
  font-size: 1.5rem;
  text-align: center;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 767px) {
    bottom: 21.2rem;
    right: -12rem;
    justify-content: center;
  }
`
