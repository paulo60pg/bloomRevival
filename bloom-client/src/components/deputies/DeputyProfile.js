import React from "react";

import { ProfileContainer } from "./styles";

import DeputyHeader from "./DeputyHeader";
import MobileDeputyHeader from "./MobileDeputyHeader";
import CollapseCategories from "./CollapseCategories";

class DeputyProfile extends React.Component {
  state = {
    isScrolled: false
  };
  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
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
    const { isScrolled } = this.state;
    const { deputy, finalNote, votes, categories, mobileView } = this.props;
    return (
      <ProfileContainer className="container">
        {mobileView ? (
          <MobileDeputyHeader
            deputy={deputy}
            finalNote={finalNote}
            isScrolled={isScrolled}
          />
        ) : (
          <DeputyHeader
            deputy={deputy}
            finalNote={finalNote}
            isScrolled={isScrolled}
          />
        )}
        {categories.length > 0 && (
          <CollapseCategories categories={categories} votes={votes} />
        )}
      </ProfileContainer>
    );
  }
}

export default DeputyProfile;
