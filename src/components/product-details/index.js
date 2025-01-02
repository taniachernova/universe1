import { useProduct } from "@hooks";
import cogoToast from "cogo-toast";
import PropTypes from "prop-types";
import { CURRENCY } from "@utils/constant";
import React, { Fragment, useContext } from "react";
import { CartContext } from "@global/CartContext";
import { toCapitalize } from "@utils/toCapitalize";
import { CartNotification } from "@components/modal";
import { CompareContext } from "@global/CompareContext";
import { WishlistContext } from "@global/WishlistContext";
import ProductSize from "@components/product/elements/ProductSize";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import ProductColor from "@components/product/elements/ProductColor";
import ProductRatings from "@components/product/elements/ProductRatings";
import ProductMaterial from "@components/product/elements/ProductMaterial";
import ProductDetailsThumbnail from "@components/product-details/Thumbnail";
import ProductSaleCountdown from "@components/product/elements/ProductSaleCountdown";
import Table from "react-bootstrap/Table";
import CheckMarkIcon from "@assets/icons/check-mark";
import Link from "next/link";
import {
  getCartProduct,
  getCartProductQuantity,
  getDiscountPrice,
  getProductUniqueSizes,
  getWishCompareProduct,
} from "@utils/product";

const ProductDetails = ({ product }) => {
  const {
    name,
    description,
    excerpt,
    previewImages,
    badge,
    types,
    details,
    gender,
    age,
    ethnicity,
    nationality,
    location,
    city,
    country,
    languages,
    services,
    phone_number,
  } = product;

  console.log("product", product);
  return (
    <Fragment>
      <div className="container-indent">
        <Container className="container-fluid-mobile">
          <Row>
            <Col lg={6}>
              <ProductDetailsThumbnail
                productName={name}
                thumbImages={previewImages}
              />
            </Col>

            <Col lg={6}>
              <div className="tt-product-single-info">
                {badge || types ? (
                  <div className="tt-wrapper">
                    <div className="tt-label">
                      {badge && (
                        <div
                          className={`tt-label tt-label-${badge.toLowerCase()}`}
                        >
                          {badge}
                        </div>
                      )}
                      {types &&
                        types.map((type, index) => (
                          <div key={index} className="tt-label tt-label-sale">
                            {type}
                          </div>
                        ))}
                    </div>
                  </div>
                ) : null}
                <div className="d-flex">
                  <div className="me-auto">
                    <h1 className="tt-title">{name}</h1>
                  </div>
                </div>

                <div className="tt-wrapper mt-3 text-dark fs-6">
                  {description}
                </div>
                <div className="tt-wrapper">
                  <Link href={`https://wa.me/${phone_number}`} target="_blank">
                    <button
                      className={`btn btn-md bg-success bg-opacity-90 w-100 `}
                      style={{ color: "white" }}
                    >
                      <i className="tt-icon icon-f-93 me-2 fs-5" />
                      Whatsapp
                    </button>
                  </Link>
                </div>
                {/* <div className="mt-4">
                  <i className="icon-f-93" />
                  
                  <Link
                    className="text-dark fs-6 fw-medium"
                    href="tel:+77723457885"
                  >
                    Phone: +777 2345 7885
                  </Link>
                </div> */}
                <div className="tt-wrapper mt-4">
                  <Row>
                    <Col lg={6} className="ps-0 pb-0">
                      <Table className="table-responsive mb-0 table-borderless">
                        <tbody>
                          <tr>
                            <th scope="row" className="fw-medium w-25">
                              Cinsiyet:
                            </th>
                            <td className="fw-normal">{gender}</td>
                          </tr>
                          <tr>
                            <th scope="row" className="fw-medium w-25">
                              Yaş:
                            </th>
                            <td className="fw-normal">{age}</td>
                          </tr>
                          <tr>
                            <th scope="row" className="fw-medium w-25">
                              Göz Rengi:
                            </th>
                            <td className="fw-normal">{details.eyes}</td>
                          </tr>
                          <tr>
                            <th scope="row" className="fw-medium w-25">
                              Saç:
                            </th>
                            <td className="fw-normal">{details.hair}</td>
                          </tr>
                          <tr>
                            <th scope="row" className="fw-medium w-25">
                              Konum:
                            </th>
                            <td className="fw-normal">{location}</td>
                          </tr>
                          <tr>
                            <th scope="row" className="fw-medium w-25">
                              Dil:
                            </th>
                            <td className="fw-normal">
                              {languages &&
                                languages.map((language, index) => (
                                  <React.Fragment key={language}>
                                    {language}
                                    {languages.length - 1 > index ? ", " : " "}
                                  </React.Fragment>
                                ))}
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                    <Col lg={6} className="ps-0">
                      <Table className="table-responsive table-borderless">
                        <tbody>
                          <tr>
                            <th scope="row" className="fw-medium w-25">
                              Boy:
                            </th>
                            <td className="fw-normal">{details.height}</td>
                          </tr>
                          <tr>
                            <th scope="row" className="fw-medium w-25">
                              Kilo:
                            </th>
                            <td className="fw-normal">{details.weight}</td>
                          </tr>
                          <tr>
                            <th scope="row" className="fw-medium w-25">
                              Uyruk:
                            </th>
                            <td className="fw-normal">{ethnicity}</td>
                          </tr>
                          <tr>
                            <th scope="row" className="fw-medium w-25">
                              Beden:
                            </th>
                            <td className="fw-normal">
                              {details.bust}, {details.waist}, {details.hips}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row" className="fw-medium w-25">
                              Ülke:
                            </th>
                            <td className="fw-normal">{country}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </div>
                <div className="tt-wrapper mt-1">
                  <div className="tt-row-custom-01">
                    <div className="col-item w-100">
                      <h6 className="pb-1 ps-0">Services</h6>
                      <Row className="w-100 bg-light bg-opacity-50 py-3 rounded">
                        {services &&
                          services.map((service, index) => (
                            <Col
                              key={index}
                              lg={3}
                              className="inline text-dark"
                            >
                              <CheckMarkIcon />
                              <p className="d-inline text-dark"> {service}</p>
                            </Col>
                          ))}
                        <Col></Col>
                      </Row>
                    </div>
                  </div>
                </div>
                <div className="tt-wrapper">
                  <div className="tt-row-custom-01">
                    <div className="col-item"></div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductDetails;
