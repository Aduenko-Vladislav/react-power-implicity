import "./styles.scss";

const Header = () => {
  return (
    <header className="content">
      <div className="content__wrapper">
        <h1 className="content__title">The Power of Simplicity</h1>
        <p className="content__text">
          Instead of spending time searching for the right app, our AI will
          bring the right app to you.
        </p>
        <button className="content__btn" type="button">
          Learn
        </button>
        <ol className="content__slider">
          <li className="slider__indicator"></li>
          <li className="slider__indicator"></li>
          <li className="slider__indicator slider__indicator--active"></li>
          <li className="slider__indicator"></li>
          <li className="slider__indicator"></li>
        </ol>
      </div>
    </header>
  );
};

export default Header;
