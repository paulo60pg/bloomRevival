import React from "react";

import Api from "../../../utils/Api";

import List from "../../core/admin/List";

class GroupsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: []
    };
    this.deleteEntry = this.deleteEntry.bind(this);
  }

  async componentDidMount() {
    const groups = await Api.getGroups();
    this.setState({
      groups
    });
  }

  async deleteEntry(id) {
    const itemTodelete = await Api.deleteGroup(id);
    const groups = await Api.getGroups();
    const message = itemTodelete.msg;
    this.setState({
      message,
      groups
    });
  }

  render() {
    const { groups } = this.state;
    console.log("this.state.groupList");
    return (
      <div>
        <div className="pt-5 container">
          <List data={groups} deleteEntry={this.deleteEntry} type="group" />
        </div>
      </div>
    );
  }
}

export default GroupsList;
