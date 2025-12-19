import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Partners from "./sections/Partners";
import Reviews from "./sections/Reviews";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900/60 via-indigo-900/40 to-slate-900/50">
      <Nav />
      
      <main className="mx-auto flex max-w-7xl flex-col gap-16 px-8 py-12 lg:px-12 lg:py-16 border border-white/30 rounded-3xl backdrop-blur-sm">
        <Hero />
        <Features />
        <Partners />
        <Reviews />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
