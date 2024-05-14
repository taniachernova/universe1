import Link from "next/link";
import cogoToast from "cogo-toast";
import PropTypes from "prop-types";
import { useProduct } from "@hooks";
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

const Advertise = ({ page, showVariant, className }) => {
  // const { shoppingCart, addToCart } = useContext(CartContext);
  const width = window.innerWidth;
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
          <Link href={""}>
            <ProductThumb
              thumbs={["/assets/images/product/Advertise.png"]}
              productName={"Give an advertise"}
            />
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Advertise;
