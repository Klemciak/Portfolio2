import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./About.scss";
import aboutGuy from "../../Images/aboutGuy.png";
import aboutGuyShadow from "../../Images/aboutGuyShadow.png";

const slides = [
  {
    title: "Cześć, mam na imię Karol",
    text1: (
      <>
        Zawsze spędzałem sporo czasu przed komputerem, co w naturalny sposób
        skierowało moją uwagę ku światu programowania. W pewnym momencie
        postanowiłem wykorzystać ten czas bardziej konstruktywnie, co
        zapoczątkowało moją fascynację frontendem. Przyciągnęły mnie do niego
        możliwości natychmiastowego zobaczenia efektów swojej pracy, kreatywność
        w tworzeniu interfejsów użytkownika oraz ciągłe wyzwania i zmiany, które
        czynią ten obszar niezwykle interesującym. W wolnych chwilach nadal
        lubię pograć w gry, ale głównie czas spędzam z żoną i naszym psem, czy
        właśnie staram się pojąć nowe funkcje itp. jeśli chodzi o programowanie.
      </>
    ),
    text2: (
      <>
        Naukę rozpocząłem od przypadkowych filmików na YouTube, które pomogły mi
        ruszyć. Po pewnym czasie znajomy polecił mi kurs stworzony przez{" "}
        <a href="https://www.youtube.com/@SamurajProgramowania">
          <strong className="blue">Samuraj Programowania</strong>
        </a>
        , który okazał się bardzo wartościowy i kompleksowy. Po zakończeniu tego
        kursu kontynuuję naukę samodzielnie, aby dalej rozwijać swoje
        umiejętności i poznawać nowe technologie.
      </>
    ),
  },
  {
    title: <strong>Cele zawodowe</strong>,
    text1: (
      <>
        <strong>Rozwój umiejętności technicznych:</strong> Dążę do doskonalenia
        umiejętności w zakresie HTML, CSS, JavaScript, React itp. by świadomie i
        skutecznie tworzyć responsywne interfejsy użytkownika.
        <br />
        <strong>Kreatywne podejście do projektowania:</strong> Chcę rozwijać
        umiejętności projektowania interfejsów w sposób, który nie tylko spełnia
        oczekiwania funkcjonalne, ale także wzbudza zainteresowanie i pozytywne
        wrażenia użytkowników.
        <br />
        <strong>Wszechstronny rozwój zawodowy:</strong> Poza front-endem, dążę
        do zdobycia umiejętności, które pozwolą mi być wszechstronnym
        profesjonalistą, gotowym na elastyczne reagowanie na zmieniające się
        wymagania branżowe.
      </>
    ),
    text2: (
      <>
        Doskonalenie, Wydajność, Efektywność, Adaptacja, Kreatywność, Jakość i
        wiele innych czyli ogólnie rozwój w wielu aspektach.
      </>
    ),
  },
  {
    title: <strong>Zainteresowania</strong>,
    text1: (
      <>
        <strong>Motocykle:</strong> Interesuję się motocyklami a głównie
        przejażdżkami najczęściej bez celu, działa to w jakiś sposób
        odprężająco.
        <br />
        <strong>Gry komputerowe:</strong> Gry komputerowe są dla mnie świetnym
        sposobem na relaks i ucieczkę od codzienności. Uderzam głównie w tytuły
        które mają jakieś nawiązania z średniowieczem, ale się do nich nie
        ograniczam.
        <br />
        <strong>Sport:</strong> Staram się uprawiać różne dyscypliny sportowe,
        aby utrzymać dobrą kondycję. W niedalekiej przyszłości chciałbym już
        robić to regularnie.
      </>
    ),
    text2: (
      <>
        Jeśli masz pytania lub chcesz się ze mną skontaktować, serdecznie
        zapraszam do odwiedzenia zakładki
        <Link to="/contact">
          <strong className="blue"> Kontakt </strong>
        </Link>
        .
      </>
    ),
  },
];

const About = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const nextSlide = () => {
    setSlideIndex((aktualIndex) =>
      aktualIndex === slides.length - 1 ? 0 : aktualIndex + 1
    );
  };
  const prevSlide = () => {
    setSlideIndex((aktualIndex) =>
      aktualIndex === 0 ? slides.length - 1 : aktualIndex - 1
    );
  };
  return (
    <div className="about-wrap">
      <div className="about">
        <div className="about-img">
          <img src={aboutGuy} alt="" />
          <img src={aboutGuyShadow} alt="" />
        </div>

        <div className="about-text">
          <div>
            <h2>o mnie</h2>
            <p className="about-text-center">{slides[slideIndex].title}</p>
            <p>{slides[slideIndex].text1}</p>
            <p>{slides[slideIndex].text2}</p>
          </div>
          <div className="about-buttons">
            <button onClick={prevSlide}>&lt;</button>
            <button onClick={nextSlide}>&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
