import React, { useState, useEffect } from "react";
import "./Body.css";
import { FiSearch } from "react-icons/fi";
import logo from "./animefinder-low-resolution-logo-color-on-transparent-background.png";
import animeAxios from "../animeAxios";

function Body() {
  const [dataanime, setAnimeData] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [anime, setAnime] = useState(null);

  const handleInputChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleDataAnimeChange = () => {
    setAnimeData(inputValue);
  };

  const fetchData = async () => {
    try {
      const { data } = await animeAxios.get(`?filter[text]=${dataanime}`);
      if (data.data.length > 0) {
        setAnime(data.data[0]);
      } else {
        setAnime(null);
        // Show an alert when no data is found
        alert("No anime data found. Please search for your favorite anime.");
      }
    } catch (error) {
      console.error("Error fetching anime data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dataanime]);

  return (
    <>
      <div className="nav">
        <img src={logo} alt="no image" />
        <div className="inputbox">
          <input
            type="text"
            placeholder="Search Your Favorite Anime"
            className="input-field"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            onClick={handleDataAnimeChange}
            className="submit-button"
          >
            <FiSearch /> {/* Render the DiApple icon component */}
          </button>
        </div>
      </div>
      {!anime ? (
        <div className="animebody">
          <h1>
            find your anime details. Search for your favorite anime in the input box.
          </h1>
        </div>
      ) : (
        <div
          className="mainbody"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.827), rgba(0, 0, 0, 0.871)), url(${
              anime && anime.attributes.coverImage.original
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {anime && (
            <div className="first">
              <h1 className="anime-title">{anime.attributes.titles.en}</h1>
              <img
                src={anime.attributes.posterImage.original}
                alt="Attack on Titan Poster"
                className="anime-poster"
              />
            </div>
          )}
          {anime && (
            <div className="second">
              <h2 className="section-title">Overview:</h2>
              <p className="anime-description">
                {anime.attributes.description}
              </p>
              <div className="anime-details">
                <h3 className="detail-title">Rating:</h3>
                <span className="detail-value">
                  {anime.attributes.averageRating}
                </span>
              </div>
              <div className="anime-details">
                <h3 className="detail-title">Age Rating Guide:</h3>
                <span className="detail-value">
                  {anime.attributes.ageRatingGuide}
                </span>
              </div>
              <div className="anime-details">
                <h3 className="detail-title">Start Date:</h3>
                <span className="detail-value">
                  {anime.attributes.startDate}
                </span>
              </div>
              <div className="anime-details">
                <h3 className="detail-title">End Date:</h3>
                <span className="detail-value">{anime.attributes.endDate}</span>
              </div>
              <div className="anime-details">
                <h3 className="detail-title">No of Episodes:</h3>
                <span className="detail-value">
                  {anime.attributes.episodeCount}
                </span>
              </div>
              <div className="anime-details">
                <h3 className="detail-title">Episode Duration:</h3>
                <span className="detail-value">
                  {anime.attributes.episodeLength} mins
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Body;
