import React from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import { DesktopNavStyles, MobileNavStyles } from "./styles";
import Api from "../../utils/Api";

import SearchField from "./SearchField";
import Share from "./Share";

const DesktopNavContainer = styled.nav`
  ${DesktopNavStyles}
`;
const MobileNavContainer = styled.nav`
  ${MobileNavStyles}
`;
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      parties: [],
      deputies: [],
      searchOptions: [],
      selectedOption: null
    };
    this.handleSearchField = this.handleSearchField.bind(this);
  }
  async componentDidMount() {
    const groups = await Api.getGroups();
    const parties = await Api.getParties();
    const deputies = await Api.getDeputies();
    const searchOptions = this.setSearchOptions(groups, parties, deputies);
    this.setState({
      groups,
      parties,
      deputies,
      searchOptions
    });
  }
  setSearchOptions(groups, parties, deputies) {
    const partiesOptions = [];
    const groupsOptions = [];
    const deputiesOptions = [];
    parties.map(party =>
      partiesOptions.push({
        value: party.slug,
        label: party.name,
        uri: "parti"
      })
    );
    groups.map(group =>
      groupsOptions.push({
        value: group.slug,
        label: group.name,
        uri: "groupe"
      })
    );
    deputies.map(deputy =>
      deputiesOptions.push({
        value: deputy.slug,
        label: deputy.name,
        uri: "depute"
      })
    );
    const searchOptions = [
      {
        label: "Groupes Européens",
        options: groupsOptions
      },
      {
        label: "Partis Nationaux",
        options: partiesOptions
      },
      {
        label: "Députés",
        options: deputiesOptions
      }
    ];
    return searchOptions;
  }

  handleSearchField(selectedOption) {
    if (selectedOption !== null) {
      this.props.history.push(`/${selectedOption.uri}/${selectedOption.value}`);
      this.setState({ selectedOption });
    }
    if (selectedOption === null) {
      this.setState({ selectedOption });
    }
  }

  renderDesktop(selectedOption, searchOptions, isScrolled) {
    return (
      <DesktopNavContainer isScrolled={isScrolled}>
        <Link className="title" to="/">
          BLOOM
        </Link>
        <SearchField
          selectedOption={selectedOption}
          options={searchOptions}
          handleChange={this.handleSearchField}
        />
        <Share mobileView={false} />
      </DesktopNavContainer>
    );
  }
  renderMobile(selectedOption, searchOptions, isScrolled) {
    return (
      <MobileNavContainer isScrolled={isScrolled}>
        <div className="first-row">
          <Link className="title" to="/">
            BLOOM
          </Link>
          <Share mobileView />
        </div>
        <div className="second-row">
          <SearchField
            mobileView
            selectedOption={selectedOption}
            options={searchOptions}
            handleChange={this.handleSearchField}
          />
        </div>
      </MobileNavContainer>
    );
  }

  render() {
    const { selectedOption, searchOptions } = this.state;
    const { isScrolled, mobileView } = this.props;

    return (
      <div>
        {mobileView
          ? this.renderMobile(selectedOption, searchOptions, isScrolled)
          : this.renderDesktop(selectedOption, searchOptions, isScrolled)}
      </div>
    );
  }
}

export default withRouter(Navigation);
