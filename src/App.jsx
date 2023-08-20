import Hero from "./components/Hero";
import Nav from "./components/Nav";
import PopularSection from "./components/PopularSection";
import Services from "./components/Services";
import SpecialOffer from "./components/SpecialOffer";
import SuperQuality from "./components/SuperQuality";
import CustomerReviews from "./components/CustomerReviews";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularSection />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x padding-t pb-8 bg-black">
        <Footer />
      </section>
    </main>
  );
};

export default App;
