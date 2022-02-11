import React from "react";
import backgroundTalent from "../../images/backgroundTalent.jpg";
import Card from "./Card";
import Testimonials from "./Testimonials";

const testimonials = [
  {
    name: "Michael Tiu Lim",
    desc: "We have 1M population and have skilled talents within the city. We are also considered as a University town where nearby areas send their children here to study and work.",
  },

  {
    name: "Nolan Sunico, Ramil Rojas, Jocelyn Wee",
    desc: "Zamboanga is a center of economy here in Zamboanga Peninsula. Low labor cost, low cost of living. High literacy rate. Less labor problem.",
  },
  {
    name: "Juanito Calingacion, Jr",
    desc: "The city has good quality education that produces a good number of graduates, and a supportive local and national government.",
  },

  {
    name: "Matildevera Domosmog",
    desc: "Investors should locate in Zamboanga City because it provides access to ICT resources and opportunities, provide training on ICT skills; and, provide a facility for digital workers.",
  },
  {
    name: "Glory Halirin",
    desc: "It is a gateway to the BIMP-EAGA.",
  },
  {
    name: "Nolan Sunico",
    desc: "Zamboanga is a unique city, rarely affected by Typhoon which makes this city a good place for business.",
  },
  {
    name: "Ana Kriselda Natividad",
    desc: "Investors also need to consider other cities in other provinces and not just those in Metro Manila; and one of these cities is Zamboanga City. Zamboanga City has so much potential and so much to offer. The City's geographical location is strategic as it can serve as a gateway to other cities and municipalities in the far flung areas of the country such as Basilan, Sulu, and Tawi-Tawi. Investors need to take advantage of the high potential of Zamboanga City to be one of the digital cities.",
  },
];

const data = [
  {
    creditNumber: 5592,
    desc: "Zamboanga City Graduates of Higher Educational Institutions (HEIs) under CHED 2018",
  },
  {
    creditNumber: 40150,
    desc: "Zamboanga City Graduates of Higher Educational Institutions (HEIs) under CHED 2019",
  },
  {
    creditNumber: 9355,
    desc: "Senior Highschool Graduates under deped (2018)",
  },
  {
    creditNumber: 14054,
    desc: "Province of Zamboanga Del Sur Graduates of Higher Educational Institutions (HEIs) under CHED (2018)",
  },
  {
    creditNumber: 1637,
    desc: "Province of Zamboanga Del Sur Technical-Vocational (Tech-Voc) Graduates -TESDA (2019) 819 graduates in Zamboanga City",
  },
];

const Talent = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(" + backgroundTalent + ")",
          backgroundSize: "cover",
        }}
      >
        <div
          className="default-width animation-div-up "
          style={{ backgroundColor: "rgba(37, 37, 37, 0.514)" }}
        >
          <div
            style={{
              backgroundColor: "#fed501",
              display: "inline-block",
              margin: "0 23px",
              marginTop: "-80px",
              borderRadius: "5%",
            }}
          >
            <h3 style={{ padding: "1rem", color: "white" }}>Talent</h3>
          </div>

          <div>
            <h5
              style={{
                color: "whitesmoke",
                marginTop: "1rem",
                marginLeft: "2.5rem",
              }}
            >
              Region 9-Zamboanga Peninsula
            </h5>
            <h2 style={{ color: "whitesmoke", marginLeft: "2.5rem" }}>
              ZAMBOANGA CITY
            </h2>
            <h4 style={{ color: "whitesmoke", marginLeft: "2.5rem" }}>
              Province of Zamboanga Del Sur
            </h4>
            <Card data={data} />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#fed501",
            borderTop: "rgba(243, 34, 6, 0.603) 3px solid",
            borderBottom: "rgba(243, 34, 6, 0.603) 3px solid",
          }}
        >
          <div className="default-width ">
            <div
              style={{
                backgroundColor: "#cf0707",
                display: "inline-block",
                margin: "0 23px",
                marginTop: "-80px",
                borderRadius: "2%",
              }}
            >
              <h3 style={{ padding: "1rem", color: "white" }}>
                Stockholders Speak
              </h3>
            </div>
            <div>
              <Testimonials testimonials={testimonials} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talent;
