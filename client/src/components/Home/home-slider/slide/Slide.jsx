import Container from "../../../UIContainer/container/Container";
import HighlightTitle from "./highlight-title/HighlightTitle";

const Slide = ({ id, main_image, title, desc, icons }) => {
  return (
    <Container key={main_image}>
      <div className={`home-slider-item home-slider-item-${id}`}>
        <div
          className={`home-slider-item-heading home-slider-item-${id}-heading`}
        >
          <HighlightTitle title={title} />
          <p>{desc}</p>
        </div>
        <div
          className={`home-slider-item-images home-slider-item-${id}-images`}
        >
          {icons?.map((icon, i) => (
            <img
              key={i}
              className={`icon icon-${i + 1}`}
              alt="icon"
              src={icon}
            />
          ))}
          <img
            src={main_image}
            alt="pizza"
            className={`home-slider-item-images-pizza home-slider-item-${id}-images-pizza`}
          />
        </div>
      </div>
    </Container>
  );
};

export default Slide;
