import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const HeroImage = styled.div`
  background-image: url("hero-image.svg");
  background-position: 50% 0;
  background-size: cover;
  background-repeat: no-repeat;
  height: calc(100vh - 80px);
  margin-bottom: 90px;
  width: 100vw;
`;

export const Title = styled.h3`
  color: #337ab7;
  display: inline-block;
  font-family: "Open Sans", Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 7px;
  line-height: 32px;
  margin-bottom: 10px;
  text-transform: uppercase;
`;
