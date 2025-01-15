import React from "react";
import "../styles/AboutInfo.css";
import photoMission from "../assets/missionImage.jpg";
import photoComposition from "../assets/floral-arrangement.jpg"
import Carousel from "./Carousel";
import carouselImages from "../data/dataCarousel"; 

const AboutInfo = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <div className="about-text">
          <h3>Unsere Mission</h3>
          <p>
            Wir verstehen die Bedeutung jedes Tages zu blühen, zu danken, zu
            erfreuen und zu inspirieren. Deshalb ist es unsere Aufgabe, Ihnen
            den Weggang zu gestalten, ohne dass es so scheint, wie Ihr Geld
            gesprochen bekommt. Unser Blumenladen lässt Ihnen nicht nur die
            schönen Blumenarrangements, sondern auch die Möglichkeit, Ihre
            Liebe, Dankbarkeit und Freude durch wunderschöne Blumen
            auszudrücken. Lassen Sie sich von unserer Auswahl inspirieren und
            machen Sie jeden Tag zu einem besonderen Anlass!
          </p>
        </div>
        <div className="about-image imgOne">
        <img
            src={photoMission}
            alt="Kompositionen"
          />
        </div>
      </section>

      <section className="about-section reverse">
        <div className="about-image imgTwo">
          <img
            src={photoComposition}
            alt="Kompositionen"
          />
        </div>
        <div className="about-text">
          <h3>Kompositionen und Blumen</h3>
          <p>
            Arrangements können in beliebigen Behältern zusammengestellt
            werden: Körbe, Hüteboxen, Vasen oder dekorative Schachteln. Sie
            müssen nicht vor Schönheit die Show gestohlen wissen, da die Blumen
            durch dieses spezifische floristische Schema unseren Geschmack
            gemacht werden. Arrangements sind wir praktisch zum Verschenken
            oder zur Dekoration von Veranstaltungen.
          </p>

          <Carousel images={carouselImages} />
        </div>
      </section>
    </div>
  );
};

export default AboutInfo;
