import { useWindowSize } from "@hooks";
import PropTypes from "prop-types";

const ProductThumb = ({ thumbs, productName, className }) => {
  const width = useWindowSize();
  let style;

  if (width <= 768) {
    // Mobile devices
    style = { height: "6rem", objectFit: "fill" };
  } else if (width > 768 && width <= 1024) {
    // Tablets
    style = { height: "12rem", objectFit: "fill" };
  } else {
    // Web
    style = { height: "14rem", objectFit: "fill" };
  }
  return thumbs.map((thumb, i) => (
    <div
      key={i}
      className={`tt-img${i === 1 ? "-roll-over" : " "} ${
        className ? className : ""
      }`}
    >
      <img src={thumb} alt={productName} style={style} />
    </div>
  ));
};

ProductThumb.propTypes = {
  thumbs: PropTypes.array.isRequired,
  productName: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ProductThumb;
