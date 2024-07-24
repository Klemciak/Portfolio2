import React from "react";
import "./About.scss";
import aboutGuy from "../../Images/aboutGuy.png";
import aboutGuyShadow from "../../Images/aboutGuyShadow.png";
const About = () => {
  return (
    <div className="about-wrap">
      {/* <Navbar/> */}
      <div className="about">
        <div className="about-img">
          <img src={aboutGuy} alt="" />
          <img src={aboutGuyShadow} alt="" />
        </div>
        <div className="about-text">
          <h2>o mnie</h2>

          <p className="about-text-center">
            Cześć, mam na imię <strong>Karol</strong>
          </p>
          <p>
            Zawsze spędzałem sporo czasu przed komputerem, co w naturalny sposób
            skierowało moją uwagę ku światu programowania. W pewnym momencie
            postanowiłem wykorzystać ten czas bardziej konstruktywnie, co
            zapoczątkowało moją fascynację frontendem. Przyciągnęły mnie do
            niego jego charakterystyczne cechy, czyli możliwość natychmiastowego
            zobaczenia efektów swojej pracy, kreatywność w tworzeniu interfejsów
            użytkownika oraz ciągłe wyzwania i zmiany, które czynią ten obszar
            niezwykle interesującym. W wolnych chwilach nadal lubię pograć w
            gry, ale głównie czas spędzam z żoną i naszym psem, czy właśnie
            staram się pojąć nowe funkcje itp. jeśli chodzi o programowanie.
          </p>
          <p>
            Naukę rozpocząłem od przypadkowych filmików na YouTube, które
            pomogły mi ruszyć. Po pewnym czasie znajomy polecił mi kurs
            stworzony przez "Samuraj Programowania", który okazał się bardzo
            wartościowy i kompleksowy. Po zakończeniu tego kursu kontynuuję
            naukę samodzielnie, aby dalej rozwijać swoje umiejętności i poznawać
            nowe technologie.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
