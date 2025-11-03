"use client";
import { useRef, useState } from "react";

export default function MusicPage() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);

  const playlist = [
    { title: "Journey", src: "/audio/music01.mp3" },
    { title: "Song Title 2", src: "/audio/song2.mp3" },
    { title: "Song Title 3", src: "/audio/song3.mp3" },
  ];

  const handlePlay = (src: string) => {
    if (!audioRef.current) return;
    // Setting new source before playing
    audioRef.current.pause();
    audioRef.current.src = src;
    audioRef.current.load();
    audioRef.current
      .play()
      .then(() => setCurrentTrack(src))
      .catch((err) => console.error("Playback error:", err));
  };

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-6">Music</h2>
      <p className="text-gray-300 mb-8">
        Original compositions blending traditional influences with modern soundscapes.
      </p>

      {/* Spotify Embed */}
      <iframe
        src="https://open.spotify.com/embed/album/xyz"
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="mx-auto mb-10"
      ></iframe>

      {/* Audio Player */}
      <div className="mt-10">
        <audio ref={audioRef} controls className="w-full mb-6" preload="none" />
        <ul className="space-y-3">
          {playlist.map((track, index) => (
            <li
              key={index}
              onClick={() => handlePlay(track.src)}
              className={`cursor-pointer py-2 transition-colors ${
                currentTrack === track.src
                  ? "text-white font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              ▶ {track.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
