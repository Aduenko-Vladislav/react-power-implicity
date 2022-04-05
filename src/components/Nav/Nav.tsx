import "./styles.scss";
import logo from "../../assets/logo.png";

const Nav = () => {
  return (
    <nav className="nav">
      <a href="#" className="nav__logo">
        <img src={logo} alt="logo" />
      </a>
      <ul className="nav__list">
        <li className="list__item">
          <a className="item__link" href="#">
            Features
          </a>
        </li>
        <li className="list__item">
          <a className="item__link" href="#">
            Partners
          </a>
        </li>
        <li className="list__item">
          <a className="item__link" href="#">
            Stories
          </a>
        </li>
      </ul>
      <button type="button" className="nav__btn">
        Download for free
      </button>
    </nav>
  );
};

export default Nav;
