import React from "react";
import styled from "styled-components";
import Global from "../../Global";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton
} from "react-share";

import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  EmailIcon
} from "react-share";

const ShareContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  .element {
    margin-right: 1rem;
    outline: 0;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      opacity: 0.7;
    }
  }
  .share-text {
    font-family: ${Global.font.title};
    font-weight: ${Global.font.weight.caption};
    color: ${Global.color.primary};
    display: flex;
    align-self: center;
    margin-right: 1.5rem;
    .share-counter {
      font-weight: ${Global.font.weight.header};
    }
  }
`;

class Share extends React.Component {
  state = {
    shareUrl: ""
  };
  componentDidMount() {
    const shareUrl = window.location.href;
    // const shareUrl = "https://www.residentadvisor.net/events/fr/paris";
    this.setState({ shareUrl });
  }

  componentDidUpdate() {
    const { shareUrl } = this.state;
    const newUrl = window.location.href;
    shareUrl !== newUrl && this.setState({ shareUrl: newUrl });
  }

  render() {
    const { shareUrl } = this.state;
    return (
      <ShareContainer>
        <FacebookShareButton
          className="element"
          url={shareUrl}
          quote="Quels députés protègent l'océan ? Découvrez le vote des euro-députés sur la protection de l'océan"
          hashtag="#SaveTheOcean"
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>

        <LinkedinShareButton className="element" url={shareUrl}>
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>

        <TwitterShareButton
          className="element"
          url={shareUrl}
          title="Quels députés protègent l'océan ? Découvrez le vote des euro-députés sur la protection de l'océan"
          via="Bloom_FR"
          hashtags={["ocean", "europeennes", "SaveTheOcean"]}
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <WhatsappShareButton
          className="element"
          url={shareUrl}
          title="Quels députés protègent l'océan ? Découvrez le vote des euro-députés sur la protection de l'océan"
        >
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>

        <EmailShareButton
          className="element"
          url={shareUrl}
          subject="Notation Euro-députés Bloom"
          body="Quels députés protègent l'océan ? Découvrez le vote des euro-députés sur la protection de l'océan"
          separator=" "
        >
          <EmailIcon size={32} round={true} />
        </EmailShareButton>
      </ShareContainer>
    );
  }
}

export default Share;
