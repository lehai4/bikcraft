import { Grid, Wrapper } from "../common";
import imgIntro from "../assets/img/img-intro.png";
const Introduce = () => {
  return (
    <div className="elementor-container">
      <Wrapper>
        <div className="elementor-introduce">
          <Grid col={2} mdCol={2} smCol={1}>
            <div className="elementor-introduce__left">
              <div className="elementor-introduce__left__content">
                <h2 className="elementor-introduce__left__content--title">
                  Custom made bikes.
                </h2>
                <span className="elementor-introduce__left__content--desc">
                  Electric bicycles of high precision and quality, tailor-made
                  for the customer. Explore the world at your own speed with
                  Bikcraft.
                </span>
                <button className="elementor-introduce__left__content--button btn btn-intro">
                  Your select
                </button>
              </div>
            </div>
            <div className="elementor-introduce__right">
              <div className="elementor-introduce__right-image">
                <figure className="elementor-introduce__right-image-info">
                  <img src={`${imgIntro}`} alt="intro" />
                </figure>
              </div>
            </div>
          </Grid>
        </div>
      </Wrapper>
    </div>
  );
};

export default Introduce;
