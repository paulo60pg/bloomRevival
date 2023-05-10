import React from "react";

import Api from "../../../utils/Api";
import List from "../../core/admin/List";

class DeputiesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deputies: []
    };
    this.deleteEntry = this.deleteEntry.bind(this);
    // this.editEntry = this.editEntry.bind(this);
  }

  async componentDidMount() {
    const deputies = await Api.getDeputies();
    this.setState({
      deputies
    });
  }
  async deleteEntry(id) {
    const itemTodelete = await Api.deleteDeputy(id);
    const deputies = await Api.getDeputies();
    const message = itemTodelete.msg;
    this.setState({
      message,
      deputies
    });
  }
  // editEntry() {
  //   console.info("CLICKED editEntry DEPUTIESLIST");
  // }

  render() {
    const { deputies } = this.state;
    console.log("this.state.deputiesList");
    return (
      <div>
        <div className="pt-5 container">
          <List
            data={deputies}
            deleteEntry={this.deleteEntry}
            // editEntry={this.editEntry}
            type="deputy"
          />
        </div>
      </div>
    );
  }
}

export default DeputiesList;
