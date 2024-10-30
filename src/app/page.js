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
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/city-life.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
        <div className="relative z-20">
          <Header />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center flex-grow text-center p-4 md:p-8">
          <main className="flex flex-col items-center justify-center flex-grow">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 text-gold">
              Muslim Entrepreneur Club
            </h1>
            <p className="mb-6 md:mb-10 text-lg md:text-xl text-white max-w-md md:max-w-2xl">
              Something exciting is coming to Vancouver! Join a vibrant
              community of Muslim entrepreneurs and unlock exclusive access to
              resources, mentorship, and a network that will elevate your
              business to new heights.
            </p>
            <a
              href="https://fmsnznt77ni.typeform.com/to/SOKl0PiU"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gray-800 to-gray-900 text-gold px-6 py-3 md:px-10 md:py-5 rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
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
