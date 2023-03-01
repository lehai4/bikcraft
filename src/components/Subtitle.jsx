import Wrapper from "./Wrapper";

const SubTitle = (props) => {
  return (
    <div className="elementor-container-inner">
      <Wrapper>
        {!props?.data?.check ? (
          <>
            <div className="elementor-inner">
              <div className="elementor-inner-subtitle">
                <h4>{props.data.content}</h4>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="elementor-container">
              <div className="elementor-inner-subtitle">
                <h4
                  style={{
                    color: `${
                      props.data.type !== "black"
                        ? `${props.data.type}`
                        : "white"
                    }`,
                  }}
                >
                  {props.data.content}
                </h4>
              </div>
            </div>
          </>
        )}
      </Wrapper>
    </div>
  );
};

export default SubTitle;
