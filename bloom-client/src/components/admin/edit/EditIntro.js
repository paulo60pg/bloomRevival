import React from "react";
import Api from "../../../utils/Api";
import styled from "styled-components";
import { Form, Text, TextArea } from "informed";

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

class EditIntro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intro: {}
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const intro = await Api.getIntro();
    this.setState({
      intro
    });
  }

  handleChange({ name, value }) {
    this.setState({
      [name]: value
    });
  }

  async onSubmit(formState) {
    console.info("ICI formState");

    const newIntro = new FormData();
    newIntro.append("data", JSON.stringify(formState));
    const id = this.state.intro._id;
    console.info("ICI formState id", id);
    const message = await Api.updateIntro(newIntro, id);
    console.log("messageICI <<<<< ");
    this.setState({
      message
    });
    this.notify();
  }

  notify = () => toast(this.state.message);

  render() {
    const { intro } = this.state;
    console.log("intro", intro);
    return (
      <Container>
        <Form onSubmit={formState => this.onSubmit(formState)}>
          <Label>
            Titre du site actuel : {intro.title}
            <Text
              field="title"
              type="text"
              className="form-control form-control-sm"
            />
          </Label>

          <Label>
            Paragraphe 1 actuel : {intro.paragraph1}
            <TextArea
              field="paragraph1"
              className="form-control form-control-sm"
            />
          </Label>
          <Label>
            Paragraphe 2 : {intro.paragraph2}
            <TextArea
              field="paragraph2"
              className="form-control form-control-sm"
            />
          </Label>
          <Label>
            Paragraphe 3 : {intro.paragraph3}
            <TextArea
              field="paragraph3"
              className="form-control form-control-sm"
            />
          </Label>

          <button type="submit" className="btn btn-outline-secondary">
            Modifier l'introduction du site
          </button>
        </Form>
        <ToastContainer />
      </Container>
    );
  }
}

export default EditIntro;
