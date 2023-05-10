import styled, { css } from 'styled-components';
import Global from '../../Global';

export const GroupContainer = styled.div`
  margin-top: 8rem;
  margin-bottom: 5rem;
  background: white;
  border-radius: 4px;
  border: 1px solid rgba(230, 230, 230, 1);
  .header {
    padding-top: 1rem;
    overflow: auto;
    padding: 1rem;
    border-bottom: 1px solid rgba(230, 230, 230, 1);
  }
  .header-img {
    border-radius: 4px;
    height: auto;
    width: 100%;
  }
  .header-title {
    display: flex;
    justify-content: center;
    font-family: ${Global.font.title};
    font-weight: ${Global.font.weight.header};
    font-size: 2.6rem;
    color: ${Global.color.secondAccent};
    padding-top: 0.5rem;
    ${(props) =>
      props.mobileView &&
      css`
        font-size: 2rem;
        text-align: center;
      `}
  }
  .header-description {
    margin-top: 2rem;
    max-height: 8rem;
    overflow: auto;
  }
  .header-gauge-legend {
    font-size: 14px;
    text-align: center;
    margin-top: -20px;
  }
`;
