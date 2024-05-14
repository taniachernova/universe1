import Link from "next/link";
import cogoToast from "cogo-toast";
import PropTypes from "prop-types";
import { useProduct, useWindowSize } from "@hooks";
import { CURRENCY } from "@utils/constant";
import { Fragment, useContext } from "react";
import { CartContext } from "@global/CartContext";
import { toCapitalize } from "@utils/toCapitalize";
import ProductSize from "./elements/ProductSize";
import ProductColor from "./elements/ProductColor";
import ProductThumb from "./elements/ProductThumb";
import ProductAction from "./elements/ProductAction";
import ProductRatings from "./elements/ProductRatings";
import ProductMaterial from "./elements/ProductMaterial";
import { CartNotification, QuickView } from "@components/modal";
import ProductSaleCountdown from "./elements/ProductSaleCountdown";
import { getCartProductQuantity, getCartProduct } from "@utils/product";
import WishlistProductAction from "@components/product/elements/WishlistProductAction";

const ProductOne = ({ product, page, showVariant, className }) => {
  const {
    badge,
    discount,
    discountDuration,
    name,
    ratings,
    thumbs,
    variations,
    vendor,
  } = product;

  const {
    slug,
    productSize,
    productColor,
    productPrice,
    discountedPrice,
    productStock,
    isOutOfStock,
    modalCartAdded,
    modalQuickView,
    productMaterial,
    productQuantity,
    productColorImage,
    productSizeHandler,
    productColorHandler,
    modalQuickViewHandler,
    modalCartAddedHandler,
    productMaterialHandler,
  } = useProduct(product);

  // const { shoppingCart, addToCart } = useContext(CartContext);
  const width = useWindowSize();
  let style;

  if (width <= 768) {
    // Mobile devices
    style = { height: "7rem" };
  } else if (width > 768 && width <= 1024) {
    // Tablets
    style = { height: "12rem" };
  } else {
    // Web
    style = { height: "15rem" };
  }
  return (
    <Fragment>
      <div className={`tt-product thumbprod-center ${className}`}>
        <div className="tt-image-box" style={style}>
          <Link href={slug}>
            <ProductThumb
              thumbs={
                productColorImage ? [productColorImage, thumbs[1]] : thumbs
              }
              productName={name}
            />
          </Link>
        </div>

        <div className={`tt-description`}>
          <h2 className="tt-title">
            <Link href={slug} className="fw-semibold text-dark">
              {name}
            </Link>
          </h2>

          <div className="tt-price mt-1">
            <h2 className="tt-title">
              <Link href={slug}>İstanbul</Link>
            </h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ProductOne.propTypes = {
  product: PropTypes.object.isRequired,
  showVariant: PropTypes.bool.isRequired,
  page: PropTypes.string,
};

ProductOne.defaultProps = {
  showVariant: true,
};

export default ProductOne;
