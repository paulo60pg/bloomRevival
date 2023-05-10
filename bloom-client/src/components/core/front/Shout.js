import React from "react";

import { ShoutElm } from "./Styles";

class Shout extends React.Component {
  render() {
    const { twitter } = this.props;
    return (
      <ShoutElm
        href={`https://twitter.com/share?url=https://europeennes.bloomassociation.org&screen_name=${twitter}&text=Réveillez-vous!%20Vos%20votes%20détruisent%20la%20biodiversité%20de%20l'océan!`}
        className="twitter-mention-button"
        data-show-count="false"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="icon">
          <i className="fas fa-bullhorn" />
        </div>
        <p className="text">Secouer sur Twitter @{twitter}</p>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        />
      </ShoutElm>
    );
  }
}

export default Shout;
