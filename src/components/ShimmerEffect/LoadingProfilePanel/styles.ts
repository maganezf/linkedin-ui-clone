import styled from 'styled-components';

export const Container = styled.div`
  > div {
    .background-loading-effect {
      width: 100%;
      height: 70px;

      filter: brightness(96%);
    }

    > span {
      display: flex;
      flex-direction: column;
      align-items: center;

      padding-bottom: 175px;

      .avatar-loading-effect {
        z-index: 1;
        width: 72px;
        height: 72px;
        border-radius: 50%;
        margin: -36px 0 10px;
      }

      .row-loading-effect {
        height: 12px;

        &:nth-child(2) {
          width: 60%;
        }

        &:nth-child(3) {
          width: 50%;
          margin-top: 10px;
        }
      }
    }
  }
`;
