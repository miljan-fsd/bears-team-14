import styled from 'styled-components';

import {
  breakSmall,
  breakMiddle,
  breakLarge,
} from './../../common-styles/layout';

export const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  max-width: 1170px;

  @media (min-width: ${breakSmall}px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    width: 720px;
  }

  @media (min-width: ${breakMiddle}px) {
    width: 940px;
  }

  @media (min-width: ${breakLarge}px) {
    grid-template-columns: 1fr 1fr 1fr;
    width: 1140px;
  }
`;
