import "../../styles/globals.css";
import Header from "../../components/Header";

export const metadata = {
  title: "Larry Chang | Composer | Audio Designer",
  description: "Creative Audio Director & Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#fafafa] text-[#222] min-h-screen font-sans">
        <Header />
        {/* Remove max-width limit to allow the grid to expand */}
        <main className="w-full px-6 mt-16 mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
