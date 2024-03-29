import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  > span {
    margin-top: 48px;
    display: flex;
  }

  .left-column,
  .right-column,
  .ad-banner {
    display: none;
  }

  @media (min-width: 1080px) {
    > main {
      display: flex;
      justify-content: center;

      margin: 0 30px;
    }

    > span {
      margin-top: 52px;
      padding: 8px 0;
    }

    .left-column,
    .right-column {
      display: unset;
    }

    .middle-column {
      margin: 0 25px 16px;
    }
  }
`;
