import styled from 'styled-components';

export const Save = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 8px;

  &:hover {
    color: #000;
  }
`;

export const Bookmark = styled.span`
  color: ${props => (props.saved ? '#04d092' : '#bbb')};
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
