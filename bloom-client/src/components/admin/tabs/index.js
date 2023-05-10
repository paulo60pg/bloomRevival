import React from "react";
import styled from "styled-components";

import DeputiesList from "../lists/DeputiesList";
import CategoriesList from "../lists/CategoriesList";
import LawsList from "../lists/LawsList";
import GroupsList from "../lists/GroupsList";
import PartiesList from "../lists/PartiesList";
import VotesList from "../lists/VotesList";

import AddDeputy from "../add/AddDeputy";
import AddGroup from "../add/AddGroup";
import AddLaw from "../add/AddLaw";
import AddLawCategory from "../add/AddLawCategory";
import AddParty from "../add/AddParty";
import AddVote from "../add/AddVote";

import EditDeputy from "../edit/EditDeputy";
import EditGroup from "../edit/EditDeputy";
import EditLaw from "../edit/EditLaw";
import EditLawCategory from "../edit/EditLawCategory";
import EditParty from "../edit/EditParty";
import EditVote from "../edit/EditVote";
import EditIntro from "../edit/EditIntro";

import Selector from "./Selector";
import TabulationBar from "./TabulationBar";

const Container = styled.div`
  .list-group {
    justify-content: center;
  }
  li:hover {
    cursor: pointer;
  }
`;
class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "deputies",
      isActiveAdd: true,
      isActiveEdit: false,
      isActiveDelete: false
    };
    this.setActiveSelector = this.setActiveSelector.bind(this);
    this.setActiveTab = this.setActiveTab.bind(this);
  }
  setActiveSelector(state) {
    this.setState({
      isActiveAdd: state.add,
      isActiveEdit: state.edit,
      isActiveDelete: state.delete
    });
  }
  setActiveTab(activeTab) {
    this.setState({
      activeTab
    });
  }

  renderAdd() {
    const { activeTab } = this.state;
    return (
      <div>
        {activeTab === "deputies" && <AddDeputy />}
        {activeTab === "laws" && <AddLaw />}
        {activeTab === "categories" && <AddLawCategory />}
        {activeTab === "parties" && <AddParty />}
        {activeTab === "groups" && <AddGroup />}
        {activeTab === "votes" && <AddVote />}
      </div>
    );
  }
  renderEdit() {
    const { activeTab } = this.state;
    return (
      <div className="pt-5 container display-3" style={{ textAlign: "center" }}>
        {activeTab === "deputies" && <EditDeputy />}
        {activeTab === "laws" && <EditLaw />}
        {activeTab === "categories" && <EditLawCategory />}
        {activeTab === "parties" && <EditParty />}
        {activeTab === "groups" && <EditGroup />}
        {activeTab === "votes" && <EditVote />}
        {activeTab === "intro" && <EditIntro />}
      </div>
    );
  }

  renderDelete() {
    const { activeTab } = this.state;
    return (
      <div>
        {activeTab === "deputies" && <DeputiesList />}
        {activeTab === "laws" && <LawsList />}
        {activeTab === "categories" && <CategoriesList />}
        {activeTab === "parties" && <PartiesList />}
        {activeTab === "groups" && <GroupsList />}
        {activeTab === "votes" && <VotesList />}
        {activeTab === "intro" && <EditIntro />}
      </div>
    );
  }
  render() {
    const { isActiveAdd, isActiveEdit, isActiveDelete } = this.state;
    return (
      <Container className="container">
        <Selector activeSelector={this.setActiveSelector} />
        <TabulationBar activeTab={this.setActiveTab} />

        {isActiveAdd && this.renderAdd()}
        {isActiveEdit && this.renderEdit()}
        {isActiveDelete && this.renderDelete()}
      </Container>
    );
  }
}

export default Create;
