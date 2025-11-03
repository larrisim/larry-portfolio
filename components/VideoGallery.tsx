"use client";

interface Video {
  id: string;
  title: string;
}

const videos: Video[] = [
  { id: "video-id-1", title: "Video 1" },
  { id: "video-id-2", title: "Video 2" },
  { id: "video-id-3", title: "Video 3" },
  { id: "video-id-4", title: "Video 4" },
  { id: "video-id-5", title: "Video 5" },
  { id: "video-id-6", title: "Video 6" },
];

export default function VideoGallery() {
  return (
    <section className="py-16 w-full">
      <h2 className="text-3xl font-semibold mb-12 text-center text-[#222]">
        Video Gallery
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
        {videos.map((video) => (
          <div key={video.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${video.id}`}
              frameBorder="0"
              allowFullScreen
            />
            <h3 className="text-lg font-medium mt-2 p-4 text-white">
              {video.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
