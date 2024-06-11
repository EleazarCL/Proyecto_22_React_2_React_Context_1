import { createContext, useEffect, useState } from 'react';

export const PhotoContext = createContext();

export default function PhotosProvider({ children }) {
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    const response = await fetch("/photos.json");
    const { photos: photosDB } = await response.json();
    setPhotos(photosDB);
  };

  const toggleLike = (id) => {
    setPhotos(photos.map(photo => 
      photo.id === id ? { ...photo, liked: !photo.liked } : photo
    ));
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <PhotoContext.Provider value={{ photos, toggleLike }}>
      {children}
    </PhotoContext.Provider>
  );
}