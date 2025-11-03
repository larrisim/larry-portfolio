import Footer from '../../../components/Footer'

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content grows to fill available space */}
      <main className="flex flex-col items-center justify-center px-6 text-center flex-grow">
        <div className="max-w-4xl w-full px-6 py-20 text-left text-black">
          <h1 className="text-4xl font-bold mb-6">Contact</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Feel free to reach out if you’d like to collaborate, ask questions, 
            or learn more about my work.
          </p>
          <a
            href="mailto:larry@larry-chang.com"
            className="text-blue-600 hover:underline text-lg"
          >
            larry@larry-chang.com 
          </a>
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </main>

      {/* Footer pinned at the bottom */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}
