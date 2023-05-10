import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Global from "../../Global";

const NavContainer = styled.nav`
  height: ${Global.height.navigation};
  background: ${Global.color.light};
  width: 100%;
  display: flex;
  align-items: center;
  i {
    font-size: ${Global.font.size.body};
    padding-right: 5px;
    align-self: center;
  }
  .nav-item {
    display: flex;
  }
  .nav-link {
    color: ${Global.color.body};
    text-decoration: none;
  }
  .bloom-link {
    color: ${Global.color.body};
    text-decoration: none;
    padding-left: 200px;
    display: flex;
  }
  .title {
    font-size: ${Global.font.size.header};
    color: ${Global.color.body};
    text-decoration: none;
    padding: 0 10px;
    display: flex;
  }
`;

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }
  render() {
    return (
      <NavContainer>
        <Link className="title" to="/admin">
          ADMIN
        </Link>
        <Link className="bloom-link navlink" to="/">
          BLOOM
        </Link>
      </NavContainer>
    );
  }
}

export default withRouter(Navigation);
