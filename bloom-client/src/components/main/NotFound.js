import React from "react";

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <div className="py-5 text-center display-4 container">
          Erreur 400 <br />
          l'ID ne correspond pas
        </div>
      </div>
    );
  }
}

export default NotFound;
