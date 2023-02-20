import React, { useEffect, useState } from "react";
import Photo from "../Photo/Photo";
import { throttle } from "lodash";

function ImageContainer() {
  const API_KEY = "YOUR_API_KEY";
  const count = 10;
  const [page, setPage] = useState(1);
  const API_URL = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=${count}&page=${page}`;

  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchPhotos = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPhotos([...photos, ...data]);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.pageYOffset;
      const pageHeight = document.documentElement.scrollHeight;

      if (scrollPosition + 10 >= pageHeight) {
        setPage((page) => page + 1);
      }
    };
    const throttledHandleScroll = throttle(handleScroll, 500);

    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  useEffect(() => {
    fetchPhotos();
  }, [page]);

  if (error) return <div>ERRORRR...</div>;
  if (loading && page === 1) return <div>Loading...</div>;

  return (
    <div>
      {photos?.map((photo) => (
        <Photo photo={photo} key={photo.id} />
      ))}
      {loading && page !== 1 && <div> Loading more photos... </div>}
    </div>
  );
}

export default ImageContainer;
