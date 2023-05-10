import React from "react";
import { Form, Text, TextArea } from "informed";
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

class AddLawCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  async onSubmit(formState) {
    console.info("formState", formState);
    const newCategory = new FormData();
    newCategory.append("data", JSON.stringify(formState));

    const message = await Api.addCategory(newCategory);
    this.setState({
      message
    });
    this.notify();
  }

  notify = () => toast(this.state.message);

  render() {
    return (
      <Container className="container">
        <Form onSubmit={formState => this.onSubmit(formState)}>
          <Label>
            Nom :
            <Text
              field="name"
              type="text"
              className="form-control form-control-sm"
            />
          </Label>
          <Label>
            Description :
            <TextArea
              field="description"
              className="form-control form-control-sm"
            />
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

export default AddLawCategory;
