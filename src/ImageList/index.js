import React, { useState } from "react"
import Modal from "../Modal"
import "./styles.css"

function ImageDashboard({ imageList }) {
  const [ open, toggle] = useState(false)
  const [ selectedImage, setSelectedImg] = useState({})
  return (
    <div className="image-list-container">
      {imageList.map(({ id, alt_description, urls, links}) => (
        <div key={id}>
          <img alt={alt_description} src={urls.small} onClick={() => {
            setSelectedImg({ id, alt_description, urls, links})
            toggle(true)
          }
          }
            />
        </div>
      ))}
      {open && <Modal toggle={toggle} selectedImage={selectedImage} />

      }
    </div>
  )
}

export default ImageDashboard
