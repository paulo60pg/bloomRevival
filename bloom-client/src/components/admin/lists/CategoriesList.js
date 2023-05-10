import React from "react";
import Api from "../../../utils/Api";

import List from "../../core/admin/List";
class CategoriesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
    this.deleteEntry = this.deleteEntry.bind(this);
  }
  async componentDidMount() {
    const categories = await Api.getCategories();
    this.setState({
      categories
    });
  }
  // async deleteEntry(type, id) {
  //   console.info("CLICKED ON DELETE");
  //   let itemTodelete = "";
  //   if (type === "deputy") {
  //     itemTodelete = await Api.deleteDeputy(id);
  //   }
  //   if (type === "group") {
  //     itemTodelete = await Api.deleteGroup(id);
  //   }
  //   if (type === "party") {
  //     itemTodelete = await Api.deleteParty(id);
  //   }
  //   if (type === "category") {
  //     itemTodelete = await Api.deleteCategory(id);
  //   }
  //   if (type === "law") {
  //     itemTodelete = await Api.deleteLaw(id);
  //   }
  //   if (type === "vote") {
  //     itemTodelete = await Api.deleteVote(id);
  //   }
  //   const categories = await Api.getCategories();
  //   const message = itemTodelete.msg;
  //   console.info("itemTodelete", itemTodelete);
  //   this.setState({
  //     message,
  //     categories
  //   });
  // }
  async deleteEntry(id) {
    const itemTodelete = await Api.deleteCategory(id);
    const categories = await Api.getCategories();
    const message = itemTodelete.msg;
    this.setState({
      message,
      categories
    });
  }

  render() {
    const { categories } = this.state;
    console.log("this.state.categoriesList");
    return (
      <div>
        <div className="pt-5 container">
          <List
            data={categories}
            deleteEntry={this.deleteEntry}
            type="category"
          />
        </div>
      </div>
    );
  }
}

export default CategoriesList;
