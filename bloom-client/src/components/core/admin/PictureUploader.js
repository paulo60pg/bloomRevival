import React from "react";

class PictureUploader extends React.Component {
  render() {
    const { handleUpload, label } = this.props;
    const imagePath = "https://via.placeholder.com/150";
    return (
      <div className="form-group">
        <label htmlFor="picture">{label}</label>
        <div className="row">
          <div className="col-8">
            <input
              type="file"
              className="form-control-file"
              id="picture"
              onChange={event => handleUpload(event)}
            />
          </div>
          <div className="col-4">
            <img src={imagePath} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default PictureUploader;
