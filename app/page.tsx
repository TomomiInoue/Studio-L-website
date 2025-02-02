import { About } from "./components/Route/About/About";
import { Access } from "./components/Route/Access/Access";
import { Landing } from "./components/Route/Landing/Landing";
import { Pricing } from "./components/Route/Pricing/Pricing";
import { Questions } from "./components/Route/Questions/Questions";
import { ReformerExplain } from "./components/Route/ReformerExplain/ReformerExplain";

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <ReformerExplain />
      <Pricing />
      <Questions />
      <Access />
    </>
  );
}
