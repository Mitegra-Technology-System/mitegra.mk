import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  Services,
} from "../sections";

const Page = () => (
  <div>
    <Navbar />
    <Hero />
    <About />
    <Explore />
    <GetStarted />
    <WhatsNew />
    <Services />
    <Insights />
    <Feedback />
    <Footer />
  </div>
);

export default Page;
