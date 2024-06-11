import { useContext } from "react";
import { PhotoContext } from "../contexts/PhotoContext";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { photos, toggleLike } = useContext(PhotoContext);

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((element, index) => (
        <div
          className="photo"
          style={{ backgroundImage: `url(${element.src.tiny})` }}
          key={index}
        >
          <IconHeart filled={element.liked} onClick={() => toggleLike(element.id)} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;