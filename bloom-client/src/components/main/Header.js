import React from "react";
import styled from "styled-components";
import Global from "../../Global";
import ShowMore from "react-show-more";
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
  .header-content {
    width: 100%;
    background: lightblue;
  }
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      paragraph1: "",
      paragraph2: "",
      paragraph3: ""
    };
  }

  async componentDidMount() {
    console.log("intro1");
    const intro = await Api.getIntro();
    console.log("intro2", intro);
    if (intro !== undefined) {
      console.log("intro3");
      this.setState({
        title: intro.title,
        paragraph1: intro.paragraph1,
        paragraph2: intro.paragraph2,
        paragraph3: intro.paragraph3
      });
    }
  }

  render() {
    const { title, paragraph1, paragraph2, paragraph3 } = this.state;
    console.log("title", title);
    return (
      <Container className="col-12">
        <h1 className="header-title">{title}</h1>
        <div className="header-intro">
          <ShowMore lines={3} more="Lire plus" less="Lire moins" anchorClass="">
            <p className="header-content" align="justify">
              <p align="justify">{paragraph1} </p>
              <p align="justify">{paragraph2}</p>
              <p align="justify">{paragraph3}</p>
              <p>
                Pour en savoir plus sur la méthode{" "}
                <Link to="/methode">cliquez ici</Link>
              </p>
            </p>
          </ShowMore>
        </div>
      </Container>
    );
  }
}

export default Header;
