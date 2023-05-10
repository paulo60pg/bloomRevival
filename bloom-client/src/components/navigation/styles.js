import { css } from "styled-components";
import Global from "../../Global";

export const DesktopNavStyles = css`
  height: ${Global.height.navigation};
  position: fixed;
  margin-bottom: 2rem;
  background: ${Global.color.lightBackground};
  z-index: 1000;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(230, 230, 230, 1);
  transition: box-shadow 0.2s ease-in-out;
  ${props =>
    props.isScrolled &&
    css`
      box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.2);
    `}
  .title {
    text-decoration: none;
    color: ${Global.color.primary};
    font-family: ${Global.font.title};
    font-size: ${Global.font.size.header};
    font-weight: ${Global.font.weight.header};
    padding-left: 0.1rem;
  }
`;

export const MobileNavStyles = css`
  position: fixed;
  margin-bottom: 2rem;
  background: ${Global.color.lightBackground};
  z-index: 1000;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid rgba(230, 230, 230, 1);
  transition: box-shadow 0.2s ease-in-out;
  ${props =>
    props.isScrolled &&
    css`
      box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.2);
    `}
  .title {
    text-decoration: none;
    color: ${Global.color.primary};
    font-family: ${Global.font.title};
    font-size: ${Global.font.size.header};
    font-weight: ${Global.font.weight.header};
    padding-left: 0.1rem;
  }
  .first-row {
    padding: 0.4rem 0rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  .second-row {
    display: flex;
    flex-direction: row;
    ${props =>
      props.isScrolled &&
      css`
        display: none;
      `}
  }
`;
