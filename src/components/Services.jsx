import { useState } from "react";

function Services() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <section id="expertise" className="section fade-section">
      <div className="section-header">
        <p className="eyebrow">Tjänster</p>
        <h2>Från idé till färdig digital upplevelse</h2>
      </div>

      <div className="service-list">

        {/* Bubble 1 */}
        <div className="service-bubble">
          <div className="icon"><i className="fa-solid fa-laptop-code"></i></div>
          <h3>Responsiva hemsidor</h3>
          <p>Webbplatser som fungerar perfekt på alla enheter.</p>

          {open1 && (
            <p className="more-text">
            Moderna, snabba och skräddarsydda hemsidor som kombinerar användarvänlighet, 
            tydlig struktur och ett starkt visuellt uttryck. Perfekt anpassade för företag, 
            portfolios och e‑handel – med en känsla av kvalitet och omtanke i varje detalj.
            </p>
          )}

          <button className="read-more" onClick={() => setOpen1(!open1)}>
            {open1 ? "Visa mindre" : "Läs mer"}
          </button>
        </div>

        {/* Bubble 2 */}
        <div className="service-bubble">
          <div className="icon"><i className="fa-solid fa-wand-magic-sparkles"></i></div>
          <h3>Modern frontend</h3>
          <p>Premium UI/UX med animationer och visuellt djup.</p>

          {open2 && (
            <p className="more-text">
           Visuellt engagerande gränssnitt med genomtänkta animationer 
           och en premium‑design som ger varje webbplats en unik och minnesvärd känsla.
            Skapade med omsorg, kreativitet och en tydlig känsla för detaljer.
            </p>
          )}

          <button className="read-more" onClick={() => setOpen2(!open2)}>
            {open2 ? "Visa mindre" : "Läs mer"}
          </button>
        </div>

        {/* Bubble 3 */}
        <div className="service-bubble">
          <div className="icon"><i className="fa-solid fa-gears"></i></div>
          <h3>Webboptimering</h3>
          <p>Snabba laddtider, SEO och teknisk förbättring.</p>

          {open3 && (
            <p className="more-text">
        Webbplatser optimerade för hastighet, sökmotorer och teknisk prestanda, 
        så att varje besökare får en snabb, smidig och pålitlig upplevelse.
         Allt finjusterat med fokus på kvalitet och långsiktig hållbarhet.
            </p>
          )}

          <button className="read-more" onClick={() => setOpen3(!open3)}>
            {open3 ? "Visa mindre" : "Läs mer"}
          </button>
        </div>

      </div>
    </section>
  );
}

export default Services;
