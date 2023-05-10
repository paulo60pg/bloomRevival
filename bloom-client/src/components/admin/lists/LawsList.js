import React from "react";

import Api from "../../../utils/Api";
import List from "../../core/admin/List";

class LawsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      laws: []
    };
    this.deleteEntry = this.deleteEntry.bind(this);
  }

  async componentDidMount() {
    const laws = await Api.getLaws();
    this.setState({
      laws
    });
  }

  async deleteEntry(id) {
    const itemTodelete = await Api.deleteLaw(id);
    const laws = await Api.getLaws();
    const message = itemTodelete.msg;
    this.setState({
      message,
      laws
    });
  }

  render() {
    const { laws } = this.state;
    console.log("this.state.lawsList");
    return (
      <div>
        <div className="pt-5 container">
          <List data={laws} deleteEntry={this.deleteEntry} type="law" />
        </div>
      </div>
    );
  }
}

export default LawsList;
