import "../style.css";
import icon from '../assets/TPOE ICON buiss.jpg';

const NavBar = () => {
  return (
    <>
      <section id="nav__bar">
        <div className="nav_container">
          <div className="nav_row">
            <h1>TPOE WRITES</h1>
            <figure className="nav__icon-figure">
              <img src={icon} alt="" />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavBar;
