import styled from 'styled-components';

export const Container = styled.div`
  .row + .row {
    margin-top: 23px;
  }

  .row {
    display: flex;
    align-items: center;

    .square-loading-effect {
      width: 48px;
      height: 48px;
      border-radius: 2px;
    }

    .column {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-left: 10px;

      .row-loading-effect {
        height: 12px;

        &:nth-child(1) {
          width: 50%;
        }

        &:nth-child(2) {
          width: 100%;
          margin-top: 10px;
        }
      }
    }
  }
`;
