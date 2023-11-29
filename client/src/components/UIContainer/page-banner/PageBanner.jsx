import "./PageBanner.scss";
import Container from "../container/Container";

const PageBanner = ({
  background,
  title,
  firstDirectionPoint,
  secondDirectionPoint,
  thirdDirectionPoint,
}) => {
  return (
    <section className="banner">
      <div
        className="banner-background"
        id="#top"
        style={{ background: `#121619 url(${background}) no-repeat center / cover` }}
      ></div>
      <Container>
        <div className="banner-direction">
          <h1>{title}</h1>
          <p>
            <span>{firstDirectionPoint}</span>
            {secondDirectionPoint && '/'}
            <span>{secondDirectionPoint}</span>
              {thirdDirectionPoint && "/"}
            {thirdDirectionPoint && <span>{thirdDirectionPoint}</span>}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default PageBanner;
