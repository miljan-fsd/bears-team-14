import styled from 'styled-components';

import { parseImgUrl } from '../../helpers';

export const Wrapper = styled.div`
  background-color: #f6f6f6;
  width: 100%;
`;

export const HeroImage = styled.div`
  background-image: url(${props => parseImgUrl(props.imgUrl)});
  background-position: 50%;
  background-size: cover;
  height: 268px;
`;

export const Title = styled.div`
  background-color: #fff;
  color: #000;
  font-family: Raleway, 'Open Sans', Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 500;
  padding: 20px 16px 24px 16px;

  & > h1 {
    font-size: 24px;
    font-weight: bold;
    line-height: 28px;
    margin: 12px 0;
  }

  & > p {
    color: #666;
    font-family: 'Open Sans', Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 300;
  }
`;

export const JobTimeInfo = styled.div`
  background-color: #fff;
  color: #666;
  font-family: 'Open Sans', Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 300;
  padding: 24px 16px 34px;

  & p > strong {
    color: #333;
  }
`;

export const JobInfoSocial = styled.div`
  background-color: #f6f6f6;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
  color: #666;
  font-family: 'Open Sans', Helvetica, sans-serif;
  font-size: 16px;
  line-height: 32px;
  margin-bottom: 10px;
  padding: 20px 16px;

  & > span {
    display: block;
    margin: 8px 0;
  }

  & > span > i {
    cursor: not-allowed;
    font-size: 40px;
    line-height: 40px;
    margin: 0 2px;
    width: 40px;
  }
`;

export const ListingBlock = styled.div`
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
  font-family: Roboto, sans-serif;
  margin-bottom: 10px;
  padding: 20px 16px;

  & h3 {
    color: #333;
    font-family: Raleway, 'Open Sans', Helvetica, sans-serif;
    font-size: 24px;
    font-weight: bold;
    text-transform: capitalize;
  }
`;

export const StickyNavbar = styled.div`
  align-items: center;
  background-color: transparent;
  border: 0;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  font-family: 'Open Sans', Helvetica, sans-serif;
  font-size: 13px;
  height: 90px;
  padding: 24px 16px;
  position: fixed;
  width: 100%;
`;

export const RoundedButton = styled.button`
  background-color: ${props => (props.empty ? '#fff' : '#04d092')};
  border: 1px solid #04d092;
  border-radius: 40px;
  box-sizing: border-box;
  color: ${props => (props.empty ? '#04d092' : '#fff')};
  cursor: pointer;
  height: 48px;
  line-height: 18px;
  margin-left: ${props => (props.first ? 0 : '12px')};
  outline-color: transparent;
  padding: 14px 20px;
  text-transform: uppercase;
  transition: all 0.2s linear;

  & > .fa {
    font-size: 20px;
  }

  &:hover {
    background-color: #26b999;
    border: 1px solid #26b999;
    color: #fff;
  }
`;

export const DangerButton = RoundedButton.extend`
  background-color: #ff3860;
  border: 1px solid #ff3860;

  &:hover {
    background-color: #ff2b56;
    border: 1px solid #ff2b56;
    color: #fff;
  }
`;

export const SideMenuButton = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 50%;
  box-shadow: 0 1px 6px rgba(8, 57, 96, 0.06), 0 2px 32px rgba(8, 57, 96, 0.16);
  color: #04d092;
  height: 56px;
  outline-color: transparent;
  position: absolute;
  right: 20px;
  transition: all 0.4s ease;
  width: 56px;

  & > .fa {
    font-size: 24px;
  }

  &:hover {
    box-shadow: 0 2px 8px rgba(8, 57, 96, 0.09),
      0 4px 40px rgba(8, 57, 96, 0.24);
  }
`;
