import React from "react";
import { GreetElm } from "./Styles";

class Greet extends React.Component {
  render() {
    const { twitter } = this.props;
    return (
      <GreetElm
        href={`https://twitter.com/share?url=https://europeennes.bloomassociation.org&screen_name=${twitter}&text=Bravo%20pour%20votre%20travail%20acharné%20pour%20protéger%20l'océan!`}
        className="twitter-mention-button"
        data-show-count="false"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="icon">
          <i className="fas fa-bullhorn" />
        </div>
        <p className="text">Féliciter sur Twitter @{twitter}</p>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        />
      </GreetElm>
    );
  }
}

export default Greet;
