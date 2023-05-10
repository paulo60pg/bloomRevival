import React from "react";

import { Link } from "react-router-dom";
import Config from "../../Config";
import Note from "../core/front/Note";

import { DeputyCardContainer } from "./styles";

function DeputyCard(props) {
  const { name, slug, picture, note, party } = props;
  let deputyParty = "Sans étiquette";
  if (party !== undefined && party !== null) {
    deputyParty = party.name;
  }
  return (
    <DeputyCardContainer className="card">
      <Link to={`/depute/${slug}`} className="link">
        <img
          className="card-img-top"
          src={`${Config.server}/${picture}`}
          alt={slug}
        />
        <div className="card-body">
          <h6 className="card-title">{name}</h6>
          <p className="card-text">{deputyParty}</p>
        </div>
        <div className="card-note">
          <Note note={note} />
        </div>
        {/* <div className="footer">
          <small>
            Plus d'infos
            <i className="footer-icon fas fa-user" />
          </small>
        </div> */}
      </Link>
    </DeputyCardContainer>
  );
}

export default DeputyCard;
