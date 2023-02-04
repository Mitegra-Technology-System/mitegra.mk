import { Footer, Navbar } from "../components";
import { About, Explore, Contact, Hero } from "../sections";

const Page = () => (
  <div>
    <Navbar />
    <Hero />
    <About />
    <Explore />
    <Contact />
    <Footer />
  </div>
);

export default Page;
