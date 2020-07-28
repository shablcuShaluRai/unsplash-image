import React, { useState } from "react";
import { withRouter, Route } from "react-router-dom";
import Modal from "../Modal"
import "./styles.css"

function ImageDashboard({ imageList, history }) {
  const [ open, toggle] = useState(false)
  const [ selectedImage, setSelectedImg] = useState({})
   console.log('>>>>open>>>>>>', open)
    console.log('>>selectedImage>>>', selectedImage)
  return (
    <div className="image-list-container">
      {imageList.map(({ id, alt_description, urls, links}) => (
        <div key={id}>
          <img alt={alt_description} src={urls.small} onClick={() => {
               history.push(`/photo/${id}`, {state: { id, alt_description, urls, links}})

            // setSelectedImg({ id, alt_description, urls, links})
            // toggle(true)
          }
          }
            />
        </div>
      ))}
      {/* {open && <Modal toggle={toggle} selectedImage={selectedImage} />

      } */}
    </div>
  );
}

export default withRouter(ImageDashboard);
