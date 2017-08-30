import styled from 'styled-components';

import { breakSmall } from './../../common-styles/layout';
// const mainColor = `rgb(28, 117, 188);`;

export const Wrapper = styled.div`
  border: 1px solid rgb(238, 238, 238);
  border-radius: 5px;
  box-shadow: 0;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-family: "Open Sans", Helvetica, sans-serif;
  height: 400px;
  margin-bottom: 20px;
  max-width: 740px;
  transition: box-shadow 0.4s ease;
  width: 100%;

  &:hover {
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.05);
  }

  @media (min-width: ${breakSmall}px) {
    margin-bottom: 0;
  }
`;

export const Save = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #000;
  }
`;

export const Bookmark = styled.span`
  color: #bbb;
  line-height: 12px;
  margin-left: 6px;
  width: 8px;

  & > .fa {
    font-size: 12px;
  }

  ${Save}:hover & {
    color: #04d092;
  }
`;

export const Description = styled.div`
  border-bottom: 1px solid rgba(155, 155, 155, 0.4);
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 96px;
  margin: auto 15px;
  margin-bottom: 0;
  overflow: hidden;
  padding: 24px 0;
  padding-bottom: 0;
`;

export const DescriptionText = styled.div`
  color: #666;
  font-size: 14px;
  line-height: 25px;
  padding-bottom: 15px;
  padding-top: 15px;
  text-transform: none;
  transition: opacity 0.2s;
  word-wrap: break-word;

  @media (min-width: ${breakSmall}px) {
    opacity: 0;

    ${Wrapper}:hover & {
      opacity: 1;
    }
  }
`;

export const Details = styled.div`
  color: rgb(155, 155, 155);
  flex: 1;
  font-size: 13px;
  overflow: hidden;
  text-overflow: clip;
  text-transform: uppercase;
  width: 100%;
`;

export const Footer = styled.footer`
  align-items: center;
  color: rgb(155, 155, 155);
  display: flex;
  flex-direction: row;
  font-size: 13px;
  height: 49px;
  justify-content: space-between;
  padding: 10px 15px;
  text-transform: uppercase;
`;

export const Image = styled.div`
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 5px 5px 0 0;
  height: 200px;
  transition: height 0.2s linear;

  @media (min-width: ${breakSmall}px) {
    height: 240px;

    ${Wrapper}:hover & {
      height: 175px;
    }
  }

  ${'' /* @media (min-width: ${breakLarge}px) {
    height: 240px;

    ${Wrapper}:hover & {
      height: 200px;
    }
  } */};
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 6px;
`;

export const GreenSpan = styled.span`
  color: rgb(38, 185, 153);
  font-weight: bold;
`;
