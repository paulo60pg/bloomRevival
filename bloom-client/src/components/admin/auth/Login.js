import React from "react";
import styled from "styled-components";
import { Form, Text } from "informed";
import Api from "../../../utils/Api";
import Admin from "../tabs";

const Container = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Label = styled.h6`
  margin-top: 10px;
  width: 30rem;
  display: flex;
  flex-direction: column;
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      isAuthenticated: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.getFromLocalStorage = this.getFromLocalStorage.bind(this);
  }

  handleChange({ name, value }) {
    this.setState({
      [name]: value
    });
  }

  onSubmit(formState) {
    // console.info("formState", formState);
    Api.connect(formState);
    setTimeout(this.getFromLocalStorage, 2000);
  }

  getFromLocalStorage() {
    console.log("<< @getfromlocalstorage ");
    let admin = localStorage.getItem("admin");
    admin = JSON.parse(admin);
    console.log(">> getFromlocalStorage admin :", admin);
    if (admin === null || admin.error === "Username ou password incorrect") {
      console.log("<< PAS CONNECTE");
    } else if (
      admin.token === "66dwfFoP6w9PCIBe" &&
      admin.username === "BloomProtectsTheOcean"
    ) {
      this.setState({
        isAuthenticated: true
      });
    } else console.log("Something wrong with @Login");
  }

  componentDidMount() {
    this.getFromLocalStorage();
  }

  render() {
    console.log("@render this.state", this.state);
    const { isAuthenticated } = this.state;
    if (isAuthenticated === true) return <Admin />;

    return (
      <Container>
        <div className="row">
          <div className="col-4 offset-4">
            <div className="h2">Bienvenue dans le back office !</div>
            <Form onSubmit={formState => this.onSubmit(formState)}>
              <Label>
                Username :
                <Text
                  field="username"
                  type="text"
                  className="form-control form-control-sm"
                />
              </Label>

              <Label>
                Password :
                <Text
                  field="password"
                  className="form-control form-control-sm"
                  type="password"
                />
              </Label>

              <button type="submit" className="btn btn-outline-secondary">
                Se connecter
              </button>
            </Form>
          </div>
        </div>
      </Container>
    );
  }
}

export default Login;
