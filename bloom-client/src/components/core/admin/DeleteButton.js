import React from "react";
import styled from "styled-components";

import Global from "../../../Global";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  i {
    color: ${Global.color.disabled};
    font-size: ${Global.font.size.header};
    text-decoration: none;
    transition: 0.3s ease;
  }
  i:hover {
    color: orangered;
  }
`;
class DeleteButton extends React.Component {
  render() {
    const { id, deleteEntry } = this.props;
    return (
      <Container>
        <button
          className="btn"
          onClick={() => {
            deleteEntry(id);
          }}
        >
          <i className="far fa-trash-alt" />
        </button>
      </Container>
    );
  }
}

export default DeleteButton;
