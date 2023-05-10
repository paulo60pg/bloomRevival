import React from "react";

import { Form, Option, Select } from "informed";
import styled from "styled-components";

import Api from "../../../utils/Api";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

class AddVote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deputies: [],
      laws: [],
      message: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  async componentDidMount() {
    const deputies = await Api.getDeputies();
    const laws = await Api.getLaws();
    this.setState({
      deputies,
      laws
    });
  }

  async onSubmit(formState) {
    console.info("formState", formState);
    const newVote = new FormData();
    newVote.append("data", JSON.stringify(formState));

    const message = await Api.addVote(newVote);
    this.setState({
      message
    });
    this.notify();
  }

  notify = () => toast(this.state.message);

  render() {
    const { deputies, laws } = this.state;
    return (
      <Container className="container">
        <Form onSubmit={formState => this.onSubmit(formState)}>
          <Label>
            Député :
            <Select field="deputy" className="form-control form-control-sm">
              <Option value="" disabled>
                Choisir un député
              </Option>
              {deputies.map((deputy, index) => {
                return (
                  <Option value={deputy._id} key={index}>
                    {deputy.name}
                  </Option>
                );
              })}
            </Select>
          </Label>

          <Label>
            Amendement :
            <Select field="law" className="form-control form-control-sm">
              <Option value="" disabled>
                Choisir un amendement
              </Option>
              {laws.map((law, index) => {
                return (
                  <Option value={law._id} key={index}>
                    {law.name}
                  </Option>
                );
              })}
            </Select>
          </Label>
          <Label>
            Statut du vote :
            <Select field="decision" className="form-control form-control-sm">
              <Option value="" disabled>
                Selectionnez une valeur
              </Option>
              <Option value="abstention">Abstention</Option>
              <Option value="absence">Absence</Option>
              <Option value="for">Pour</Option>
              <Option value="against">Contre</Option>
            </Select>
          </Label>
          <button type="submit" className="btn btn-outline-secondary">
            Ajouter
          </button>
        </Form>
        <ToastContainer />
      </Container>
    );
  }
}

export default AddVote;
