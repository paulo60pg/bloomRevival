import React from "react";
import Api from "../../../utils/Api";
import styled from "styled-components";

import DeleteButton from "../../core/admin/DeleteButton";

const Container = styled.table`
  margin-top: 30px;
  .edit {
    width: 100px;
  }
  .delete {
    width: 100px;
  }
`;

class VotesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: []
    };
    this.deleteEntry = this.deleteEntry.bind(this);
  }

  async componentDidMount() {
    const votes = await Api.getVotes();
    this.setState({
      votes
    });
  }

  async deleteEntry(id) {
    const itemTodelete = await Api.deleteVote(id);
    const votes = await Api.getVotes();
    const message = itemTodelete.msg;
    this.setState({
      message,
      votes
    });
  }

  render() {
    const { votes } = this.state;
    console.log("@Votelist");
    return (
      <Container className="table">
        <tbody>
          {votes.map((data, index) => {
            // console.info("VoteList", data);
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{data.deputy.name}</td>
                <td>{data.decision}</td>
                <td>{data.law.slug}</td>
                <td className="delete">
                  <DeleteButton id={data._id} deleteEntry={this.deleteEntry} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Container>
    );
  }
}

export default VotesList;
