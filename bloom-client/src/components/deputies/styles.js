import styled, { css } from 'styled-components';
import Global from '../../Global';

export const ProfileContainer = styled.div`
  margin-top: 8rem;
  margin-bottom: 5rem;
  background: white;
  border-radius: 4px;
  border: 1px solid rgba(230, 230, 230, 1);
  .legend {
    margin-top: 1.2rem;
    margin-bottom: 2rem;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
  }
  .legend-title {
    margin-left: 20px;
  }
  .legend-content {
    margin-top: 4px;
  }
  .protect {
    color: ${Global.color.protect};
  }
  .absence {
    color: ${Global.color.absence};
  }
  .destruct {
    color: ${Global.color.destruct};
  }
`;

export const DeputyHeaderStyles = css`
  .header {
    background: ${Global.color.lightBackground};
    padding: 0.5rem;
    border-bottom: 1px solid rgba(230, 230, 230, 1);
    z-index: 10;
    transition: 0.3s;
  }
  .header-title {
    display: flex;
    justify-content: center;
    font-family: ${Global.font.title};
    font-weight: ${Global.font.weight.header};
    font-size: 2.6rem;
    color: ${Global.color.accent};
    padding-top: 0.5rem;
  }
  .header-twitter-button {
    align-self: center;
    padding-top: 1rem;
  }
  .header-img-container {
    height: 14rem;
    width: 16rem;
    padding: 1rem;
    overflow: auto;
  }
  .header-img-container__mobile {
    height: 14rem;
    width: 12rem;
    padding: 0.5rem;
    overflow: auto;
  }
  .header-img {
    border-radius: 2px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .header-content {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
  }

  .header-link {
    text-decoration: none;
    font-weight: 700;
    color: ${Global.color.secondAccent};
    display: inline-flex;
    transition: opacity 0.2s;
  }
  .header-link:hover {
    opacity: 0.8;
  }
  .header-gauge-legend {
    font-size: 0.8rem;
    color: ${Global.color.dark};
    text-align: center;
  }
`;

export const MobileDeputyHeaderContainer = styled.div`
  .header {
    background: ${Global.color.lightBackground};
    padding: 0.5rem;
    border-bottom: 1px solid rgba(230, 230, 230, 1);
    z-index: 10;
    transition: 0.3s;
  }
  .header-title {
    display: flex;
    justify-content: center;
    font-family: ${Global.font.title};
    font-weight: ${Global.font.weight.header};
    font-size: 2rem;
    color: ${Global.color.accent};
    padding-top: 0.5rem;
  }
  .header-twitter-button {
    align-self: center;
    padding-top: 1rem;
  }
  .header-img-container {
    height: 10rem;
    width: 8rem;
    padding: 0.35rem;
    overflow: auto;
  }
  .header-img {
    border-radius: 2px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .header-content {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
  }

  .header-link {
    text-decoration: none;
    font-weight: 700;
    color: ${Global.color.secondAccent};
    display: inline-flex;
    transition: opacity 0.2s;
  }
  .header-link:hover {
    opacity: 0.8;
  }
  .header-gauge-legend {
    font-size: 0.8rem;
    color: ${Global.color.dark};
    text-align: center;
  }
`;

export const DeputyCardContainer = styled.div`
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.01);
    box-shadow: 2px 2px 4px 0px rgba(230, 230, 230, 1);
  }
  .link {
    color: ${Global.color.body};
    &:hover {
      text-decoration: none;
    }
  }
  .card-img-top {
    height: 10rem;
    object-fit: cover;
  }
  .card-body {
    height: 8rem;
    overflow: auto;
  }
  .card-title {
    height: 3rem;
    text-align: center;
    font-family: ${Global.font.title};
    font-weight: ${Global.font.weight.header};
    font-size: ${Global.font.size.header};
    color: ${Global.color.dark};
  }
  .card-text {
    font-family: ${Global.font.body};
    font-weight: ${Global.font.weight.header};
    font-size: ${Global.font.size.caption};
    color: ${Global.color.secondary};
    text-align: center;
  }
  .card-note {
    font-family: ${Global.font.title};
    font-weight: ${Global.font.weight.header};
    text-align: center;
    font-size: 2rem;
  }
`;

export const CollapseContainer = styled.div`
  .rc-collapse {
    border: none;
  }
  .rc-collapse-header {
    font-family: ${Global.font.title} !important;
    font-weight: ${Global.font.weight.header} !important;
    font-size: ${Global.font.size.header} !important;
    color: ${Global.color.accent} !important;
    background: ${Global.color.lightBackground} !important;
    padding: 2rem 0rem 2rem 0.8rem !important;
    outline: 0;
  }
  .rc-collapse-header__description {
    text-align: center;
    width: 100%;
    padding-bottom: 1rem;
  }
`;

export const MobileDeputyCardContainer = styled.div`
  border: none;
  height: 6rem;
  margin-bottom: 0.45rem;
  .link {
    color: ${Global.color.body};
    &:hover {
      text-decoration: none;
    }
  }
  .card-title {
    align-self: center;
    font-size: 1rem;
    font-weight: bold;
    color: ${Global.color.dark};
  }
  .card-img {
    border-radius: 5px;
    object-fit: cover;
    height: 5.85rem;
  }
  .card-img-container {
  }
  .card-text {
    color: ${Global.color.primary};
    font-size: 0.8rem;
  }
  .note-container {
    align-self: center;
    font-size: 20px;
  }
`;
