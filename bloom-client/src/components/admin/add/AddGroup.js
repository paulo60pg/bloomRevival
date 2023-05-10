import React from "react";
import styled from "styled-components";
import { Form, Text, TextArea } from "informed";
import Api from "../../../utils/Api";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Label = styled.h6`
  margin-top: 10px;
  width: 30rem;
  display: flex;
  flex-direction: column;
`;
class AddGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
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
    const newGroup = new FormData();

    if (image != null) {
      newGroup.append("image", image, image.name);
    }
    newGroup.append("data", JSON.stringify(formState));
    console.log("messageICI");
    const message = await Api.addGroup(newGroup);
    console.log("message");
    this.setState({
      message
    });
    this.notify();
  }

  notify = () => toast(this.state.message);

  render() {
    return (
      <Container>
        <Form onSubmit={formState => this.onSubmit(formState)}>
          <Label>
            Nom du Groupe :
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

          <button type="submit" className="btn btn-outline-secondary">
            Ajouter
          </button>
        </Form>
        <ToastContainer />
      </Container>
    );
  }
}

export default AddGroup;
