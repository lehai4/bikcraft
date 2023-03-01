const Section = ({ children, title }) => {
  return (
    <section
      className={`elementor-section
      ${title ? `elementor-element-${title}` : ""}`}
    >
      {children}
    </section>
  );
};

export default Section;
