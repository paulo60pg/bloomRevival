import React from "react";
import styled from "styled-components";
import Global from "../../../Global";

const Container = styled.div`
  .note-good {
    color: ${Global.color.protect};
  }
  .note-bad {
    color: ${Global.color.destruct};
  }
  .note-medium {
    color: ${Global.color.medium};
  }
`;

class Note extends React.Component {
  render() {
    const finalNote = Math.round(this.props.note / 5);
    let noteClass = "";
    if (finalNote > 14) noteClass = "note-good";
    if (finalNote < 10) noteClass = "note-bad";
    if (finalNote >= 10 && finalNote <= 14) noteClass = "note-medium";
    return (
      <Container>
        {/* <p className={noteClass}>{finalNote}/20</p> */}
        <p className={noteClass}></p>
      </Container>
    );
  }
}

export default Note;
