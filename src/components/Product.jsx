const Product = (props) => {
  const { data } = props;
  return (
    <div className="product-item">
      <div className="product-item-image">
        <figure className="product-item-image-info">
          <img src={data.image} alt={`${data.title}`} />
        </figure>
      </div>
      <div className="product-item-inner">
        <div className="product-item-inner--title">
          <img src={data.icon} alt="" />
          <span>{data.title}</span>
        </div>
        <div className="product-item-inner--price">
          <span>{data.price}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
