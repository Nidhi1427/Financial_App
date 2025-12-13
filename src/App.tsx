import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Partners from "./sections/Partners";
import Reviews from "./sections/Reviews";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Nav />
      {/* Shared centered shell for all main content */}
      <main className="mx-auto flex max-w-7xl flex-col gap-16 px-8 lg:px-12">
        <Hero />
        <Features />
        <Partners />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}

export default App;
