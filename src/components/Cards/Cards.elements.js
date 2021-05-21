import styled from 'styled-components'

export const CardsWrapper = styled.ul`
  display: flex;
  margin: 0 0.5rem 0 0.5rem;
  padding: 0;
  width: calc(19.1875rem * 3);
  height: 31.25rem;

  li:first-child {
    border-radius: 0.5rem 0 0 0.5rem;
  }
  li:last-child {
    border-radius: 0 0.5rem 0.5rem 0;
  }

  @media (max-width: 768px) {
    max-width: 20.4375rem;
    flex-wrap: wrap;
    justify-content: center;

    li:first-child {
      border-radius: 0.5rem 0.5rem 0 0;
    }
    li:last-child {
      border-radius: 0 0 0.5rem 0.5rem;
    }
  }
`
export const Card = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style-type: none;
  width: 100%;
  max-width: 19.1875rem;
  height: 100%;
  padding: 3rem 3.0rem 3.1rem;
  font-size: 0.9375rem;
  background: ${props => props.color};

  @media (max-width: 768px) {
    max-height: 27.625rem;
  }
    
  h2 {    
    width: 100%;
    font-family: 'Big Shoulders Display';
    margin-bottom: -1rem;
    font-style: normal;
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 3rem;
    text-transform: uppercase;

    color: #F2F2F2;
    @media (max-width: 768px) {
      margin-bottom: 0;
    }
  }

  p {
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 0.9375rem;
    line-height: 1.5625rem;
    mix-blend-mode: normal;
    opacity: 0.75;
    color: #fff;
  }

  button {
    align-self: flex-end;
    background: #F2F2F2;
    border: none;
    border-radius: 1.5625rem;
    width: 9.125rem;
    height: 3rem;

    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 0.9375rem;
    line-height: 1.5625rem;
    color: ${props => props.color};

    &:hover {
      background: rgba(242, 242, 242, 0.8);
    }
  }
`

