import reactImg from "../assets/react.jpg";
import angularImg from "../assets/angular.jpg";
import databasImg from "../assets/databas.jpg";
import tddImg from "../assets/tdd.jpg";
import movieImg from "../assets/movie.jpg";
import apiImg from "../assets/api.jpg";

import { useState } from "react";

function Projects() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="section fade-section">
      <div className="section-header">
        <p className="eyebrow">Projekt</p>
        <h2>Webbprojekt under studierna</h2>
      </div>

      <div className="project-grid">

        {/* Första 3 projekten – alltid synliga */}
           <a
      href="https://github.com/Baat00l/TDD-TicketBooking"
      target="_blank"
      className="project-card tdd extra-project fade-in"
    >
      <div className="project-photo">
        <img src={tddImg} alt="TDD projekt" />
      </div>
      <h3>TDD TicketBooking – C#</h3>
      <p>Backend, logik och testdriven utveckling.</p>
    </a>

   <a
      href="https://github.com/Baat00l/Movie-seat-booking-Javascript"
      target="_blank"
      className="project-card movie extra-project fade-in"
    >
      <div className="project-photo">
        <img src={movieImg} alt="Movie Seat Booking" />
      </div>
      <h3>Movie Seat Booking – JS</h3>
      <p>Interaktivt UI och visuellt projekt.</p>
    </a>

<a
  href="https://github.com/Baat00l/Laboration-4-Databas"
  target="_blank"
  className="project-card database extra-project fade-in"
>
  <div className="project-photo">
    <img src={databasImg} alt="Databas projekt" />
  </div>
  <h3>Databas</h3>
  <p>Databasstruktur och backend‑logik.</p>
</a>

{/* Extra projekt */}
{showMore && (
  <>
 
     <a
  href="https://github.com/Baat00l/Laboration-5-React"
  target="_blank"
  className="project-card react"
>
  <div className="project-photo">
    <img src={reactImg} alt="React projekt" />
  </div>
  <h3>React</h3>
  <p>Modern frontend, komponenter och UI‑tänk.</p>
</a>



    <a
  href="https://github.com/Baat00l/Laboration-7-Angular"
  target="_blank"
  className="project-card angular"
>
  <div className="project-photo">
    <img src={angularImg} alt="Angular projekt" />
  </div>
  <h3>Angular</h3>
  <p>Stort ramverk, TypeScript och struktur.</p>
</a>

    <a
      href="https://github.com/Baat00l/Js2-Laboration-3-APIer"
      target="_blank"
      className="project-card api extra-project fade-in"
    >
      <div className="project-photo">
        <img src={apiImg} alt="API projekt" />
      </div>
      <h3>JS2 – API Projekt</h3>
      <p>API‑integration, async/await och dataflöden.</p>
    </a>
  </>
)}

        
        {/* KNAPPEN */}
       <button
  className="show-more-btn"
  onClick={() => {
    if (showMore) {
      // Scrolla till toppen av projektsektionen
      const section = document.getElementById("projects");
      section?.scrollIntoView({ behavior: "smooth" });
    }
    setShowMore(!showMore);
  }}
>
  {showMore ? "Visa mindre" : "Visa mer"}
</button>


      </div>
    </section>
  );
}

export default Projects;
