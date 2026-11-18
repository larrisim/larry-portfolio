import Footer from '../../../components/Footer'
import ContactForm from '../../../components/ContactForm'

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content grows to fill available space */}
      <div className="flex flex-col items-center justify-center px-6 flex-grow">
        <div className="max-w-4xl w-full px-6 py-20 text-left text-black">
          <h1 className="text-4xl font-bold mb-6">Contact</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Feel free to reach out if you&rsquo;d like to collaborate, ask questions,
            or learn more about my work.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            Prefer email? You can also reach me directly at{" "}
            <a
              href="mailto:larry@larry-chang.com"
              className="inline-block py-2 text-blue-600 hover:underline"
            >
              larry@larry-chang.com
            </a>
          </p>
          <ContactForm />
        </div>
      </div>

      {/* Footer pinned at the bottom */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}
