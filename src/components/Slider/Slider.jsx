import { useState } from "react";
import css from "./Slider.module.css";
import Magnifier from "react-magnifier";

const Slider = ({data}) => {
  const [photos, setPhotos] = useState(data);

  const prev = () => {
    let temp = photos.slice(0, -1);
    temp = [photos[photos.length - 1], ...temp];
    setPhotos(temp);
  };
  const next = () => {
    let temp = photos.slice(1);
    temp.push(photos[0]);
    setPhotos(temp);
  };

  return (
    <div className={css.slider}>
    { photos.length > 1 && <button className={css.arrow} onClick={prev}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/></svg>
      </button>}
      <div className={css.slides}>
        {photos.map((el, idx) => (
          // <img className={css.slide} src={el?.url} key={idx} />
          <Magnifier src={el?.url} key={idx} className={css.slide} zoomFactor={2} mgWidth={300} mgHeight={300}/>
        ))}
      </div>
      { photos.length > 1 &&<button className={css.arrow} onClick={next}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
      </button>}
    </div>
  );
};

export default Slider;
