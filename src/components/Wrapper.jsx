const Wrapper = ({ children, title }) => {
  return (
    <div className={`wrapper ${title ? title : "None"}-esmee-wrapper`}>
      {children}
    </div>
  );
};

export default Wrapper;
