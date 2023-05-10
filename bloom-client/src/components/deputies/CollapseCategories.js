import React from "react";
import Collapse, { Panel } from "rc-collapse";
import "rc-collapse/assets/index.css";

import FlipCard from "./FlipCard";
import { CollapseContainer } from "./styles";

class CollapseCategories extends React.Component {
  state = {
    accordion: false,
    activeKey: this.getActiveKeys()
  };
  getActiveKeys() {
    const { categories } = this.props;

    const activeKey = [];
    categories.forEach((category, index) => {
      activeKey.push(`${index}`);
    });
    return activeKey;
  }

  onChange = activeKey => {
    this.setState({
      activeKey
    });
  };

  getItems(categories, votes) {
    if (categories.length >= 1) {
      const collapseItems = categories.map((category, index) => {
        const items = [];
        const flipCardsContainer = [];
        votes.forEach((vote, index) => {
          if (vote.law.category === category._id) {
            flipCardsContainer.push({ ...vote });
          }
        });
        const key = index;
        items.push(
          <Panel className="panel" header={`${category.name}`} key={key}>
            <p className="rc-collapse-header__description">
              {category.description || ""}
            </p>
            <div className="row">
              {flipCardsContainer.map((cardContent, index) => (
                <div className="mt-3 col-md-6 col-lg-4" key={index}>
                  <FlipCard {...cardContent} />
                </div>
              ))}
            </div>
          </Panel>
        );
        return items;
      });
      return collapseItems;
    }
  }

  toggle = () => {
    this.setState({
      accordion: !this.state.accordion
    });
  };

  render() {
    const { accordion, activeKey } = this.state;
    const { categories, votes } = this.props;
    return (
      <CollapseContainer style={{ width: "100%" }}>
        <Collapse
          accordion={accordion}
          onChange={this.onChange}
          activeKey={activeKey}
        >
          {this.getItems(categories, votes)}
        </Collapse>
      </CollapseContainer>
    );
  }
}

export default CollapseCategories;
