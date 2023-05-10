import React from "react";
import Logout from "../auth/Logout";
import styled, { css } from "styled-components";

const Container = styled.div`
  padding-top: 1rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  .content-container {
    margin-right: 1.2rem;
    margin-left: 1.2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: 0.2s ease-in;
    p {
      margin-top: 0.4rem;
    }
  }
  .fas {
    font-size: 1.5rem;
  }
  .add {
    &:hover {
      color: deepskyblue;
    }
    ${props =>
      props.add &&
      css`
        color: dodgerblue;
        transform: scale(1.3);
      `}
  }
  .edit {
    &:hover {
      color: limegreen;
    }
    ${props =>
      props.edit &&
      css`
        color: mediumseagreen;
        transform: scale(1.3);
      `}
  }
  .delete {
    &:hover {
      color: red;
    }
    ${props =>
      props.delete &&
      css`
        color: crimson;
        transform: scale(1.3);
      `}
  }
`;

class AddOrEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveAdd: true,
      isActiveEdit: false,
      isActiveDelete: false
    };
  }
  setActiveSelector(state) {
    const { activeSelector } = this.props;
    activeSelector(state);
    this.setState({
      isActiveAdd: state.add,
      isActiveEdit: state.edit,
      isActiveDelete: state.delete
    });
  }

  render() {
    const { isActiveAdd, isActiveEdit, isActiveDelete } = this.state;
    return (
      <Container add={isActiveAdd} edit={isActiveEdit} delete={isActiveDelete}>
        <div
          className="add content-container"
          onClick={() =>
            this.setActiveSelector({ add: true, edit: false, delete: false })
          }
        >
          <i className="fas fa-user-plus" />
          <p>Ajouter</p>
        </div>
        {/* <div
          className="edit content-container"
          onClick={() =>
            this.setActiveSelector({ add: false, edit: true, delete: false })
          }
        >
          <i className="fas fa-edit" />
          <p>Modifier</p>
        </div> */}
        <div
          className="delete content-container"
          onClick={() =>
            this.setActiveSelector({ add: false, edit: false, delete: true })
          }
        >
          <i className="fas fa-trash" />
          <p>Modifier / Supprimer</p>
        </div>
        <div className="logout-button">
          <Logout />
        </div>
      </Container>
    );
  }
}

export default AddOrEdit;
