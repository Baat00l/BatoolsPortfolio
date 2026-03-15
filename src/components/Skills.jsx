function Skills() {
  const categories = [
    {
      title: "Tekniska kompetenser",
      icon: "💻",
      items: [
        "HTML",
        "CSS / SASS",
        "JavaScript",
        "Next.js",
        "C#",
        "WordPress",
        "Design & UX",
        "Programmering",
        "GitHub",
        "Responsiv design",
        "Komponentbaserad utveckling"

      ]
    },
    {
      title: "Arbetssätt & verktyg",
      icon: "🛠️",
      items: [
        "Agila metoder",
        "Publiceringsverktyg",
        "Planeringsförmåga",
        "Kommunikation",
        "Strukturerat arbetssätt"
      ]
    },
{
  title: "Personliga styrkor",
  icon: "🌿",
  items: [
    "Empatisk",
    "Ambitiös",
    "Ansvarsfull",
    "Samarbetsinriktad",
    "Anpassningsbar",
    "Tålmodig",
    "Organiserad",
    "Driven",
        "Noggrann",
    "Pålitlig",
  ]
}
  ];

  return (
    <section id="skills" className="skills-section fade-section">
      <div className="section-header">
        <p className="eyebrow">Kompetenser</p>
        <h2>Färdigheter & expertis</h2>
      </div>

      <div className="skills-grid">
        {categories.map((cat) => (
          <div className="skills-card" key={cat.title}>
            <h3 className="skills-card-title">
              <span className="icon">{cat.icon}</span>
              {cat.title}
            </h3>

            <div className="skills-chips">
              {cat.items.map((item) => (
                <span className="chip" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
