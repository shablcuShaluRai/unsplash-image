import React from "react";
import "./styles.css"

function ImageDashboard({ imageList }) {
  return (
    <div className="image-list-container">
      {imageList.map(({ id, alt_description, urls }) => (
        <div key={id}>
          <img alt={alt_description} src={urls.small} />
        </div>
      ))}
    </div>
  );
}

export default ImageDashboard;
