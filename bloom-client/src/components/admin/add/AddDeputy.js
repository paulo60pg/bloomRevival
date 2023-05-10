import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Form, Text, Option, Select, asField } from "informed";
import styled from "styled-components";

import Api from "../../../utils/Api";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DateInput = asField(
  ({ fieldState: { value }, fieldApi: { setTouched, setValue }, ...props }) => (
    <DatePicker
      onFocus={() => setTouched(true)}
      onChange={date => setValue(date)}
      selected={value}
      {...props}
    />
  )
);

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

class AddDeputy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      parties: [],
      image: {}
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  async componentDidMount() {
    const groups = await Api.getGroups();
    const parties = await Api.getParties();
    this.setState({
      groups,
      parties
    });
  }

  handleChange({ name, value }) {
    this.setState({
      [name]: value
    });
  }

  async onSubmit(formState) {
    // console.info("formState", formState);

    const { image } = this.state;

    const newDeputy = new FormData();
    newDeputy.append("image", image, image.name);
    newDeputy.append("data", JSON.stringify(formState));

    const message = await Api.addDeputy(newDeputy);
    this.setState({
      message
    });
    this.notify();
  }

  notify = () => toast(this.state.message);

  render() {
    const { groups, parties } = this.state;
    // console.info(image);
    return (
      <Container className="container">
        <Form onSubmit={formState => this.onSubmit(formState)}>
          <Label>
            Prénom :
            <Text
              className="form-control form-control-sm"
              field="firstName"
              type="text"
            />
          </Label>
          <Label>
            Nom De Famille :
            <Text className="form-control form-control-sm" field="surname" type="text" />
          </Label>

          <Label>
            Twitter :
            <Text className="form-control form-control-sm" field="twitter" type="text" />
          </Label>

          <Label>
            Parti :
            <Select className="form-control form-control-sm" field="party">
              <Option value="">...</Option>
              {parties.map((party, index) => {
                return (
                  <Option value={party._id} key={index}>
                    {party.name}
                  </Option>
                );
              })}
            </Select>
          </Label>

          <Label>
            Groupe :
            <Select className="form-control form-control-sm" field="group">
              <Option value="">...</Option>
              {groups.map((group, index) => {
                return (
                  <Option value={group._id} key={index}>
                    {group.name}
                  </Option>
                );
              })}
            </Select>
          </Label>

          <Label>
            Prise de poste :
            <DateInput
              field="mandateFrom"
              showMonthYearPicker
              dateFormat="MM/yyyy"
              className="form-control form-control-sm"
            />
          </Label>

          <Label>
            Fin du mandat :
            <DateInput
              field="mandateTo"
              showMonthYearPicker
              dateFormat="MM/yyyy"
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

export default AddDeputy;
