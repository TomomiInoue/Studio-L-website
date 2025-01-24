import { About } from "./components/Route/About/About";
import { Landing } from "./components/Route/Landing/Landing";
import { Pricing } from "./components/Route/Pricing/Pricing";
import { ReformerExplain } from "./components/Route/ReformerExplain/ReformerExplain";
import { Schedule } from "./components/Route/Schedule/Schedule";

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <ReformerExplain />
      <Pricing />
      <Schedule />
    </>
  );
}
