import React from 'react';
import { PartyContainer } from './styles';

import PartyHeader from './PartyHeader';
import DeputiesList from '../deputies/DeputiesList';

class PartyProfile extends React.Component {
  render() {
    const { party, deputies, mobileView, partyGrade } = this.props;
    return (
      <PartyContainer className="container" mobileView={mobileView}>
        <PartyHeader party={party} finalNote={partyGrade} mobileView={mobileView} />
        <DeputiesList deputies={deputies} mobileView={mobileView} />
      </PartyContainer>
    );
  }
}

export default PartyProfile;
