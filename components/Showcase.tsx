export default function Showcase() {
  const projects = [
    { title: 'The Price of Freedom', desc: 'Immersive VR audio project.' },
    { title: 'Zone Pro Site', desc: 'Interactive sound for web project.' },
    { title: 'Fear and Freedom', desc: 'Film score & sound design.' },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-300 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
