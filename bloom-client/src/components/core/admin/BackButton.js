import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

class AdmBackButton extends React.Component {
  render() {
    return (
      <Container className="pt-3 container-fluid">
        <Link to="/admin/create">
          <i className="fas fa-arrow-circle-left" />
          Retour
        </Link>
      </Container>
    );
  }
}

export default AdmBackButton;
