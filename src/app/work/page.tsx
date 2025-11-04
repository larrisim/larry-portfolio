"use client";

import Image from "next/image";
import Footer from '../../../components/Footer'

export default function WorksPage() {
  const works = [
    {
      section: "Immersive Experiences",
      items: [
        { 
          title: "Beyond Van Gogh: A Life in Letters VR", 
          role: "Composer & Sound Designer", 
          client: "Bouvlard Arts",
          img: "/images/beyond-vangogh.jpg",
          link: "https://beyondvangogh.com/"
        },

        { title: "The Mirage: A 29Rooms Experience", 
          role: "Sound Designer & Composer", 
          client: "Refinery29", 
          img: "/images/29rooms.png", 
          link: "https://www.refinery29.com/en-us/29rooms" 
        },

        { 
          title: "Midnight's Dream", 
          role: "Audio Director, Composer & Sound Designer", 
          client: "Denvor Immersive Repetory Theater", 
          img: "/images/DIRT.png", 
          link: "https://denverimmersive.com/" 
        },

        { 
          title: "The Price of Freedom", 
          role: "Audio Director, Composer & Sound Designer",
          client: "Countruct Studio",
          img: "/images/pof.png",
          link: "https://store.steampowered.com/app/561080/The_Price_of_Freedom/"
        },

        { 
          title: "Journey Through the Camps", 
          role: "Composer & Sound Designer", 
          client: "Orta Interactive", 
          img: "/images/Journey-through-the-camps.png", 
          link: "https://www.ortainteractive.com/work/journeywithhowardchandler-798y5" 
        },

        { 
          title: "Home A Drone", 
          role: "Audio Director, Composer & Sound Designer",
          client: "Countruct Studio",
          img: "/images/home_a_drone.png",
          link: "https://store.steampowered.com/app/1065770/Home_A_Drone/"
        },

          { 
          title: "Sweet Sorrow", 
          role: "Audio Director, Composer & Sound Designer",
          client: "Orta Interactive",
          img: "/images/Sweet-Sorrow-Poster.png",
          link: "https://www.ortainteractive.com/work/shakespeare-vr"
        },

      ],
    },

     {
      section: "Video Games & Interactive Experiences",
      items: [

        { 
          title: "Dragonspire", 
          role: "Audio Director & Sound Designer",
          client: "Lionheart Games, Starmi",
          img: "/images/Dragonspire.jpg",
          link: "https://store.steampowered.com/app/2160380/Dragonspire/"
        },

          { 
          title: "Little Pizzeria", 
          role: "Audio Director, Composer & Sound Designer",
          client: "Orta Interactive",
          img: "/images/little-pizzeria.png",
          link: "https://www.ortainteractive.com/work/little-pizzeria"
        },

        { 
          title: "Tiny Pixel Knight", 
          role: "Composer & Sound Designer",
          client: "Loongcheer Game",
          img: "/images/tpn.png",
          link: "https://www.loongcheer.com/games/TinyPixelKnight"
        },

      ],
    },
    
    {
      section: "Film / Documentary / Commercials",
      items: [

        { 
          title: "Zone Pro Site: The Moveable Feast", 
          role: "Composer", 
          client: "Ocean Deep Films", 
          img: "/images/ZoneProSite.jpg", 
          link: "https://www.imdb.com/title/tt3166476/" 
        },

         { 
          title: "My Geeky Nerdy Buddies", 
          role: "Composer", 
          client: "Bona Film Group", 
          img: "/images/nerd2.jpg", 
          link: "https://www.imdb.com/title/tt4412082/" 
        },

        { title: "In the Forest", 
          role: "Composer", 
          client: "Larrisim Studio", 
          img: "/images/inf.png", 
          link: "https://www.imdb.com/title/tt18350280/" 
        },
      ],
    },
    {
      section: "Theatre Productions",
      items: [

        { 
          title: "A Few Deep Breaths", 
          role: "Composer & Sound Designer", 
          client: "La MaMa Experimental Theatre Club", 
          img: "/images/AFDB22.png", 
          link: "https://seasons.lamama.org/shows/a-few-deep-breaths-2022"
        },

        { 
          title: "Hedwig And the Angry Inch: Taiwan Production", 
          role: "Sound Designer", 
          client: "Studio M", 
          img: "/images/Hedwig_And_the_Angry_Inch.png", 
          link: "https://www.facebook.com/studiomtw/"
        },

        { 
          title: "Show On", 
          role: "Composer & Sound Designer", 
          client: "Shakespeare's Wild Sisters Group", 
          img: "/images/showOn.jpg", 
          link: "https://showon-app.blogspot.com/"
        },

      ],
    },
    {
      section: "Concept Albums",
      items: [
        { 
          title: "Legends of Altair and Vega", 
          role: "Composer", 
          client: "Larrisim Studio", 
          img: "/images/LOAVsquare.png", 
          link: "https://soundcloud.com/larrisimchang/sets/legends-of-altair-and-vega-demo?si=af186755343c4fcba506ab46eaf1c522&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" 
        },
      ],
    },
  ];

  return (
    <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "40px 20px", color: "#000" }}>
      <h1 style={{ textAlign: "left", fontSize: "2.5rem", marginBottom: "40px" }}>Work</h1>

      {works.map((section) => (
        <div key={section.section} style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "20px", borderBottom: "1px solid #555", paddingBottom: "8px" }}>
            {section.section}
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}>
            {section.items.map((item) => (
              <a
                key={item.title}
                href={item.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  borderRadius: "10px",
                  overflow: "hidden",
                  textDecoration: "none",
                  color: "#000",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "scale(1.03)";
                  el.style.boxShadow = "0 6px 18px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "scale(1)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Square Image */}
                {item.img && (
                  <div style={{ position: "relative", width: "100%", paddingTop: "100%" }}>
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                )}

                {/* Text Info */}
                <div style={{ padding: "12px" }}>
                  <div style={{ fontWeight: "bold", marginBottom: "5px" }}>{item.title}</div>
                  <div>{item.role}</div>
                  <div>Client: {item.client}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}

      <style jsx>{`
        @media (max-width: 1024px) {
          div[style*='grid-template-columns'] {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          div[style*='grid-template-columns'] {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <Footer />
    </div>

  );
}
