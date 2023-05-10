import React from "react";
// import axios from "axios";
// import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import Api from "../../../utils/Api";

import BackButton from "../../core/admin/BackButton";
import FieldSelector from "../../core/admin/FieldSelector";
import PictureUploader from "../../core/admin/PictureUploader";
import Button from "../../core/admin/Button";
import Input from "../../core/admin/Input";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class EditDeputy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deputy: [],
      parties: [],
      groups: [],
      group: "",
      party: "",
      name: "",
      participationRate: "",
      selectedFile: {}
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleDateFrom = this.handleDateFrom.bind(this);
    this.handleDateTo = this.handleDateTo.bind(this);
  }
  async componentDidMount() {
    const deputy = await Api.getDeputy();
    const groups = await Api.getGroups();
    const parties = await Api.getParties();
    this.setState({
      groups,
      parties,
      group: deputy.group,
      party: deputy.party,
      name: deputy.name,
      participationRate: deputy.participationRate,
      selectedFile: deputy.selectedFile
    });
  }
  handleChange({ name, value }) {
    this.setState({
      [name]: value
    });
  }
  handleDateFrom(date) {
    this.setState({
      mandateFrom: date
    });
  }
  handleDateTo(date) {
    this.setState({
      mandateTo: date
    });
  }

  handleUpload(evt) {
    const selectedFile = evt.target.files[0];
    this.setState({
      selectedFile,
      message: ""
    });
  }

  async onSubmit(event) {
    event.preventDefault();
    const {
      name,
      participationRate,
      selectedFile,
      group,
      party,
      mandateFrom,
      mandateTo
    } = this.state;

    // const url = `${Config.server}/api/deputies/add`;
    const deputy = new FormData();
    deputy.append("image", selectedFile, selectedFile.name);
    deputy.append("name", name);
    deputy.append("participationRate", participationRate);
    deputy.append("group", group);
    deputy.append("party", party);
    deputy.append("mandateFrom", mandateFrom);
    deputy.append("mandateTo", mandateTo);
    const message = await Api.updateDeputy(deputy);
    this.setState({
      message
    });
    this.notify();
  }

  notify = () => toast(this.state.message);

  render() {
    const { groups, parties, name, participationRate } = this.state;

    return (
      <div>
        <ToastContainer />
        <BackButton />
        <div className="pt-5 container">
          <form className="offset-lg-3 col-lg-6 col-12">
            <Input
              label="Nom complet :"
              name="name"
              value={name}
              type="text"
              placeholder="nom du député"
              handleChange={this.handleChange}
            />
            <Input
              label="Taux de participation :"
              name="participationRate"
              type="number"
              value={participationRate}
              placeholder=""
              handleChange={this.handleChange}
            />
            <PictureUploader
              label="Photo de profil"
              handleUpload={this.handleUpload}
            />
            <FieldSelector
              label="Groupe zer :"
              data={groups}
              name="group"
              handleChange={this.handleChange}
            />
            <FieldSelector
              label="Parti banks zer :"
              data={parties}
              name="party"
              handleChange={this.handleChange}
            />
            {/* <div className="row">
              <div className="col-6">
                <div>Prise de poste :</div>
                <DatePicker
                  selected={mandateFrom}
                  onChange={this.handleDateFrom}
                  showMonthYearPicker
                  dateFormat="MM/yyyy"
                />
              </div>
              <div className="col-6">
                <div>Fin de Mandat :</div>
                <DatePicker
                  selected={mandateTo}
                  onChange={this.handleDateTo}
                  showMonthYearPicker
                  dateFormat="MM/yyyy"
                />
              </div>
            </div> */}
            <Button
              label="Mettre à jour le député"
              onSubmit={this.onSubmit}
              className="my-5 btn btn-primary"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default EditDeputy;
