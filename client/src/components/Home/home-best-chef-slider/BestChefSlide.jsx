export const BestChefSlide = ({ id, img, name, speciality }) => {
  return (
    <div className="bestChef__slider__item">
      <div className="bestChef__slider__item__img">
        <img src={img} alt="" />{" "}
      </div>
      <div className="bestChef__slider__item__img__hover"></div>
      <h1>{name}</h1>
      <p>{speciality}</p>
    </div>
  );
};
