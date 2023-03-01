import { Wrapper } from "../common";
const Refer = ({ children }) => {
  return (
    <Wrapper title="Refer">
      <div className="elementor-container-inner">
        <ul className="product-list">{children}</ul>
      </div>
    </Wrapper>
  );
};

export default Refer;
