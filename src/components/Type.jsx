import { type, Grid } from "../common";
const Type = () => {
  return (
    <div className="elementor-container-inner elementor-type">
      <div className="elementor-type-inner">
        <Grid col={4} mdCol={2} smCol={1}>
          {type.map((item, i) => (
            <div className="elementor-type-inner__content" key={i}>
              <div className="elementor-type-inner__content--img">
                <img src={`${item.image}`} alt="" />
              </div>
            </div>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Type;
