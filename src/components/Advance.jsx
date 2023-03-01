import { Grid, Wrapper, advance } from "../common";
import imgAdvance from "../assets/img/diferencial.png";
const Advance = () => {
  return (
    <div className="elementor-container">
      <Wrapper>
        <div className="elementor-advance">
          <Grid col={2} mdCol={2} smCol={1}>
            <div className="elementor-advance__left">
              <div className="elementor-advance__left-inner">
                <div className="elementor-advance__left-inner--title">
                  <span>Advanced Technology</span>
                </div>
                <div className="elementor-advance__left-inner--subtitle">
                  <span>You choose your colors and components.</span>
                </div>
                <div className="elementor-advance__left-inner--desc">
                  <span>
                    Each Bikcraft is unique and has its own identity. The
                    measurements will be exact for your body and height,
                    ensuring greater comfort and ergonomics in your pedaling.
                    You can also completely customize its colors.
                  </span>
                </div>
                <div className="elementor-advance__left-inner--highlight">
                  <span>Choose a model</span>
                </div>
                <div className="elementor-advance__left-inner--minimize">
                  <Grid col={2} mdCol={2} smCol={1} gap={20}>
                    {advance.map((item, index) => (
                      <div
                        key={index}
                        className="elementor-advance__left-inner--minimize-content"
                      >
                        <div className="minize-content-icon">
                          <img src={`${item.icon}`} alt={`${item.title}`} />
                        </div>
                        <div className="minize-content-title">
                          <span>{item.title}</span>
                        </div>
                        <div className="minize-content-desc">
                          <span>{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </Grid>
                </div>
              </div>
            </div>
            <div className="elementor-advance__right">
              <figure className="elementor-advance__right--info">
                <img src={`${imgAdvance}`} alt="" />
              </figure>
            </div>
          </Grid>
        </div>
      </Wrapper>
    </div>
  );
};

export default Advance;
