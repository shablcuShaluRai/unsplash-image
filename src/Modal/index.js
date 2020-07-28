import React, { useState, useEffect } from "react";
import{ CLIENT_ID } from "../consts"

import "./modal.css"


function Modal(props) {


  const [ selectedImage, setSelectedImg] = useState({})
  const { match, location, history } = props
 const { id } = match && match.params
 const [ open, toggle] = useState(true)

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

   console.log('>>>>>>props>>>>>>', props)
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',)
  const { alt_description, links, urls }= props.location.state.state
   console.log('>>>>>>>>>selectedImage>>>>>>', props.location.state)
   console.log('>>>>>>>>>alt_description>>>>>>', alt_description)
  return(
    <div className={open ? "modal" : "no-modal"}>
    <div className="modal_content">
      <span className="close" onClick={() => toggle(true)}>
      <i className="fa fa-close" />
      </span>
      <span className="download" onClick={() => fileDownloadHandler(links.download_location)}><i className="fa fa-download" /></span>
      <img alt={alt_description} src={urls.regular} />
    </div>
  </div>
  )
}

export default Modal