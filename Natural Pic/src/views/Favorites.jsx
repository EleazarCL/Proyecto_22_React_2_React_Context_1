import { useContext } from "react";
import { PhotoContext } from "../contexts/PhotoContext";

const Favorites = () => {
  const { photos } = useContext(PhotoContext);
  const favoritePhotos = photos.filter(photo => photo.liked);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {favoritePhotos.map((element, index) => (
          <div
            className="photo"
            style={{ backgroundImage: `url(${element.src.tiny})` }}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
