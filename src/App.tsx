import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { MyWork } from './components/MyWork';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      <main className="w-full">
        <Hero />
        <About />
        <MyWork />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
