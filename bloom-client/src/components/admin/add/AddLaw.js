import React from "react";
import DatePicker from "react-datepicker";
import {
  Form,
  Text,
  TextArea,
  RadioGroup,
  Radio,
  asField,
  Select,
  Option
} from "informed";
import styled from "styled-components";

import "react-datepicker/dist/react-datepicker.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Api from "../../../utils/Api";
// import BackButton from "../../core/admin/BackButton";
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
  margin-bottom: 30px;
`;

const Label = styled.h6`
  width: 30rem;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

class AddLaw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      chars_left: 140,
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  async componentDidMount() {
    const categories = await Api.getCategories();
    this.setState({
      categories
    });
  }

  handleChange({ name, value }) {
    this.setState({
      [name]: value
    });
  }

  async onSubmit(formState) {
    console.info("formState", formState);

    const newLaw = new FormData();
    newLaw.append("data", JSON.stringify(formState));

    const message = await Api.addLaw(newLaw);
    console.log("messageICI");
    this.setState({
      message
    });
    this.notify();
  }

  notify = () => toast(this.state.message);

  handleWordCount = event => {
    const charCount = event.target.value.length;
    const charLeft = 140 - charCount;
    this.setState({ chars_left: charLeft });
  };

  render() {
    const { categories, chars_left } = this.state;
    // console.log("chars_left", chars_left);
    return (
      <Container className="container">
        <Form onSubmit={formState => this.onSubmit(formState)}>
          <Label>
            Titre :
            <Text field="name" className="form-control form-control-sm" />
          </Label>
          <Label>
            Amendement (n°) :
            <Text field="subTitle" className="form-control form-control-sm" />
          </Label>
          <Label>
            Lien externe vers l'amendement :
            <Text field="link" className="form-control form-control-sm" />
          </Label>

          <Label>
            Résumé court (Il reste {chars_left} caractères)
            <TextArea
              field="resume"
              className="form-control form-control-sm"
              maxLength="140"
              onChange={this.handleWordCount}
            />
          </Label>

          <Label>
            Texte complet :
            <TextArea
              field="fullText"
              className="form-control form-control-sm"
            />
          </Label>

          <Label>
            Date d'entrée en vigueur :
            <DateInput
              field="commencement"
              dateFormat="dd/MM/yyyy"
              className="form-control form-control-sm"
            />
          </Label>

          <Label>
            Texte :
            <Select field="category" className="form-control form-control-sm">
              <Option value="">...</Option>
              {categories.map((category, index) => {
                return (
                  <Option value={category._id} key={index}>
                    {category.name}
                  </Option>
                );
              })}
            </Select>
          </Label>

          <RadioGroup field="protect">
            <Label>
              Protège <Radio value="true" />
            </Label>

            <Label>
              Détruit <Radio value="false" />
            </Label>
          </RadioGroup>
          <button type="submit" className="btn btn-outline-secondary">
            Ajouter
          </button>
        </Form>
        <ToastContainer />
      </Container>
    );
  }
}
export default AddLaw;
