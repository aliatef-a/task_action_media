import AboutUS from "../../components/Home/AboutUS";
import ButtonsComponents from "../../components/Home/ButtonsComponents";
import Goals from "../../components/Home/Goals";
import Hero from "../../components/Home/Hero";
import { SectionAbout } from "../../components/Home/SectionAbout";
import SectionScore from "../../components/Home/SectionScore";

function Home() {
  return (
    <main>
      <Hero />
      <ButtonsComponents />
      <SectionAbout />
      <Goals />
      <AboutUS />
      <SectionScore />
    </main>
  );
}

export default Home;
