import React from "react";
import { Link } from "react-router-dom";
const Slide3 = () => (
  <>
    <h3>
      <strong>Zainteresowania</strong>
    </h3>
    <p>
      <strong>Motocykle:</strong> Interesuję się motocyklami a głównie
      przejażdżkami najczęściej bez celu, działa to w jakiś sposób odprężająco.
      <br />
      <strong>Gry komputerowe:</strong> Gry komputerowe są dla mnie świetnym
      sposobem na relaks i ucieczkę od codzienności. Uderzam głównie w tytuły
      które mają jakieś nawiązania z średniowieczem, ale się do nich nie
      ograniczam.
      <br />
      <strong>Sport:</strong> Staram się uprawiać różne dyscypliny sportowe, aby
      utrzymać dobrą kondycję. W niedalekiej przyszłości chciałbym już robić to
      regularnie.
    </p>
    <p>
      Jeśli masz pytania lub chcesz się ze mną skontaktować, serdecznie
      zapraszam do odwiedzenia zakładki
      <Link to="/contact">
        <strong className="blue"> Kontakt </strong>
      </Link>
      .
    </p>
  </>
);

export default Slide3;
