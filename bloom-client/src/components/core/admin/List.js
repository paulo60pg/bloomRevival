import React from "react";
import styled from "styled-components";

import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const Container = styled.table`
  .edit {
    width: 100px;
  }
  .delete {
    width: 100px;
  }
`;

class List extends React.Component {
  render() {
    const { data, type, deleteEntry, editEntry } = this.props;
    return (
      <Container className="table">
        <tbody>
          {data.map((data, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{data.name}</td>
                <td className="edit">
                  <EditButton {...data} type={type} onCLick={editEntry} />
                </td>
                <td className="delete">
                  <DeleteButton id={data._id} deleteEntry={deleteEntry} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Container>
    );
  }
}

export default List;
