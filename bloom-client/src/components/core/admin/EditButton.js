import React from "react";
import styled from "styled-components";
import Api from "../../../utils/Api";
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

import Global from "../../../Global";

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
  justify-content: flex-end;
  i {
    color: ${Global.color.disabled};
    font-size: ${Global.font.size.header};
    text-decoration: none;
    transition: 0.3s ease;
  }
  i:hover {
    color: green;
  }
`;

const Label = styled.h6`
  width: 30rem;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

class EditButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      itemToUpdate: {},
      categories: [],
      groups: [],
      parties: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const groups = await Api.getGroups();
    const parties = await Api.getParties();
    const categories = await Api.getCategories();
    this.setState({
      groups,
      parties,
      categories
    });
  }

  handleChange({ name, value }) {
    this.setState({
      [name]: value
    });
  }

  handleWordCount = event => {
    const charCount = event.target.value.length;
    const charLeft = 140 - charCount;
    this.setState({ chars_left: charLeft });
  };

  async selectEntry(type, _id) {
    let itemToUpdate = "";
    if (type === "deputy") {
      itemToUpdate = await Api.getDeputy(_id);
    }
    if (type === "group") {
      itemToUpdate = await Api.getGroup(_id);
    }
    if (type === "party") {
      itemToUpdate = await Api.getParty(_id);
    }
    if (type === "category") {
      itemToUpdate = await Api.getCategory(_id);
    }
    if (type === "law") {
      itemToUpdate = await Api.getLaw(_id);
    }
    if (type === "vote") {
      itemToUpdate = await Api.getVote(_id);
    }
    const message = itemToUpdate.msg;
    console.info("itemToUpdate", itemToUpdate);
    this.setState({
      message,
      itemToUpdate
    });
  }

  async onSubmitParty(formState) {
    console.info("formState", formState);

    let { image } = this.state;

    const newParty = new FormData();
    if (image !== undefined) {
      newParty.append("image", image, image.name);
    }
    newParty.append("data", JSON.stringify(formState));
    const id = this.state.itemToUpdate._id;
    console.log("id ", id);
    const message = await Api.updateParty(newParty, id);
    console.log("message :", message);
    this.setState({
      message
    });

    this.notify();
  }

  async onSubmitGroup(formState) {
    console.info("formState", formState);

    let { image } = this.state;

    const newGroup = new FormData();
    if (image !== undefined) {
      newGroup.append("image", image, image.name);
    }
    newGroup.append("data", JSON.stringify(formState));
    // console.log("newGroup", newGroup);
    const id = this.state.itemToUpdate._id;
    console.log("id ", id);
    const message = await Api.updateGroup(newGroup, id);
    console.log("message :", message);
    this.setState({
      message
    });

    this.notify();
  }

  async onSubmitCategory(formState) {
    console.info("formState", formState);
    const newCategory = new FormData();

    newCategory.append("data", JSON.stringify(formState));
    const id = this.state.itemToUpdate._id;
    console.log("id ", id);

    const message = await Api.updateCategory(newCategory, id);
    console.log("message :", message);
    this.setState({
      message
    });

    this.notify();
  }

  async onSubmitLaw(formState) {
    console.info("formState", formState);
    const newLaw = new FormData();

    newLaw.append("data", JSON.stringify(formState));
    const id = this.state.itemToUpdate._id;
    console.log("id ", id);

    const message = await Api.updateLaw(newLaw, id);
    console.log("message :", message);
    this.setState({
      message
    });

    this.notify();
  }

  async onSubmitDeputy(formState) {
    console.info("formState", formState);
    const newDeputy = new FormData();
    let { image } = this.state;
    if (image !== undefined) {
      newDeputy.append("image", image, image.name);
    }
    newDeputy.append("data", JSON.stringify(formState));
    const id = this.state.itemToUpdate._id;
    console.log("id ", id);

    const message = await Api.updateDeputy(newDeputy, id);
    console.log("message :", message);
    this.setState({
      message
    });

    this.notify();
  }

  notify = () => toast(this.state.message);

  render() {
    const { _id, type } = this.props;
    const {
      itemToUpdate,
      categories,
      chars_left,
      groups,
      parties
    } = this.state;

    console.log("this.state.itemToUpdate", itemToUpdate);
    console.log("this.state.itemToUpdate._id", itemToUpdate._id);
    console.log("@ => render type", type);

    if (type === "party") {
      if (itemToUpdate._id !== undefined) {
        return (
          <div>
            <Form onSubmit={formState => this.onSubmitParty(formState)}>
              <Label>
                Nom du parti: {itemToUpdate.name}
                <Text
                  field="name"
                  type="text"
                  className="form-control form-control-sm"
                />
              </Label>
              <Label>
                Description : {itemToUpdate.description}
                <TextArea
                  field="description"
                  className="form-control form-control-sm"
                />
              </Label>
              <Label>
                Photo:
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
                Modifier le parti
              </button>
            </Form>
            <ToastContainer />
          </div>
        );
      }
    }

    if (type === "group") {
      if (itemToUpdate._id !== undefined) {
        return (
          <div>
            <Form onSubmit={formState => this.onSubmitGroup(formState)}>
              <Label>
                Nom du Groupe : {itemToUpdate.name}
                <Text
                  field="name"
                  type="text"
                  className="form-control form-control-sm"
                />
              </Label>

              <Label>
                Description : {itemToUpdate.description}
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
                Modifier le groupe
              </button>
            </Form>
            <ToastContainer />
          </div>
        );
      }
    }

    if (type === "category") {
      if (itemToUpdate._id !== undefined) {
        return (
          <div>
            <Form onSubmit={formState => this.onSubmitCategory(formState)}>
              <Label>
                Nom : {itemToUpdate.name}
                <Text
                  field="name"
                  type="text"
                  className="form-control form-control-sm"
                />
              </Label>
              <Label>
                Description : {itemToUpdate.description}
                <TextArea
                  field="description"
                  className="form-control form-control-sm"
                />
              </Label>
              <button type="submit" className="btn btn-outline-secondary">
                Modifier le texte
              </button>
            </Form>
            <ToastContainer />
          </div>
        );
      }
    }

    if (type === "law") {
      if (itemToUpdate._id !== undefined) {
        return (
          <div>
            <Form onSubmit={formState => this.onSubmitLaw(formState)}>
              <Label>
                Titre : {itemToUpdate.name}
                <Text field="name" className="form-control form-control-sm" />
              </Label>
              <Label>
                Amendement (n°) : {itemToUpdate.subTitle}
                <Text
                  field="subTitle"
                  className="form-control form-control-sm"
                />
              </Label>
              <Label>
                Lien externe vers l'amendement : {itemToUpdate.link}
                <Text field="link" className="form-control form-control-sm" />
              </Label>

              <Label>
                Résumé court (Il reste {chars_left} caractères) :{" "}
                {itemToUpdate.resume}
                <TextArea
                  field="resume"
                  className="form-control form-control-sm"
                  maxLength="140"
                  onChange={this.handleWordCount}
                />
              </Label>

              <Label>
                Texte complet : {itemToUpdate.fullText}
                <TextArea
                  field="fullText"
                  className="form-control form-control-sm"
                />
              </Label>

              <Label>
                Date d'entrée en vigueur :
                <DateInput
                  field="commencement"
                  showMonthYearPicker
                  dateFormat="MM/yyyy"
                  className="form-control form-control-sm"
                />
              </Label>

              <Label>
                Texte :
                <Select
                  field="category"
                  className="form-control form-control-sm"
                >
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
                Modifier l'amendement
              </button>
            </Form>
            <ToastContainer />
          </div>
        );
      }
    }

    if (type === "deputy") {
      if (itemToUpdate._id !== undefined) {
        if (itemToUpdate.group === null) {
          itemToUpdate.group = {};
        }
        if (itemToUpdate.party === null) {
          itemToUpdate.party = {};
        }
        return (
          <div>
            <Form onSubmit={formState => this.onSubmitDeputy(formState)}>
              <Label>
                Prénom: {itemToUpdate.firstName}
                <Text
                  className="form-control form-control-sm"
                  field="firstName"
                  type="text"
                />
              </Label>
              <Label>
                Nom De Famille: {itemToUpdate.surname}
                <Text
                  className="form-control form-control-sm"
                  field="surname"
                  type="text"
                />
              </Label>

              <Label>
                Twitter : {itemToUpdate.twitter}
                <Text
                  className="form-control form-control-sm"
                  field="twitter"
                  type="text"
                />
              </Label>

              <Label>
                Parti : {itemToUpdate.party.name}
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
                Groupe : {itemToUpdate.group.name}
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
                Modifier le député
              </button>
            </Form>
            <ToastContainer />
          </div>
        );
      }
    }

    return (
      <Container>
        <button
          className="btn"
          onClick={() => {
            this.selectEntry(type, _id);
          }}
        >
          <i className="far fa-edit" />
        </button>
      </Container>
    );
  }
}

export default EditButton;
