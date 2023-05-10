import React from 'react';
import { GroupContainer } from './styles';

import GroupHeader from './GroupHeader';
import DeputiesList from '../deputies/DeputiesList';

class GroupProfile extends React.Component {
  render() {
    const { group, deputies, mobileView, groupGrade } = this.props;

    return (
      <GroupContainer className="container" mobileView={mobileView}>
        <GroupHeader group={group} finalNote={groupGrade} mobileView={mobileView} />
        <DeputiesList deputies={deputies} mobileView={mobileView} />
      </GroupContainer>
    );
  }
}

export default GroupProfile;
