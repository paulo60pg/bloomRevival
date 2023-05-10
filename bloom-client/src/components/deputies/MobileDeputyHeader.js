import React from "react";
import { MobileDeputyHeaderContainer } from "./styles";
import { Link } from "react-router-dom";

import Greet from "../core/front/Greet";
import Encourage from "../core/front/Encourage";
import Shout from "../core/front/Shout";
import Gauge from "../core/front/Gauge";

import Config from "../../Config";

class DeputyHeader extends React.Component {
  greetOrShoutDeputy(note, twitter) {
    if (note >= 70) {
      console.log("GREET", note);
      return <Greet note={note} twitter={twitter} />;
    } else if (note < 70 && note >= 50) {
      console.log("ENCOURAGE", note);
      return <Encourage note={note} twitter={twitter} />;
    } else {
      console.log("SHOUT", note);
      return <Shout note={note} twitter={twitter} />;
    }
  }

  render() {
    const { deputy, finalNote } = this.props;
    return (
      <MobileDeputyHeaderContainer>
        <div className="header-title container">
          <div className="text-center">{deputy.name}</div>
        </div>
        <div className="header row">
          <div className="col-5">
            <div className="header-img-container">
              <img
                className="header-img"
                src={`${Config.server}/${deputy.picture}`}
                alt={deputy.slug}
              />
            </div>
          </div>
          <div className="col-7">
            <div className=" header-gauge">
              <Gauge finalNote={finalNote} />
            </div>
          </div>
          <p className="col-12 header-gauge-legend">
            {Math.round(finalNote)}% des votes de ce député protègent l'océan
          </p>
          <div className="col-12 col-lg-6">
            <div className="header-content">
              {deputy.group !== undefined && (
                <p>
                  {" "}
                  Groupe Européen :&nbsp;
                  <Link
                    className="header-link"
                    to={`/groupe/${deputy.group.slug}`}
                  >
                    {deputy.group.name}
                  </Link>
                </p>
              )}
              <br />
              {deputy.party !== undefined && (
                <p>
                  {" "}
                  Parti National :&nbsp;
                  <Link
                    className="header-link"
                    to={`/parti/${deputy.party.slug}`}
                  >
                    {deputy.party.name}
                  </Link>
                </p>
              )}
              <div className="header-twitter-button">
                {this.greetOrShoutDeputy(finalNote, deputy.twitter)}
              </div>
            </div>
          </div>
        </div>
      </MobileDeputyHeaderContainer>
    );
  }
}

export default DeputyHeader;
