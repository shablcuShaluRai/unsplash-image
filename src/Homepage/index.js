import React, { useState, useEffect, useRef } from "react";
import SearchForm from "../SearchForm";
import ImageDashboard from "../ImageList";
import { CLIENT_ID } from "../consts";
import "./homepage.css"

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function Homepage() {
  const [search, setSearch] = useState("");
  const [imageList, setImageList] = useState([]);
  const [page, setPage] = useState(1);
  const prevValue = usePrevious(page);

  async function getImageData() {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=${page}&per_page=8&query=${search}&orientation=squarish&client_id=${CLIENT_ID}`
    );
    const imageData = await response.json();
    const finalImageList = imageList.concat(imageData.results);
    setImageList(finalImageList);
  }

  useEffect(() => {
    if (prevValue !== page) {
      getImageData();
    }
  });

  const handleSearch = e => {
    if (e.key === "Enter") {
      getImageData();
    }
  };

  const handleLoadMoe = () => {
    if (prevValue !== page) {
      getImageData();
    }
  };
  return (
    <div className="homepage">
      <h1>Unsplash Image Search</h1>
      <SearchForm
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {imageList.length > 0 ? (
        <ImageDashboard imageList={imageList} />
      ) : (
        <p>Search for image and hit the enter key</p>
      )}

      {imageList.length > 0 && (
        <button
          onClick={() => {
            setPage(page + 1);
            handleLoadMoe();
          }}
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Homepage;
