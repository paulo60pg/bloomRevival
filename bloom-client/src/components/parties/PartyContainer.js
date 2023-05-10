import React from 'react';
import Api from '../../utils/Api';
import GetGrade from '../../utils/GetGradeModified';

import ProfileLoader from '../core/front/ProfileLoader';
import PartyProfile from './PartyProfile';

class PartyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      party: {},
      deputies: [],
      partyGrade: 0,
    };
  }

  async componentDidMount() {
    window.scrollTo(0, 0);
    this.handleScreenSize();
    const slug = this.props.match.params.slug;
    const party = await Api.getPartyBySlug(slug);
    const deputies = await this.getDeputiesFromCurrentParty();
    const categories = await Api.getCategories();
    const laws = await Api.getLaws();
    const votes = await Api.getVotes();
    const deputiesPlusGrade = deputies.map((deputy) => {
      const id = deputy._id;
      const deputyNote = GetGrade(id, votes, categories, laws);
      return Object.assign({}, deputy, { note: deputyNote });
    });
    this.setState({
      isLoading: false,
      party,
      deputies: deputiesPlusGrade,
    });
    const partyGrade = await this.getPartyGrade(deputies, votes);
    setTimeout(
      this.setState({
        partyGrade,
      }),
      1500,
    );
  }

  async componentDidUpdate() {
    window.scrollTo(0, 0);
    const slug = this.props.match.params.slug;
    const stateSlug = this.state.party.slug;
    if (slug !== stateSlug) {
      const deputies = await this.getDeputiesFromCurrentParty();
      const party = await Api.getPartyBySlug(slug);
      const votes = await Api.getVotes();
      const categories = await Api.getCategories();
      const laws = await Api.getLaws();
      const deputiesPlusGrade = deputies.map((deputy) => {
        const id = deputy._id;
        const deputyNote = GetGrade(id, votes, categories, laws);
        return Object.assign({}, deputy, { note: deputyNote });
      });
      this.setState({
        party,
        deputies: deputiesPlusGrade,
        partyGrade: 0,
      });
      const partyGrade = await this.getPartyGrade(deputies, votes);
      setTimeout(
        this.setState({
          partyGrade,
        }),
        1500,
      );
    }
  }
  async getDeputiesFromCurrentParty() {
    const slug = this.props.match.params.slug;
    const allDeputies = await Api.getDeputies();
    const deputies = allDeputies.filter((deputy) => {
      if (deputy.party === null) {
        deputy.party = {};
      }
      return deputy.party.slug === slug && deputy;
    });
    return deputies;
  }
  async getPartyGrade(deputies, votes) {
    const laws = await Api.getLaws();
    const categories = await Api.getCategories();
    const deputiesGrade = [];
    deputies.forEach((deputy) => {
      const id = deputy._id;
      const grade = GetGrade(id, votes, categories, laws);
      deputiesGrade.push(grade);
    });
    const partyGrade = deputiesGrade.reduce((a, b) => a + b, 0) / deputiesGrade.length || 0;
    return partyGrade;
  }

  handleScreenSize() {
    const { mobileView } = this.state;
    const screenSize = window.innerWidth <= 760;
    mobileView !== screenSize &&
      this.setState({
        mobileView: screenSize,
      });
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div className="container">
        {isLoading ? <ProfileLoader isLoading={isLoading} /> : <PartyProfile {...this.state} />}
      </div>
    );
  }
}

export default PartyContainer;
