import PropTypes from "prop-types";
import Logo from "@components/logo";
import { Container } from "react-bootstrap";
import Link from "next/link";

const CopyrightOne = ({ className, logo, dark }) => {
  return (
    <div
      className={`tt-footer-custom ${className ? className : ""} ${
        dark ? "tt-color-scheme-04" : ""
      }`}
    >
      <Container>
        <div className="tt-row">
          <div className="tt-col-left">
            <div className="tt-col-item tt-logo-col">
              <Logo src={logo} /> <i className="text-danger icon-h-37" />
            </div>
            <div className="tt-col-item">
              <div className="tt-box-copyright ht-copy pt-2">
                &copy; {new Date().getFullYear()}. Made with{" "}
                <Link href="/">universeescort</Link> .
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

CopyrightOne.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string.isRequired,
};

export default CopyrightOne;
