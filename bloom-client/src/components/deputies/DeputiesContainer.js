import React from 'react';
import styled from 'styled-components';

import Api from '../../utils/Api';
import GetGrade from '../../utils/GetGradeModified';

import Header from '../main/HeaderV2';
import DeputiesList from './DeputiesList';
import HandleCards from './HandleCards';

const Container = styled.div`
  margin-top: 8rem;
  margin-bottom: 5rem;
  background: white;
  border-radius: 4px;
  border: 1px solid rgba(230, 230, 230, 1);
`;
class DeputiesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deputies: [],
      surnameCaption: 'De A à Z',
      isSurnameFirst: true,
      isActiveSurname: true,
      isActiveBest: false,
      isActiveWorst: false,
    };
    this.toggleSurname = this.toggleSurname.bind(this);
    this.handleBestNote = this.handleBestNote.bind(this);
    this.handleWorstNote = this.handleWorstNote.bind(this);
  }
  async componentDidMount() {
    window.scrollTo(0, 0);
    const allDeputies = await Api.getDeputies();
    const votes = await Api.getVotes();
    const categories = await Api.getCategories();
    const laws = await Api.getLaws();
    const deputies = allDeputies.map((deputy) => {
      const id = deputy._id;
      const deputyNote = GetGrade(id, votes, categories, laws);
      // const deputyNote = GetGrade(id, votes);
      return Object.assign({}, deputy, { note: deputyNote });
    });
    // By default the deputies will be sorted by Alphabetical order
    this.setState({
      deputies: deputies.sort((a, b) => a.surname.localeCompare(b.surname)),
    });
    window.addEventListener('resize', this.handleScreenSize.bind(this));
    this.handleScreenSize();
  }

  handleScreenSize() {
    const { mobileView } = this.state;
    const screenSize = window.innerWidth <= 760;
    mobileView !== screenSize &&
      this.setState({
        mobileView: screenSize,
      });
  }
  handleBestNote = () => {
    const { deputies } = this.state;
    let newDeputies = deputies.sort((a, b) => b.note - a.note);
    this.setState({
      deputies: newDeputies,
      isActiveBest: true,
      isActiveWorst: false,
      isActiveSurname: false,
    });
  };
  handleWorstNote = () => {
    const { deputies } = this.state;
    let newDeputies = deputies.sort((a, b) => a.note - b.note);
    this.setState({
      deputies: newDeputies,
      isActiveBest: false,
      isActiveWorst: true,
      isActiveSurname: false,
    });
  };

  toggleSurname = () => {
    const { deputies, isSurnameFirst, surnameCaption } = this.state;
    let newDeputies = deputies;
    let newCaption = surnameCaption === 'De A à Z' ? 'De Z à A' : 'De A à Z';
    if (isSurnameFirst) {
      newDeputies = deputies.sort((a, b) => b.surname.localeCompare(a.surname));
    } else {
      newDeputies = deputies.sort((a, b) => a.surname.localeCompare(b.surname));
    }
    this.setState({
      deputies: newDeputies,
      isSurnameFirst: !isSurnameFirst,
      surnameCaption: newCaption,
      isActiveSurname: true,
      isActiveBest: false,
      isActiveWorst: false,
    });
  };

  render() {
    const { deputies, mobileView } = this.state;
    return (
      <Container className="container">
        <div className="row">
          <Header />
          <HandleCards
            handleBestNote={this.handleBestNote}
            handleWorstNote={this.handleWorstNote}
            toggleSurname={this.toggleSurname}
            {...this.state}
          />

          <DeputiesList deputies={deputies} mobileView={mobileView} />
        </div>
      </Container>
    );
  }
}

export default DeputiesContainer;
