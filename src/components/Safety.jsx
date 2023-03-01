import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Grid, safety } from "../common";
const Safety = () => {
  return (
    <div className="elementor-container">
      <div className="elementor-safety">
        <Grid col={2} mdCol={2} smCol={1} gap={30}>
          {safety.map((item, i) => (
            <div key={i} className="elementor-safety-inner">
              <div className="elementor-safety-inner-content">
                <div>
                  <div className="elementor-safety-inner-content--title">
                    <span>{item.title}</span>
                  </div>
                  <div className="elementor-safety-inner-content--price">
                    <span>{item.price}</span>
                  </div>
                </div>
                <div className="elementor-safety-inner-content--date">
                  <span>{item.date}</span>
                </div>
                <div className="elementor-safety-inner-content--text">
                  {item?.contents?.map((con, i) => (
                    <div
                      className="elementor-safety-inner-content--text__item"
                      key={i}
                    >
                      <FontAwesomeIcon icon={faCheck} className="icon" />
                      <div className="text">
                        <span>{con.content}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="elementor-safety-inner-content--button">
                  <button className="btn btn-login">SIGN UP</button>
                </div>
              </div>
            </div>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Safety;
