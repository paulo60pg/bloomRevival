import React from 'react';
import styled, { css } from 'styled-components';
import Global from '../../Global';
import SortButton from './SortButton';

const HandleCardsContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding-top: 4rem;
  padding-bottom: 2rem;
  border-top: 1px solid rgba(230, 230, 230, 1);
  display: inline-flex;
  font-weight: 700;
  color: ${Global.color.dark};
  .separator {
    color: ${Global.color.light};
  }
  .text {
    text-align: center;
    ${(props) =>
      props.mobileView &&
      css`
        margin-bottom: 2rem;
      `}
  }
  .button {
    text-align: center;
    display: flex;
    justify-content: center;
    ${(props) =>
      props.mobileView &&
      css`
        margin-bottom: 0.4rem;
      `}
  }
`;

class HandleCards extends React.Component {
  render() {
    const {
      toggleSurname,
      handleWorstNote,
      handleBestNote,
      surnameCaption,
      isActiveSurname,
      isActiveBest,
      isActiveWorst,
      mobileView,
    } = this.props;
    const className = mobileView ? 'col-12' : '';
    console.info(mobileView);
    console.info(className);
    return (
      <HandleCardsContainer className="container" {...this.props}>
        <div className="row">
          <span className={`text ${className}`}>Trier les députés :&nbsp;</span>
          <div className={className}>
            <SortButton
              className="button"
              onClick={toggleSurname}
              underline={Global.color.primary}
              color={isActiveSurname ? Global.color.secondary : Global.color.dark}
            >
              {surnameCaption}
            </SortButton>
          </div>

          {mobileView ? null : <div className="separator">&nbsp;|&nbsp;</div>}
          <SortButton
            className={`button ${className}`}
            onClick={handleBestNote}
            underline={Global.color.protect}
            color={isActiveBest ? Global.color.protect : Global.color.dark}
          >
            Meilleures notes
          </SortButton>
          {mobileView ? null : <div className="separator">&nbsp;|&nbsp;</div>}
          <SortButton
            className={`button ${className}`}
            onClick={handleWorstNote}
            underline={Global.color.destruct}
            color={isActiveWorst ? Global.color.destruct : Global.color.dark}
          >
            Pires notes
          </SortButton>
        </div>
      </HandleCardsContainer>
    );
  }
}

export default HandleCards;
