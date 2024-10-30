import Header from "./components/Header";
import Footer from "./components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-4">About MEClub YVR</h1>
        <p className="max-w-2xl text-center">
          Our mission is to cultivate a dynamic network of young Muslim
          entrepreneurs in Vancouver, offering support, mentorship, and
          resources that inspire innovation, personal growth, and impactful
          contributions to society.
        </p>
      </main>
      <Footer />
    </div>
  );
}
