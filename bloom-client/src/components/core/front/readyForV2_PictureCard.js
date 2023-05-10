import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Config from "../../../Config";
import Global from "../../../Global";

const Container = styled.div`
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.01);
    box-shadow: 2px 2px 4px 0px rgba(230, 230, 230, 1);
    color: ${Global.color.accent};
  }
  .link {
    color: ${Global.color.body};
    transition: 0.2s ease;
    &:hover {
      text-decoration: none;
      color: ${Global.color.primary};
    }
  }
  .card-img-top {
    height: 12rem;
    object-fit: cover;
  }
  .card-body {
    height: 8rem;
    overflow: auto;
  }
  .footer {
    text-align: right;
    background: white;
    color: ${Global.color.disabled};
    padding: 0.6rem;
    transition: 0.2s ease;
    .footer-icon {
      margin-left: 0.5rem;
    }
    &:hover {
      color: ${Global.color.accent};
    }
  }
`;

function PictureCard(props) {
  const { name, description, slug, picture, _id, uri } = props;
  return (
    <Container className="card">
      <Link to={`/${uri}/${_id}`} className="link">
        <img
          className="card-img-top"
          src={`${Config.server}/${picture}`}
          alt={slug}
        />
        <div className="card-body">
          <h6 className="card-title">{name}</h6>
          <p className="card-text">{description}</p>
        </div>
        <div className="footer">
          <small>
            Plus d'infos
            <i className="footer-icon far fa-address-card" />
          </small>
        </div>
      </Link>
    </Container>
  );
}

export default PictureCard;
