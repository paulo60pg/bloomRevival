import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
`;

class ProfileLoader extends React.PureComponent {
  render() {
    const { isLoading } = this.props;
    return (
      isLoading === true && (
        <Container>
          <p>Chargement...</p>
        </Container>
      )
    );
  }
}

export default ProfileLoader;
