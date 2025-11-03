"use client";
import Image from "next/image";

export default function WorksPage() {
  const works = [
    {
      section: "Video Games / Interactive Immersive Experiences",
      items: [
        { title: "Beyond Van Gogh: A Life in Letters VR (2023)", 
          role: "Composer, Arranger, Sound Designer, Mixing Engineer", 
          img: "/images/profile.png",
          link: "https://example.com/beyond-vangogh"},

        { title: "Dragonspire (2023)", role: "Audio Director, Sound Designer, Mixing Engineer" },
        { title: "Sweet Sorrow: A Shakespeare VR Experience (2022)", role: "Composer, Sound Designer, Mixing Engineer" },
        { title: "Little Pizzeria AR (2021)", role: "Composer, Arranger, Sound Designer, Mixing Engineer" },
        { title: "Manea & Takhtoukh Snack Saber VR (2020)", role: "Composer, Arranger, Sound Designer" },
        { title: "Toaster (2019)", role: "Composer, Arranger, Orchestrator, Sound Designer, Mixing Engineer" },
        { title: "Home a Drone (2019)", role: "Composer, Arranger, Orchestrator, Sound Designer, Mixing Engineer" },
        { title: "Saber VR (2018)", role: "Composer, Arranger, Orchestrator, Mixing Engineer" },
        { title: "Journey through the Camps (2018)", role: "Composer, Arranger, Orchestrator, Sound Designer, Mixing Engineer" },
        { title: "Christmas Tree AR (2017)", role: "Composer, Arranger, Orchestrator, Sound Designer, Mixing Engineer" },
        { title: "The Price of Freedom (2016/2017)", role: "Composer, Arranger, Orchestrator, Sound Designer, Mixing Engineer" },
      ],
    },
    {
      section: "Film / Documentary / Commercials",
      items: [
        { title: "We Belong Here: A VR Documentary About Asian Hate Crime (2021)", role: "Composer, Sound Designer" },
        { title: "A Piece of Cake (2021)", role: "Composer, Arranger, Orchestrator, Sound Designer, Mixing Engineer" },
        { title: "Kristallnacht VR (2021)", role: "Composer, Sound Designer, Mixing Engineer" },
        { title: "Auschwitz VR (2021)", role: "Composer, Sound Designer, Mixing Engineer" },
        { title: "TeT in NYC (2021)", role: "Composer, Orchestrator, Mixing Engineer" },
      ],
    },
    {
      section: "Theatre Productions",
      items: [
        { title: "Miidnight's Dream (2025)", role: "Composer, Arranger, Orchestrator, Sound Designer, Mixing Engineer" },
        { title: "A Few Deep Breaths (2022)", role: "Composer, Arranger, Orchestrator, Sound Designer, Mixing Engineer" },
        { title: "Go Go Adventure to the Ocean (2014)", role: "Composer, Arranger, Orchestrator, Mixing Engineer" },
        { title: "The Comedy of Hiers (2014)", role: "Composer, Arranger, Orchestrator, Mixing Engineer" },
      ],
    },
    {
      section: "Others",
      items: [
        { title: "Legends of Altair and Vega (2021)", role: "Composer, Orchestrator, Sound Designer, Mixing Engineer" },
        { title: "The Mirage: A 29Rooms Experience (2019)", role: "Sound Designer, Composer, Mixing Engineer" },
        { title: "Journey with Howard Chandler (2019)", role: "Sound Designer, Mixing Engineer" },
      ],
    },
  ];

  return (
    <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "40px 20px", color: "black"}}>
      <h1 style={{ textAlign: "left", fontSize: "2.5rem", marginBottom: "40px" }}>Project</h1>

      {works.map((section) => (
        <div key={section.section}>
          <h2 style={{ fontSize: "1.5rem", marginTop: "40px", marginBottom: "20px", borderBottom: "1px solid #555", paddingBottom: "8px" }}>
            {section.section}
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px"
          }}>
            {section.items.map((item) => (
              <div key={item.title} style={{
                padding: "15px",
                borderRadius: "10px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "default"
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "scale(1.03)";
                el.style.boxShadow = "0 6px 18px rgba(255,255,255,0.15)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "scale(1)";
                el.style.boxShadow = "none";
              }}>
                <div style={{ fontWeight: "bold", marginBottom: "5px" }}>{item.title}</div>
                <div>{item.role}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
