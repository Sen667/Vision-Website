import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div className="Container bg-black text-white min-h-screen flex flex-col justify-between px-4 sm:px-6 lg:px-8">
      <section className="Welcome-page flex-grow flex flex-col justify-between">
        <div className="flex flex-col items-center justify-center pt-8 sm:pt-12">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white font-akkurat-mono">Vision.</h1>
        </div>

        <nav className="flex justify-center items-center py-8 sm:py-12">
          <ul className="flex flex-col text-center text-xl sm:text-2xl gap-2 sm:gap-2">
            <li><a href="#" className="hover:text-gray-300 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Team</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Projects</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Contact</a></li>
          </ul>
        </nav>

        <div className="w-full pb-4 sm:pb-6">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4 sm:gap-0 px-4 sm:px-8 md:px-12 lg:px-16">
            <p className="text-xs sm:text-sm text-center sm:text-center">Vision, <br /> Front-End/Back-end <br /> Development</p>
            <p className="text-xs sm:text-sm text-center">Let's Work<br /> Together <br />:)</p>
            <p className="text-xs sm:text-sm text-center sm:text-center">Boulogne-Sur-Mer <br />62, Nord-Pas-De-Calais, <br />France</p>
          </div>
        </div>
      </section>
    </div>
  );
}