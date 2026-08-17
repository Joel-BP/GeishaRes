import { CartProvider } from './lib/cart';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Shop } from './components/Shop';
import { Club } from './components/Club';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-espresso-950">
        <Navbar />
        <main>
          <Hero />
          <Story />
          <Shop />
          <Club />
          <Process />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

export default App;
