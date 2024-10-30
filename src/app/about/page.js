import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gold">
            About MEClub YVR
          </h1>
          <p className="max-w-md md:max-w-2xl text-center text-white text-base md:text-lg">
            Our mission is to cultivate a dynamic network of young Muslim
            entrepreneurs in Vancouver, offering support, mentorship, and
            resources that inspire innovation, personal growth, and impactful
            contributions to society.
          </p>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
