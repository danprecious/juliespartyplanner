import EventSpace from "./_components/sections/eventSpace";
import Faq from "./_components/sections/faq";
import Hero from "./_components/sections/hero";
import PhotoGallery from "./_components/sections/photoGallery";
import Services from "./_components/sections/services";

const Home = () => {
  return (
    <main className="">
      <Hero />

      <EventSpace />

      <Services />

      <Faq />

      <PhotoGallery />
    </main>
  );
};

export default Home;
