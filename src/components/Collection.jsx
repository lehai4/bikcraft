import { Grid, Wrapper } from "../common";
import imgCollection from "../assets/img/depoimento.png";
import imgCollectionRight from "../assets/img/Rectangle 45.png";

const Collection = () => {
  return (
    <div className="elementor-container">
      <Wrapper>
        <div className="elementor-collection">
          <Grid col={2} mdCol={1} smCol={1} gap={0}>
            <div className="elementor-collection-left">
              <figure className="elementor-collection-left--info">
                <img src={`${imgCollection}`} alt="collection" />
              </figure>
            </div>
            <div className="elementor-collection-right">
              <div className="elementor-collection-right-inner">
                <figure className="elementor-collection-right-inner--img">
                  <img src={`${imgCollectionRight}`} alt="collectionRight" />
                </figure>
                <div className="elementor-collection-right-inner--title">
                  <span>
                    Cycling has always been my passion, what the people at
                    Bikcraft have done is intensify my love for this activity. I
                    recommend it to everyone I love.
                  </span>
                </div>
                <div className="elementor-collection-right-inner--author">
                  <span>Ana Julia</span>
                </div>
              </div>
            </div>
          </Grid>
        </div>
      </Wrapper>
    </div>
  );
};

export default Collection;
