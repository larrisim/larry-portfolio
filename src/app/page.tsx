import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
// import VideoGallery from '../../components/VideoGallery'
import React from "react";

export default function Home() {
  return (
    <>
      <Hero />
      
<main
  style={{
    display: "flex",
    flexDirection: "row", // side by side
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
    gap: "60px", // space between columns
    padding: "40px",
    boxSizing: "border-box",
  }}
>
  {/* Left: Description */}
  <div style={{ flex: 1 }}>
    <p>
      <strong>Larry Chang</strong> is a <strong>composer and audio designer</strong> based in{" "}
      <strong>New York City</strong>, specializing in <strong>immersive audio for interactive media, VR, and theater</strong>.
      With over a decade of experience, Larry has dedicated his career to creating audio experiences that{" "}
      <strong>engage audiences in innovative and emotionally compelling ways</strong>.
    </p>

    <p>
      His latest work, <strong><em>Midnight's Dream</em></strong>, a revolutionary immersive theater experience produced by{" "}
      <strong>Denver Immersive Repertory Theater (D.I.R.T.)</strong>, showcases his vision as both composer and audio designer.
      The production combines spatial audio, live performance, and interactive soundscapes to transport audiences into a fully
      realized, dreamlike world, highlighting Larry’s ability to <strong>merge technology and artistry</strong> to shape unforgettable experiences.
    </p>

    <p>
      Larry’s expertise spans interactive VR narratives, film, and large-scale exhibitions. Notably, he contributed to the acclaimed
      VR narrative <strong><em>The Price of Freedom</em></strong>, featured at the <strong>Sundance and Cinequest Film Festivals</strong>,
      and the global exhibition <strong><em>Beyond Van Gogh</em></strong>, which has sold over 7 million tickets and generated $210 million
      in revenue across 60+ markets. His work has earned nominations for the <strong>Golden Horse Awards</strong> and recognition from the{" "}
      <strong>Vision Summit</strong> and <strong>International Serious Play Awards</strong>.
    </p>

    <p>
      Committed to pushing the boundaries of sound in immersive media, Larry also shares his knowledge as a{" "}
      <strong>visiting lecturer at Carnegie Mellon University</strong> and speaker at industry events such as{" "}
      <strong>GameSound Con</strong> and <strong>AWE</strong>. His work continues to explore how{" "}
      <strong>creative audio design can transform storytelling, environment, and audience experience</strong> across mediums.
    </p>
  </div>

  {/* Right: Music Player */}
  <div
    style={{
      flex: "0 0 50%", // fixed width column
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    }}
  >
    <iframe
      width="100%"
      height="600"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%3Aplaylists%3A2100481043%3Fsecret_token%3Ds-FxwFQMBrgZk&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    ></iframe>

    <div
      style={{
        fontSize: "10px",
        color: "#cccccc",
        marginTop: "8px",
        fontFamily:
          "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
      }}
    >
      <a
        href="https://soundcloud.com/larry-chang-177742238"
        title="Larry Chang"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#cccccc", textDecoration: "none" }}
      >
        Larry Chang
      </a>{" "}
      ·{" "}
      <a
        href="https://soundcloud.com/larry-chang-177742238/sets/my-work"
        title="My Work"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#cccccc", textDecoration: "none" }}
      >
        All rights reserved
      </a>
    </div>
  </div>
</main>

      
      <Footer />
    </>
  )
}
