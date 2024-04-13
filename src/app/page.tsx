import About from "@/components/About";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <main className="container ">
      <Header />
      <Intro />
      <Divider section="about" />
      <About />
      <Divider section="skills" />
      <SkillsSection />
      <Divider section="skills" />
      <Projects />
      <Footer />
    </main>
  );
}
