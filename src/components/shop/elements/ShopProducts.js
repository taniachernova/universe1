import { Col, Row } from "react-bootstrap";
import { EmptyProducts } from "@components/products";
import { ProductOne as Product } from "@components/product";
import { Advertise } from "@components/product";

const ShopProducts = ({ products, layout, productPerPage }) => {
  const emptyProductCount = productPerPage - products.length;

  return (
    <Row className={`tt-product-listing ${layout}`}>
      {products.length > 0 ? (
        <>
          {products.slice(0, productPerPage).map((product) => (
            <Col key={product.id} className="tt-col-item">
              <Product
                page={"shop"}
                product={product}
                showVariant={true}
                className="product-hover"
              />
            </Col>
          ))}
          {Array(emptyProductCount)
            .fill()
            .map((_, index) => (
              <Col key={index} className="tt-col-item">
                <Advertise
                  page={"shop"}
                  showVariant={true}
                  className="product-hover"
                />
              </Col>
            ))}
        </>
      ) : (
        <EmptyProducts />
      )}
    </Row>
  );
};

export default ShopProducts;
