"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const targetDate = new Date("December 7, 2024 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      console.log("Now:", now);
      console.log("Target Date:", targetDate);
      console.log("Distance:", distance);

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setLoading(false);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
      setLoading(false);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
            <h1 className="text-4xl md:text-4xl font-extrabold mb-4 md:mb-6 text-gold">
              Muslim Entrepreneurs Club - YVR
            </h1>
            <p className="mb-6 md:mb-10 font-bold text-lg md:text-xl text-white max-w-md md:max-w-2xl">
              Join MEClub and grow with a community of driven Muslim
              entrepreneurs.
            </p>
            <div className="flex space-x-4 mb-6">
              {loading ? (
                <div className="flex space-x-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-700 animate-pulse rounded"></div>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-700 animate-pulse rounded"></div>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-700 animate-pulse rounded"></div>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-700 animate-pulse rounded"></div>
                </div>
              ) : (
                <>
                  <div className="text-center">
                    <div className="text-2xl md:text-4xl font-bold text-gold">
                      {timeLeft.days}
                    </div>
                    <div className="text-sm md:text-lg text-white">Days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-4xl font-bold text-gold">
                      {timeLeft.hours}
                    </div>
                    <div className="text-sm md:text-lg text-white">Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-4xl font-bold text-gold">
                      {timeLeft.minutes}
                    </div>
                    <div className="text-sm md:text-lg text-white">Minutes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-4xl font-bold text-gold">
                      {timeLeft.seconds}
                    </div>
                    <div className="text-sm md:text-lg text-white">Seconds</div>
                  </div>
                </>
              )}
            </div>
            <a
              href="https://fmsnznt77ni.typeform.com/to/SOKl0PiU"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gray-800 to-gray-900 text-gold px-6 py-3 md:px-10 md:py-5 rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
              Apply to Waitlist
            </a>
          </main>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
}
