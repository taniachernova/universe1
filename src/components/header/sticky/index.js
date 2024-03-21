import PropTypes from "prop-types";
import Navbar from "@components/navbar";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import HeaderAction from "@components/header/action/HeaderAction";
import Logo from "@components/logo";

const StickyHeader = ({
  hoverStyleClass,
  mobileNavbarHandler,
  containerFluid,
  navData,
  logo,
}) => {
  const [scroll, setScroll] = useState(0);

  const onScrollChange = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScrollChange);

    return () => {
      window.removeEventListener("scroll", onScrollChange);
    };
  }, []);

  return (
    <div
      className={`tt-stuck-nav ${scroll >= 100 ? "stuck" : ""}`}
      style={{ display: scroll >= 100 ? "block" : "none" }}
    >
      <Container fluid={containerFluid}>
        <div className="tt-header-row">
          <div className="tt-col-obj tt-obj-logo me-3 mt-2">
            <Logo src={logo} width={150} height={"auto"} />
          </div>
          <div className="tt-stuck-parent-menu d-none d-lg-block">
            <Navbar
              navData={navData}
              hoverStyleClass={hoverStyleClass}
              logo="/assets/images/no-placeholder/logo.png"
            />
          </div>

          <HeaderAction
            hamburger={true}
            search={false}
            cart={false}
            account={false}
            settings={false}
            mobileNavbarHandler={mobileNavbarHandler}
          />
        </div>
      </Container>
    </div>
  );
};

StickyHeader.propTypes = {
  navData: PropTypes.array.isRequired,
};

export default StickyHeader;
