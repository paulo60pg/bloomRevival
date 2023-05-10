import React from "react";
import { withRouter } from "react-router-dom";
import Admin from "./Admin";
import Public from "./Public";

class NavigationSwitch extends React.Component {
  state = {
    isScrolled: false
  };
  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
    window.addEventListener("resize", this.handleScreenSize.bind(this));
    this.handleScreenSize();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }
  handleScreenSize() {
    const { mobileView } = this.state;
    const screenSize = window.innerWidth <= 760;
    mobileView !== screenSize &&
      this.setState({
        mobileView: screenSize
      });
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = winScroll / height;
    if (scrolled > 0) {
      this.state.isScrolled === false &&
        this.setState({
          isScrolled: true
        });
    }
    if (scrolled === 0) {
      this.setState({
        isScrolled: false
      });
    }
  };
  render() {
    const { isScrolled, mobileView } = this.state;
    if (this.props.location.pathname.substr(0, 6) === "/admin") {
      return <Admin {...this.props} />;
    }
    return (
      <Public {...this.props} isScrolled={isScrolled} mobileView={mobileView} />
    );
  }
}

export default withRouter(NavigationSwitch);
