import React, { useEffect } from "react";

function Appp() {
  useEffect(() => {
    const menuLinks = document.querySelectorAll(".menu__link");

    const scrollToSection = (event) => {
      event.preventDefault();

      const target = event.target.getAttribute("data-goto");
      const section = document.querySelector(target);
      const yOffset = -70; // смещение от верха страницы

      if (section) {
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    menuLinks.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });

    return () => {
      // Очистка обработчиков событий при размонтировании компонента
      menuLinks.forEach((link) => {
        link.removeEventListener("click", scrollToSection);
      });
    };
  }, []);

  return (
    <div className="head">
      <div className="head__items">
        <div className="burger-menu">
          <input id="menu-toggle" type="checkbox" />
          <label className="menu-btn" for="menu-toggle">
            <span></span>
          </label>

          <ul className="menubox">
            <li>
              <a className="menu-item" href="#">
                O nas
              </a>
            </li>
            <li>
              <a className="menu-item" href="#">
                Oferta
              </a>
            </li>
            <li>
              <a className="menu-item" href="#">
                Galeria
              </a>
            </li>
            <li>
              <a className="menu-item" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="item">
          <a className="menu__link" data-goto=".page__section_1" href="#">
            O Nas
          </a>
          <a className="menu__link" data-goto=".page__section_2" href="#">
            Oferta
          </a>
        </div>
        <div className="item">
          <a className="menu__link" data-goto=".page__section_3" href="#">
            Galeria
          </a>
          <a className="menu__link" data-goto=".page__section_4" href="#">
            Kontakt
          </a>
        </div>
        <div className="image__mobile">
          <img src="./assets/coffeIcon.png"></img>
        </div>
      </div>
      <div className="label">
        <h1>Kawiarnia u Gabrysi</h1>
      </div>
    </div>
  );
}

export default Appp;
