import "./App.css";
import Appp from "./ScrollToElement";
import Modal from "./modal";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <Appp></Appp>

        <div className="description page__section_1">
          <div className="description__image">
            <img src="./assets/book.jpg" alt="#" />
          </div>
          <div className="description__title">
            <h2>O nas</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd
            </p>
          </div>
        </div>
      </div>
      <div className="nav__title page__section_2">Oferta</div>
      <div className="nav__images  ">
        <div className="box">
          <img src="./assets/imgDescOne.jpg" alt="" />
          Wyśmienite kawy
        </div>
        <div className="box">
          <img src="./assets/imgDescTwo.jpg" alt="" />
          Ziarna na wynos
        </div>
        <div className="box">
          <img src="./assets/imgDescThree.jpg" alt="" />
          Ciasta jak domowe
        </div>
      </div>

      <div className="basement " id="section1">
        <div className="basement__title page__section_3">Galeria</div>
        <Modal></Modal>
      </div>
      <div className="Kontakt__">
        <p>Kontakt</p>
      </div>
      <div className="footer page__section_4">
        <div className="contacts">
          <div className="settngs road">
            <img src="./assets/icoMap.png" alt="" />
            <p>ul. Zimowit 42, 35-605 Rzeszów</p>
          </div>
          <div className="settngs number">
            <img src="./assets/IcoPhoneContact..svg" alt="" />
            <p>+48 506 900 590</p>
          </div>
          <div className="settngs mail">
            <img src="./assets/IcoMailContact.svg" alt="" />
            <p>office@tituto.com</p>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32879.64236150893!2d20.95829743741838!3d52.22895961274026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd1e6e5e7ee3%3A0x8c56b6615ca1aa71!2s%C5%81azienki%20Park!5e0!3m2!1sru!2spl!4v1687207803984!5m2!1sru!2spl"
            width="515"
            height="438"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
