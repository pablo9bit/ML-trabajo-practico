import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img src="/assets/Logo_ML.png" alt="logo" width={55} height={15} />
    </Link>
  );
};

export default Logo;
