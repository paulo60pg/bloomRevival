import React from "react";
import DeputyCard from "./DeputyCard";
import MobileDeputyCard from "./MobileDeputyCard";

class DeputiesList extends React.Component {
  renderDesktop(deputy, index) {
    return (
      <div className="my-3 col-md-6 col-lg-3" key={index}>
        <DeputyCard {...deputy} />
      </div>
    );
  }
  renderMobile(deputy, index) {
    return (
      <div className="my-1 col-12" key={index}>
        <MobileDeputyCard {...deputy} />
      </div>
    );
  }

  render() {
    const { deputies, mobileView } = this.props;
    return (
      <div className="container">
        <div className="row">
          {deputies.map((deputy, index) => {
            return mobileView
              ? this.renderMobile(deputy, index)
              : this.renderDesktop(deputy, index);
          })}
        </div>
      </div>
    );
  }
}

export default DeputiesList;
