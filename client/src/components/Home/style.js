import styled from 'styled-components';

import { navbarHeight } from '../../common-styles/layout';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const HeroWrapper = styled.div`
  background-color: #1c75bc;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - ${navbarHeight}px);
  margin-bottom: 90px;
  padding-top: 26px;
  width: 100%;
`;

export const HeroButton = styled.button`
  background-color: #1db6ef;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  height: 64px;
  line-height: 32px;
  outline: none;
  text-transform: uppercase;
  transition: all 0.1s linear;
  width: 250px;

  & > .fa {
    font-size: 24px;
    margin-right: 8px;
  }

  &:hover {
    background-color: #35bef1;
  }
`;
export const HeroContent = styled.div`
  flex: 1;
  padding-top: 26px;
`;

export const HeroFooter = styled.div`
  color: #fff;
  font-family: "Open Sans", Helvetica, sans-serif;
  font-size: 36px;
  font-weight: 300;
  margin-bottom: 108px;
  text-align: center;

  & strong {
    color: #fff;
    font-weight: bold;
  }
`;

export const HeroTitle = styled.h1`
  color: #fff;
  font-family: "Open Sans", Helvetica, sans-serif;
  font-size: 40px;
  font-weight: 300;
  text-align: center;

  & strong {
    color: #fff;
    font-size: 48px;
    font-weight: bold;
  }
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
