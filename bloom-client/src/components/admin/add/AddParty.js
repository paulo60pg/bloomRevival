import React from "react";
import { Form, Text, TextArea } from "informed";
import styled from "styled-components";

import "react-datepicker/dist/react-datepicker.css";

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

class AddParty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {},
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange({ name, value }) {
    this.setState({
      [name]: value
    });
  }

  async onSubmit(formState) {
    console.info("formState", formState);

    const { image } = this.state;

    const newParty = new FormData();
    newParty.append("image", image, image.name);
    newParty.append("data", JSON.stringify(formState));

    const message = await Api.addParty(newParty);
    console.log("message :", message);
    this.setState({
      message
    });
    this.notify();
  }

  notify = () => toast(this.state.message);

  render() {
    const { message } = this.state;
    console.log("message", message);

    return (
      <Container className="container">
        <Form onSubmit={formState => this.onSubmit(formState)}>
          <Label>
            Nom du Parti :
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
          <Label>
            Photo :
            <input
              type="file"
              onChange={event =>
                this.handleChange({
                  name: "image",
                  value: event.target.files[0]
                })
              }
            />
          </Label>
          {/* <Alert
            type="submit"
            className="btn btn-outline-secondary"
            message={message}
          /> */}
          <button type="submit" className="btn btn-outline-secondary">
            Ajouter
          </button>
        </Form>
        <ToastContainer />
      </Container>
    );
  }
}

export default AddParty;
