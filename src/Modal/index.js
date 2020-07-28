import React from "react";
import{ CLIENT_ID } from "../consts"

import "./modal.css"


function Modal({ selectedImage, toggle }) {

  const fileDownloadHandler = async (pictureUrl) => {
    console.log("pictureUrl", pictureUrl)
    const response = await fetch(`${pictureUrl}?client_id=${CLIENT_ID}`);
    const imageData = await response.json();
     console.log('>>>>>>imageData>>>>>>>>>', imageData) 
     const file = new Blob([imageData.url], { type: "image/*" })
     let url = window.URL.createObjectURL(file);
      let a = document.createElement('a');
      a.href = url;
      a.download = 'unsplash.jpeg';
      a.click();
}

const { alt_description, links, urls }= selectedImage
  
  return(
    <div className="modal">
    <div className="modal_content">
      <span className="close" onClick={() => toggle(false)}>
        &times;
      </span>
      <img alt={alt_description} src={urls.small} />
      <button onClick={() => fileDownloadHandler(links.download_location)}>Download</button>
      {/*  <a href={links.download_location} download onClick={() => fileDownloadHandler(links.download_location) }>download</a> */}
    </div>
  </div>
  )
}

export default Modal