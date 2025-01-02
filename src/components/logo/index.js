import Link from "next/link";
import PropTypes from "prop-types";

const Logo = ({src, width, height}) => {
    return (
        <Link href="/" className="tt-logo tt-logo-alignment">
            <img src={src} width={width} height={height} alt="universe-escort"/>
        </Link>
    );
};

Logo.propTypes = {
    src: PropTypes.string.isRequired
}

export default Logo;
