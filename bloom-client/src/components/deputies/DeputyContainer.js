import React from 'react';

import Api from '../../utils/Api';
import GetGrade from '../../utils/GetGradeModified';

import ProfileLoader from '../core/front/ProfileLoader';
import DeputyProfile from './DeputyProfile';

class DeputyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      deputy: {},
      finalNote: 0,
      votes: [],
      categories: [],
    };
  }

  async componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener('resize', this.handleScreenSize.bind(this));
    this.handleScreenSize();
    const slug = this.props.match.params.slug;
    const deputy = await Api.getDeputyBySlug(slug);
    const votes = await this.getVotesFromCurrentDeputy();
    const categories = await Api.getCategories();
    const laws = await Api.getLaws();
    const id = deputy._id;
    this.setState({
      categories,
      deputy,
      finalNote: 0,
      votes,
      isLoading: false,
    });
    let finalNote = GetGrade(id, votes, categories, laws);
    if (isNaN(finalNote)) {
      return (finalNote = 0);
    }
    setTimeout(
      this.setState({
        finalNote,
      }),
      1500,
    );
  }

  async componentDidUpdate() {
    window.scrollTo(0, 0);
    window.addEventListener('resize', this.handleScreenSize.bind(this));
    this.handleScreenSize();
    const slug = this.props.match.params.slug;
    const currentSlug = this.state.deputy.slug;
    const votes = await this.getVotesFromCurrentDeputy();
    const categories = await Api.getCategories();
    const laws = await Api.getLaws();
    if (slug !== currentSlug) {
      const deputy = await Api.getDeputyBySlug(slug);
      const id = deputy._id;
      this.setState({
        isLoading: false,
        deputy,
        votes,
        finalNote: 0,
      });
      let finalNote = GetGrade(id, votes, categories, laws);
      if (isNaN(finalNote)) {
        return (finalNote = 0);
      }
      setTimeout(
        this.setState({
          finalNote,
        }),
        1500,
      );
    }
  }
  handleScreenSize() {
    const { mobileView } = this.state;
    const screenSize = window.innerWidth <= 760;
    mobileView !== screenSize &&
      this.setState({
        mobileView: screenSize,
      });
  }
  async getVotesFromCurrentDeputy() {
    const slug = this.props.match.params.slug;
    const allVotes = await Api.getVotes();
    const votes = allVotes.filter((vote) => {
      return vote.deputy.slug === slug && vote;
    });
    return votes;
  }

  render() {
    const { deputy, isLoading } = this.state;
    if (deputy.group === null) {
      deputy.group = {};
    }
    if (deputy.party === null) {
      deputy.party = {};
    }
    return (
      <div className="container">
        <ProfileLoader isLoading={isLoading} />
        <DeputyProfile {...this.state} />
      </div>
    );
  }
}

export default DeputyContainer;
