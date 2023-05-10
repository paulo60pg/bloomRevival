import React from "react";
import styled from "styled-components";
import Global from "../../Global";
import Collapse, { Panel } from "rc-collapse";
import "rc-collapse/assets/index.css";
import Api from "../../utils/Api";
import { Link } from "react-router-dom";
const Container = styled.div`
  .header-title {
    font-family: ${Global.font.title};
    font-weight: ${Global.font.weight.body};
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 2rem;
    color: ${Global.color.accent};
  }

  .rc-collapse {
    border: none;
  }
  .rc-collapse-header {
    font-family: ${Global.font.body} !important;
    font-weight: ${Global.font.weight.body} !important;
    font-size: ${Global.font.size.body} !important;
    color: ${Global.color.body} !important;
    background: ${Global.color.lightBackground} !important;
    padding: 2rem 0rem 2rem 0.8rem !important;
    text-align: center;
    outline: 0;
  }
  .click-more {
    cursor: pointer;
    width: 100%;
    text-align: center;
  }
  .click-method,
  .click-more {
    color: ${Global.color.secondAccent};
    text-decoration: none;
    font-weight: bold;
    transition: 0.2s;
    &:hover {
      opacity: 0.7;
    }
  }
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      paragraph1: "",
      paragraph2: "",
      paragraph3: "",
      activeKey: ""
    };
  }

  async componentDidMount() {
    const intro = await Api.getIntro();
    if (intro !== undefined) {
      this.setState({
        title: intro.title,
        paragraph1: intro.paragraph1,
        paragraph2: intro.paragraph2,
        paragraph3: intro.paragraph3
      });
    }
  }
  onChange = activeKey => {
    this.setState({
      activeKey
    });
  };
  toggleInfos() {
    this.setState({
      activeKey: "0"
    });
  }
  getItems(paragraph1, paragraph2, paragraph3) {
    const items = [];
    items.push(
      <Panel showArrow={false} className="panel" header={`${paragraph1}`}>
        <p align="justify">{paragraph2}</p>
        <p align="justify">{paragraph3}</p>
        <p>
          Pour en savoir plus sur la méthode :
          <Link className="click-method" to="/methode">
            &nbsp;cliquez ici.
          </Link>
        </p>
      </Panel>
    );
    return items;
  }

  render() {
    const { title, paragraph1, paragraph2, paragraph3, activeKey } = this.state;
    return (
      <Container className="col-12">
        <h1 className="header-title">{title}</h1>
        <Collapse
          accordion={false}
          onChange={this.onChange}
          activeKey={activeKey}
        >
          {this.getItems(paragraph1, paragraph2, paragraph3)}
        </Collapse>
        {activeKey.length === 0 && (
          <div className="click-more" onClick={() => this.toggleInfos()}>
            Cliquez pour plus d'informations
          </div>
        )}
      </Container>
    );
  }
}

export default Header;
