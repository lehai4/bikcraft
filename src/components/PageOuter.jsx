const PageOuter = ({ children }) => {
  return (
    <div id="page-outer">
      <div id="page-inner">
        <main id="page-content">{children}</main>
      </div>
    </div>
  );
};

export default PageOuter;
