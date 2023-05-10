import React from "react";
import Api from "../../../utils/Api";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Label = styled.h6`
  width: 30rem;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

class EditParty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      party: {},
      name: "",
      description: "",
      picture: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    console.log("this.props.match.params", id);
    const party = await Api.getParty(id);
    this.setState({
      name: party.name,
      description: party.description
    });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Container className="container">
        <form onSubmit={this.handleSubmit}>
          <Label>
            Nom du parti:
            <input
              type="text"
              className="form-control form-control-sm"
              onChange={this.handleChange}
            />
          </Label>
          <Label>
            Description :
            <textarea
              field="description"
              className="form-control form-control-sm"
              onChange={this.handleChange}
            />
          </Label>
          <Label>
            Photo:
            <input type="file" />
          </Label>{" "}
          <button type="submit" className="btn btn-outline-secondary">
            Sauvergarder les modifications
          </button>
        </form>
      </Container>
    );
  }
}

export default EditParty;
