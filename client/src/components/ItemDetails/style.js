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
  padding: ${props => (props.summary ? `20px 16px` : `10px 10px 5px 10px`)};
`;
