import styled, { css } from 'styled-components';
import { GrLinkedin } from 'react-icons/gr';
import { AiFillHome, AiOutlineBell, AiFillCaretDown } from 'react-icons/ai';

export const Container = styled.header`
  background: var(--color-header);
  padding: 0 30px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 2;

  display: none;

  @media (min-width: 1180px) {
    display: block;
  }
`;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;

  max-width: 1128px;
  margin: 0 auto;
  height: 52px;

  .right nav {
    height: 100%;

    > button {
      background: none;
      border: 0;
      outline: 0;

      display: flex;
      flex-direction: column;
      align-items: center;

      min-width: 90px;
      min-height: 100%;

      color: var(--color-icons);
      cursor: pointer;

      &:hover {
        color: var(--color-white);
      }

      &.active {
      }
    }
  }

  .left,
  .right nav {
    display: flex;
    align-items: center;
  }
`;

export const SearchInput = styled.div``;

export const ProfileCircle = styled.img`
  width: 24px;
  height: 24px;

  border-radius: 50%;
  border: 1px solid var(--color-icons);
`;

const iconsCSS = css`
  width: 24px;
  height: 24px;
`;

export const LinkedInIcon = styled(GrLinkedin)`
  ${iconsCSS}
`;

export const HomeIcon = styled(AiFillHome)`
  ${iconsCSS}
`;

export const NotificationsIcon = styled(AiOutlineBell)`
  ${iconsCSS}
`;

export const CaretDownIcon = styled(AiFillCaretDown)`
  ${iconsCSS}
`;
