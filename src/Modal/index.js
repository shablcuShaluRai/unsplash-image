import React from "react"
import{ CLIENT_ID } from "../consts"
import "./modal.css"


function Modal({selectedImage, toggle}) {

  const fileDownloadHandler = async (pictureUrl) => {
    const response = await fetch(`${pictureUrl}?client_id=${CLIENT_ID}`)
    const imageData = await response.json()
     const file = new Blob([imageData.url], { type: "image/*" })
     let url = window.URL.createObjectURL(file)
      let a = document.createElement('a')
      a.href = url
      a.download = 'unsplash.jpeg'
      a.click()
}

  const { alt_description, links, urls }= selectedImage

  return(
    <div className="modal">
    <div className="modal_content">
      <span className="close" onClick={() => toggle(false)}>
      <i className="fa fa-close" />
      </span>
      <span className="download" onClick={() => fileDownloadHandler(links.download_location)}><i className="fa fa-download" /></span>
      <img alt={alt_description} src={urls.regular} />
    </div>
  </div>
  )
}

export default Modal