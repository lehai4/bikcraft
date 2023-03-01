import { Grid, footer } from "../common";
import { Link } from "react-router-dom";
import img from "../assets/img/Vector.png";
const Footer = () => {
  return (
    <footer id="footer" className="page-footer">
      <div id="page-footer-top">
        <div className="elementor-container">
          <div id="page-footer-top-inner">
            <Grid col={3} mdCol={1} smCol={1}>
              <div className="item">
                <img src={`${img}`} alt="imageIT" />
              </div>
              {footer.map((item) => (
                <div className="item" key={item.id}>
                  <h4 className="item__title">{item.title}</h4>
                  <div className="item-menu-footer">
                    <ul>
                      {item?.contents?.map((menu) => (
                        <li key={menu.idc}>
                          <Link to={`/${menu.content}/`}>{menu.content}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </Grid>
          </div>
        </div>
      </div>
      <div id="page-footer-bottom">
        <div className="elementor-container">
          <div className="page-footer-bottom-inner">
            <p>Bikcraft © Some rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
