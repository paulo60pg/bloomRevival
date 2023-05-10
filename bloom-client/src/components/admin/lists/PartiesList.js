import React from "react";

import Api from "../../../utils/Api";

import List from "../../core/admin/List";

class PartiesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parties: []
    };
    this.deleteEntry = this.deleteEntry.bind(this);
  }

  async componentDidMount() {
    const parties = await Api.getParties();
    this.setState({
      parties
    });
  }

  async deleteEntry(id) {
    const itemTodelete = await Api.deleteParty(id);
    const parties = await Api.getParties();
    const message = itemTodelete.msg;
    this.setState({
      message,
      parties
    });
  }

  render() {
    const { parties } = this.state;
    console.log("this.state.parties");
    return (
      <div>
        <div className="pt-5 container">
          <List data={parties} deleteEntry={this.deleteEntry} type="party" />
        </div>
      </div>
    );
  }
}

export default PartiesList;
