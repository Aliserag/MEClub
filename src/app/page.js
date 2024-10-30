import Header from "./components/Header";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <div className="relative min-h-screen bg-background text-foreground flex flex-col">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/city-life.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
        <div className="relative z-20">
          <Header />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center flex-grow text-center p-8">
          <main className="flex flex-col items-center justify-center flex-grow">
            <h1 className="text-6xl font-extrabold mb-6 text-gold">
              Muslim Entrepreneur Club
            </h1>
            <p className="mb-10 text-xl text-white max-w-2xl">
              Join MEClub, a thriving community of Muslim entrepreneurs. Access
              exclusive resources, partnerships, experienced mentors, and tap
              into a powerful network of leaders in the city to fast-track your
              growth.
            </p>
            <a
              href="https://fmsnznt77ni.typeform.com/to/SOKl0PiU"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gray-800 to-gray-900 text-gold px-10 py-5 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
              Join The Waitlist
            </a>
          </main>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
}
