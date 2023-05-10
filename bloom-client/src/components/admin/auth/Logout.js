import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 30px;
  .fa-power-off {
    font-size: 10px;
  }
`;

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout() {
    localStorage.removeItem("admin");
    console.log("<< admin removed from localstorage");
    let path = "/";
    this.props.history.push(path);
  }

  render() {
    return (
      <Container>
        <button
          onClick={() => {
            this.logout();
          }}
          className="btn btn-outline-secondary"
        >
          <i className="fas fa-power-off" />
        </button>
      </Container>
    );
  }
}

export default withRouter(Logout);
