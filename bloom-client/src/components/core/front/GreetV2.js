import React from "react";
import styled from "styled-components";

import Global from "../../../Global";

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  transition: 0.3s;
  opacity: 0.8;
  border-radius: 2px;
  padding: 0.6rem 1rem;
  margin: 0.4rem 2rem 0.4rem 0rem;
  font-weight: 700;
  border: 1px solid ${Global.color.light};
  border-radius: 4px;
  cursor: pointer;

  a {
    color: ${Global.color.protect};
    text-decoration: none;
    transition: 0.3s;
  }
  &:hover {
    background: ${Global.color.protect};
    opacity: 0.6;
    a {
      color: white;
    }
  }
`;

class GreetV2 extends React.Component {
  render() {
    const { twitter } = this.props;
    console.log("@ Greet twitter", twitter);
    return (
      <Container>
        <a
          href={`https://twitter.com/share?url=https://europeennes.bloomassociation.org&screen_name=${twitter}&text=Bravo%20pour%20votre%20travail%20acharné%20pour%20protéger%20l'océan!`}
          className="twitter-mention-button"
          data-show-count="false"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="greet-text">Féliciter sur Twitter</div>
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        />
      </Container>
    );
  }
}

export default GreetV2;
