import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-full bg-transparent p-4 flex justify-between items-center text-gold font-semibold text-lg">
      <nav className="flex space-x-6">
        <Link href="/" className="hover:text-white transition duration-300">
          Home
        </Link>
        <Link
          href="/about"
          className="hover:text-white transition duration-300"
        >
          About
        </Link>
      </nav>
    </header>
  );
}
