import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";

import Global from "../../../Global";

const Button = styled.div`
  #dropdown-basic {
    color: ${Global.color.primary};
    transition: 0.2s ease;
    &:hover {
      text-decoration: none;
      color: ${Global.color.accent};
    }
    &:focus {
      text-decoration: none;
    }
  }
  .dropdown-item {
    color: ${Global.color.primary};
  }
`;

class DropDownCore extends React.Component {
  render() {
    const { children, list, uriLink } = this.props;
    return (
      <Dropdown>
        <Button>
          <Dropdown.Toggle variant="link" id="dropdown-basic">
            {children}
          </Dropdown.Toggle>
        </Button>

        <Dropdown.Menu>
          {list.map((item, index) => {
            return (
              <Dropdown.Item key={index}>
                <Link to={`${uriLink}/${item.slug}`} className="dropdown-item">
                  {item.name}
                </Link>
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default DropDownCore;
