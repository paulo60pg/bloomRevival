import React from "react";

class ItemsSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: "deputies"
    };
  }

  setActiveTab(isActive) {
    const { activeTab } = this.props;
    activeTab(isActive);
    this.setState({
      isActive
    });
  }
  render() {
    const { isActive } = this.state;
    console.info("ItemsSelector isActive", isActive);
    return (
      <div>
        <ul className="list-group list-group-horizontal">
          <li
            className={
              isActive === "parties"
                ? "bg-primary text-white list-group-item"
                : "list-group-item"
            }
            onClick={() => this.setActiveTab("parties")}
          >
            Partis
          </li>
          <li
            className={
              isActive === "groups"
                ? "bg-primary text-white list-group-item"
                : "list-group-item"
            }
            onClick={() => this.setActiveTab("groups")}
          >
            Groupes
          </li>
          <li
            className={
              isActive === "categories"
                ? "bg-primary text-white list-group-item"
                : "list-group-item"
            }
            onClick={() => this.setActiveTab("categories")}
          >
            Textes
          </li>

          <li
            className={
              isActive === "laws"
                ? "bg-primary text-white list-group-item"
                : "list-group-item"
            }
            onClick={() => this.setActiveTab("laws")}
          >
            Amendements
          </li>
          <li
            className={
              isActive === "deputies"
                ? "bg-primary text-white list-group-item"
                : "list-group-item"
            }
            onClick={() => this.setActiveTab("deputies")}
          >
            Députés
          </li>

          <li
            className={
              isActive === "votes"
                ? "bg-primary text-white list-group-item"
                : "list-group-item"
            }
            onClick={() => this.setActiveTab("votes")}
          >
            Votes
          </li>
          <li
            className={
              isActive === "intro"
                ? "bg-primary text-white list-group-item"
                : "list-group-item"
            }
            onClick={() => this.setActiveTab("intro")}
          >
            Intro
          </li>
        </ul>
      </div>
    );
  }
}

export default ItemsSelector;
