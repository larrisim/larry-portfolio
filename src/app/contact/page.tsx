import Footer from '../../../components/Footer'
import ContactForm from '../../../components/ContactForm'

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content grows to fill available space */}
      <div className="flex flex-col items-center justify-center px-6 flex-grow">
        <div className="max-w-4xl w-full px-6 py-20 text-left text-black">
          <h1 className="text-4xl font-bold mb-6">Contact</h1>
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
