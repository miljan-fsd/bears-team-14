import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

export const Header = styled.h2`
  color: #000;
  display: block;
  font-family: Raleway, 'Open Sans', Helvetica, sans-serif;
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
  margin: 40px 0 20px 0;

  @media (min-width: 768px) {
    font-size: 48px;
    margin: 100px 0 40px 0;
  }
`;

export const SearchStatus = styled.div`
  font-family: 'Open Sans', Helvetica, sans-serif;
  font-size: 16px;
  margin: 40px auto;
  text-align: center;

  & > strong {
    font-weight: 600;
  }
`;

const animationTimeout = {
  enter: 150,
  exit: 150,
};

export const StyledCSSTransition = styled(CSSTransition).attrs({
  classNames: 'fade',
  timeout: animationTimeout,
})`
  &.fade-enter {
    height: 0;
    opacity: 0;
    transition: all ${animationTimeout.exit}ms ease-in;
  }

  &.fade-enter.fade-enter-active {
    height: 24px;
    opacity: 0.5;
  }

  &.fade-exit {
    height: 16px;
    margin-top: 40px;
    opacity: 0.9;
    transition: all ${animationTimeout.exit}ms ease-in;
  }

  &.fade-exit.fade-exit-active {
    height: 0;
    margin-top: 0;
    opacity: 0;
  }
`;
